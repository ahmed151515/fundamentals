#include <stdio.h>
#include "compiler.h"
ExpressionNode *root;
Token tokens[MAX_SIZE];
int TokenCount = 0;
int TokenIndex = 0;

int main()
{
    Token token_root = {ROOT, "root"};
    root = create_expression_node(token_root, NULL);
    FILE *f = fopen("t.txt", "r");
    lexer(f);
    int size = sizeof(tokens) / sizeof(tokens[0]);
    parse_return();
    ExpressionNode *tmp = root;
    TokenNode *tmp_node;
    while (tmp != NULL)
    {
        printf("%s -> ", tmp->token.value);
        tmp_node = tmp->next;
        while (tmp_node != NULL)
        {
            printf("{%d, %s} -> ", tmp_node->token.type, tmp_node->token.value);
            tmp_node = tmp_node->next;
        }
        printf("\n");
        tmp = tmp->child;
    }
}
