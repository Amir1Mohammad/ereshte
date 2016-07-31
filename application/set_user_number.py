listme = []
flag = True

__author__ = "Amir Mohammad Mohammadi"
# create function
def nn():
    import random
    listme = []
    flag = True

    while flag:
        rand_int = random.randrange(8020911, 8999999)

        if rand_int in listme:
            None
        else:
            listme.append(rand_int)
            return rand_int
            flag = False
