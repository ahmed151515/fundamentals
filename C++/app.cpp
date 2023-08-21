#include <iostream>
#include <string>
#include <array>
#include <vector>
using namespace std;
struct f
{
    int x;
    string l;
    f (int x, string l):x(x), l(l)
    {}

    void print()
    {
        cout<< x<<endl;
        cout<< l<<endl;
    }

};
struct fv : public f
{
    fv(int x, string l) :f(x,l)   
      {}
};
int main()
{
    // int x[] = {1,2,3,5,45,11,65,4,5,64,6};
    // for (int * i = x;; i++)
    // {
    //     cout << *i << endl;
    //     if (i == &x[size(x)-1])
    //     {
    //         break;
    //     }
    // }
    fv x(5,"cd");
    x.print();
    return 0;
}