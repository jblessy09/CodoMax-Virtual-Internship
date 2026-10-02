
print("=" * 50)
print("          STUDENT GRADE DASHBOARD")
print("=" * 50)

name = input("Enter Student Name : ")
marks = int(input("Enter Marks        : "))

if marks >= 90:
    grade = "A"
    performance = "Excellent"
elif marks >= 80:
    grade = "B"
    performance = "Very Good"
elif marks >= 70:
    grade = "C"
    performance = "Good"
elif marks >= 60:
    grade = "D"
    performance = "Average"
elif marks >= 50:
    grade = "E"
    performance = "Pass"
else:
    grade = "F"
    performance = "Fail"

print("\n" + "=" * 50)
print("              PERFORMANCE REPORT")
print("=" * 50)

print("Student Name  :", name)
print("Marks         :", marks, "/ 100")
print("Grade         :", grade)
print("Performance   :", performance)

if marks >= 50:
    print("Result        : PASS")
else:
    print("Result        : FAIL")

print("=" * 50)
print("             END OF REPORT")
print("=" * 50)

