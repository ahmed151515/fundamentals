#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
void print(vector<int> e)
{
    for(int i : e)
    {
        cout<<i<<" ";
    }
    cout<<endl;
}
int main()
{
    vector<int> x = {1,2,3,4,4,6,7,8,9};
    print(x);
    cout<<x.size()<<"\n";

    x.erase(remove(x.begin(),x.end(),4),x.end());
    x.pop_back();
    print(x);
    cout<<x.size()<<"\n";
    return 0;
}