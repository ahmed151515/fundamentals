
#   #
#  ##
# ###
def Staircase(n):
    j = n
    for i in range(n):
        print(" "*j + "#"*i)
        j -= 1
        
Staircase(6)

