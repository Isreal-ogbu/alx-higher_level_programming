#!/usr/bin/python3
def square_matrix_simple(matrix=[[]]):
    square = []
    for val in matrix:
        square.append([valu**2 for valu in val])
    return square
