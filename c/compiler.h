#ifndef COMPILER_H
#define COMPILER_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
typedef enum
{
    SemiColon,
    OPEN_PAREN,
    CLOSE_PAREN,
    OPEN_CURLY_PAREN,
    CLOSE_CURLY_PAREN,
    UNKNOWN,
} Seperators;

typedef enum
{
    RETURN,
    INT,
} Keywords;

typedef enum
{
    LITERAL_INT,
} Literals;

typedef enum
{
    TOKEN_SEMICOLON,
    TOKEN_OPEN_PAREN,
    TOKEN_CLOSE_PAREN,
    TOKEN_OPEN_CURLY_PAREN,
    TOKEN_CLOSE_CURLY_PAREN,
    TOKEN_RETURN,
    TOKEN_INT,
    TOKEN_LITERAL_INT,
    TOKEN_UNKNOWN,
} TokenType;

typedef struct
{
    TokenType type;
    char *value;
} Token;

Token lexer(FILE *file);

#endif