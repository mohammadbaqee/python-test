const SECTION2_QUESTIONS = [
// ── MCQ 101–122 ──────────────────────────────────────────────────────────────
{id:101,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"easy",
question:"What is the output of:\nfor i in range(3):\n    print(i)",
options:["0 1 2","1 2 3","0 1 2 3","1 2"],
correct:[0],explanation:"range(3) generates 0, 1, 2."},

{id:102,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"easy",
question:"What is the output of:\nfor i in range(1, 6, 2):\n    print(i, end=' ')",
options:["1 3 5","1 2 3 4 5","1 6 2","2 4 6"],
correct:[0],explanation:"range(start=1, stop=6, step=2) gives 1, 3, 5."},

{id:103,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"easy",
question:"What is the output of:\nx = 10\nif x > 5:\n    print('A')\nelif x > 8:\n    print('B')\nelse:\n    print('C')",
options:["A","B","A B","C"],
correct:[0],explanation:"The first True condition wins. x > 5 is True, so 'A' prints. elif is never checked."},

{id:104,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"easy",
question:"What does the 'break' statement do in a loop?",
options:["Skips current iteration","Exits the loop","Pauses the loop","Restarts the loop"],
correct:[1],explanation:"break immediately exits the entire loop."},

{id:105,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"easy",
question:"What does the 'continue' statement do in a loop?",
options:["Exits the loop","Does nothing","Skips rest of current iteration and goes to next","Restarts loop from beginning"],
correct:[2],explanation:"continue skips the remaining code in the current iteration and moves to the next."},

{id:106,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfor i in range(5):\n    if i == 3:\n        break\nprint(i)",
options:["3","4","5","Error"],
correct:[0],explanation:"Loop breaks when i==3. After the loop, i retains its last value: 3."},

{id:107,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfor i in range(5):\n    if i == 3:\n        continue\n    print(i, end=' ')",
options:["0 1 2 3 4","0 1 2 4","0 1 2","1 2 4"],
correct:[1],explanation:"continue skips i==3. Output: 0 1 2 4."},

{id:108,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What does 'pass' do in Python?",
options:["Exits function","Skips to next loop iteration","Does nothing — placeholder","Raises an exception"],
correct:[2],explanation:"pass is a null operation — it's a placeholder so Python doesn't get a syntax error for empty blocks."},

{id:109,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\ni = 0\nwhile i < 3:\n    print(i, end=' ')\n    i += 1",
options:["0 1 2","0 1 2 3","1 2 3","0 1"],
correct:[0],explanation:"While loop runs while i < 3: prints 0, 1, 2. Then i=3, condition fails."},

{id:110,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfor i in range(3):\n    pass\nprint(i)",
options:["0","1","2","Error"],
correct:[2],explanation:"After loop completes, i holds the last value from range(3) which is 2."},

{id:111,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfor i in range(3):\n    for j in range(3):\n        if i == j:\n            print(i, end=' ')",
options:["0 1 2","0 0 1 1 2 2","1 2 3","0 1 2 0 1 2"],
correct:[0],explanation:"i==j only when i=0,j=0; i=1,j=1; i=2,j=2. Prints 0 1 2."},

{id:112,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfor i in range(4):\n    print(i)\nelse:\n    print('Done')",
options:["0 1 2 3 Done","0 1 2 3","Done","Error"],
correct:[0],explanation:"The for-else clause runs after the loop completes normally (no break). Prints 0,1,2,3 then Done."},

{id:113,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfor i in range(4):\n    if i == 2:\n        break\nelse:\n    print('Done')",
options:["Done","0 1 Done","(nothing)","0 1"],
correct:[2],explanation:"break prevents the else clause from running. Nothing is printed by the else."},

{id:114,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(5 > 3 and 2 < 4)",
options:["True","False","5","Error"],
correct:[0],explanation:"5>3 is True, 2<4 is True. True and True = True."},

{id:115,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(5 > 3 or 10 < 4)",
options:["True","False","5","Error"],
correct:[0],explanation:"5>3 is True. With 'or', if first is True, result is True regardless of second."},

{id:116,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(not True)",
options:["True","False","None","Error"],
correct:[1],explanation:"not True = False."},

{id:117,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nx = 5\nresult = 'Even' if x % 2 == 0 else 'Odd'\nprint(result)",
options:["Even","Odd","True","5"],
correct:[1],explanation:"Ternary operator: x%2==0 is False, so result = 'Odd'."},

{id:118,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"easy",
question:"Which of the following is the correct syntax for a while loop?",
options:["while x > 0 {","while x > 0:","while (x > 0)","loop while x > 0:"],
correct:[1],explanation:"Python uses 'while condition:' with a colon and indented body."},

{id:119,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(1 < 2 < 3)",
options:["True","False","Error","1"],
correct:[0],explanation:"Python supports chained comparisons. 1 < 2 < 3 means (1<2) and (2<3) = True and True = True."},

{id:120,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(1 < 2 > 3)",
options:["True","False","Error","None"],
correct:[1],explanation:"1<2 is True, 2>3 is False. True and False = False."},

{id:121,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"How many times does the following loop run?\ni = 1\nwhile i < 100:\n    i *= 2",
options:["7","6","100","8"],
correct:[0],explanation:"i: 1→2→4→8→16→32→64→128. Loop runs 7 times (i doubles each time until ≥100)."},

{id:122,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfor i in 'abc':\n    print(i, end='-')",
options:["abc-","a-b-c-","a b c","Error"],
correct:[1],explanation:"Strings are iterable. Iterating gives individual characters: a, b, c, each followed by '-'."},

// ── MSQ 123–132 ──────────────────────────────────────────────────────────────
{id:123,section:"Control Flow",sectionId:2,type:"msq",difficulty:"easy",
question:"Which of the following loop types exist in Python? (Select all that apply)",
options:["for","while","do-while","foreach"],
correct:[0,1],explanation:"Python has 'for' and 'while' loops. There is no do-while or foreach in Python."},

{id:124,section:"Control Flow",sectionId:2,type:"msq",difficulty:"easy",
question:"Which statements can exit a loop early in Python? (Select all that apply)",
options:["break","continue","exit()","return"],
correct:[0,3],explanation:"break exits the loop. return exits both function and loop. continue skips to next iteration. exit() terminates the program (not just the loop)."},

{id:125,section:"Control Flow",sectionId:2,type:"msq",difficulty:"medium",
question:"What can 'range()' accept as arguments? (Select all that apply)",
options:["range(5)","range(1, 10)","range(0, 10, 2)","range(1.5, 5)"],
correct:[0,1,2],explanation:"range() takes integers only. range(1.5, 5) raises TypeError because 1.5 is a float."},

{id:126,section:"Control Flow",sectionId:2,type:"msq",difficulty:"easy",
question:"Which of the following are valid conditional keywords in Python? (Select all that apply)",
options:["if","elif","else if","else"],
correct:[0,1,3],explanation:"Python uses 'elif' (not 'else if'). if, elif, and else are valid."},

{id:127,section:"Control Flow",sectionId:2,type:"msq",difficulty:"medium",
question:"Which of the following are truthy values in Python? (Select all that apply)",
options:["1","'hello'","[0]","{}"],
correct:[0,1,2],explanation:"1 is truthy, 'hello' is truthy, [0] is truthy (non-empty list). {} is an empty dict — falsy."},

{id:128,section:"Control Flow",sectionId:2,type:"msq",difficulty:"medium",
question:"Which of the following are valid ways to use 'else' in Python? (Select all that apply)",
options:["if-else","for-else","while-else","try-else"],
correct:[0,1,2,3],explanation:"All four are valid. for-else and while-else run the else block if no break occurred. try-else runs if no exception occurred."},

{id:129,section:"Control Flow",sectionId:2,type:"msq",difficulty:"easy",
question:"Which of the following are valid logical operators in Python? (Select all that apply)",
options:["and","or","not","&&"],
correct:[0,1,2],explanation:"Python uses 'and', 'or', 'not'. The C-style '&&' and '||' do not exist in Python."},

{id:130,section:"Control Flow",sectionId:2,type:"msq",difficulty:"medium",
question:"Which of the following are falsy in Python? (Select all that apply)",
options:["None","0","0.0","[]"],
correct:[0,1,2,3],explanation:"None, 0 (int), 0.0 (float), and [] (empty list) are all falsy."},

{id:131,section:"Control Flow",sectionId:2,type:"msq",difficulty:"medium",
question:"Which built-in functions can be used to iterate with index? (Select all that apply)",
options:["enumerate()","range(len())","zip()","index()"],
correct:[0,1],explanation:"enumerate() gives (index, value) pairs. range(len(lst)) gives indices. zip() pairs two iterables. index() is a list method, not for iteration."},

{id:132,section:"Control Flow",sectionId:2,type:"msq",difficulty:"medium",
question:"Which of the following will create an infinite loop? (Select all that apply)",
options:["while True: pass","while 1: break","for i in iter(int, 1): pass","while True: print(1)"],
correct:[0,2,3],explanation:"while True: pass is infinite. while 1: break breaks immediately so not infinite. iter(int,1) is infinite. while True: print(1) is infinite."},

// ── CODING 133–140 ───────────────────────────────────────────────────────────
{id:133,section:"Control Flow",sectionId:2,type:"coding",difficulty:"easy",
question:"Write a Python program to print all prime numbers between 1 and 50.",
starterCode:"# Write your solution here\n",
modelAnswer:"for num in range(2, 51):\n    is_prime = True\n    for i in range(2, int(num**0.5) + 1):\n        if num % i == 0:\n            is_prime = False\n            break\n    if is_prime:\n        print(num, end=' ')"},

{id:134,section:"Control Flow",sectionId:2,type:"coding",difficulty:"easy",
question:"Write a Python program to print the Fibonacci sequence up to 10 terms.",
starterCode:"# Write your solution here\n",
modelAnswer:"a, b = 0, 1\nfor _ in range(10):\n    print(a, end=' ')\n    a, b = b, a + b\n# Output: 0 1 1 2 3 5 8 13 21 34"},

{id:135,section:"Control Flow",sectionId:2,type:"coding",difficulty:"easy",
question:"Write a program to print the following pattern:\n*\n**\n***\n****\n*****",
starterCode:"# Write your solution here\n",
modelAnswer:"for i in range(1, 6):\n    print('*' * i)"},

{id:136,section:"Control Flow",sectionId:2,type:"coding",difficulty:"medium",
question:"Write a program to find the factorial of n = 6 using a loop (not recursion).",
starterCode:"n = 6\n# Write your solution here\n",
modelAnswer:"n = 6\nresult = 1\nfor i in range(1, n + 1):\n    result *= i\nprint(f'{n}! = {result}')  # 6! = 720"},

{id:137,section:"Control Flow",sectionId:2,type:"coding",difficulty:"easy",
question:"Write a program to reverse a number. Example: n = 12345, output: 54321.",
starterCode:"n = 12345\n# Write your solution here\n",
modelAnswer:"n = 12345\nreversed_n = int(str(n)[::-1])\nprint(reversed_n)  # 54321"},

{id:138,section:"Control Flow",sectionId:2,type:"coding",difficulty:"medium",
question:"Write a program using a while loop to find the sum of digits of n = 9876.",
starterCode:"n = 9876\n# Write your solution here\n",
modelAnswer:"n = 9876\ntotal = 0\nwhile n > 0:\n    total += n % 10\n    n //= 10\nprint(f'Sum of digits: {total}')  # 30"},

{id:139,section:"Control Flow",sectionId:2,type:"coding",difficulty:"medium",
question:"Write a program to print the multiplication table of 7 (from 1 to 10).",
starterCode:"# Write your solution here\n",
modelAnswer:"for i in range(1, 11):\n    print(f'7 x {i} = {7*i}')"},

{id:140,section:"Control Flow",sectionId:2,type:"coding",difficulty:"medium",
question:"Write a program to count how many numbers between 1 and 100 are divisible by both 3 and 5.",
starterCode:"# Write your solution here\n",
modelAnswer:"count = 0\nfor i in range(1, 101):\n    if i % 3 == 0 and i % 5 == 0:\n        count += 1\nprint(f'Count: {count}')  # 6 (15, 30, 45, 60, 75, 90)"},

// ── SHORT ANSWER 141–150 ─────────────────────────────────────────────────────
{id:141,section:"Control Flow",sectionId:2,type:"short",difficulty:"easy",
question:"What is the difference between 'break' and 'continue' in Python loops?",
modelAnswer:"break: immediately exits the entire loop — no more iterations happen.\ncontinue: skips the rest of the current iteration and jumps to the next one — the loop continues.\nExample:\nfor i in range(5):\n    if i == 3: break  # stops at 3, prints 0 1 2\n    print(i)\n\nfor i in range(5):\n    if i == 3: continue  # skips 3, prints 0 1 2 4\n    print(i)"},

{id:142,section:"Control Flow",sectionId:2,type:"short",difficulty:"easy",
question:"When would you use a 'while' loop instead of a 'for' loop?",
modelAnswer:"Use 'while' when the number of iterations is not known in advance — you loop until a condition becomes false.\nExamples: user input validation (loop until valid input), reading a file until EOF, game loop (until player loses).\nUse 'for' when iterating over a known sequence or a fixed number of times."},

{id:143,section:"Control Flow",sectionId:2,type:"short",difficulty:"easy",
question:"What is the purpose of the 'pass' statement in Python? Give a use case.",
modelAnswer:"pass is a null operation — it does nothing but satisfies Python's requirement for an indented block.\nUse cases:\n1. Empty class/function definition: def future_feature(): pass\n2. Placeholder in if-else: if condition: pass  # TODO\n3. Empty exception handler: except Exception: pass (suppress errors — use carefully)\nWithout pass, Python raises IndentationError for empty blocks."},

{id:144,section:"Control Flow",sectionId:2,type:"short",difficulty:"medium",
question:"What is the 'else' clause in a for/while loop? When does it run?",
modelAnswer:"The else clause in a for/while loop runs after the loop completes normally — i.e., without hitting a 'break'.\nIf break is executed, the else block is SKIPPED.\nUse case: searching for an item — if found, break; else: print('Not found').\nExample:\nfor i in range(5):\n    if i == 10: break\nelse:\n    print('Not found')  # runs because break never triggered"},

{id:145,section:"Control Flow",sectionId:2,type:"short",difficulty:"easy",
question:"What are the 3 parameters of range()? What does each do?",
modelAnswer:"range(start, stop, step)\n- start: where to begin (default 0, inclusive)\n- stop: where to stop (exclusive — not included)\n- step: how much to increment each time (default 1)\nExamples:\nrange(5)       → 0 1 2 3 4\nrange(2, 7)    → 2 3 4 5 6\nrange(0, 10, 2) → 0 2 4 6 8\nrange(5, 0, -1) → 5 4 3 2 1"},

{id:146,section:"Control Flow",sectionId:2,type:"short",difficulty:"easy",
question:"What is a ternary (conditional) expression in Python? Give an example.",
modelAnswer:"A ternary expression is a one-line if-else.\nSyntax: value_if_true if condition else value_if_false\nExample:\nx = 10\nresult = 'Even' if x % 2 == 0 else 'Odd'\nprint(result)  # Even\nIt's equivalent to:\nif x % 2 == 0:\n    result = 'Even'\nelse:\n    result = 'Odd'"},

{id:147,section:"Control Flow",sectionId:2,type:"short",difficulty:"medium",
question:"What does enumerate() do and why is it preferred over range(len())?",
modelAnswer:"enumerate(iterable) returns pairs of (index, value) while iterating.\nExample:\nfor i, val in enumerate(['a','b','c']):\n    print(i, val)  # 0 a, 1 b, 2 c\nPreferred over range(len()) because:\n- More readable and Pythonic\n- Avoids indexing bugs\n- Works with any iterable, not just indexable sequences\nrange(len(lst)) forces you to access lst[i] manually."},

{id:148,section:"Control Flow",sectionId:2,type:"short",difficulty:"medium",
question:"How is 'for' loop different from a 'while' loop? Which is more commonly used in Python?",
modelAnswer:"for loop: iterates over a sequence (list, range, string, etc.) — number of iterations is determined by the sequence length.\nwhile loop: repeats as long as a condition is True — number of iterations may be unknown.\nIn Python, 'for' is more commonly used because Python has rich iterables and the for loop is cleaner and less error-prone (no risk of forgetting to update the counter)."},

{id:149,section:"Control Flow",sectionId:2,type:"short",difficulty:"easy",
question:"What is an infinite loop? How do you avoid it?",
modelAnswer:"An infinite loop runs forever because the exit condition never becomes False.\nCommon cause: while True without break, or forgetting to update the loop variable.\nExample of bug: i = 0; while i < 5: print(i)  # forgot i += 1\nHow to avoid:\n1. Always ensure the condition can become False.\n2. Update the loop variable inside the loop.\n3. Use a break with a clear exit condition.\n4. Use for loops when the number of iterations is known."},

{id:150,section:"Control Flow",sectionId:2,type:"short",difficulty:"medium",
question:"What is the time complexity of a nested loop (e.g., two nested for loops each running n times)?",
modelAnswer:"O(n²) — quadratic time complexity.\nIf the outer loop runs n times and for each iteration the inner loop also runs n times, the total operations = n × n = n².\nExample:\nfor i in range(n):        # n iterations\n    for j in range(n):    # n iterations each\n        pass              # total: n² operations\nFor 3 nested loops: O(n³). This is important for placement tests — bubble sort and selection sort are O(n²) due to nested loops."},

{id:151,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nx = 10\nif x > 5:\n    if x > 8:\n        print('A')\n    else:\n        print('B')\nelse:\n    print('C')",
options:["A","B","C","A B"],
correct:[0],explanation:"x=10 > 5 → enters outer if. x=10 > 8 → enters inner if → prints 'A'."},

{id:152,section:"Control Flow",sectionId:2,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(5 if 5 > 3 else 10)",
options:["5","10","True","Error"],
correct:[0],explanation:"Ternary: condition 5>3 is True, so 5 is returned and printed."},

{id:153,section:"Control Flow",sectionId:2,type:"coding",difficulty:"medium",
question:"Write a program to print all numbers from 1 to 100 that are divisible by 3 but NOT by 5.",
starterCode:"# Write your solution here\n",
modelAnswer:"for i in range(1, 101):\n    if i % 3 == 0 and i % 5 != 0:\n        print(i, end=' ')\n# 3 6 9 12 18 21 24 27 33 ..."},

{id:154,section:"Control Flow",sectionId:2,type:"short",difficulty:"easy",
question:"What is the difference between 'for' loop and 'while' loop in terms of use case?",
modelAnswer:"for loop: used when you KNOW the number of iterations or are iterating over a sequence.\nwhile loop: used when iterations depend on a CONDITION being true — number unknown in advance.\nExamples:\nfor i in range(10): ...  # known count\nwhile user_input != 'quit': ...  # unknown count\nRule of thumb: prefer 'for' in Python — it's cleaner and less prone to infinite loop bugs."},
];
