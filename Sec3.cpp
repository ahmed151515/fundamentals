// in this file I will solv  Problem Solving
// i ues (hackerrank) and (sheet Assiut)
#include <iostream>
#include <iomanip>
using namespace std;
int main()
{
  //  Problem Solving (1)
  cout<<"Hello, World!";
  //===================================================
  //  Problem Solving (2)
  int a,b,c;
  cin>>a>>b>>c;
  cout<<a+b+c;
  //===================================================
  //  Problem Solving (3)
  int i;
  long int l;
  char c;
  double d, f;
  cin >> i >> l >> c >> f >> d;
  cout << i << "\n";
  cout << l << "\n";
  cout << c << "\n";
  cout << fixed << f << "\n";
  cout << fixed << d << "\n";
  //===================================================
  //  Problem Solving (4)
  int a, b;
  cin >> a >> b;
  if (a > b || a == b)
    cout << "Yes";
  else
    cout << "No";
  //===================================================
  //  Problem Solving (5)

  long int n;
  cin >> n;

  switch (n)
  {
  case 1:
    cout << "one";
    break;
  case 2:
    cout << "two";
    break;
  case 3:
    cout << "three";
    break;
  case 4:
    cout << "four";
    break;
  case 5:
    cout << "five";
    break;
  case 6:
    cout << "six";
    break;
  case 7:
    cout << "seven";
    break;
  case 8:
    cout << "eight";
    break;
  case 9:
    cout << "nine";
    break;
  default:
    cout << "Greater than 9";

    return 0;
  }
}