#!/usr/bin/python3
def update_dictionary(a_dictionary, key, value):
    for i in sorted(a_dictionary.keys()):
        if i == key:
            a_dictionary[i] = value
            print("{}: {}".format(i, a_dictionary[i]))
        else:
            print("{}: {}".format(i, a_dictionary[i]))

