#include <stdio.h>
#include "compiler.h"
ExpressionNode *root;
Token tokens[MAX_SIZE];
int TokenCount = 0;
int TokenIndex = 0;

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

                while (isdigit(ch))
                {
                    word[i++] = ch;
                }

                ungetc(ch, file);
                word[i] = '\0';
                add_token(TOKEN_LITERAL_INT, word);
            }
            else if (isspace(ch))
            {
                continue;
            }
            else
            {
                add_token(TOKEN_UNKNOWN, "");
            }

            break;
        }
    }
}
/*
change child paramter to root for link parser tree
*/
ExpressionNode *create_expression_node(Token token, ExpressionNode *root)
{
    ExpressionNode *node = (ExpressionNode *)malloc(sizeof(ExpressionNode));
    if (node == NULL)
    {
        perror("Failed to allocate memory for ExpressionNode");
        exit(EXIT_FAILURE);
    }
    if (root != NULL)
    {
        root->child = node;
    }
    node->token = token;
    node->next = NULL;
    node->child = NULL;
    return (node);
}

// change next paramter to prev for link  tokens
TokenNode *create_token_node(Token token, TokenNode *prev)
{
    TokenNode *node = (TokenNode *)malloc(sizeof(TokenNode));
    if (node == NULL)
    {
        perror("Failed to allocate memory for TokenNode");
        exit(EXIT_FAILURE);
    }

    node->token = token;
    node->next = NULL;
    if (prev != NULL)
    {
        prev->next = node;
    }

    return (node);
}

/**
 * parser -
 */
void parser()
{
}
void parse_return()
{
    int start_token = TokenIndex;
    if (TokenIndex >= TokenCount)
    {
        fprintf(stderr, "Error: Reached end of tokens :')\n");
        return;
    }

    if (strcmp(tokens[TokenIndex].value, "return") == 0)
    {
        TokenIndex++;

        if (TokenIndex >= TokenCount)
        {
            fprintf(stderr, "Error: Unexpected end of tokens :')\n");
            return;
        }

        if (strcmp(tokens[TokenIndex].value, "(") == 0)
        {
            TokenIndex++;

            if (TokenIndex >= TokenCount)
            {
                fprintf(stderr, "Error: Unexpected end of tokens :')\n");
                return;
            }

            if (tokens[TokenIndex].type == TOKEN_LITERAL_INT)
            {
                TokenIndex++;

                if (TokenIndex >= TokenCount)
                {
                    fprintf(stderr, "Error: Unexpected end of tokens :')\n");
                    return;
                }

                if (strcmp(tokens[TokenIndex].value, ")") == 0)
                {
                    TokenIndex++;

                    if (TokenIndex >= TokenCount)
                    {
                        fprintf(stderr, "Error: Unexpected end of tokens :')\n");
                        return;
                    }

                    if (strcmp(tokens[TokenIndex].value, ";") == 0)
                    {
                        TokenIndex++;
                        ExpressionNode *child;
                        TokenNode *cur;
                        TokenNode *prev;

                        Token token_exit = {EXIT, "EXIT"};
                        child = create_expression_node(token_exit, root);
                        child->next = create_token_node(tokens[start_token], NULL);
                        prev = child->next;
                        for (int i = start_token + 1; i < TokenIndex; i++)
                        {
                            cur = create_token_node(tokens[i], prev);
                            prev = cur;
                        }
                        printf("Correct Return Statment horaaaaay!!\n");
                        return;
                    }
                }
            }
        }
    }

    fprintf(stderr, "Syntax Error: Invalid Return Statment :')\n");
}

void parse_main()
{
    if (TokenIndex >= TokenCount)
    {
        fprintf(stderr, "Error: Reached end of tokens :')\n");
        return;
    }

    if (strcmp(tokens[TokenIndex].value, "int") == 0)
    {
        TokenIndex++;

        if (TokenIndex >= TokenCount)
        {
            fprintf(stderr, "Error: Reached end of tokens :')\n");
            return;
        }

        if (strcmp(tokens[TokenIndex].value, "main") == 0)
        {
            TokenIndex++;

            if (TokenIndex >= TokenCount)
            {
                fprintf(stderr, "Error: Reached end of tokens :')\n");
                return;
            }

            if (strcmp(tokens[TokenIndex].value, "(") == 0)
            {
                TokenIndex++;

                if (TokenIndex >= TokenCount)
                {
                    fprintf(stderr, "Error: Reached end of tokens :')\n");
                    return;
                }

                if (strcmp(tokens[TokenIndex].value, ")") == 0)
                {
                    printf("Correct main Statment horaaaaay!!\n");
                    return;
                }
            }
        }
    }
}
int main()
{
    Token token_root = {ROOT, "root"};
    root = create_expression_node(token_root, NULL);
    FILE *f = fopen("t.txt", "r");
    
    lexer(f);
    for (int i = 0; i < TokenCount; i++)
    {
        printf("%s\n", tokens[i].value);
    }
    // parse_return();
    ExpressionNode *tmp = root;
    TokenNode *tmp_node;
    while (tmp != NULL)
    {
        printf("%s -> ", tmp->token.value);
        tmp_node = tmp->next;https://www.tutorialspoint.com/compiler_design/index.htm
        while (tmp_node != NULL)
        {
            printf("{%d, %s} -> ", tmp_node->token.type, tmp_node->token.value);
            tmp_node = tmp_node->next;
        }
        printf("\n");
        tmp = tmp->child;
    }
}
