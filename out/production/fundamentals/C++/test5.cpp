// // ten finction
#include <iostream>
#include <vector>
#include <string.h>
using namespace std;
int vector_count(vector<int> x, int num)
{
  int result = 0;
  for (int i = 0; i <= x.size(); i++)
  {
    if (num == x[i])
    {
      result++;
    }
  }
  return result;
}
int string_count(string x, char num)
{
  int result = 0;
  for (int i = 0; i <= x.size(); i++)
  {
    if (num == x[i])
    {
      result++;
    }
  }
  return result;
}
string strip(string x, char y = ' ')
{
  for (int i = 0; i < x.size(); i++)
  {
    if (y == x[i] && y != x[i + 1])
    {
      x.erase(x.begin(), x.begin() + i + 1);
      break;
    }
  }
  for (int i = x.size(); i >= 0; i--)
  {
    if (y == x[i] && y != x[i - 1])
    {
      x.erase(x.begin() + i, x.end());
      break;
    }
  }

  return x;
}
double averagr(vector<int> nums)
{
  double sum = 0;
  for (int i = 0; i < nums.size(); i++)
  {
    sum += nums.at(i);
  }
  return sum / nums.size();
}
int max(int x, int y)
{
  if (x > y)
    return x;
  else
    return y;
}
int min(int x, int y)
{
  if (x < y)
    return x;
  else
    return y;
}
int last_digt(int x)
{
  return x % 10;
}
bool is_loower(char x)
{
  return (x >= 'a' && x <= 'z');
}
bool is_uopper(char x)
{
  return (x >= 'A' && x <= 'Z');
}
string slicing(string x, int start = 0, int end = 0)
{
  string new_x = "";
  if (end != 0)
  {
    for (int i = start; i < end; i++)
    {
      new_x += x[i];
    }
  }
  else
    for (int i = start; i < x.size(); i++)
    {
      new_x += x[i];
    }
  return new_x;
}
int main()
{
  // vector_count
  cout << "\nvector_count:\n";

  vector<int> num = {1, 2, 54, 89, 7, 54};
  cout << vector_count(num, 54) << "\n";
  // string_count
  cout << "\nstring_count:\n";

  string msg = "hello, my name ahmed";
  cout << string_count(msg, 'h') << "\n";
  // strip
  cout << "\nstrip:\n";

  string h = "    my name ahmed     ";
  cout << strip(h) << "\n";
  // averagr
  cout << "\naveragr:\n";

  vector<int> g = {1, 2, 3, 4, 5, 6};
  cout << averagr(g) << "\n";
  // max
  cout << "\nmax:\n";

  cout << max(5, 10) << "\n";
  // min
  cout << "\nmin:\n";

  cout << min(5, 10) << "\n";
  // last_digt
  cout << "\nlast_digt:\n";

  cout << last_digt(611648) << "\n";
  // is_loower
  cout << "\nis_loower:\n";

  cout << is_loower('h') << "\n";
  cout << is_loower('H') << "\n";
  // is_uopper
  cout << "\nis_uopper:\n";

  cout << is_loower('K') << "\n";
  cout << is_loower('w') << "\n";
  // slicing
  cout << "\nslicing:\n";

  string p = "my name ahmed";
  cout << slicing(p, 8) << "\n";
}
