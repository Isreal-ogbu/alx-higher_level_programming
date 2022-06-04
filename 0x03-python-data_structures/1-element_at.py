#!/usr/bin/python3
def element_at(my_list, idx):
    if len(my_list) > idx > 0:
        print("Element at index {:d} is {}".format(idx, my_list[idx]))

    elif idx > len(my_list):
        print("None")

    elif idx < 0:
        print("None")
