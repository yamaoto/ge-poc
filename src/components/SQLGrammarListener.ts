// Generated from SQLGrammar.g4 by ANTLR 4.13.0

import { ParseTreeListener } from 'antlr4'

import { StartContext } from './SQLGrammarParser'
import { StatementContext } from './SQLGrammarParser'
import { IdentifierContext } from './SQLGrammarParser'
import { SelectStatementContext } from './SQLGrammarParser'
import { ColumnContext } from './SQLGrammarParser'
import { ConditionContext } from './SQLGrammarParser'
import { ExpressionContext } from './SQLGrammarParser'
import { ExpressionListContext } from './SQLGrammarParser'
import { ConstantContext } from './SQLGrammarParser'
import { ComparisonOperatorContext } from './SQLGrammarParser'
import { LogicalOperatorContext } from './SQLGrammarParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `SQLGrammarParser`.
 */
export default class SQLGrammarListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `SQLGrammarParser.start`.
   * @param ctx the parse tree
   */
  enterStart?: (ctx: StartContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.start`.
   * @param ctx the parse tree
   */
  exitStart?: (ctx: StartContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.selectStatement`.
   * @param ctx the parse tree
   */
  enterSelectStatement?: (ctx: SelectStatementContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.selectStatement`.
   * @param ctx the parse tree
   */
  exitSelectStatement?: (ctx: SelectStatementContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.column`.
   * @param ctx the parse tree
   */
  enterColumn?: (ctx: ColumnContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.column`.
   * @param ctx the parse tree
   */
  exitColumn?: (ctx: ColumnContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.condition`.
   * @param ctx the parse tree
   */
  enterCondition?: (ctx: ConditionContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.condition`.
   * @param ctx the parse tree
   */
  exitCondition?: (ctx: ConditionContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.expressionList`.
   * @param ctx the parse tree
   */
  enterExpressionList?: (ctx: ExpressionListContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.expressionList`.
   * @param ctx the parse tree
   */
  exitExpressionList?: (ctx: ExpressionListContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.constant`.
   * @param ctx the parse tree
   */
  enterConstant?: (ctx: ConstantContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.constant`.
   * @param ctx the parse tree
   */
  exitConstant?: (ctx: ConstantContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.comparisonOperator`.
   * @param ctx the parse tree
   */
  enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.comparisonOperator`.
   * @param ctx the parse tree
   */
  exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void
  /**
   * Enter a parse tree produced by `SQLGrammarParser.logicalOperator`.
   * @param ctx the parse tree
   */
  enterLogicalOperator?: (ctx: LogicalOperatorContext) => void
  /**
   * Exit a parse tree produced by `SQLGrammarParser.logicalOperator`.
   * @param ctx the parse tree
   */
  exitLogicalOperator?: (ctx: LogicalOperatorContext) => void
}
