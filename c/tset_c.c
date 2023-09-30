#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
int pow(int n)
{
        int num = 1;

        if (n == 0)
        {
                return (1);
        }
        while (n--)
        {
                num *= 2;
        }
        return (num);
}
int main(void)
{

        unsigned long int n = 9040000000;

        printf("%d", sizeof(n) * 8);
        return (0);
}
