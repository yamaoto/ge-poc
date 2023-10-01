grammar SQLGrammar;

// Lexer rules
SELECT: 'SELECT' | 'select';
FROM: 'FROM' | 'from';
WHERE: 'WHERE' | 'where';
ASTERISK: '*';
COMMA: ',';
EQUAL: '=';
GT: '>';
LT: '<';
GE: '>=';
LE: '<=';
NE: '<>';
AND: 'AND' | 'and' | '&&';
OR: 'OR' | 'or' | '||';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
DOT: '.';
STRING_VALUE: '\'' ~('\'' | '\r' | '\n')* '\'';
INTEGER_VALUE: [1-9][0-9]*;
NULL : 'NULL' | 'null';
MINUS : '-';
PLUS: '+';

// Parser rules
start: selectStatement;

statement: selectStatement;

identifier: IDENTIFIER DOT IDENTIFIER | IDENTIFIER;

selectStatement: SELECT expressionList FROM identifier (WHERE condition)?;

condition
    : identifier comparisonOperator expression
    | left=condition operator=AND right=condition
    | left=condition operator=OR right=condition
    ;

expression: ASTERISK | identifier | constant;
expressionList: expression (COMMA expression)*;
constant: NULL | (MINUS | PLUS)? INTEGER_VALUE | STRING_VALUE;

comparisonOperator: EQUAL | GT | LT | GE | LE | NE;

logicalOperator: AND | OR;

COMMENT: '--' ~[\r\n]* -> skip;

WS: [ \t\r\n]+ -> skip;
