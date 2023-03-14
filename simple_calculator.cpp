/*
Hi  my name is ahmed this is a simple calculator
I made this in 10/02/2023 
last updated in 27/02/2023 
*/
#include <iostream>
#include <array>
#include <string.h>
using namespace std;
int main()
{
  for (bool i; ; i) // this is loop to can Replay 
  {
    int num1, num2;
    cout << "type number first = ";
    cin >> num1;
    cout << "\ntype number sacned = " ;
    cin>> num2;
    char op; // I ues char because char is Easier 
    cout << "\ntype op = ";
    cin >> op;
    switch (op)  //I ues switch because Easier shape
    {
    case '+':
      cout << num1 << " + " << num2 << " = " << num1 + num2<<endl;
      break;
    case '-':
      cout << num1 << " - " << num2 << " = " << num1 - num2<<endl;
      break;
    case '*':
      cout << num1 << " * " << num2 << " = " << num1 * num2<<endl;
      break;
    case '/':
      cout << num1 << " / " << num2 << " = " << num1 / num2<<endl;
      break;
    default:
      cout << "eorr";
    }
    cout << "to Replay type  \n";
    cout<<"yas [0]\n";
    cout<<"no [1]\n";
    cin >> i;

    if (i)
    {
      break;
    }
  }

  return 0;
}
