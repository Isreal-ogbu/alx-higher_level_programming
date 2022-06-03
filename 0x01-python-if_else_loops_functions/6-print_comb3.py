#!/usr/bin/python3
list1 = []
for i in range(1, 100):
    y = str(i)
    reverse = y[::-1]
    if y not in list1 and reverse not in list1:
        list1.append(y)
for y in list1:
    print("{:0>2}".format(y), end=", " if y < "99" else "\n")
