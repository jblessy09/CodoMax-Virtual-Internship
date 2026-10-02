# Creating a list
numbers = [10, 20, 30, 40, 50]
print("Original list:", numbers)
print("First element:", numbers[0])
print("Last element:", numbers[-1])
numbers.append(60)
print("After append(60):", numbers)

numbers.remove(20)
print("After remove(20):", numbers)

print("First three elements:", numbers[:3])

print("\nSquares of each number:")
for n in numbers:
    print(f"{n}^2 = {n ** 2}")

squares = [n ** 2 for n in numbers]
print("\nSquares using list comprehension:", squares)
print("\nSorted list:", sorted(numbers, reverse=True))
print("\nLength:", len(numbers))
print("Sum:", sum(numbers))
print("Max:", max(numbers))
print("Min:", min(numbers))
