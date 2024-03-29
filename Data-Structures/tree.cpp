#include "main.h"

template <class t>
class tree
{
    struct node
    {
        t item;
        node *right;
        node *left;

        node(t item) {
            this->item = item;
            this->left = this->right = NULL;
        }
    };
    node *root;
    

    public:
    add(t item) {
        if (root->item = NULL) {
            root->item = item;
        } else if (item > root->item) {
            
        }
        
    }
};