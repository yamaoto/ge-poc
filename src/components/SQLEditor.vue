<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import * as PIXI from 'pixi.js';
import { Application, onTick } from "vue3-pixi";
import { type editor, KeyMod, KeyCode } from 'monaco-editor'

import geodata from './testData.json'
import ironMapping from '../assets/ironMapping.png'
import { extractFunction } from './jsFunctions';
import { executeSql, parseSql } from './sql';

const MONACO_EDITOR_OPTIONS = {
  height: '100%',
  width: '100%',
  formatOnType: true,
  formatOnPaste: true,
  minimap: { enabled: false },
  scrollbar: {
    vertical: 'hidden',
    horizontal: 'hidden',
    handleMouseWheel: false
  }
}

type Geodata = {
  x: number;
  y: number;
  signature: number;
  value: number;
}

const MONACO_READONLY_OPTIONS = {
  ...MONACO_EDITOR_OPTIONS,
  readOnly: true,
}

const sqlCode = ref(`-- Press CTRL+E to execute query
SELECT x, y, signature
FROM
  geodata
  signature > 516
  AND signature <= 1809
`)
const jsCode = ref(`// Press CTRL+E to execute function

/**
 * Map signature into iron resource volume
 * @param {number} signature - Number value of spectrogram data
 */
function mapIronResource(signature) {
  // TODO: Implement iron resource mapping
  // TODO: Your function must return number value or undefined
  if (signature < 516 || signature > 1809) {
    return undefined;
  }
  if (signature < 831) {
    const y1 = 10;
    const y2 = 2890;
    const x1 = 516;
    const x2 = 845;
    const a = (y2 - y1) / (x2 - x1)
    const b = -a * x1 + y1;
    return a * signature + b;
  } else {
    const y1 = 2890;
    const y2 = 1450;
    const x1 = 835;
    const x2 = 1810;
    const a = (y2 - y1) / (x2 - x1)
    const b = -a * x1 + y1;
    return a * signature + b;
  }
}
`)
const json = ref('{}')
const resultHeader = ref<string[]>([])
const resultData = ref<unknown[][]>([])
const editorRef = shallowRef<editor.IStandaloneCodeEditor>()
const dataSet = { "geodata": geodata }
const workingSet = ref({} as Partial<Geodata>[]);

const runSql = async (editor: editor.IStandaloneCodeEditor) => {
  try {
    const source = editor.getModel()?.getValue()
    if (source) {
      const { parseData } = parseSql(source);
      json.value = JSON.stringify(parseData, null, 4)
      if (parseData.type === 'select') {
        const { header, tableData, data } = executeSql<Geodata>(parseData, dataSet)
        resultHeader.value = header
        resultData.value = tableData
        workingSet.value = data;
        maxX.value = Math.max(...data.map((a) => a.signature ?? 0))
      }
    } else {
      alert('source code parsing error')
      json.value = ''
      resultHeader.value = []
      resultData.value = []
    }
  } catch (error) {
    console.error('SQL Run error:', error)
    alert('SQL Run error' + error)
  }
}

const runJs = (editor: editor.IStandaloneCodeEditor) => {
  try {
    const script = editor.getModel()?.getValue()
    if (script) {
      const { source, args } = extractFunction(script, 'mapIronResource');
      if (args.length !== 1) {
        throw new Error("Argument expected");
      }
      const mapIronResource = new Function(args[0], source) as (signature: number) => number
      let maxValue = 0;
      workingSet.value = Object.values(workingSet.value)
        .reduce((a, item) => {
          item.value = mapIronResource(item.signature as number);
          if (item.value > maxValue) {
            maxValue = item.value;
          }
          a.push(item)
          return a;
        }, [] as Partial<Geodata>[])
      maxY.value = maxValue;
    }
  } catch (error) {
    console.error('JS Run error:', error)
    alert('JS Run error' + error)
  }
}

const handleMountSql = (editor: editor.IStandaloneCodeEditor) => {
  editorRef.value = editor
  editor.addAction({
    id: 'ge.execute',
    label: 'GE: Execute SQL',
    keybindings: [KeyMod.CtrlCmd | KeyCode.KeyE],
    contextMenuGroupId: '9_cutcopypaste',
    contextMenuOrder: 9,
    run: runSql
  })
  runSql(editor)
}

const handleMountJs = (editor: editor.IStandaloneCodeEditor) => {
  editorRef.value = editor
  editor.addAction({
    id: 'ge.execute',
    label: 'GE: Execute JS',
    keybindings: [KeyMod.CtrlCmd | KeyCode.KeyE],
    contextMenuGroupId: '9_cutcopypaste',
    contextMenuOrder: 9,
    run: runJs
  })
  runJs(editor);
}
const width = 800;
const height = 480;
const maxY = ref<number>(1);
const maxX = ref<number>(1);


const invertY = (input: number) => height - input;
const scaleY = (input: number) => input / maxY.value * (height - 40);
const scaleX = (input: number) => input / maxX.value * (width - 40);

</script>

