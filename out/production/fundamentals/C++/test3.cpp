#include "main.h"

class base
{
private:
    int x;
    string name;
};

class delrvid : public base
{
public:
    void print()
    {
        cout << x << "\n"
             << name;
    }
};