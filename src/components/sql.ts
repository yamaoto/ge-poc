import antlr4 from 'antlr4'
import SqlLexer from './SQLGrammarLexer'
import SqlParser from './SQLGrammarParser'
import { SQLGrammarHandler, type SelectNode, type Row } from './SQLGrammarHandler'

export const parseSql = (source: string)=>{
    const chars = antlr4.CharStreams.fromString(source)
    const lexer = new SqlLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new SqlParser(tokens)
    const tree = parser.start()
    const visitor = new SQLGrammarHandler()
    const parseData = tree.accept(visitor)
    return {
        parseData: parseData
    }
}

export const executeSql = <T>(select: SelectNode, dataSet: Record<string, Record<string, unknown>[]>): { header: string[]; tableData: unknown[][], data: Partial<T>[] & Record<string, unknown>[] } => {
    if (select.from !== 'geodata') {
      throw new Error('Unknown table')
    }
    const accessor = (row: Record<string, unknown>, from: string): Row => ({
      get: (name: string, tableName: string | null): unknown => {
        if (tableName !== null && tableName != from) return undefined
        return row[name]
      }
    })
    const keys = ['x', 'y', 'signature']
    const data = [] as Partial<T>[] & Record<string, unknown>[];
    const header: string[] = []
  
    select.columns.forEach((column) => {
      if (column.type === 'asterisk') {
        keys.forEach((key) => header.push(key))
      }
      if (column.type === 'identifier') {
        if (column.tableName) {
          header.push(`${column.tableName}.${column.name}`)
        } else {
          header.push(column.name)
        }
      }
      if (column.type === 'expression') {
        header.push(column.name)
      }
    })

    const tableData = dataSet[select.from]
      .filter((item) => !select.condition || select.condition.check(accessor(item, select.from)))
      .map((item: Record<string, unknown>) => {
        const a = accessor(item, select.from)
        const res: unknown[] = []
        const record = {} as Record<string, unknown>;
        select.columns.forEach((column) => {
          if (column.type === 'asterisk') {
            keys.forEach((key) => {
                res.push(item[key]);
                record[key] = item[key];
            })
          }
          if (column.type === 'identifier') {
            const value = a.get(column.name, column.tableName);
            res.push(value)
            // TODO: Use accessor for tableName support
            record[column.name] = value;
          }
          if (column.type === 'expression') {
            res.push(column.value)
            if (column.value) {
                record[column.value.toString()] = column.value;
            }
          }
        })
        data.push(record);
        return res
      })
  
    return { header, tableData, data }
  }