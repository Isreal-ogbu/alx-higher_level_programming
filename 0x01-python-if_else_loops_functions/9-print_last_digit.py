#!/usr/bin/python3
def print_last_digit(number):
    tem = int(str(number)[-1])
    print("{}".format(tem), end="")
    return tem
