#include "main.h"

template <class t>
class linked_list
{
    struct node
    {
        t item;
        node *next;
        node() : next(NULL)
        {
        }
        node(t i) : item(i), next(NULL)
        {
        }
    };

    node *front;
    node *back;
    int size;

public:
    linked_list() : size(0), front(NULL), back(NULL) {}
    ~linked_list()
    {

        clear();
    }
    bool IsEmpty()
    {
        return size == 0;
    }
    bool push_back(t item)
    {
        node *new_node = new node(item);
        if (new_node == NULL)
        {
            return 0;
        }
        if (IsEmpty())
        {
            front = new_node;
            back = new_node;
        }
        else
        {
            back->next = new_node;
            back = new_node;
        }
        size++;
        return 1;
    }
    bool push_first(t item)
    {
        node *new_node = new node(item);
        if (new_node == NULL)
        {
            return 0;
        }
        if (IsEmpty())
        {
            front = new_node;
            back = new_node;
        }
        else
        {
            new_node->next = front;
            front = new_node;
        }
        size++;
        return 1;
    }
    bool insert(int p, t item)
    {
        node *new_node = new node(item);
        if (new_node == NULL || p < 0 || p > size)
        {

            return 0;
        }
        if (IsEmpty())
        {
            push_back(item);
            return 1;
        }
        if (p == 0)
        {
            push_first(item);
            return 1;
        }
        if (p == size)
        {
            push_back(item);
            return 1;
        }
        node *tmp = front;

        for (int i = 0; i < size; i++)
        {

            if (i + 1 == p)
            {
                new_node->next = tmp->next;
                tmp->next = new_node;
                break;
            }
            tmp = tmp->next;
        }
        size++;
        return 1;
    }

    t pop_back()
    {
        if (IsEmpty())
        {
            return 0;
        }
        t tmp;
        if (size == 1)
        {
            size--;
            tmp = front->item;
            delete front;
            front = back = NULL;
            return tmp;
        }
        node *del = front;
        for (int i = 0; i < size - 1; i++)
        {
            if (i == size - 2)
            {
                back = del;
            }
            del = del->next;
        }
        back->next = NULL;
        tmp = del->item;
        size--;
        delete del;
        return tmp;
    }
    t pop_front()
    {
        if (IsEmpty())
        {
            return 0;
        }
        node *del = front;
        t tmp = front->item;
        front = front->next;
        size--;
        delete del;
        return tmp;
    }
    t pop_at(int p)
    {
        if (IsEmpty() || p == -1)
        {
            return 0;
        }
        if (p == 0)
        {
            return pop_front();
        }
        if (p == size)
        {
            return pop_back();
        }
        node *del = front->next, *prev = front;
        t tmp;
        for (int i = 0; i < p - 1; i++)
        {
            prev = prev->next;
            del = del->next;
        }
        prev->next = del->next;

        tmp = del->item;
        size--;
        prev = NULL;
        delete del;
        return tmp;
    }

    t get_front()
    {
        return front->item;
    }
    t get_back()
    {
        return back->item;
    }
    int get_size()
    {
        return size;
    }
    t get_item(int p)
    {
        node *tmp = front;
        for (int i = 0; i < p; i++)
        {
            tmp = tmp->next;
        }
        return tmp->item;
    }

    void print()
    {

        for (node *i = front; i != NULL; i = i->next)
        {

            cout << i->item << (i->next == NULL ? "" : ", ");
        }
        cout << endl;
    }
    int saerch(t item)
    {
        if (IsEmpty())
        {
            return 0;
        }

        node *tmp = front;

        for (int i = 0; i < size; i++)
        {
            if (tmp->item == item)
            {
                return i;
            }
            tmp = tmp->next;
        }
        return -1;
    }

    void revers() // O(n)
    {
        if (IsEmpty() || size == 1)
        {
            return;
        }

        node *next;
        node *prev = front;
        for (node *i = front; i != NULL; i = next)
        {
            next = i->next;
            i->next = prev;
            prev = i;
        }
        front->next = NULL;
        back = front;
        front = prev;
    }
    void clear()
    {
        if (IsEmpty())
        {
            return;
        }
        node *next = front;
        for (node *i = front; i != NULL; i = next)
        {
            next = next->next;
            delete i;
        }
        size = 0;
    }

