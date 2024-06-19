#include <stdio.h>
#include "compiler.h"
int main()
{
    FILE *f = fopen("t.txt", "r");
    Token token;
    do
    {
        token = lexer(f);
        if (token.type == UNKNOWN)
        {
            break;
        }
        printf("type: %d | value: %s\n", token.type, token.value);
    } while (1);
}
