parent(ahmed, ali).
parent(yosef, ss).
parent(arafa, ahmed).
parent(arafa, yosef).

gp(X, Y) :- parent(X, Z), parent(Z, Y).

same_gp(X, Y) :- gp(Z, X), gp(Z, Y).