#include "main.h"
#include <bits/stdc++.h>
template <class TKey, class TValue>
class tree
{
    hash<TKey> generateHash;
    struct node
    {
        TKey key;
        TValue item;
        size_t hash;
        node *right;
        node *left;

        node(TKey key, TValue item, long hash)
        {
            this->key = key;
            this->item = item;
            this->left = this->right = NULL;
            this->hash = hash;
        }
    };
    node *root;

public:
    tree()
    {
        this->root = NULL;
    }
    void add(TKey key, TValue item)
    {
        size_t hash = this->generateHash(key);
        node *newNode = new node(key, item, hash);
        if (this->root == NULL)
        {
            root = newNode;
            return;
        }

        node *curr = this->root;
        while (curr != NULL)
        {
            if (curr->hash == newNode->hash)
            {
                curr->item = item;
                delete (newNode);
            }
            else if (curr->hash > newNode->hash)
            {
                if (curr->left == NULL)
                {
                    curr->left = newNode;
                    break;
                }
                else
                {
                    curr = curr->left;
                }
            }
            else
            {
                if (curr->right == NULL)
                {
                    curr->right = newNode;
                    break;
                }
                else
                {
                    curr = curr->right;
                }
            }
        }
    }

    TValue Get(TKey key)
    {
        TValue value;
        size_t hash = this->generateHash(key);
        node *curr = this->root;
        while (curr != NULL)
        {
            if (curr->hash == hash)
            {
                value = curr->item;
                break;
            }
            else if (curr->hash > hash)
            {
                curr = curr->left;
            }
            else
            {
                curr = curr->right;
            }
        }
        return value;
    }
};

int main()
{
    tree<char, int> t;

    t.add('a', 1);
    t.add('g', 5);
    t.add('f', 7);

    cout << t.Get('a') << endl;
    cout << t.Get('g') << endl;
    cout << t.Get('f') << endl;
}