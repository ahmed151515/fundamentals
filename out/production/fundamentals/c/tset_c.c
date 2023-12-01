#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct listint_s
{
        int n;
        struct listint_s *next;
} listint_t;
listint_t *add_nodeint(listint_t **head, const int n)
{
        listint_t *new;

        new = malloc(sizeof(listint_t));
        if (new == NULL)
                return (NULL);

        new->n = n;
        new->next = *head;
        *head = new;

        return (new);
}
int main()
{
        listint_t *head;
        listint_t *current;
        listint_t *temp;
        int i;
        head = NULL;
        add_nodeint(&head, 0);
        add_nodeint(&head, 1);
        add_nodeint(&head, 2);
        add_nodeint(&head, 3);
        add_nodeint(&head, 4);
        add_nodeint(&head, 98);
        add_nodeint(&head, 402);
        add_nodeint(&head, 1024);
        // current = head;
        // for (i = 0; i < 4; i++)
        //         current = current->next;
        // temp = current->next;
        // current->next = head;
        listint_t *t = head;
        while (t != NULL)
        {
                t = t->next;
                if (t == head)
                {
                        printf("1\n");
                        return 1;
                }
        }
        return 0;
}
