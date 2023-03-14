#include <array>
#include <iostream>
#include <string.h>
#include <iomanip>
using namespace std;
void calculator(int x, int y, char op)
{
  switch (op)
  {
  case '+':
    cout << x + y;
    break;
  case '-':
    cout << x - y;
    break;
  case '*':
    cout << x * y;
    break;
  case '/':
    cout << x / y;
    break;

  default:
    break;
  }
}

int main()
{
  
  return 0;
}
