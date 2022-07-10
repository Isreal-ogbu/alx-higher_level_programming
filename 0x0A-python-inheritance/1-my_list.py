#!/usr/bin/python3
"""
This module implements a custom list object
"""

list = __import__('test/1-my_list.txt').list

class MyList(list):
    """Custom List
    """
    def print_sorted(self):
        """
        prints the list, but sorted (ascending sort)
        """
        print(sorted(self))
