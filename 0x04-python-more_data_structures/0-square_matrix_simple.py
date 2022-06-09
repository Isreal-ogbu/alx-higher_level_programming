#!/usr/bin/python3
def matrix_square(matrix=[[]]):
    square = []
    for val in matrix:
        square.append([valu**2 for valu in val])
    return square