    void sort()
    {
        if (IsEmpty())
        {
            return;
        }
        t tmp;
        bool swap;
        for (node *i = front; i != NULL; i = i->next)
        {
            for (node *j = i->next; j != NULL; j = j->next)
            {
                if (i->item > j->item)
                {
                    tmp = j->item;
                    j->item = i->item;
                    i->item = tmp;
                }
            }
        }
    }
};

template <class t>
class doubly_linked_list
{
    struct node
    {
        t item;
        node *next;
        node *prev;
        node() : item(NULL), next(NULL), prev(NULL) {}
        node(t i) : item(i), next(NULL), prev(NULL) {}
    };
    node *front;
    node *back;
    int size;

public:
    doubly_linked_list() : front(NULL), back(NULL), size(0) {}
    ~doubly_linked_list() { clear(); }
    bool Is_Empty()
    {
        return size == 0;
    }
    bool push_front(t item)
    {
        node *new_node = new node(item);
        if (new_node == NULL)
        {
            return 0;
        }
        if (Is_Empty())
        {
            front = back = new_node;
        }
        else
        {
            new_node->next = front;
            front->prev = new_node;
            front = new_node;
        }
        size++;
        return 1;
    }

    bool push_back(t item)
    {
        if (Is_Empty())
        {
            push_front(item);
            return 1;
        }
        node *new_node = new node(item);
        if (new_node == NULL)
        {
            return 0;
        }

        back->next = new_node;
        new_node->prev = back;
        back = new_node;
        size++;
        return 1;
    }

    bool push_at(int p, t item)
    {
        if (p < 0 || p > size)
        {
            return 0;
        }
        if (p == 0)
        {
            push_front(item);
            return 1;
        }

        node *new_node = new node(item);
        if (new_node == NULL)
        {
            return 0;
        }

        if (p == size)
        {
            (back->prev)->next = new_node;
            new_node->prev = back->prev;
            new_node->next = back;
            back->prev = new_node;

            size++;

            return 1;
        }

        node *tmp = front;

        p -= 1;
        while (p--)
        {
            tmp = tmp->next;
        }
        new_node->prev = tmp;
        new_node->next = tmp->next;
        tmp->next = new_node;
        (new_node->next)->prev = new_node;
        size++;
        return 1;
    };

    t pop_front()
    {
        if (Is_Empty())
        {
            return 0;
        }

        node *del = front;
        t item = del->item;
        if (size == 1)
        {
            back = front = NULL;
        }
        else
        {
            front = front->next;
            front->prev = NULL;
        }
        size--;
        delete del;
        return item;
    }
    t pop_back()
    {
        if (Is_Empty())
        {
            return 0;
        }

        node *del = back;
        t item = del->item;
        if (size == 1)
        {
            back = front = NULL;
        }
        else
        {
            back = back->prev;
            back->next = NULL;
        }
        size--;
        delete del;
        return item;
    }

    t pop_at(int p)
    {
        if (p < 0 || p > size)
        {
            return 0;
        }
        if (Is_Empty())
        {
            return 0;
        }

        if (p == 0)
        {
            pop_front();
        }
        if (p == size)
        {
            pop_back();
        }

        node *del;
        t item;

        if (p > size / 2)
        {
            p = -p + size;
            del = back;
            p--;
            while (p--)
            {
                del = del->prev;
            }
        }
        else
        {
            del = front;

            while (p--)
            {
                del = del->next;
            }
        }
        size--;
        item = del->item;
        (del->prev)->next = del->next;
        (del->next)->prev = del->prev;
        delete del;
        return item;
    }

    void clear()
    {
        node *del;
        while (size--)
        {
            del = front;
            front = front->next;
            delete del;
        }
        front = back = NULL;
    }

    t get_front()
    {
        return front->item;
    }
    t get_back()
    {
        return back->item;
    }
    t get_size()
    {
        return size;
    }

    void print()
    {

        node *tmp = front;
        while (tmp != NULL)
        {
            cout << tmp->item << (tmp->next != NULL ? ", " : "");
            tmp = tmp->next;
        }
        cout << endl;
    }
};

int main()
{
    doubly_linked_list<int> x;

    for (int i = 1; i <= 100; i++)
    {
        x.push_back(i * 10);
    }

    return 0;
}