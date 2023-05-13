import random

def chooseName(names, para):
    random_name = random.choice(names)
    para.innerText = random_name