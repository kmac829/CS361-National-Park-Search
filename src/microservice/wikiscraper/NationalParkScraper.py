import wikipedia
import json


def get_park(park):
    """Calls the necessary functions to retrieve and save the cover image. Returns the file path to the cover image"""
    try:
        page = wikipedia.summary(park, sentences=6)
    except:
        return ""

    return page


if __name__ == '__main__':
    with open("data.json") as dataFile:
        data= json.load(dataFile)
        for state in data:
            for park in data[state]["parks"]:
                park["text"]=get_park(park["name"])
        with open("result.json","w+") as output:
            json.dump(data,output)
