#include "compiler.h"

// Token tokens[MAX_SIZE];
// int TokenCount = 0;
// int TokenIndex = 0;

void add_token(TokenType type, const char *val)
{
    if (TokenCount >= MAX_SIZE)
    {
        perror("ERROR: Too Many Tokens!");
        exit(1);
    }

    tokens[TokenCount].type = type;
    tokens[TokenCount].value = strdup(val);
    TokenCount++;
}

/**
 * lexer - A Funtion That Takes The Source File And Tokenize It's Contents.
 * @file: The Source FIle
 */
void lexer(FILE *file)
{

    char word[256];
    // int column = 0;
    // int line = 1;
    int ch;
    int i;
    Token token;

    if (file == NULL)
    {
        perror("File Doesn't Exist");
        token.type = TOKEN_UNKNOWN;
        add_token(TOKEN_UNKNOWN, "NULL");
    }

    while ((ch = fgetc(file)) != EOF)
    {
        i = 0;
        switch (ch)
        {
        case ';':
            add_token(TOKEN_SEMICOLON, ";");
            break;
        case '(':
            add_token(TOKEN_OPEN_PAREN, "(");
            break;
        case ')':
            add_token(TOKEN_CLOSE_PAREN, ")");
            break;
        case '{':
            add_token(TOKEN_OPEN_CURLY_PAREN, "{");
            break;
        case '}':
            add_token(TOKEN_CLOSE_CURLY_PAREN, "}");
            break;
        default:
            if (isalpha(ch))
            {
                word[i++] = ch;

                while (isalpha(ch = fgetc(file)))
                {
                    word[i++] = ch;
                }

                ungetc(ch, file);
                word[i] = '\0';
                if (strcmp(word, "return") == 0)
                {
                    add_token(TOKEN_RETURN, word);
                }
                else if (strcmp(word, "int") == 0)
                {
                    add_token(TOKEN_INT, word);
                }
                else
                {
                    add_token(TOKEN_IDENTIFIER, word);
                }
            }
            else if (isdigit(ch))
            {
                word[i++] = ch;

                while (isdigit(ch = fgetc(file)))
                {
                    word[i++] = ch;
                }

                ungetc(ch, file);
                word[i] = '\0';
                add_token(TOKEN_LITERAL_INT, word);

                // return (token);
            }
            else if (isspace(ch))
            {
                continue;
            }
            else
            {
                add_token(TOKEN_UNKNOWN, "");

                // return (token);
            }

            break;
        }
    }
}