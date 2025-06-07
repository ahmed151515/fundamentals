import matplotlib.pyplot as plt
plt.figure()
points = [(1, 1), (4,1), (4,4),(1,1)]
x,y = zip(*points)
plt.fill(x, y, color='black')
points = [(1, 1), (1,4), (4,4),(1,1)]
x,y = zip(*points)
plt.fill(x, y, color='green')
plt.gca().set_aspect('equal', adjustable='box')
plt.show()


