import time
import random

FILENAME = "randNum-service.txt"

def clear(f):
    f.truncate(0)
    f.seek(0)

def generate_randNum():
    while True:
        time.sleep(.5)

        f = open(FILENAME, "r+")
        if f.read() == "run":
            clear(f)
            randomNum = str(random.randint(0,12))
            f.write(randomNum)        
        f.close()

if __name__ == "__main__":
    generate_randNum()