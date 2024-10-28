#include <fstream>
#include <iostream>
#include <vector>
using namespace std;

class f
{
    string name;
    int age;

public:
    f(string n, int a)
    {
        name = n;
        age = a;
    }

    void print()
    {
        cout << name << " | " << age << "\n";
    }
};

int main()
{
    vector<f> g;

    for (int i = 0; i < 5; i++)
    {
        f c = f("ahmed", i);

        g.push_back(c);
    }

    for (f i : g)
    {
        i.print();
    }
}
