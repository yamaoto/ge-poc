// Generated from SQLGrammar.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
  ATN,
  ATNDeserializer,
  type DecisionState,
  DFA,
  FailedPredicateException,
  RecognitionException,
  NoViableAltException,
  BailErrorStrategy,
  Parser,
  ParserATNSimulator,
  RuleContext,
  ParserRuleContext,
  PredictionMode,
  PredictionContextCache,
  TerminalNode,
  RuleNode,
  Token,
  type TokenStream,
  Interval,
  IntervalSet
} from 'antlr4'
import SQLGrammarListener from './SQLGrammarListener.js'
import SQLGrammarVisitor from './SQLGrammarVisitor.js'

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number

export default class SQLGrammarParser extends Parser {
  public static readonly SELECT = 1
  public static readonly FROM = 2
  public static readonly WHERE = 3
  public static readonly ASTERISK = 4
  public static readonly COMMA = 5
  public static readonly EQUAL = 6
  public static readonly GT = 7
  public static readonly LT = 8
  public static readonly GE = 9
  public static readonly LE = 10
  public static readonly NE = 11
  public static readonly AND = 12
  public static readonly OR = 13
  public static readonly IDENTIFIER = 14
  public static readonly DOT = 15
  public static readonly STRING_VALUE = 16
  public static readonly INTEGER_VALUE = 17
  public static readonly NULL = 18
  public static readonly MINUS = 19
  public static readonly PLUS = 20
  public static readonly COMMENT = 21
  public static readonly WS = 22
  public static readonly EOF = Token.EOF
  public static readonly RULE_start = 0
  public static readonly RULE_statement = 1
  public static readonly RULE_identifier = 2
  public static readonly RULE_selectStatement = 3
  public static readonly RULE_column = 4
  public static readonly RULE_condition = 5
  public static readonly RULE_expression = 6
  public static readonly RULE_expressionList = 7
  public static readonly RULE_constant = 8
  public static readonly RULE_comparisonOperator = 9
  public static readonly RULE_logicalOperator = 10
  public static readonly literalNames: (string | null)[] = [
    null,
    null,
    null,
    null,
    "'*'",
    "','",
    "'='",
    "'>'",
    "'<'",
    "'>='",
    "'<='",
    "'<>'",
    null,
    null,
    null,
    "'.'",
    null,
    null,
    null,
    "'-'",
    "'+'"
  ]
  public static readonly symbolicNames: (string | null)[] = [
    null,
    'SELECT',
    'FROM',
    'WHERE',
    'ASTERISK',
    'COMMA',
    'EQUAL',
    'GT',
    'LT',
    'GE',
    'LE',
    'NE',
    'AND',
    'OR',
    'IDENTIFIER',
    'DOT',
    'STRING_VALUE',
    'INTEGER_VALUE',
    'NULL',
    'MINUS',
    'PLUS',
    'COMMENT',
    'WS'
  ]
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'start',
    'statement',
    'identifier',
    'selectStatement',
    'column',
    'condition',
    'expression',
    'expressionList',
    'constant',
    'comparisonOperator',
    'logicalOperator'
  ]
  public get grammarFileName(): string {
    return 'SQLGrammar.g4'
  }
  public get literalNames(): (string | null)[] {
    return SQLGrammarParser.literalNames
  }
  public get symbolicNames(): (string | null)[] {
    return SQLGrammarParser.symbolicNames
  }
  public get ruleNames(): string[] {
    return SQLGrammarParser.ruleNames
  }
  public get serializedATN(): number[] {
    return SQLGrammarParser._serializedATN
  }

  protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(this, SQLGrammarParser._ATN, SQLGrammarParser.DecisionsToDFA, new PredictionContextCache())
  }
  // @RuleVersion(0)
  public start(): StartContext {
    const localctx: StartContext = new StartContext(this, this._ctx, this.state)
    this.enterRule(localctx, 0, SQLGrammarParser.RULE_start)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 22
        this.selectStatement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    const localctx: StatementContext = new StatementContext(this, this._ctx, this.state)
    this.enterRule(localctx, 2, SQLGrammarParser.RULE_statement)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 24
        this.selectStatement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    const localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state)
    this.enterRule(localctx, 4, SQLGrammarParser.RULE_identifier)
    try {
      this.state = 30
      this._errHandler.sync(this)
      switch (this._interp.adaptivePredict(this._input, 0, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1)
          {
            this.state = 26
            this.match(SQLGrammarParser.IDENTIFIER)
            this.state = 27
            this.match(SQLGrammarParser.DOT)
            this.state = 28
            this.match(SQLGrammarParser.IDENTIFIER)
          }
          break
        case 2:
          this.enterOuterAlt(localctx, 2)
          {
            this.state = 29
            this.match(SQLGrammarParser.IDENTIFIER)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }
  // @RuleVersion(0)
  public selectStatement(): SelectStatementContext {
    const localctx: SelectStatementContext = new SelectStatementContext(this, this._ctx, this.state)
    this.enterRule(localctx, 6, SQLGrammarParser.RULE_selectStatement)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 32
        this.match(SQLGrammarParser.SELECT)
        this.state = 33
        this.expressionList()
        this.state = 34
        this.match(SQLGrammarParser.FROM)
        this.state = 35
        this.identifier()
        this.state = 38
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === 3) {
          {
            this.state = 36
            this.match(SQLGrammarParser.WHERE)
            this.state = 37
            this.condition(0)
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }
  // @RuleVersion(0)
  public column(): ColumnContext {
    const localctx: ColumnContext = new ColumnContext(this, this._ctx, this.state)
    this.enterRule(localctx, 8, SQLGrammarParser.RULE_column)
    try {
      this.state = 42
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case 4:
          this.enterOuterAlt(localctx, 1)
          {
            this.state = 40
            this.match(SQLGrammarParser.ASTERISK)
          }
          break
        case 14:
          this.enterOuterAlt(localctx, 2)
          {
            this.state = 41
            this.identifier()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  public condition(): ConditionContext
  public condition(_p: number): ConditionContext
  // @RuleVersion(0)
  public condition(_p?: number): ConditionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let localctx: ConditionContext = new ConditionContext(this, this._ctx, _parentState)
    let _prevctx: ConditionContext = localctx
    const _startState: number = 10
    this.enterRecursionRule(localctx, 10, SQLGrammarParser.RULE_condition, _p)
    try {
      let _alt: number
      this.enterOuterAlt(localctx, 1)
      {
        {
          this.state = 45
          this.identifier()
          this.state = 46
          this.comparisonOperator()
          this.state = 47
          this.expression()
        }
        this._ctx.stop = this._input.LT(-1)
        this.state = 57
        this._errHandler.sync(this)
        _alt = this._interp.adaptivePredict(this._input, 4, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = localctx
            {
              this.state = 55
              this._errHandler.sync(this)
              switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                  {
                    localctx = new ConditionContext(this, _parentctx, _parentState)
                    localctx._left = _prevctx
                    this.pushNewRecursionContext(localctx, _startState, SQLGrammarParser.RULE_condition)
                    this.state = 49
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 50
                    localctx._operator = this.match(SQLGrammarParser.AND)
                    this.state = 51
                    localctx._right = this.condition(3)
                  }
                  break
                case 2:
                  {
                    localctx = new ConditionContext(this, _parentctx, _parentState)
                    localctx._left = _prevctx
                    this.pushNewRecursionContext(localctx, _startState, SQLGrammarParser.RULE_condition)
                    this.state = 52
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 53
                    localctx._operator = this.match(SQLGrammarParser.OR)
                    this.state = 54
                    localctx._right = this.condition(2)
                  }
                  break
              }
            }
          }
          this.state = 59
          this._errHandler.sync(this)
          _alt = this._interp.adaptivePredict(this._input, 4, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return localctx
  }
  // @RuleVersion(0)
  public expression(): ExpressionContext {
    const localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state)
    this.enterRule(localctx, 12, SQLGrammarParser.RULE_expression)
    try {
      this.state = 63
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case 4:
          this.enterOuterAlt(localctx, 1)
          {
            this.state = 60
            this.match(SQLGrammarParser.ASTERISK)
          }
          break
        case 14:
          this.enterOuterAlt(localctx, 2)
          {
            this.state = 61
            this.identifier()
          }
          break
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
          this.enterOuterAlt(localctx, 3)
          {
            this.state = 62
            this.constant()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }
  // @RuleVersion(0)
  public expressionList(): ExpressionListContext {
    const localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state)
    this.enterRule(localctx, 14, SQLGrammarParser.RULE_expressionList)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 65
        this.expression()
        this.state = 70
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === 5) {
          {
            {
              this.state = 66
              this.match(SQLGrammarParser.COMMA)
              this.state = 67
              this.expression()
            }
          }
          this.state = 72
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }
  // @RuleVersion(0)
  public constant(): ConstantContext {
    const localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state)
    this.enterRule(localctx, 16, SQLGrammarParser.RULE_constant)
    let _la: number
    try {
      this.state = 79
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case 18:
          this.enterOuterAlt(localctx, 1)
          {
            this.state = 73
            this.match(SQLGrammarParser.NULL)
          }
          break
        case 17:
        case 19:
        case 20:
          this.enterOuterAlt(localctx, 2)
          {
            this.state = 75
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === 19 || _la === 20) {
              {
                this.state = 74
                _la = this._input.LA(1)
                if (!(_la === 19 || _la === 20)) {
                  this._errHandler.recoverInline(this)
                } else {
                  this._errHandler.reportMatch(this)
                  this.consume()
                }
              }
            }

            this.state = 77
            this.match(SQLGrammarParser.INTEGER_VALUE)
          }
          break
        case 16:
          this.enterOuterAlt(localctx, 3)
          {
            this.state = 78
            this.match(SQLGrammarParser.STRING_VALUE)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }
  // @RuleVersion(0)
  public comparisonOperator(): ComparisonOperatorContext {
    const localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state)
    this.enterRule(localctx, 18, SQLGrammarParser.RULE_comparisonOperator)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 81
        _la = this._input.LA(1)
        if (!((_la & ~0x1f) === 0 && ((1 << _la) & 4032) !== 0)) {
          this._errHandler.recoverInline(this)
        } else {
          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }
  // @RuleVersion(0)
  public logicalOperator(): LogicalOperatorContext {
    const localctx: LogicalOperatorContext = new LogicalOperatorContext(this, this._ctx, this.state)
    this.enterRule(localctx, 20, SQLGrammarParser.RULE_logicalOperator)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 83
        _la = this._input.LA(1)
        if (!(_la === 12 || _la === 13)) {
          this._errHandler.recoverInline(this)
        } else {
          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 5:
        return this.condition_sempred(localctx as ConditionContext, predIndex)
    }
    return true
  }
  private condition_sempred(localctx: ConditionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 2)
      case 1:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 22, 86, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    2, 1, 2, 1, 2, 1, 2, 3, 2, 31, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 39, 8, 3, 1, 4, 1, 4, 3, 4, 43, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5,
    1, 5, 5, 5, 56, 8, 5, 10, 5, 12, 5, 59, 9, 5, 1, 6, 1, 6, 1, 6, 3, 6, 64, 8, 6, 1, 7, 1, 7, 1, 7, 5, 7, 69, 8, 7, 10, 7, 12, 7, 72, 9, 7, 1, 8, 1, 8, 3, 8, 76, 8, 8, 1, 8, 1,
    8, 3, 8, 80, 8, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 0, 1, 10, 11, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 0, 3, 1, 0, 19, 20, 1, 0, 6, 11, 1, 0, 12, 13, 85, 0, 22, 1, 0, 0, 0,
    2, 24, 1, 0, 0, 0, 4, 30, 1, 0, 0, 0, 6, 32, 1, 0, 0, 0, 8, 42, 1, 0, 0, 0, 10, 44, 1, 0, 0, 0, 12, 63, 1, 0, 0, 0, 14, 65, 1, 0, 0, 0, 16, 79, 1, 0, 0, 0, 18, 81, 1, 0, 0, 0,
    20, 83, 1, 0, 0, 0, 22, 23, 3, 6, 3, 0, 23, 1, 1, 0, 0, 0, 24, 25, 3, 6, 3, 0, 25, 3, 1, 0, 0, 0, 26, 27, 5, 14, 0, 0, 27, 28, 5, 15, 0, 0, 28, 31, 5, 14, 0, 0, 29, 31, 5, 14,
    0, 0, 30, 26, 1, 0, 0, 0, 30, 29, 1, 0, 0, 0, 31, 5, 1, 0, 0, 0, 32, 33, 5, 1, 0, 0, 33, 34, 3, 14, 7, 0, 34, 35, 5, 2, 0, 0, 35, 38, 3, 4, 2, 0, 36, 37, 5, 3, 0, 0, 37, 39, 3,
    10, 5, 0, 38, 36, 1, 0, 0, 0, 38, 39, 1, 0, 0, 0, 39, 7, 1, 0, 0, 0, 40, 43, 5, 4, 0, 0, 41, 43, 3, 4, 2, 0, 42, 40, 1, 0, 0, 0, 42, 41, 1, 0, 0, 0, 43, 9, 1, 0, 0, 0, 44, 45,
    6, 5, -1, 0, 45, 46, 3, 4, 2, 0, 46, 47, 3, 18, 9, 0, 47, 48, 3, 12, 6, 0, 48, 57, 1, 0, 0, 0, 49, 50, 10, 2, 0, 0, 50, 51, 5, 12, 0, 0, 51, 56, 3, 10, 5, 3, 52, 53, 10, 1, 0,
    0, 53, 54, 5, 13, 0, 0, 54, 56, 3, 10, 5, 2, 55, 49, 1, 0, 0, 0, 55, 52, 1, 0, 0, 0, 56, 59, 1, 0, 0, 0, 57, 55, 1, 0, 0, 0, 57, 58, 1, 0, 0, 0, 58, 11, 1, 0, 0, 0, 59, 57, 1,
    0, 0, 0, 60, 64, 5, 4, 0, 0, 61, 64, 3, 4, 2, 0, 62, 64, 3, 16, 8, 0, 63, 60, 1, 0, 0, 0, 63, 61, 1, 0, 0, 0, 63, 62, 1, 0, 0, 0, 64, 13, 1, 0, 0, 0, 65, 70, 3, 12, 6, 0, 66,
    67, 5, 5, 0, 0, 67, 69, 3, 12, 6, 0, 68, 66, 1, 0, 0, 0, 69, 72, 1, 0, 0, 0, 70, 68, 1, 0, 0, 0, 70, 71, 1, 0, 0, 0, 71, 15, 1, 0, 0, 0, 72, 70, 1, 0, 0, 0, 73, 80, 5, 18, 0,
    0, 74, 76, 7, 0, 0, 0, 75, 74, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 77, 1, 0, 0, 0, 77, 80, 5, 17, 0, 0, 78, 80, 5, 16, 0, 0, 79, 73, 1, 0, 0, 0, 79, 75, 1, 0, 0, 0, 79, 78, 1,
    0, 0, 0, 80, 17, 1, 0, 0, 0, 81, 82, 7, 1, 0, 0, 82, 19, 1, 0, 0, 0, 83, 84, 7, 2, 0, 0, 84, 21, 1, 0, 0, 0, 9, 30, 38, 42, 55, 57, 63, 70, 75, 79
  ]

  private static __ATN: ATN
  public static get _ATN(): ATN {
    if (!SQLGrammarParser.__ATN) {
      SQLGrammarParser.__ATN = new ATNDeserializer().deserialize(SQLGrammarParser._serializedATN)
    }

    return SQLGrammarParser.__ATN
  }

  static DecisionsToDFA = SQLGrammarParser._ATN.decisionToState.map((ds: DecisionState, index: number) => new DFA(ds, index))
}

export class StartContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public selectStatement(): SelectStatementContext {
    return this.getTypedRuleContext(SelectStatementContext, 0) as SelectStatementContext
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_start
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterStart) {
      listener.enterStart(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitStart) {
      listener.exitStart(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitStart) {
      return visitor.visitStart(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public selectStatement(): SelectStatementContext {
    return this.getTypedRuleContext(SelectStatementContext, 0) as SelectStatementContext
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_statement
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdentifierContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public IDENTIFIER_list(): TerminalNode[] {
    return this.getTokens(SQLGrammarParser.IDENTIFIER)
  }
  public IDENTIFIER(i: number): TerminalNode {
    return this.getToken(SQLGrammarParser.IDENTIFIER, i)
  }
  public DOT(): TerminalNode {
    return this.getToken(SQLGrammarParser.DOT, 0)
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_identifier
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitIdentifier) {
      return visitor.visitIdentifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SelectStatementContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public SELECT(): TerminalNode {
    return this.getToken(SQLGrammarParser.SELECT, 0)
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext
  }
  public FROM(): TerminalNode {
    return this.getToken(SQLGrammarParser.FROM, 0)
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext
  }
  public WHERE(): TerminalNode {
    return this.getToken(SQLGrammarParser.WHERE, 0)
  }
  public condition(): ConditionContext {
    return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_selectStatement
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterSelectStatement) {
      listener.enterSelectStatement(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitSelectStatement) {
      listener.exitSelectStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitSelectStatement) {
      return visitor.visitSelectStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ColumnContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public ASTERISK(): TerminalNode {
    return this.getToken(SQLGrammarParser.ASTERISK, 0)
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_column
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterColumn) {
      listener.enterColumn(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitColumn) {
      listener.exitColumn(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitColumn) {
      return visitor.visitColumn(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConditionContext extends ParserRuleContext {
  public _left!: ConditionContext
  public _operator!: Token
  public _right!: ConditionContext
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext
  }
  public comparisonOperator(): ComparisonOperatorContext {
    return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext
  }
  public condition_list(): ConditionContext[] {
    return this.getTypedRuleContexts(ConditionContext) as ConditionContext[]
  }
  public condition(i: number): ConditionContext {
    return this.getTypedRuleContext(ConditionContext, i) as ConditionContext
  }
  public AND(): TerminalNode {
    return this.getToken(SQLGrammarParser.AND, 0)
  }
  public OR(): TerminalNode {
    return this.getToken(SQLGrammarParser.OR, 0)
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_condition
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterCondition) {
      listener.enterCondition(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitCondition) {
      listener.exitCondition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitCondition) {
      return visitor.visitCondition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public ASTERISK(): TerminalNode {
    return this.getToken(SQLGrammarParser.ASTERISK, 0)
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext
  }
  public constant(): ConstantContext {
    return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_expression
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionListContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[]
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(SQLGrammarParser.COMMA)
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(SQLGrammarParser.COMMA, i)
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_expressionList
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterExpressionList) {
      listener.enterExpressionList(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitExpressionList) {
      listener.exitExpressionList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitExpressionList) {
      return visitor.visitExpressionList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConstantContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public NULL(): TerminalNode {
    return this.getToken(SQLGrammarParser.NULL, 0)
  }
  public INTEGER_VALUE(): TerminalNode {
    return this.getToken(SQLGrammarParser.INTEGER_VALUE, 0)
  }
  public MINUS(): TerminalNode {
    return this.getToken(SQLGrammarParser.MINUS, 0)
  }
  public PLUS(): TerminalNode {
    return this.getToken(SQLGrammarParser.PLUS, 0)
  }
  public STRING_VALUE(): TerminalNode {
    return this.getToken(SQLGrammarParser.STRING_VALUE, 0)
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_constant
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterConstant) {
      listener.enterConstant(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitConstant) {
      listener.exitConstant(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitConstant) {
      return visitor.visitConstant(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ComparisonOperatorContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public EQUAL(): TerminalNode {
    return this.getToken(SQLGrammarParser.EQUAL, 0)
  }
  public GT(): TerminalNode {
    return this.getToken(SQLGrammarParser.GT, 0)
  }
  public LT(): TerminalNode {
    return this.getToken(SQLGrammarParser.LT, 0)
  }
  public GE(): TerminalNode {
    return this.getToken(SQLGrammarParser.GE, 0)
  }
  public LE(): TerminalNode {
    return this.getToken(SQLGrammarParser.LE, 0)
  }
  public NE(): TerminalNode {
    return this.getToken(SQLGrammarParser.NE, 0)
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_comparisonOperator
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterComparisonOperator) {
      listener.enterComparisonOperator(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitComparisonOperator) {
      listener.exitComparisonOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitComparisonOperator) {
      return visitor.visitComparisonOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LogicalOperatorContext extends ParserRuleContext {
  constructor(parser?: SQLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState)
    this.parser = parser
  }
  public AND(): TerminalNode {
    return this.getToken(SQLGrammarParser.AND, 0)
  }
  public OR(): TerminalNode {
    return this.getToken(SQLGrammarParser.OR, 0)
  }
  public get ruleIndex(): number {
    return SQLGrammarParser.RULE_logicalOperator
  }
  public enterRule(listener: SQLGrammarListener): void {
    if (listener.enterLogicalOperator) {
      listener.enterLogicalOperator(this)
    }
  }
  public exitRule(listener: SQLGrammarListener): void {
    if (listener.exitLogicalOperator) {
      listener.exitLogicalOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SQLGrammarVisitor<Result>): Result {
    if (visitor.visitLogicalOperator) {
      return visitor.visitLogicalOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
