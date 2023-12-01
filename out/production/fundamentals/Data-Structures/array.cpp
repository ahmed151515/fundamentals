#include "main.h"

template <class t, int size>
class array_dinmic
{
    t *arr;
    int count;

public:
    array_dinmic() : count(0)
    {
        if (size < 0)
        {
            throw exception();
        }
        arr = new t[size];
    }
    ~array_dinmic(){

    };
    bool IsEmpty()
    {
        return count == 0;
    }
    bool IsFull()
    {
        return count == size;
    }
    int get_size()
    {
        return count;
    }

    void print()
    {
        for (int i = 0; i < get_size(); i++)
        {
            cout << arr[i] << (i != get_size() - 1 ? ", " : "");
        }
        cout << endl;
    }

    void insert(int p, t item)
    {
        if (IsFull())
        {
            cout << "full\n";
            return;
        }
        if (p < 0 || p > count)
        {
            throw out_of_range("wrong range");
        }
        for (int i = count; i > p; i--)
        {
            arr[i] = arr[i - 1];
        }
        arr[p] = item;
        count++;
    }

    void remove(int p)
    {
        if (IsEmpty())
        {
            cout << "empty\n";
            return;
        }
        if (p < 0 || p > count)
        {
            throw out_of_range("wrong range");
        }

        for (int i = p; i < count; i++)
        {
            arr[i] = arr[i + 1];
        }
    count--;
    }
    int search(t item)
    {
        if (IsEmpty())
        {
            return -1;
        }

        for (int i = 0; i < count; i++)
        {
            if (arr[i] == item)
            {
                return 1;
            }
        }
        return -1;
    }
};

int main()
{


}