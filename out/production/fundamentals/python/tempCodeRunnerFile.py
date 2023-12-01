    """solve task
    """
def add_integer(a, b=98):
    """add to number

    Args:
        a (int): number 1
        b (int, optional): number 2. Defaults to 98.
    """
    if type(a) != int or type(a) != float:
        raise TypeError("a must be an integer")
    if type(b) != int or type(b) != float:
        raise TypeError("b must be an integer")
    a = int(a)
    b = int(b)
    return a + b