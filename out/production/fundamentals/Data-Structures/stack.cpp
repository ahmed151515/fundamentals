#include "main.h"
// use array
template <class t, int n>
class Stack_a
{
    t stack[n];
    int top;

public:
    Stack_a() : top(-1)
    {
    }
    void push(t val)
    {
        //
        if (top < n)
        //
        {
            top++;
            stack[top] = val;
        }
        else
        {
            cout << "ERROR: out of raeng\n";
        }
    }
    void pop()
    {
        //
        if (IsEmpty())
        {
            cout << "ERROR:no elment to pop\n";
        }
        //
        top--;
    }
    t get_top()
    {
        cout << top << endl;
        return stack[top];
    }
    bool IsEmpty()
    {
        if (top == -1)
        {
            return true;
        }
        return false;
    }
};

// use Linked List
template <class t>
class stack_l
{
    struct node
    {
        t item;
        node *next;
    };
    node *top = NULL;

public:
    ~stack_l()
    {
        while (top != NULL)
        {
            pop();
        }
    }
    void push(t item)
    {
        node *tmp = new node;
        if (tmp == NULL)
        {
            cout << "memmry not have place\n";
            return;
        }
        tmp->item = item;

        tmp->next = top;
        top = tmp;
    }
    bool IsEmpty()
    {
        return top == NULL;
    }
    t pop()
    {
        if (IsEmpty())
        {
            cout << "can not pop\n";
            return 0;
        }
        node *tmp = top;
        top = tmp->next;
        t tmp1 = tmp->item;
        tmp->next = NULL;
        delete tmp;
        return tmp1;
    }

    t get_top()
    {
        if (IsEmpty())
        {
            return 0;
        }
        return top->item;
    }
    void print()
    {
        node *tmp = top;

        while (tmp != NULL)
        {
            cout << tmp->item << "\n";
            tmp = tmp->next;
        }
    }
};
bool chack_Balanced_Parentheses(string exp)
{
    string test1 = "([{";
    string test2 = ")}]";

    stack_l<char> s;

    for (int i = 0; i < exp.size(); i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (exp[i] == test1[j])
            {
                s.push(exp[i]);
                break;
            }
            if (exp[i] == test2[j])
            {
                if (s.IsEmpty())
                {
                    return 0;
                }
                if (s.get_top() != exp[i] - (exp[i] == ')' ? 1 : 2))
                {
                    return 0;
                }
                s.pop();
                break;
            }
        }
    }

    return s.IsEmpty();
}
int Expression_Evaluation(string exp)
{
    stack_l<int> tmp;
    int left_side;
    for (int i = 0; i < exp.size(); i++)
    {
        if (exp[i] >= '0' && exp[i] <= '9')
        {
            tmp.push((int)exp[i] - 48);
            continue;
        }
        switch (exp[i])
        {
        case '+':

            tmp.push(tmp.pop() + tmp.pop());
            break;
        case '-':
            left_side = tmp.pop();
            tmp.push(tmp.pop() - left_side);
            break;
        case '*':
            tmp.push(tmp.pop() * tmp.pop());
            break;
        case '/':
            left_side = tmp.pop();
            tmp.push(tmp.pop() / left_side);
            break;
        default:
            continue;
            break;
        }
    }
    return tmp.get_top();
}

int main()
{
    stack_l<int>x;
    x.push(5);
    x.push(7);
    x.push(6);
    return 0;
}