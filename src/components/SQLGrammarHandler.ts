import type {
  StartContext,
  SelectStatementContext,
  ColumnContext,
  ConditionContext,
  ExpressionContext,
  ComparisonOperatorContext,
  LogicalOperatorContext
} from './SQLGrammarParser'
import SQLGrammarVisitor from './SQLGrammarVisitor'

type StartNode = {
  type: 'start'
  select: SelectNode
}

export type Row = {
  get: (name: string, tableName: string | null) => unknown
}

type ConditionNode = {
  type: 'condition'
  value: string
  check: (row: Row) => boolean
}

type ExpressionNode =
  | {
      type: 'expression'
      value: string | number | null
      name: string
    }
  | {
      type: 'identifier'
      name: string
      tableName: string | null
    }
  | {
      type: 'asterisk'
    }

type LogicalNode = {
  type: 'logical'
}

type ComparisonNode = {
  type: 'comparison'
  value: string
  compare: (left: unknown, right: unknown) => boolean
}

type ColumnNode = {
  type: 'column'
  name: string
}

export type SelectNode = {
  type: 'select'
  columns: ExpressionNode[]
  from: string
  condition?: ConditionNode
}

type GrammarNode = StartNode | ConditionNode | ExpressionNode | LogicalNode | ComparisonNode | ColumnNode | SelectNode

export class SQLGrammarHandler extends SQLGrammarVisitor<GrammarNode> {
  visitStart = (ctx: StartContext): SelectNode => {
    const select = this.visit(ctx.selectStatement()) as SelectNode
    return select
  }

  visitSelectStatement = (ctx: SelectStatementContext): SelectNode => {
    const expressionsTree = ctx.expressionList()
    const columns = (this.visit(expressionsTree) as ExpressionNode[]).filter((f) => f)

    const from = ctx.FROM()
    this.visit(from)

    const tableId = ctx.identifier()
    this.visit(tableId)
    const tableName = tableId
      .IDENTIFIER_list()
      .map((id) => id.getText())
      .join('.')

    const whereTree = ctx.WHERE()
    let condition: ConditionNode | undefined
    if (whereTree) {
      const conditionTree = ctx.condition()
      if (!conditionTree) {
        throw new Error('Condition is requried after WHERE')
      }
      condition = this.visit(conditionTree) as ConditionNode
    }

    return {
      type: 'select',
      columns: columns,
      from: tableName,
      condition
    }
  }

  visitColumn = (ctx: ColumnContext): ColumnNode => {
    const columnName = ctx
      .identifier()
      .IDENTIFIER_list()
      .map((id) => id.getText())
      .join('.')
    return {
      type: 'column',
      name: columnName
    }
  }

  visitCondition = (ctx: ConditionContext): ConditionNode => {
    const andTree = ctx.AND()
    if (andTree) {
      const conditionListResult = this.visit(ctx.condition_list()) as ConditionNode[]
      const conditions = conditionListResult.map((c) => c.value)
      return {
        type: 'condition',
        value: `and(${conditions.join(',')})`,
        check: (row) => conditionListResult[0].check(row) && conditionListResult[1].check(row)
      }
    }
    const orTree = ctx.AND()
    if (orTree) {
      const conditionListResult = this.visit(ctx.condition_list()) as ConditionNode[]
      const conditions = conditionListResult.map((c) => c.value)
      return {
        type: 'condition',
        value: `or(${conditions.join(',')})`,
        check: (row) => conditionListResult[0].check(row) || conditionListResult[1].check(row)
      }
    }

    const identifierParts = ctx
      .identifier()
      .IDENTIFIER_list()
      .map((part) => part.getText())
    const identifier = identifierParts.join('.')
    const op = this.visit(ctx.comparisonOperator()) as ComparisonNode
    const expressionTree = ctx.expression()
    const expression = this.visit(expressionTree)
    if (identifierParts.length === 1) {
      return {
        type: 'condition',
        value: `${identifier} ${op.value} ${expression.value}`,
        check: (row) => op.compare(row.get(identifier, null), expression.value)
      }
    }
    if (identifierParts.length === 2) {
      const name = identifierParts[1]
      const tableName = identifierParts[0];
      return {
        type: 'condition',
        value: `${identifier} ${op.value} ${expression.value}`,
        check: (row) => op.compare(row.get(name, tableName), expression.value)
      }
    }
    throw new Error('Unexpected identifier')
  }

  visitExpression = (ctx: ExpressionContext): ExpressionNode => {
    if (ctx.ASTERISK()) {
      return {
        type: 'asterisk'
      }
    }

    if (ctx.identifier()) {
      const identifierParts = ctx
        .identifier()
        .IDENTIFIER_list()
        .map((id) => id.getText())
      if (identifierParts.length === 1) {
        return {
          type: 'identifier',
          name: identifierParts[0],
          tableName: null
        }
      }
      if (identifierParts.length === 2) {
        return {
          type: 'identifier',
          name: identifierParts[1],
          tableName: identifierParts[0]
        }
      }
      throw new Error('Unexpected identifier')
    }

    if (ctx.constant().INTEGER_VALUE()) {
      const intValue = ctx.constant().INTEGER_VALUE().getText()
      let digit = 1
      if (ctx.constant().MINUS()) {
        digit = -1
      }
      const value = digit * Number(intValue)
      return {
        type: 'expression',
        value: value,
        name: value.toString()
      }
    }
    if (ctx.constant().STRING_VALUE()) {
      const textValue = ctx.constant().STRING_VALUE().getText()
      return {
        type: 'expression',
        value: textValue,
        name: textValue
      }
    }

    if (ctx.constant().NULL()) {
      return {
        type: 'expression',
        value: null,
        name: 'null'
      }
    }

    return {
      type: 'expression',
      value: null,
      name: 'null'
    }
  }

  visitComparisonOperator = (ctx: ComparisonOperatorContext): ComparisonNode => {
    if (ctx.EQUAL()) {
      return {
        type: 'comparison',
        value: '=',
        compare: (left, right) => left === right
      }
    }
    if (ctx.NE()) {
      return {
        type: 'comparison',
        value: '!=',
        compare: (left, right) => left !== right
      }
    }
    if (ctx.GE()) {
      return {
        type: 'comparison',
        value: '>=',
        compare: (left, right) => {
          if (Number.isInteger(left) && Number.isInteger(right)) {
            return Number(left) >= Number(right)
          }
          return false
        }
      }
    }
    if (ctx.GT()) {
      return {
        type: 'comparison',
        value: '>',
        compare: (left, right) => {
          if (Number.isInteger(left) && Number.isInteger(right)) {
            return Number(left) > Number(right)
          }
          return false
        }
      }
    }
    if (ctx.LE()) {
      return {
        type: 'comparison',
        value: '<=',
        compare: (left, right) => {
          if (Number.isInteger(left) && Number.isInteger(right)) {
            return Number(left) <= Number(right)
          }
          return false
        }
      }
    }
    if (ctx.LT()) {
      return {
        type: 'comparison',
        value: '<',
        compare: (left, right) => {
          if (Number.isInteger(left) && Number.isInteger(right)) {
            return Number(left) < Number(right)
          }
          return false
        }
      }
    }
    return {
      type: 'comparison',
      value: 'false',
      compare: () => false
    }
  }

  visitLogicalOperator = (ctx: LogicalOperatorContext): LogicalNode => {
    console.log('visitLogicalOperator', ctx)
    return {
      type: 'logical'
    }
  }
}
