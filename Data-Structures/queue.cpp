#include "main.h"
// ues array
template <class t, int size>
class queue_a
{
    t queue[size];
    int front;
    int back;
    int count;

public:
    queue_a() : front(0), back(size - 1), count(0) {}
    void push(t item)
    {
        if (IsFull())
        {
            cout << "can not push\n";
            return;
        }
        {
            count++;
            back = (back + 1) % size;
            queue[back] = item;
        }
    }

    t pop()
    {
        if (IsEmpty())
        {
            cout << "can not pop\n";
            return -1;
        }

        count--;
        front = (front + 1) % size;
        return queue[front];
    }
    bool IsEmpty()
    {
        return count == 0;
    }
    bool IsFull()
    {
        return count == size;
    }

    t get_front()
    {
        if (IsEmpty())
        {
            return 0;
        }
        return queue[front];
    }
    t get_back()
    {
        if (IsEmpty())
        {
            return 0;
        }
        return queue[back];
    }
    int get_size()
    {
        if (IsEmpty())
        {
            return 0;
        }
        return count;
    }
    void clear()
    {
        while (!IsEmpty())
        {
            pop();
        }
    }
    void print_all()
    {
        if (IsEmpty())
        {
            return;
        }
        for (int i = front; i != back; i = (i + 1) % size)
        {
            cout << queue[i] << ", ";
        }
        cout << get_back() << endl;
    }

    int search(t tmp)
    {
        if (IsEmpty())
        {
            return -1;
        }
        for (int i = front; i != back; i = (i + 1) % size)
        {
            if (queue[i] == tmp)
            {
                return i;
            }
        }
        return (tmp == get_back() ? back : -1);
    }
};

template <class t>
class queue_l
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
    int count;

public:
    queue_l() : count(0), front(NULL), back(NULL)
    {
    }
    ~queue_l()
    {
        while (count)
        {
            pop();
        }
    }
    bool IsEmpty()
    {
        return count == 0;
    }
    bool push(t item)
    {
        node *tmp = new node(item);
        if (tmp == NULL)
        {
            return false;
        }

        if (IsEmpty())
        {
            front = back = tmp;
        }
        else
        {
            back->next = tmp;
            back = tmp;
        }
        count++;

        return true;
    }

    t pop()
    {
        node *tmp;
        t tmp2;
        if (IsEmpty())
        {
            return 0;
        }
        count--;
        tmp = front;
        tmp2 = tmp->item;
        front = tmp->next;
        tmp->next = NULL;

        delete tmp;
        return tmp2;
    }

    t get_front()
    {
        if (IsEmpty())
        {
            return NULL;
        }
        return front->item;
    }
    t get_back()
    {
        if (IsEmpty())
        {
            return NULL;
        }
        return back->item;
    }
    int get_size()
    {
        return count;
    }
    void print()
    {
        for (node *i = front; i != NULL; i = i->next)
        {
            cout << i->item << (i->next != NULL ? ", " : "");
        }
        cout << endl;
    }
    bool search(t item)
    {
        for (node *i = front; i != NULL; i = i->next)
        {
            if (i->item == item)
            {
                return true;
            }
        }
        return false;
    }
};

int main()
{
}
