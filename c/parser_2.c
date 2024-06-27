// #include "compiler.h"
// void parser()
// {
//     FILE *f = fopen("t.txt", "r");
//     Token token;
//     Token parser_tree[50];
//     do
//     {
//         token = lexer(f);
//         if (token.type == TOKEN_UNKNOWN)
//         {
//             break;
//         }
//         if (token.type == TOKEN_INT)
//         {

//         }
//     } while (1);
// }
// #include <stdio.h>
// #include <stdlib.h>

// // تعريف الهيكل لتمثيل العقدة في الشجرة
// typedef struct Node
// {
//     char *token;
//     struct Node *left;
//     struct Node *right;
// } Node;

// // إنشاء عقدة جديدة
// Node *createNode(char *token)
// {
//     Node *newNode = (Node *)malloc(sizeof(Node));
//     newNode->token = token;
//     newNode->left = NULL;
//     newNode->right = NULL;
//     return newNode;
// }

// // طباعة الشجرة (العبور بعمق أول)
// void printTree(Node *root, int level)
// {
//     if (root == NULL)
//         return;
//     for (int i = 0; i < level; i++)
//     {
//         printf("   ");
//     }
//     printf("%s\n", root->token);
//     printTree(root->left, level + 1);
//     printTree(root->right, level + 1);
// }

// int main()
// {
//     // بناء الشجرة للكود المصدر
//     Node *root = createNode("Program");

//     Node *decl1 = createNode("Declaration");
//     decl1->left = createNode("TypeSpecifier: int");
//     decl1->right = createNode("Assignment");
//     decl1->right->left = createNode("Identifier: x");
//     decl1->right->right = createNode("NumericConstant: 0");

//     Node *decl2 = createNode("Declaration");
//     decl2->left = createNode("TypeSpecifier: int");
//     decl2->right = createNode("Assignment");
//     decl2->right->left = createNode("Identifier: y");
//     decl2->right->right = createNode("NumericConstant: 5");

//     Node *assign = createNode("AssignmentStatement");
//     assign->left = createNode("Identifier: x");
//     assign->right = createNode("Expression");
//     assign->right->left = createNode("Identifier: x");
//     assign->right->right = createNode("Addition");
//     assign->right->right->left = createNode("Identifier: y");

//     // ربط العقد مع الشجرة الرئيسية
//     root->left = decl1;
//     root->right = createNode("Next");
//     root->right->left = decl2;
//     root->right->right = assign;

//     // طباعة الشجرة
//     printTree(root, 0);

//     return 0;
// }

// /*
// int x = 0
// int y= 5
// x = x + y
// */
// /*
// root
// delc  int x = 5;
// assin x = 10;


// */