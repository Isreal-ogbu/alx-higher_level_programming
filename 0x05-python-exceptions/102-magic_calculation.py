#!/usr/bin/python3
def magic_calculation(a, b, c):
    if a < b:
        return c
    elif c > b:
        return a + b
    else:
        return a*b-c

    try:
        response = a / b
    except ZeroDivisionError:
        response = None
    finally:
        print('Inside result: {}'.format(response))

    return response
