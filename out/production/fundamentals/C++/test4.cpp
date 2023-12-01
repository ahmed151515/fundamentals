#include <iostream>
using namespace std;
void a(int i)
{
  for (int j = 10; j > i; j--)
  {
    cout << " ";
  }
  for (int j = 0; j < 1; j++)
  {
    cout << "A";
  }
  if (i == 5)
    for (int j = 0; j < i + 4; j++)
    {
      cout << "A";
    }
  else
    for (int j = 0; j < i; j++)
    {
      if (j == i - 1)
        cout << " ";
      else
        cout << "  ";
    }
  for (int j = 0; j < 1; j++)
  {
    if (i != 0)
      cout << "A";
  }
}
void h(int i)
{
  if (i == 5)
    for (int j = 0; j < 12; j++)
      cout << "H";
  else
  {
    for (int j = 0; j < 1; j++)
    {
      cout << "H";
    }
    for (int j = 0; j < 10; j++)
    {
      cout << " ";
    }
    for (int j = 0; j < 1; j++)
    {
      cout << "H";
    }
  }
}
void m(int i)
{
  for (int j = 10; j > i; j--)
  {

    cout << " ";
  }
  for (int j = 0; j < 1; j++)
  {
    cout << "M";
  }
  for (int j = 0; j < i; j++)
  {
    if (j >= 5)
      break;
    if (j == i - 1)
      cout << " ";
    else
      cout << "  ";
  }
  for (int j = 0; j < 1; j++)
  {
    if (i == 0)
      continue;
    if (i > 5)
      break;
    cout << "M";
  }
  // -----------------
  for (int j = 5; j > i; j--)
  {
    if (i > 5)
      break;
    if (j == i + 1)
      cout << " ";
    else
      cout << "  ";
  }
  for (int j = 0; j < 1; j++)
  {
    if (i == 5)
      continue;
    if (i > 5)
      break;
    cout << "M";
  }
  // ---
  for (int j = 0; j < i; j++)
  {
    if (i > 5)
      break;

    if (j == i - 1)
      cout << " ";
    else
      cout << "  ";
  }
  for (int j = 0; j < i; j++)
  {
    if (i <= 5)
      break;
    if (j == i - 1)
      cout << " ";
    // continue;
    else
      cout << "  ";
  }
  for (int j = 0; j < 1; j++)
  {
    if (i == 0)
      continue;
    cout << "M";
  }
}
void e(int i)
{
  for (int j = 0; j < 1; j++)
  {
    cout << "E";
  }
  if (i == 0 || i == 5 || i == 9)
  {
    for (int j = 0; j < 10; j++)
      cout << "E";
  }
}
void d(int i)
{
  int x = 1, y = 1;

  if (i == 0 || i == 9)
    for (int j = 0; j < 7; j++)
      cout << "D";
  else
    for (int j = 0; j < 1; j++)
      cout << "D";
  for (int j = 0; j < i + x; j++)
  {
    if (i < 5 && !(i == 0))
      cout << " ";
    if (x < 5)
      x++;
  }
  for (int j = 0; j < 1; j++)
  {
    if (i < 5 && !(i == 0))
      cout << "D";
  }
  if (i == 5)
  {
    for (int j = 0; j < 9; j++)
    {
      cout << " ";
    }
    for (int j = 0; j < 1; j++)
    {
      cout << "D";
    }
  }
  for (int j = 10; j > i - y; j--)
  {
    if (i > 5 && !(i == 9))
      cout << " ";
    if (y < 5)
      y++;
  }
  for (int j = 0; j < 1; j++)
  {
    if (i > 5 && !(i == 10))
      cout << "D";
  }
}
int main()
{
/*
          A          H          H          M         M          EEEEEEEEEEE  DDDDDDD          
         A A         H          H         M M       M M         E            D      D         
        A   A        H          H        M   M     M   M        E            D       D        
       A     A       H          H       M     M   M     M       E            D        D       
      A       A      H          H      M       M M       M      E            D         D      
     AAAAAAAAAAA     HHHHHHHHHHHH     M         M         M     EEEEEEEEEEE  D         D     
    A           A    H          H    M                     M    E            D         D    
   A             A   H          H   M                       M   E            D        D   
  A               A  H          H  M                         M  E            D       D  
 A                 A H          H M                           M EEEEEEEEEEE  DDDDDDDD 
*/
  for (int i = 0; i < 10; i++)
  {
    // A
    a(i);

    // ----

    for (int j = 10; j > i; j--)
      cout << " ";
    // H
    h(i);

    // ----
    // M

    m(i);

    // ----

    for (int j = 10; j > i; j--)
      cout << " ";

    // E
    e(i);

    // ----

    if (i == 0 || i == 5 || i == 9)
    {
      for (int j = 0; j < 1; j++)
        cout << "  ";
    }
    else
      for (int j = 0; j < 6; j++)
      {
        cout << "  ";
      }
    // D
    d(i);

    // ----
    for (int j = 10; j > i; j--)
      cout << " ";
    cout << "\n";
  }

  cout << "\nfigure 1\n~~~~~~~~~~~~~~\n";
  /*
  DDDDDDD
  D      D
  D       D
  D        D
  D         D
  D         D
  D         D
  D        D
  D       D
  D      D
  DDDDDDD
    */
  for (int i = 0; i < 10; i++)
  {
    d(i);

    cout << "\n";
  }
  cout << "\nfigure 2\n~~~~~~~~~~~~~~\n";

  /*
EEEEEEEEEEE
E
E
E
E
EEEEEEEEEEE
E
E
E
EEEEEEEEEEE
  */
  for (int i = 0; i < 10; i++)
  {
    e(i);

    cout << "\n";
  }
  cout << "\nfigure 3\n~~~~~~~~~~~~~~\n";

  /*
          M         M
         M M       M M
        M   M     M   M
       M     M   M     M
      M       M M       M
     M         M         M
    M                     M
   M                       M
  M                         M
 M                           M

  */
  for (int i = 0; i < 10; i++)
  {

    m(i);
    cout << "\n";
  }
  cout << "\nfigure 4\n~~~~~~~~~~~~~~\n";

  /*
H          H
H          H
H          H
H          H
H          H
HHHHHHHHHHHH
H          H
H          H
H          H
H          H
H          H
  */
  for (int i = 0; i < 11; i++)
  {

    h(i);
    cout << "\n";
  }
  cout << "\nfigure 5\n~~~~~~~~~~~~~~\n";

  /*
          A
         A A
        A   A
       A     A
      A       A
     AAAAAAAAAAA
    A           A
   A             A
  A               A
 A                 A
  */
  for (int i = 0; i < 10; i++)
  {

    a(i);
    cout << "\n";
  }
  cout << "\nfigure 6\n~~~~~~~~~~~~~~\n";

  /*
X         X
 X       X
  X     X
   X   X
    XXX
    XXX
   X   X
  X     X
 X       X
X         X

  */
  for (int i = 0; i < 10; i++)
  {
    //    left
    for (int j = 0; j < i; j++)
    {
      if (i >= 5)
      {
        break;
      }
      cout << " ";
    }
    for (int j = 0; j < 1; j++)
    {
      if (i >= 5)
      {
        break;
      }
      cout << "X";
    }
    //    right
    for (int j = 5; j > i; j--)
    {
      if (i >= 5)
      {
        break;
      }
      if (i == 4)
        cout << "";
      else
      {
        if (j == i + 1)
          cout << " ";
        else
          cout << "  ";
      }
    }
    for (int j = 0; j < 1; j++)
    {
      if (i >= 5)
      {
        break;
      }
      if (i == 4)
        cout << "XX";
      else
        cout << "X";
    }
    //    left
    for (int j = 9; j > i; j--)
    {
      if (i < 5)
      {
        break;
      }
      cout << " ";
    }

    //    right

    for (int j = 0; j < 1; j++)
    {
      if (i < 5)
      {
        break;
      }
      cout << "X";
    }
    for (int j = 4; j < i; j++)
    {
      if (i < 5)
      {
        break;
      }
      if (i == 5)
        cout << "";
      else
      {
        if (j == i - 1)
          cout << " ";
        else
          cout << "  ";
      }
      // cout<<"  ";
    }
    for (int j = 0; j < 1; j++)
    {
      if (i < 5)
      {
        break;
      }
      if (i == 5)
        cout << "XX";
      else
        cout << "X";
      // cout<<"X";
    }
    cout << "\n";
  }
  cout << "\nfigure 7\n~~~~~~~~~~~~~~\n";

  /*
  2
  2 4
  2 4 6
  2 4 6 8
  */
  for (int i = 2; i < 11; i += 2)
  {
    for (int j = 2; j < i; j += 2)
    {

      cout << j << " ";
    }
    cout << "\n";
  }
  cout << "\nfigure 8\n~~~~~~~~~~~~~~\n";

  /*
-       *
-      * *
-     *   *
-    *     *
-   *       *
-  *         *
- *           *
-* * * * * * * *
   */
  cout << "       *\n";
  for (int i = 0; i != 6; i++)
  {
    for (int j = 6; j > i; j--)
    {
      cout << " ";
    }

    for (int j = 0; j < 1; j++)
    {

      cout << "*";
    }
    for (int j = 0; j <= i; j++)
    {
      if (j == i)
        cout << " ";
      else
        cout << "  ";
    }
    for (int j = 0; j < 1; j++)
    {
      cout << "*";
    }
    cout << "\n";
  }
  for (int j = 0; j < 8; j++)
    cout << "* ";
  cout << "\nfigure 9\n~~~~~~~~~~~~~~\n";
/*
          *
         ***
        *****
       *******
      *********
     ***********
    *************
   ***************
  *****************
 *******************
*/
  for (int i = 0; i < 10; i++)
  {
    for (int j = 10; j > i; j--)
    {
      cout << "-";
    }
    if (i == 0)
      cout << "*";
    else
      for (int j = 0; j < i; j++)
      {
        if(j==i-1)
        cout << "***";
      else
        cout << "**";
      }

    cout << "\n";
  }

  cout << "\nfigure 10\n~~~~~~~~~~~~~~\n";

  return 0;
}