def greet(name):
    return f"Hello, {name}! Welcome to Python."


def add(a, b):
    return a + b


def is_even(number):
    return number % 2 == 0


def average(numbers):
    return sum(numbers) / len(numbers)


if __name__ == "__main__":
    print(greet("Blessy"))
    print("3 + 5 =", add(3, 5))
    print("Is 10 even?", is_even(10))
    print("Is 7 even?", is_even(7))
    print("Average of [4, 8, 15, 16, 23]:", average([4, 8, 15, 16, 23]))
