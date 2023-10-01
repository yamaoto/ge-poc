// Generated from SQLGrammar.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import { ATN, ATNDeserializer, CharStream, type DecisionState, DFA, Lexer, LexerATNSimulator, RuleContext, PredictionContextCache, Token } from 'antlr4'
export default class SQLGrammarLexer extends Lexer {
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

  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']
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
  public static readonly modeNames: string[] = ['DEFAULT_MODE']

  public static readonly ruleNames: string[] = [
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

  constructor(input: CharStream) {
    super(input)
    this._interp = new LexerATNSimulator(this, SQLGrammarLexer._ATN, SQLGrammarLexer.DecisionsToDFA, new PredictionContextCache())
  }

  public get grammarFileName(): string {
    return 'SQLGrammar.g4'
  }

  public get literalNames(): (string | null)[] {
    return SQLGrammarLexer.literalNames
  }
  public get symbolicNames(): (string | null)[] {
    return SQLGrammarLexer.symbolicNames
  }
  public get ruleNames(): string[] {
    return SQLGrammarLexer.ruleNames
  }

  public get serializedATN(): number[] {
    return SQLGrammarLexer._serializedATN
  }

  public get channelNames(): string[] {
    return SQLGrammarLexer.channelNames
  }

  public get modeNames(): string[] {
    return SQLGrammarLexer.modeNames
  }

  public static readonly _serializedATN: number[] = [
    4, 0, 22, 175, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12,
    7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3, 0, 58, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 68, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2,
    80, 8, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 3, 11, 109, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 117, 8, 12, 1, 13, 1, 13, 5, 13, 121, 8, 13, 10, 13, 12, 13, 124, 9, 13, 1, 14, 1, 14, 1, 15, 1, 15,
    5, 15, 130, 8, 15, 10, 15, 12, 15, 133, 9, 15, 1, 15, 1, 15, 1, 16, 1, 16, 5, 16, 139, 8, 16, 10, 16, 12, 16, 142, 9, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1,
    17, 3, 17, 152, 8, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 5, 20, 162, 8, 20, 10, 20, 12, 20, 165, 9, 20, 1, 20, 1, 20, 1, 21, 4, 21, 170, 8, 21, 11, 21,
    12, 21, 171, 1, 21, 1, 21, 0, 0, 22, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19,
    39, 20, 41, 21, 43, 22, 1, 0, 7, 3, 0, 65, 90, 95, 95, 97, 122, 4, 0, 48, 57, 65, 90, 95, 95, 97, 122, 3, 0, 10, 10, 13, 13, 39, 39, 1, 0, 49, 57, 1, 0, 48, 57, 2, 0, 10, 10,
    13, 13, 3, 0, 9, 10, 13, 13, 32, 32, 187, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15,
    1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0,
    0, 0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 1, 57, 1, 0, 0, 0, 3, 67, 1, 0, 0, 0, 5, 79, 1, 0, 0, 0, 7, 81, 1, 0, 0, 0,
    9, 83, 1, 0, 0, 0, 11, 85, 1, 0, 0, 0, 13, 87, 1, 0, 0, 0, 15, 89, 1, 0, 0, 0, 17, 91, 1, 0, 0, 0, 19, 94, 1, 0, 0, 0, 21, 97, 1, 0, 0, 0, 23, 108, 1, 0, 0, 0, 25, 116, 1, 0,
    0, 0, 27, 118, 1, 0, 0, 0, 29, 125, 1, 0, 0, 0, 31, 127, 1, 0, 0, 0, 33, 136, 1, 0, 0, 0, 35, 151, 1, 0, 0, 0, 37, 153, 1, 0, 0, 0, 39, 155, 1, 0, 0, 0, 41, 157, 1, 0, 0, 0,
    43, 169, 1, 0, 0, 0, 45, 46, 5, 83, 0, 0, 46, 47, 5, 69, 0, 0, 47, 48, 5, 76, 0, 0, 48, 49, 5, 69, 0, 0, 49, 50, 5, 67, 0, 0, 50, 58, 5, 84, 0, 0, 51, 52, 5, 115, 0, 0, 52, 53,
    5, 101, 0, 0, 53, 54, 5, 108, 0, 0, 54, 55, 5, 101, 0, 0, 55, 56, 5, 99, 0, 0, 56, 58, 5, 116, 0, 0, 57, 45, 1, 0, 0, 0, 57, 51, 1, 0, 0, 0, 58, 2, 1, 0, 0, 0, 59, 60, 5, 70,
    0, 0, 60, 61, 5, 82, 0, 0, 61, 62, 5, 79, 0, 0, 62, 68, 5, 77, 0, 0, 63, 64, 5, 102, 0, 0, 64, 65, 5, 114, 0, 0, 65, 66, 5, 111, 0, 0, 66, 68, 5, 109, 0, 0, 67, 59, 1, 0, 0, 0,
    67, 63, 1, 0, 0, 0, 68, 4, 1, 0, 0, 0, 69, 70, 5, 87, 0, 0, 70, 71, 5, 72, 0, 0, 71, 72, 5, 69, 0, 0, 72, 73, 5, 82, 0, 0, 73, 80, 5, 69, 0, 0, 74, 75, 5, 119, 0, 0, 75, 76, 5,
    104, 0, 0, 76, 77, 5, 101, 0, 0, 77, 78, 5, 114, 0, 0, 78, 80, 5, 101, 0, 0, 79, 69, 1, 0, 0, 0, 79, 74, 1, 0, 0, 0, 80, 6, 1, 0, 0, 0, 81, 82, 5, 42, 0, 0, 82, 8, 1, 0, 0, 0,
    83, 84, 5, 44, 0, 0, 84, 10, 1, 0, 0, 0, 85, 86, 5, 61, 0, 0, 86, 12, 1, 0, 0, 0, 87, 88, 5, 62, 0, 0, 88, 14, 1, 0, 0, 0, 89, 90, 5, 60, 0, 0, 90, 16, 1, 0, 0, 0, 91, 92, 5,
    62, 0, 0, 92, 93, 5, 61, 0, 0, 93, 18, 1, 0, 0, 0, 94, 95, 5, 60, 0, 0, 95, 96, 5, 61, 0, 0, 96, 20, 1, 0, 0, 0, 97, 98, 5, 60, 0, 0, 98, 99, 5, 62, 0, 0, 99, 22, 1, 0, 0, 0,
    100, 101, 5, 65, 0, 0, 101, 102, 5, 78, 0, 0, 102, 109, 5, 68, 0, 0, 103, 104, 5, 97, 0, 0, 104, 105, 5, 110, 0, 0, 105, 109, 5, 100, 0, 0, 106, 107, 5, 38, 0, 0, 107, 109, 5,
    38, 0, 0, 108, 100, 1, 0, 0, 0, 108, 103, 1, 0, 0, 0, 108, 106, 1, 0, 0, 0, 109, 24, 1, 0, 0, 0, 110, 111, 5, 79, 0, 0, 111, 117, 5, 82, 0, 0, 112, 113, 5, 111, 0, 0, 113, 117,
    5, 114, 0, 0, 114, 115, 5, 124, 0, 0, 115, 117, 5, 124, 0, 0, 116, 110, 1, 0, 0, 0, 116, 112, 1, 0, 0, 0, 116, 114, 1, 0, 0, 0, 117, 26, 1, 0, 0, 0, 118, 122, 7, 0, 0, 0, 119,
    121, 7, 1, 0, 0, 120, 119, 1, 0, 0, 0, 121, 124, 1, 0, 0, 0, 122, 120, 1, 0, 0, 0, 122, 123, 1, 0, 0, 0, 123, 28, 1, 0, 0, 0, 124, 122, 1, 0, 0, 0, 125, 126, 5, 46, 0, 0, 126,
    30, 1, 0, 0, 0, 127, 131, 5, 39, 0, 0, 128, 130, 8, 2, 0, 0, 129, 128, 1, 0, 0, 0, 130, 133, 1, 0, 0, 0, 131, 129, 1, 0, 0, 0, 131, 132, 1, 0, 0, 0, 132, 134, 1, 0, 0, 0, 133,
    131, 1, 0, 0, 0, 134, 135, 5, 39, 0, 0, 135, 32, 1, 0, 0, 0, 136, 140, 7, 3, 0, 0, 137, 139, 7, 4, 0, 0, 138, 137, 1, 0, 0, 0, 139, 142, 1, 0, 0, 0, 140, 138, 1, 0, 0, 0, 140,
    141, 1, 0, 0, 0, 141, 34, 1, 0, 0, 0, 142, 140, 1, 0, 0, 0, 143, 144, 5, 78, 0, 0, 144, 145, 5, 85, 0, 0, 145, 146, 5, 76, 0, 0, 146, 152, 5, 76, 0, 0, 147, 148, 5, 110, 0, 0,
    148, 149, 5, 117, 0, 0, 149, 150, 5, 108, 0, 0, 150, 152, 5, 108, 0, 0, 151, 143, 1, 0, 0, 0, 151, 147, 1, 0, 0, 0, 152, 36, 1, 0, 0, 0, 153, 154, 5, 45, 0, 0, 154, 38, 1, 0,
    0, 0, 155, 156, 5, 43, 0, 0, 156, 40, 1, 0, 0, 0, 157, 158, 5, 45, 0, 0, 158, 159, 5, 45, 0, 0, 159, 163, 1, 0, 0, 0, 160, 162, 8, 5, 0, 0, 161, 160, 1, 0, 0, 0, 162, 165, 1,
    0, 0, 0, 163, 161, 1, 0, 0, 0, 163, 164, 1, 0, 0, 0, 164, 166, 1, 0, 0, 0, 165, 163, 1, 0, 0, 0, 166, 167, 6, 20, 0, 0, 167, 42, 1, 0, 0, 0, 168, 170, 7, 6, 0, 0, 169, 168, 1,
    0, 0, 0, 170, 171, 1, 0, 0, 0, 171, 169, 1, 0, 0, 0, 171, 172, 1, 0, 0, 0, 172, 173, 1, 0, 0, 0, 173, 174, 6, 21, 0, 0, 174, 44, 1, 0, 0, 0, 12, 0, 57, 67, 79, 108, 116, 122,
    131, 140, 151, 163, 171, 1, 6, 0, 0
  ]

  private static __ATN: ATN
  public static get _ATN(): ATN {
    if (!SQLGrammarLexer.__ATN) {
      SQLGrammarLexer.__ATN = new ATNDeserializer().deserialize(SQLGrammarLexer._serializedATN)
    }

    return SQLGrammarLexer.__ATN
  }

  static DecisionsToDFA = SQLGrammarLexer._ATN.decisionToState.map((ds: DecisionState, index: number) => new DFA(ds, index))
}
