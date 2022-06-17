#!/usr/bin/python3
def simple_delete(my_dict, key):
    try:
        del my_dict[key]
        return my_dict
    except:
        return my_dict
