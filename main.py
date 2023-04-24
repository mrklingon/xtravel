dirAcc = 0
dir2 = 0
def findDir():
    global dirAcc, dir2
    dirAcc = input.acceleration(Dimension.X)
    dir2 = 0

def on_forever():
    pass
basic.forever(on_forever)
