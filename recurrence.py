def recur(code):
    print(code)
    if code > 0:
        code -= 1
        recur(code)

recur(3)