<template>
  <div class="query-editor">
    <div class="flex-container">
      <section class="instructions">
        <h3>Task</h3>
        <p>
          Presented below is the Iron Resource mapping graph, with a note that the scale is not precise, and the graph
          displays only essential data points. Our objective is to identify locations of iron ore deposits on a world map.
          In our <code>geodata</code> table, we possess both x and y coordinates, as well as input <code>signature</code>
          obtained through geospectral research.
        </p>
        <h3>Step 1</h3>
        <p>
          Table <code>geodata</code> DDL:
        <pre>CREATE TABLE geodata(int x, int y, int signature);</pre>
        </p>
        <p>
          Your task involves crafting an efficient SQL query to extract the required data. Please bear in mind that the
          geodata table contains a comprehensive set of geological research information, which may encompass signals
          related to other resources and could contain extraneous noise.
        </p>
        <p>Execute that query by CTRL+E and snatch the data you've requested in result window. It's like a virtual
          treasure hunt!</p>
        <h3>Step 2: Iron Resource mapping</h3>
        <div>
          <img style="float: left;margin: 0 10px 10px 0;" width="600" :src="ironMapping" />

          <p>
            Step 2: You will be required to develop approximation code in JavaScript capable of fitting the input signal
            to the volume of iron ore. To gain a deeper understanding of the graph, it appears to resemble a parabola,
            with a function definition of [516, 1809] for the x-axis. Any other signals should be classified as non-iron,
            and your code must return "undefined" for such cases.
          </p>

          <p>
            For the value approximation you can try by using two linear equations
          </p>

          <p>
            The abstract formula for a linear equation is:
          </p>
          <code><pre>y = a*x + b</pre></code>

          <p>If we have knowledge of two points on the line, we can employ the following formulas:</p>
          <code><pre>a = (y2 - y1) / (x2 - x1)</pre></code>
          <code><pre>b = -a * x1 + y1</pre></code>

          <h3 style="clear: both;">SQL Query constraints</h3>
          <ul>
            <li>Your query result must contains x, y and signature columns</li>
          </ul>
          <p>
            Input: <span></span>
          </p>
          <p>
            Result: <span></span>
          </p>
          <h3>Iron ore mapping constraints</h3>
          <ul>
            <li>function accuracy must fit into <code>+/- 50</code></li>
            <li>mapIronResource must return number</li>
          </ul>
          <p>
            Input: <code>516</code>
          </p>
          <p>
            Result: <code>10</code>
          </p>
          <ul>
            <li>mapIronResource must return undefined for not firring signatures</li>
          </ul>
          <p>
            Input: <code>308</code>
          </p>
          <p>
            Result: <code>undefined</code>
          </p>
          <h3 style="clear: both;">Task constraints</h3>
          <ul>
            <li>Entire task running flow must be under <code>100ms</code></li>
          </ul>
        </div>
      </section>
      <div class="flex-container">
        <section>
          <h3>SQL Query:</h3>
          <vue-monaco-editor v-model:value="sqlCode" language="sql" theme="vs-dark" :options="MONACO_EDITOR_OPTIONS"
            @mount="handleMountSql" height="100%" :width="'100%'" />
        </section>
        <section>
          <h3>Mapping code:</h3>
          <vue-monaco-editor v-model:value="jsCode" language="javascript" theme="vs-dark" :options="MONACO_EDITOR_OPTIONS"
            @mount="handleMountJs" height="100%" :width="'100%'" />
        </section>
      </div>
    </div>
  </div>
  <div class="flex-container">
    <section class="results">
      <h3>SQL Query result:</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th v-for="(column, i) in resultHeader" :key="i">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in resultData" :key="i">
            <th>{{ i + 1 }}</th>
            <th v-for="(column, j) in resultData[i]" :key="j">
              {{ column }}
            </th>
          </tr>
        </tbody>
        <thead v-if="resultData.length > 10">
          <tr>
            <th>#</th>
            <th v-for="(column, i) in resultHeader" :key="i">
              {{ column }}
            </th>
          </tr>
        </thead>
      </table>
    </section>
    <section class="graph">
      <h3>Result Graph:</h3>
      <Application :width="width" :height="height">
        <graphics ref="graphicsRef" :x="0" :y="0" @render="graphics => {
          graphics.clear()
          if (Object.keys(workingSet).length === 0) {
            console.log('workingSet is empty')
            return;
          }
          const start = 50;
          const borders = start * 2;
          const maxLimit = maxY - (maxY % 5);
          const lineWidthFull = Math.floor((width - borders) / (maxLimit / 5));
          const lineMargin = Math.max(1, Math.floor(lineWidthFull / 100 * 10))
          const lineWidth = lineWidthFull - lineMargin;
          console.log('lineWidth', lineWidth)

          graphics.beginFill(0xDE3249)

          Object.values(workingSet).forEach((item) => {
            if (item.value) {
              let scaleSignature = scaleX(item.signature as number);
              let scaleValue = scaleY(item.value as number);
              graphics.drawCircle(scaleSignature, invertY(scaleValue), 3)
            }
          })


          graphics.endFill()

        }" />
      </Application>
    </section>
  </div>
</template>

<style scoped>
.query-editor {
  height: 60vh;
  overflow-y: hidden;
}

table {
  border-collapse: collapse;
  margin: 25px;
  width: calc(100% - 25px);
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
}

tbody tr {
  border-bottom: 1px solid #dddddd;
}

tbody tr:last-of-type {
  border-bottom: 0;
}

tbody th {
  border-left: 1px solid #dddddd;
}

tbody th:first-of-type {
  border-left: 0;
}

.flex-container {
  display: flex;
  height: 100%;
}

.flex-container>* {
  flex: 1;
  height: auto;
}

.results,
.graph {
  height: 40vh;
  overflow-y: hidden;
}

.results {
  overflow: scroll;
}

code {
  color: #5396ce;
}

p {
  padding: 5px 25px;
}

.instructions {
  overflow-y: scroll;
  text-overflow: break;
}

h3 {
  padding-left: 12.5px;
  ;
  margin-top: 10px;
}

section {
  border: #dddddd 1px solid;
}

pre {
  margin: 0 50px;
  padding: 5px;
  border: 1px solid #dddddd;
}
</style>
