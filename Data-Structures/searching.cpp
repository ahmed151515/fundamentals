#include "main.h"
#include "ctime"
int linear_search(int arr[], int size, int targt)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == targt)
        {
            return i;
        }
    }
    return -1;
}

int search(int arr[], int min, int max, int targt)
{
    if (min > max)
    {
        return -1;
    }
    int mid = (min + max) / 2;
    if (arr[mid] == targt)
    {
        return mid;
    }
    else if (arr[mid] < targt)
    {
        return search(arr, mid + 1, max, targt);
    }
    else if (arr[mid] > targt)
    {
        return search(arr, 0, mid - 1, targt);
    }
}

int binary_search(int arr[], int size, int targt)
{
    return search(arr, 0, size - 1, targt);
}

int binary_search_while(int arr[], int size, int targt)
{
    int mid, low = 0, high = size - 1;
    while (low <= high)
    {
        mid = low + (high - low) / 2;
        if (arr[mid] == targt)
        {
            return mid;
        }
        else if (arr[mid] < targt)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return -1;
}

int main()
{


    const int size = 100000;
    int a[size];
    for (int i = 0; i < size; i++)
    {
        if (i == 100)
        {
            continue;
        }
        a[i] = i;
    }
    time_t s = time(NULL);
    cout << linear_search(a, size, 101) << "\n";
    time_t e = time(NULL);
    cout << "time is " << (e - s) << "\n";
    s = time(NULL);
    cout << binary_search(a, size, 101) << "\n";
    e = time(NULL);
    cout << "time is " << (e - s) << "\n";
    s = time(NULL);
    cout << binary_search_while(a, size, 888880) << "\n";
    e = time(NULL);
    cout << "time is " << (e - s) << "\n";
    return 0;
}