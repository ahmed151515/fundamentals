#include <iostream>
#include <array>
using namespace std;

void fill_array(char arr[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            arr[i][j] = ' ';
        }
    }
}

void print_arr(char arr[3][3])
{

    cout << "\t     0   1   2\n";
    for (int i = 0; i < 3; i++)
    {
        cout << "\t" << i << "   ";
        cout << " " << arr[i][0] << " | " << arr[i][1] << " | " << arr[i][2] << "\n";
        if (i < 2)
        {
            cout << "\t    ";
            for (int j = 0; j < 12; j++)
            {
                cout << "-";
            }
            cout << endl;
        }
    }
}

void add_obj(char arr[3][3], int x, int y, bool plyerX)
{
    if (plyerX)
        arr[x][y] = 'X';
    else
        arr[x][y] = 'O';
}
int main()
{
    char arr[3][3];
    int x, y;
    
    int i = 1;
    int i = 1;
    bool plyerX = true;

        fill_array(arr);
    do
    {
        cout<<"\n\n\n\n";
        print_arr(arr);
        cout << "enter position (x,y)\n";
        cin >> x >> y;
        add_obj(arr, x, y, plyerX);
        plyerX = i % 2 == 0;
        i++;
    } while (i < 10);
}
