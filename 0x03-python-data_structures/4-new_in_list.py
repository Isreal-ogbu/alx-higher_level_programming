#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    if not my_list:
        return
    my_list = my_list.copy()
    if 0<= idx < len(my_list):
        my_list[idx] = element
    return my_list
