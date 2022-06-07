#include "lists.h"

/**
 * is_palindrome - check if a linked list is a palindrome
 * @head: pointer to head of list
 * Return: 0 or 1
 */
int is_palindrome(listint_t **head)
{
   listint_t *temp;
   int j = 0;
   int a = 0;
   int array(9999);

   if (head == Null || *head == Null)
   return (1);

   temp = *head
   if (temp->next)
        return (1);
    while (temp)
    {
        array[j] = temp ->n;
        temp = temp ->next
        j++;
    }
    j--;
}
