#include <cmath>
using namespace std;
bool amIWilson(unsigned n) 
{
  int fac = 1;

  for(int i = 1; i < n;i++)

  fac *= i;
  
  return (fac + 1) % (n * n) == 0  ;
}