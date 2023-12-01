#include "main.h"

template <class t>
class tree
{
    struct node
    {
        t item;
        node *right;
        node *left;
    };
    node *root; 
    
};