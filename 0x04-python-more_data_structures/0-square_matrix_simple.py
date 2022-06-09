#!/usr/bin/python3
def matrix_square(matrix=[[]]):
    for i in matrix:
        print(list(map(lambda x: x**2, i)), end=" ")
