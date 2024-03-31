#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <stack>
using namespace std;
class base 
{
    public:
    int i;

    void input(int m) { i = m; }
    void set(base &obj) { obj.i = 6;}
    void print() {cout << i;}
};
int main()
{
    base obj1;

    obj1.i = 5;

    obj1.set(obj1);

    obj1.print();
}