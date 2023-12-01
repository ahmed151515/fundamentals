#include <iostream>
using namespace std;

int main()
{
  for (int i = 0; i < 4; i++)
  {
    for (int j = i; j < 3; j++)
    {
      cout << " ";
    }
    if (i == 0)
    {
      cout << "*";
    }
    else if (i == 1)
    {
      cout << "* ";
    }
    else
    {
      cout << "*";
      for (int k = 0; k < (2 * i - 1); k++)
      {
        cout << " ";
      }
      cout << "*";
    }
    cout << endl;
  }

  return 0;
}

/*
 *
 * *
 *   *
 *     *
 *******
 */
