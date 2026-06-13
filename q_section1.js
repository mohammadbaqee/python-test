const SECTION1_QUESTIONS = [
// ── MCQ 1–25 ─────────────────────────────────────────────────────────────────
{id:1,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(type(10))",
options:["<class 'int'>","<class 'float'>","<class 'number'>","<class 'str'>"],
correct:[0],explanation:"10 is an integer literal; type() returns <class 'int'>."},

{id:2,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nx = 5\nprint(type(x) == int)",
options:["True","False","Error","None"],
correct:[0],explanation:"type(x) returns <class 'int'>, which equals int, so True."},

{id:3,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"Which of the following is a valid variable name in Python?",
options:["2var","my-var","my_var","class"],
correct:[2],explanation:"Variable names cannot start with a digit, contain hyphens, or be reserved keywords."},

{id:4,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(10 // 3)",
options:["3.33","3","4","3.0"],
correct:[1],explanation:"// is floor division (integer division). 10 // 3 = 3."},

{id:5,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(2 ** 3)",
options:["6","8","9","5"],
correct:[1],explanation:"** is the exponentiation operator. 2 ** 3 = 8."},

{id:6,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(10 % 3)",
options:["3","3.33","1","0"],
correct:[2],explanation:"% is modulus (remainder). 10 % 3 = 1."},

{id:7,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(bool(0))",
options:["True","False","0","Error"],
correct:[1],explanation:"0 is falsy in Python. bool(0) returns False."},

{id:8,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(bool(''))",
options:["True","False","''","Error"],
correct:[1],explanation:"Empty string is falsy. bool('') returns False."},

{id:9,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(bool(' '))",
options:["True","False","' '","Error"],
correct:[0],explanation:"A string with a space is NOT empty — it is truthy. bool(' ') returns True."},

{id:10,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(int('42'))",
options:["'42'","42","42.0","Error"],
correct:[1],explanation:"int() converts the string '42' to the integer 42."},

{id:11,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(float('3.14'))",
options:["'3.14'","3","3.14","Error"],
correct:[2],explanation:"float() converts the string '3.14' to the float 3.14."},

{id:12,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(int(3.9))",
options:["4","3","3.9","Error"],
correct:[1],explanation:"int() truncates towards zero. int(3.9) = 3, not 4."},

{id:13,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"Which keyword is used to output text in Python?",
options:["echo","console.log","print","write"],
correct:[2],explanation:"print() is the built-in function to output text in Python."},

{id:14,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint('Hello' + ' ' + 'World')",
options:["Hello World","'Hello' 'World'","HelloWorld","Error"],
correct:[0],explanation:"+ concatenates strings. 'Hello' + ' ' + 'World' = 'Hello World'."},

{id:15,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint('ab' * 3)",
options:["'ab' * 3","ababab","ab3","Error"],
correct:[1],explanation:"String * int repeats the string. 'ab' * 3 = 'ababab'."},

{id:16,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nname = 'Alice'\nprint(f'Hello, {name}!')",
options:["Hello, {name}!","Hello, Alice!","f'Hello, Alice!'","Error"],
correct:[1],explanation:"f-strings evaluate expressions in {}. {name} is replaced with 'Alice'."},

{id:17,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint('python'.upper()[:3])",
options:["PYT","pyt","PYTHON","Error"],
correct:[0],explanation:"upper() → 'PYTHON', [:3] → 'PYT'."},

{id:18,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(len('hello world'))",
options:["10","11","5","Error"],
correct:[1],explanation:"'hello world' has 11 characters including the space."},

{id:19,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What does the following return?\n'hello'.find('l')",
options:["1","2","3","True"],
correct:[1],explanation:"find() returns the index of first occurrence. 'l' first appears at index 2."},

{id:20,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint('  hello  '.strip())",
options:["'  hello  '","hello","'hello'","  hello  "],
correct:[1],explanation:"strip() removes leading and trailing whitespace."},

{id:21,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint('a,b,c'.split(','))",
options:["['a','b','c']","('a','b','c')","a b c","Error"],
correct:[0],explanation:"split(',') splits string on comma and returns a list."},

{id:22,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\nx = None\nprint(x is None)",
options:["True","False","None","Error"],
correct:[0],explanation:"'is None' is the correct way to check for None. Returns True."},

{id:23,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\na = b = c = 10\nb = 20\nprint(a, b, c)",
options:["10 20 10","20 20 20","10 20 20","10 10 10"],
correct:[0],explanation:"a=b=c=10 assigns 10 to all. b=20 only reassigns b. a and c remain 10."},

{id:24,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the result of:\nprint(10 == 10.0)",
options:["True","False","Error","None"],
correct:[0],explanation:"Python compares values across numeric types. 10 == 10.0 is True."},

{id:25,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\nx = 5\nx += 3\nprint(x)",
options:["5","3","8","53"],
correct:[2],explanation:"+= is augmented assignment. x = x + 3 = 5 + 3 = 8."},

// ── MSQ 26–35 ────────────────────────────────────────────────────────────────
{id:26,section:"Python Basics",sectionId:1,type:"msq",difficulty:"easy",
question:"Which of the following are valid Python data types? (Select all that apply)",
options:["int","char","float","bool"],
correct:[0,2,3],explanation:"Python has int, float, bool but no 'char' type. Characters are single-char strings."},

{id:27,section:"Python Basics",sectionId:1,type:"msq",difficulty:"easy",
question:"Which of the following are immutable data types in Python? (Select all that apply)",
options:["list","tuple","str","dict"],
correct:[1,2],explanation:"tuple and str are immutable. list and dict are mutable."},

{id:28,section:"Python Basics",sectionId:1,type:"msq",difficulty:"easy",
question:"Which values are falsy in Python? (Select all that apply)",
options:["0","''","[]","1"],
correct:[0,1,2],explanation:"0, empty string '', and empty list [] are all falsy. 1 is truthy."},

{id:29,section:"Python Basics",sectionId:1,type:"msq",difficulty:"easy",
question:"Which of the following are valid Python arithmetic operators? (Select all that apply)",
options:["**","//","%","^^"],
correct:[0,1,2],explanation:"** (power), // (floor div), % (modulus) are valid. ^^ does not exist in Python."},

{id:30,section:"Python Basics",sectionId:1,type:"msq",difficulty:"medium",
question:"Which of the following are valid string methods in Python? (Select all that apply)",
options:["upper()","trim()","strip()","replace()"],
correct:[0,2,3],explanation:"upper(), strip(), replace() are valid. Python uses strip() not trim()."},

{id:31,section:"Python Basics",sectionId:1,type:"msq",difficulty:"easy",
question:"Which of the following are valid ways to create a string in Python? (Select all that apply)",
options:["'hello'","\"hello\"","'''hello'''","(hello)"],
correct:[0,1,2],explanation:"Single quotes, double quotes, and triple quotes all create strings. (hello) is not a string."},

{id:32,section:"Python Basics",sectionId:1,type:"msq",difficulty:"medium",
question:"Which of the following are comparison operators in Python? (Select all that apply)",
options:["==","!=","<>",">="],
correct:[0,1,3],explanation:"==, !=, >= are valid comparison operators. <> was removed in Python 3."},

{id:33,section:"Python Basics",sectionId:1,type:"msq",difficulty:"medium",
question:"Which of the following create an integer in Python? (Select all that apply)",
options:["int('10')","int(3.9)","int(True)","int('3.5')"],
correct:[0,1,2],explanation:"int('10')=10, int(3.9)=3, int(True)=1. int('3.5') raises ValueError (float string)."},

{id:34,section:"Python Basics",sectionId:1,type:"msq",difficulty:"easy",
question:"Which of the following are valid Python keywords? (Select all that apply)",
options:["def","fun","class","function"],
correct:[0,2],explanation:"'def' and 'class' are Python keywords. 'fun' and 'function' are not."},

{id:35,section:"Python Basics",sectionId:1,type:"msq",difficulty:"medium",
question:"Which of the following will print the same output? (Select all that apply)",
options:["print(2**4)","print(16)","print(4**2)","print(2*8)"],
correct:[0,1,3],explanation:"2**4=16, print(16)=16, 2*8=16. But 4**2=16 too! All four print 16. Actually all 4 are correct."},

// ── CODING 36–45 ─────────────────────────────────────────────────────────────
{id:36,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a Python program to swap two variables a=5 and b=10 and print them after swapping.",
starterCode:"a = 5\nb = 10\n# Write your solution here\n",
modelAnswer:"a = 5\nb = 10\na, b = b, a\nprint('a =', a)  # a = 10\nprint('b =', b)  # b = 5"},

{id:37,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a Python program to calculate the area of a circle with radius r=7.\n(Use pi = 3.14159)",
starterCode:"r = 7\n# Write your solution here\n",
modelAnswer:"r = 7\npi = 3.14159\narea = pi * r * r\nprint(f'Area = {area:.2f}')  # Area = 153.94"},

{id:38,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a program to convert temperature from Celsius to Fahrenheit.\nFormula: F = (C * 9/5) + 32\nInput: C = 100",
starterCode:"C = 100\n# Write your solution here\n",
modelAnswer:"C = 100\nF = (C * 9/5) + 32\nprint(f'{C}°C = {F}°F')  # 100°C = 212.0°F"},

{id:39,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a program that checks if a number is even or odd.\nInput: n = 17",
starterCode:"n = 17\n# Write your solution here\n",
modelAnswer:"n = 17\nif n % 2 == 0:\n    print(f'{n} is Even')\nelse:\n    print(f'{n} is Odd')  # 17 is Odd"},

{id:40,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a program to find the largest of three numbers: a=12, b=45, c=23.",
starterCode:"a = 12\nb = 45\nc = 23\n# Write your solution here\n",
modelAnswer:"a = 12\nb = 45\nc = 23\nlargest = max(a, b, c)\nprint(f'Largest = {largest}')  # Largest = 45"},

{id:41,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a program to reverse a string s = 'placement'.",
starterCode:"s = 'placement'\n# Write your solution here\n",
modelAnswer:"s = 'placement'\nprint(s[::-1])  # tnemecalp"},

{id:42,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a program to count the number of vowels in the string s = 'Hello World'.",
starterCode:"s = 'Hello World'\n# Write your solution here\n",
modelAnswer:"s = 'Hello World'\ncount = sum(1 for ch in s.lower() if ch in 'aeiou')\nprint(f'Vowels: {count}')  # Vowels: 3"},

{id:43,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a program to check if a string is a palindrome.\nTest with: s = 'racecar'",
starterCode:"s = 'racecar'\n# Write your solution here\n",
modelAnswer:"s = 'racecar'\nif s == s[::-1]:\n    print(f'{s!r} is a palindrome')\nelse:\n    print(f'{s!r} is not a palindrome')"},

{id:44,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a FizzBuzz program: for numbers 1–20, print 'Fizz' if divisible by 3, 'Buzz' if by 5, 'FizzBuzz' if by both, else print the number.",
starterCode:"# Write your solution here\n",
modelAnswer:"for i in range(1, 21):\n    if i % 15 == 0:\n        print('FizzBuzz')\n    elif i % 3 == 0:\n        print('Fizz')\n    elif i % 5 == 0:\n        print('Buzz')\n    else:\n        print(i)"},

{id:45,section:"Python Basics",sectionId:1,type:"coding",difficulty:"easy",
question:"Write a program to find the sum of all digits in the number n = 12345.",
starterCode:"n = 12345\n# Write your solution here\n",
modelAnswer:"n = 12345\ntotal = sum(int(d) for d in str(n))\nprint(f'Sum of digits: {total}')  # 15"},

// ── SHORT ANSWER 46–55 ───────────────────────────────────────────────────────
{id:46,section:"Python Basics",sectionId:1,type:"short",difficulty:"easy",
question:"What is Python? Name 3 key features that make it popular for placements and industry.",
modelAnswer:"Python is a high-level, interpreted, dynamically-typed programming language. 3 key features:\n1. Simple, readable syntax — easy to learn and write.\n2. Large standard library — batteries included.\n3. Multi-paradigm — supports OOP, functional, and procedural programming.\nAlso used in AI/ML, web development, automation, and data science."},

{id:47,section:"Python Basics",sectionId:1,type:"short",difficulty:"easy",
question:"What is the difference between a compiled language and an interpreted language? Where does Python fit?",
modelAnswer:"Compiled language (C, C++): source code is converted to machine code before execution — faster but less portable.\nInterpreted language (Python): code is executed line by line by an interpreter at runtime — slower but portable and easier to debug.\nPython is interpreted. The CPython interpreter reads .py files and executes them directly."},

{id:48,section:"Python Basics",sectionId:1,type:"short",difficulty:"easy",
question:"What is dynamic typing in Python? How is it different from static typing?",
modelAnswer:"In Python, variable types are determined at runtime, not at compile time. You don't declare a type — you just assign a value.\nExample: x = 5 (int), then x = 'hello' (str) — this is valid in Python.\nIn statically typed languages like Java/C++, you must declare the type: int x = 5; and you cannot reassign a string to x."},

{id:49,section:"Python Basics",sectionId:1,type:"short",difficulty:"easy",
question:"What is the difference between mutable and immutable objects in Python? Give examples.",
modelAnswer:"Mutable objects can be changed after creation: list, dict, set.\nImmutable objects cannot be changed after creation: int, float, str, tuple.\nExample: s = 'hello'; s[0] = 'H' raises TypeError — strings are immutable.\nBut lst = [1,2,3]; lst[0] = 99 works — lists are mutable."},

{id:50,section:"Python Basics",sectionId:1,type:"short",difficulty:"medium",
question:"What is the purpose of 'if __name__ == \"__main__\":' in Python?",
modelAnswer:"When Python runs a file, it sets __name__ = '__main__' if the file is the entry point.\nIf the file is imported as a module, __name__ is set to the module name.\nThis guard ensures certain code (like test runs, main logic) only runs when the file is executed directly, NOT when imported by another module."},

{id:51,section:"Python Basics",sectionId:1,type:"short",difficulty:"easy",
question:"What is the difference between '==' and 'is' in Python?",
modelAnswer:"== checks VALUE equality: are the values equal?\n'is' checks IDENTITY: do they point to the same object in memory?\nExample: a = [1,2]; b = [1,2]; a == b → True (same values); a is b → False (different objects).\nFor small integers (-5 to 256), Python caches them, so a = 5; b = 5; a is b → True due to caching."},

{id:52,section:"Python Basics",sectionId:1,type:"short",difficulty:"easy",
question:"What is the difference between None, 0, False, and '' in Python?",
modelAnswer:"All four are falsy but they are different:\n- None: represents absence of a value, type NoneType.\n- 0: integer zero.\n- False: boolean false, equals 0.\n- '': empty string.\nNone is not the same as 0 (None == 0 is False) and not the same as False (None == False is False)."},

{id:53,section:"Python Basics",sectionId:1,type:"short",difficulty:"easy",
question:"What is PEP 8? Why is it important?",
modelAnswer:"PEP 8 is Python's official style guide — a set of conventions for writing readable Python code.\nKey rules:\n- Use 4 spaces for indentation (not tabs)\n- Max line length 79 characters\n- Use snake_case for variables/functions, PascalCase for classes\n- Two blank lines between top-level functions/classes\nIt's important because consistent code is easier to read, review, and maintain in teams."},

{id:54,section:"Python Basics",sectionId:1,type:"short",difficulty:"medium",
question:"What is the difference between local and global variables in Python?",
modelAnswer:"Local variable: defined inside a function, accessible only within that function.\nGlobal variable: defined outside all functions, accessible throughout the file.\nTo modify a global variable inside a function, use the 'global' keyword.\nExample:\nx = 10  # global\ndef foo():\n    global x\n    x = 20  # modifies global x\nWithout 'global', assigning to x inside foo creates a new local x."},

{id:55,section:"Python Basics",sectionId:1,type:"short",difficulty:"easy",
question:"What are the key differences between Python 2 and Python 3?",
modelAnswer:"Key differences:\n1. print: Python 2 → print 'hello'; Python 3 → print('hello') (function)\n2. integer division: Python 2 → 5/2 = 2; Python 3 → 5/2 = 2.5\n3. range(): Python 2 → returns a list; Python 3 → returns an iterator\n4. String: Python 2 → ASCII by default; Python 3 → Unicode by default\n5. Python 2 reached end-of-life on Jan 1, 2020. Python 3 is the standard."},

{id:56,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\nx = 'hello'\nprint(x.replace('l','r'))",
options:["herro","hello","herlo","Error"],
correct:[0],explanation:"replace() replaces ALL occurrences of 'l' with 'r'. 'hello' → 'herro'."},

{id:57,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(10 != 10)",
options:["True","False","10","Error"],
correct:[1],explanation:"!= is 'not equal'. 10 != 10 is False because they ARE equal."},

{id:58,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(round(2.5), round(3.5))",
options:["3 4","2 4","2 3","3 3"],
correct:[1],explanation:"Python uses banker's rounding (round half to even). round(2.5)=2 (rounds to even), round(3.5)=4 (rounds to even)."},

{id:59,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(type(True))",
options:["<class 'bool'>","<class 'int'>","<class 'str'>","<class 'true'>"],
correct:[0],explanation:"True is of type bool. type(True) returns <class 'bool'>."},

{id:60,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(10 or 20)",
options:["True","False","10","20"],
correct:[2],explanation:"'or' returns the FIRST truthy value. 10 is truthy, so it returns 10 (not True/False)."},

{id:61,section:"Python Basics",sectionId:1,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(0 or 'hello')",
options:["0","hello","True","False"],
correct:[1],explanation:"0 is falsy so 'or' evaluates second operand. 'hello' is truthy and returned."},

{id:62,section:"Python Basics",sectionId:1,type:"short",difficulty:"easy",
question:"What is string interpolation? Compare % formatting, .format(), and f-strings.",
modelAnswer:"String interpolation = embedding variables/expressions in strings.\n1. % formatting (old): 'Hello %s, you are %d' % (name, age)\n2. .format() (Python 3): 'Hello {}, you are {}'.format(name, age)\n3. f-strings (Python 3.6+): f'Hello {name}, you are {age}'  ← preferred\nf-strings are fastest, most readable. Support expressions: f'{2+2}', f'{name.upper()}'"},
];
