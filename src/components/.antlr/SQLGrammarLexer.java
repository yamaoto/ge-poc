// Generated from c:\Projects\ge-poc\src\components\SQLGrammar.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SQLGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SELECT=1, FROM=2, WHERE=3, ASTERISK=4, COMMA=5, EQUAL=6, GT=7, LT=8, GE=9, 
		LE=10, NE=11, AND=12, OR=13, IDENTIFIER=14, DOT=15, STRING_VALUE=16, INTEGER_VALUE=17, 
		NULL=18, MINUS=19, PLUS=20, COMMENT=21, WS=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"SELECT", "FROM", "WHERE", "ASTERISK", "COMMA", "EQUAL", "GT", "LT", 
			"GE", "LE", "NE", "AND", "OR", "IDENTIFIER", "DOT", "STRING_VALUE", "INTEGER_VALUE", 
			"NULL", "MINUS", "PLUS", "COMMENT", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'*'", "','", "'='", "'>'", "'<'", "'>='", "'<='", 
			"'<>'", null, null, null, "'.'", null, null, null, "'-'", "'+'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SELECT", "FROM", "WHERE", "ASTERISK", "COMMA", "EQUAL", "GT", 
			"LT", "GE", "LE", "NE", "AND", "OR", "IDENTIFIER", "DOT", "STRING_VALUE", 
			"INTEGER_VALUE", "NULL", "MINUS", "PLUS", "COMMENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SQLGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SQLGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\30\u00b1\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\5\2<\n\2\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\5\3F\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4R\n\4\3\5\3"+
		"\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3\f"+
		"\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\ro\n\r\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\5\16w\n\16\3\17\3\17\7\17{\n\17\f\17\16\17~\13\17\3\20\3\20\3\21"+
		"\3\21\7\21\u0084\n\21\f\21\16\21\u0087\13\21\3\21\3\21\3\22\3\22\7\22"+
		"\u008d\n\22\f\22\16\22\u0090\13\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\5\23\u009a\n\23\3\24\3\24\3\25\3\25\3\26\3\26\3\26\3\26\7\26\u00a4"+
		"\n\26\f\26\16\26\u00a7\13\26\3\26\3\26\3\27\6\27\u00ac\n\27\r\27\16\27"+
		"\u00ad\3\27\3\27\2\2\30\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f"+
		"\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30\3\2\t\5\2C"+
		"\\aac|\6\2\62;C\\aac|\5\2\f\f\17\17))\3\2\63;\3\2\62;\4\2\f\f\17\17\5"+
		"\2\13\f\17\17\"\"\2\u00bd\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2"+
		"\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2"+
		"\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3"+
		"\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2"+
		"\2\2\2-\3\2\2\2\3;\3\2\2\2\5E\3\2\2\2\7Q\3\2\2\2\tS\3\2\2\2\13U\3\2\2"+
		"\2\rW\3\2\2\2\17Y\3\2\2\2\21[\3\2\2\2\23]\3\2\2\2\25`\3\2\2\2\27c\3\2"+
		"\2\2\31n\3\2\2\2\33v\3\2\2\2\35x\3\2\2\2\37\177\3\2\2\2!\u0081\3\2\2\2"+
		"#\u008a\3\2\2\2%\u0099\3\2\2\2\'\u009b\3\2\2\2)\u009d\3\2\2\2+\u009f\3"+
		"\2\2\2-\u00ab\3\2\2\2/\60\7U\2\2\60\61\7G\2\2\61\62\7N\2\2\62\63\7G\2"+
		"\2\63\64\7E\2\2\64<\7V\2\2\65\66\7u\2\2\66\67\7g\2\2\678\7n\2\289\7g\2"+
		"\29:\7e\2\2:<\7v\2\2;/\3\2\2\2;\65\3\2\2\2<\4\3\2\2\2=>\7H\2\2>?\7T\2"+
		"\2?@\7Q\2\2@F\7O\2\2AB\7h\2\2BC\7t\2\2CD\7q\2\2DF\7o\2\2E=\3\2\2\2EA\3"+
		"\2\2\2F\6\3\2\2\2GH\7Y\2\2HI\7J\2\2IJ\7G\2\2JK\7T\2\2KR\7G\2\2LM\7y\2"+
		"\2MN\7j\2\2NO\7g\2\2OP\7t\2\2PR\7g\2\2QG\3\2\2\2QL\3\2\2\2R\b\3\2\2\2"+
		"ST\7,\2\2T\n\3\2\2\2UV\7.\2\2V\f\3\2\2\2WX\7?\2\2X\16\3\2\2\2YZ\7@\2\2"+
		"Z\20\3\2\2\2[\\\7>\2\2\\\22\3\2\2\2]^\7@\2\2^_\7?\2\2_\24\3\2\2\2`a\7"+
		">\2\2ab\7?\2\2b\26\3\2\2\2cd\7>\2\2de\7@\2\2e\30\3\2\2\2fg\7C\2\2gh\7"+
		"P\2\2ho\7F\2\2ij\7c\2\2jk\7p\2\2ko\7f\2\2lm\7(\2\2mo\7(\2\2nf\3\2\2\2"+
		"ni\3\2\2\2nl\3\2\2\2o\32\3\2\2\2pq\7Q\2\2qw\7T\2\2rs\7q\2\2sw\7t\2\2t"+
		"u\7~\2\2uw\7~\2\2vp\3\2\2\2vr\3\2\2\2vt\3\2\2\2w\34\3\2\2\2x|\t\2\2\2"+
		"y{\t\3\2\2zy\3\2\2\2{~\3\2\2\2|z\3\2\2\2|}\3\2\2\2}\36\3\2\2\2~|\3\2\2"+
		"\2\177\u0080\7\60\2\2\u0080 \3\2\2\2\u0081\u0085\7)\2\2\u0082\u0084\n"+
		"\4\2\2\u0083\u0082\3\2\2\2\u0084\u0087\3\2\2\2\u0085\u0083\3\2\2\2\u0085"+
		"\u0086\3\2\2\2\u0086\u0088\3\2\2\2\u0087\u0085\3\2\2\2\u0088\u0089\7)"+
		"\2\2\u0089\"\3\2\2\2\u008a\u008e\t\5\2\2\u008b\u008d\t\6\2\2\u008c\u008b"+
		"\3\2\2\2\u008d\u0090\3\2\2\2\u008e\u008c\3\2\2\2\u008e\u008f\3\2\2\2\u008f"+
		"$\3\2\2\2\u0090\u008e\3\2\2\2\u0091\u0092\7P\2\2\u0092\u0093\7W\2\2\u0093"+
		"\u0094\7N\2\2\u0094\u009a\7N\2\2\u0095\u0096\7p\2\2\u0096\u0097\7w\2\2"+
		"\u0097\u0098\7n\2\2\u0098\u009a\7n\2\2\u0099\u0091\3\2\2\2\u0099\u0095"+
		"\3\2\2\2\u009a&\3\2\2\2\u009b\u009c\7/\2\2\u009c(\3\2\2\2\u009d\u009e"+
		"\7-\2\2\u009e*\3\2\2\2\u009f\u00a0\7/\2\2\u00a0\u00a1\7/\2\2\u00a1\u00a5"+
		"\3\2\2\2\u00a2\u00a4\n\7\2\2\u00a3\u00a2\3\2\2\2\u00a4\u00a7\3\2\2\2\u00a5"+
		"\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\u00a8\3\2\2\2\u00a7\u00a5\3\2"+
		"\2\2\u00a8\u00a9\b\26\2\2\u00a9,\3\2\2\2\u00aa\u00ac\t\b\2\2\u00ab\u00aa"+
		"\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae"+
		"\u00af\3\2\2\2\u00af\u00b0\b\27\2\2\u00b0.\3\2\2\2\16\2;EQnv|\u0085\u008e"+
		"\u0099\u00a5\u00ad\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}