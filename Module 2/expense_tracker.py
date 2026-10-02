print("=" * 50)
print("             PERSONAL EXPENSE TRACKER")
print("=" * 50)

name = input("Enter your name: ")
income = float(input("Enter your monthly income: "))

print("\nEnter your expenses")

food = float(input("Food & Dining       : "))
transport = float(input("Transportation     : "))
shopping = float(input("Shopping           : "))
entertainment = float(input("Entertainment      : "))
other = float(input("Other Expenses     : "))

total_expense = food + transport + shopping + entertainment + other
balance = income - total_expense

print("\n" + "=" * 50)
print("             EXPENSE SUMMARY")
print("=" * 50)

print("Name              :", name)
print("Monthly Income    : ₹", income)
print("-" * 50)
print("Food & Dining     : ₹", food)
print("Transportation    : ₹", transport)
print("Shopping          : ₹", shopping)
print("Entertainment     : ₹", entertainment)
print("Other Expenses    : ₹", other)
print("-" * 50)
print("Total Expenses    : ₹", total_expense)
print("Remaining Balance : ₹", balance)

if balance > 0:
    print("Status            : Within Budget")
elif balance == 0:
    print("Status            : Budget Fully Used")
else:
    print("Status            : Over Budget")

print("=" * 50)


