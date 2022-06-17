#!/usr/bin/python3
def best_score(a_dictionary):
    try:
        y = max(a_dictionary.values())
        for k, v in a_dictionary.items():
            if v == y:
                return k
    except:
        return None
