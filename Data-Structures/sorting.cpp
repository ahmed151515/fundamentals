#include "main.h"

template <class t>
void print_arr(t arr[], int size);
template <class t>
void selection_sort(t arr[], int size)
{
    int min;

    for (int i = 0; i < size - 1; i++)
    {
        min = i;
        for (int j = i; j < size; j++)
        {
            if (arr[j] < arr[min])
            {
                min = j;
            }
        }
        swap(arr[i], arr[min]);
    }
}
template <class t>
void bubble_sort(t arr[], int size)
{
    bool flag = true;
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = 0; j < size - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
                flag = false;
            }
        }

        if (flag)
        {
            break;
        }
    }
}

template <class t>
void insertion_sort(t arr[], int size)
{
    int key;
    int j;

    for (int i = 1; i < size; i++)
    {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

template <class t>
void print_arr(t arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << "\n";
}

int main()
{
    char arr[] = {'d', 'b', 'c', 'a'};
    char arr2[] = {'d', 'b', 'c', 'a'};
    char arr3[] = {'d', 'b', 'c', 'a'};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "\n------selection-------\n\n";
    print_arr(arr, size);
    selection_sort(arr, size);
    print_arr(arr, size);
    cout << "\n------bubble-------\n\n";
    print_arr(arr2, size);
    bubble_sort(arr2, size);
    print_arr(arr2, size);
    cout << "\n------insertion-------\n\n";
    print_arr(arr3, size);
    insertion_sort(arr3, size);
    print_arr(arr3, size);
}