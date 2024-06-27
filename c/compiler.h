#ifndef COMPILER_H
#define COMPILER_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#define MAX_SIZE 1024

typedef enum
{
    ROOT,
    TOKEN_SEMICOLON,
    TOKEN_OPEN_PAREN,
    TOKEN_CLOSE_PAREN,
    TOKEN_OPEN_CURLY_PAREN,
    TOKEN_CLOSE_CURLY_PAREN,
    TOKEN_RETURN,
    TOKEN_INT,
    TOKEN_LITERAL_INT,
    TOKEN_IDENTIFIER,
    TOKEN_UNKNOWN,
    /*ADD TokenType FOR CHILD NODE*/
    EXIT,
    DECLARATION,

} TokenType;

typedef struct
{
    TokenType type;
    char *value;
} Token;

typedef struct TokenNode
{
    Token token;
    struct TokenNode *next;
} TokenNode;
typedef struct ExpressionNode
{
    Token token;
    struct ExpressionNode *child;
    TokenNode *next;
} ExpressionNode;

extern Token tokens[MAX_SIZE];
extern int TokenCount;
extern int TokenIndex;
extern ExpressionNode *root;

void lexer(FILE *file);
void parse_return();
void parse_main();
void parser();
void add_token(TokenType type, const char *val);
ExpressionNode *create_expression_node(Token token, ExpressionNode *root);
TokenNode *create_token_node(Token token, TokenNode *prev);
#endif