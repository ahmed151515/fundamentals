# #  هذا الملف فيه ملاحظات لكى لا انساها


# #  [is] & [not is] use to chak is it in the same place in memory
# x = [1, 2, 3]
# y = [1, 2, 3]
# print(id(x)) # memory address of x is 2554993655680
# print(id(y)) # memory address of y is 2554995091200
# print (x is y) # False
# x = 10
# y = 10
# print(id(x)) # memory address of x is 140706663425096
# print(id(y)) # memory address of y is 140706663425096
# print (x is y) # True
# ------------------------
# ASCII in python
# [1] use chr to convart ASCII to char
# print(chr(65)) # 'A'
# print(chr(10),end="") # '\n'
# print(chr(35)) # '#'
# print(chr(55)) # '7'
# [2] use ord to convart char to ASCII
# print(ord('A')) # 65
# print(ord('\n')) # 10
# print(ord('#')) # 35
# print(ord('7')) # 555
# ------------------------
# enumerate() ==> (index, value)
# x = [1,10,50,6]

# print(*enumerate(x))   (0, 1) (1, 10) (2, 50) (3, 6)
# for a,b in enumerate(x):

#   print(a)
#   print(b)
#   print("--")

