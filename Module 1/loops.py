#For Loop
print("Counting from 1 to 5:")
for i in range(1, 6):
    print(i)

fruits = ["apple", "banana", "cherry"]
print("\nFruits:")
for fruit in fruits:
    print("-", fruit)

#While Loop
print("\nCountdown:")
count = 5
while count > 0:
    print(count)
    count -= 1
print("Liftoff!")

print("\nOdd numbers from 1 to 10:")
for n in range(1, 11):
    if n % 2 == 0:
        continue
    print(n)
