// Generated from SQLGrammar.g4 by ANTLR 4.13.0

import antlr from 'antlr4'

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SQLGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class SQLGrammarVisitor<Result> extends antlr.tree.ParseTreeVisitor {
  /**
   * Visit a parse tree produced by `SQLGrammarParser.start`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStart?: (ctx: StartContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifier?: (ctx: IdentifierContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.selectStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelectStatement?: (ctx: SelectStatementContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.column`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn?: (ctx: ColumnContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.condition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCondition?: (ctx: ConditionContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.expressionList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionList?: (ctx: ExpressionListContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstant?: (ctx: ConstantContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.comparisonOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result
  /**
   * Visit a parse tree produced by `SQLGrammarParser.logicalOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalOperator?: (ctx: LogicalOperatorContext) => Result
}
