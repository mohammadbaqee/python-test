const SECTION10_QUESTIONS = [
// ═══════════════════════════════════════════════════════
// SECTION 10: INTERVIEW & PLACEMENT QUESTIONS
// (sectionId: 10, ids 801-870)
// ═══════════════════════════════════════════════════════

// ── TRICKY OUTPUT MCQ 801–828 ────────────────────────────────────────────────
{id:801,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
options:["[1,2,3]","[1,2,3,4]","[4]","Error"],
correct:[1],explanation:"y = x does NOT copy — both point to the SAME list object. Appending to y also changes x. This is a very common placement question."},

{id:802,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(0.1 + 0.2 == 0.3)",
options:["True","False","Error","None"],
correct:[1],explanation:"Floating point precision issue. 0.1+0.2 = 0.30000000000000004, NOT 0.3. Use round() or math.isclose() for float comparisons."},

{id:803,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\na = 256\nb = 256\nprint(a is b)",
options:["True","False","Error","Depends on Python version"],
correct:[0],explanation:"Python caches small integers from -5 to 256. Both a and b point to the SAME cached object, so 'is' returns True."},

{id:804,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"hard",
question:"What is the output of:\na = 257\nb = 257\nprint(a is b)",
options:["True","False","Error","None"],
correct:[1],explanation:"257 is outside Python's integer cache range (-5 to 256). Two separate objects are created, so 'is' returns False. Use == for value comparison."},

{id:805,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func(x=[]):\n    x.append(1)\n    return x\nprint(func())\nprint(func())\nprint(func())",
options:["[1]\n[1]\n[1]","[1]\n[1,1]\n[1,1,1]","Error","[]\n[]\n[]"],
correct:[1],explanation:"Mutable default argument bug — the list is shared across calls. First call: [1], second: [1,1], third: [1,1,1]."},

{id:806,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint([] == [])\nprint([] is [])",
options:["True True","True False","False True","False False"],
correct:[1],explanation:"[] == []: True (same values — both empty). [] is []: False (different objects in memory)."},

{id:807,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfor i in range(3):\n    pass\nprint(i)",
options:["Error — i is not defined","0","2","3"],
correct:[2],explanation:"Loop variable i is accessible after the loop. After range(3), last value of i is 2."},

{id:808,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(not not True)",
options:["True","False","not not True","Error"],
correct:[0],explanation:"not True = False, not False = True. Double negation returns the original."},

{id:809,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(1 < 2 < 3 < 4)",
options:["True","False","Error","1"],
correct:[0],explanation:"Python chained comparisons. Equivalent to (1<2) and (2<3) and (3<4) = True and True and True = True."},

{id:810,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(None == False)",
options:["True","False","None","Error"],
correct:[1],explanation:"None is NOT equal to False. None == False is False. None is only equal to None."},

{id:811,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(bool('False'))",
options:["False","True","Error","None"],
correct:[1],explanation:"'False' is a non-empty string — ALL non-empty strings are truthy. bool('False') = True."},

{id:812,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\na = b = c = []\na.append(1)\nprint(b)",
options:["[]","[1]","Error","None"],
correct:[1],explanation:"a = b = c = [] makes ALL THREE point to the SAME list object. Modifying a also changes b and c."},

{id:813,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(type(lambda: None))",
options:["<class 'lambda'>","<class 'function'>","<class 'NoneType'>","<class 'method'>"],
correct:[1],explanation:"Lambda functions have type <class 'function'>. There's no separate 'lambda' class."},

{id:814,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint('hello'[::-1])",
options:["hello","olleh","Error","h"],
correct:[1],explanation:"[::-1] reverses a string. 'hello' reversed = 'olleh'."},

{id:815,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint('ab' in 'abc')",
options:["True","False","Error","'ab'"],
correct:[0],explanation:"'in' checks for substring. 'ab' is a substring of 'abc' → True."},

{id:816,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(max('python'))",
options:["p","y","z","Error"],
correct:[1],explanation:"max() on a string returns character with highest ASCII value. 'y' > 't' > 'p' > 'o' > 'n' > 'h'. 'y' wins."},

{id:817,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(any([0, '', [], False, None]))",
options:["True","False","None","Error"],
correct:[1],explanation:"any() returns True if ANY element is truthy. All elements here (0, '', [], False, None) are falsy → False."},

{id:818,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nd = {1:'a', 1:'b'}\nprint(d)",
options:["{1:'a', 1:'b'}","{1:'b'}","{1:'a'}","Error"],
correct:[1],explanation:"Dictionary keys must be unique. The second 1:'b' overwrites 1:'a'. Result: {1: 'b'}."},

{id:819,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(sorted({3:1, 1:2, 2:3}))",
options:["[3,1,2]","[1,2,3]","[(1,2),(2,3),(3,1)]","Error"],
correct:[1],explanation:"sorted() on a dict sorts its KEYS. Returns [1, 2, 3]."},

{id:820,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint({1, 1, 2, 2, 3})",
options:["{1,1,2,2,3}","{1,2,3}","[1,2,3]","Error"],
correct:[1],explanation:"Sets automatically remove duplicates. {1,1,2,2,3} becomes {1,2,3}."},

{id:821,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nx = [1,2,3]\ny = x.copy()\ny.append(4)\nprint(x)",
options:["[1,2,3]","[1,2,3,4]","Error","None"],
correct:[0],explanation:".copy() creates a SHALLOW COPY — a new list. y and x are independent. x remains [1,2,3]."},

{id:822,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(list(range(5))[-1])",
options:["0","4","5","Error"],
correct:[1],explanation:"range(5) = 0,1,2,3,4. As list: [0,1,2,3,4]. [-1] = last element = 4."},

{id:823,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint('Python'[1:4])",
options:["Pyt","yth","ytho","Error"],
correct:[1],explanation:"Slicing [1:4]: indices 1,2,3 → 'y','t','h' → 'yth'."},

{id:824,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(isinstance(True, int))",
options:["True","False","Error","None"],
correct:[0],explanation:"bool is a subclass of int. True == 1. isinstance(True, int) = True."},

{id:825,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"hard",
question:"What is the output of:\nfuncs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint([f() for f in funcs])",
options:["[0,1,2]","[2,2,2]","[0,0,0]","Error"],
correct:[1],explanation:"Late binding closure bug! All lambdas capture the SAME variable i by reference. When called, i=2 (loop is done). All return 2."},

{id:826,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(2 ** 10)",
options:["20","1024","100","Error"],
correct:[1],explanation:"** is exponentiation. 2**10 = 2^10 = 1024."},

{id:827,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(5 // 2, 5 % 2, 5 / 2)",
options:["2 1 2","2 1 2.5","2.5 1 2","Error"],
correct:[1],explanation:"// floor div = 2, % modulus = 1, / true div = 2.5."},

{id:828,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(10 and 20)",
options:["True","10","20","False"],
correct:[2],explanation:"'and' returns the LAST truthy value (or first falsy). 10 is truthy, so evaluate and return 20."},

// ── PLACEMENT MSQ 829–842 ─────────────────────────────────────────────────────
{id:829,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"easy",
question:"Which of the following are immutable in Python? (Select all that apply)",
options:["int","list","tuple","str"],
correct:[0,2,3],explanation:"int, tuple, str are immutable — cannot be changed after creation. list is mutable."},

{id:830,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"easy",
question:"Which of the following are built-in Python functions? (Select all that apply)",
options:["len()","print()","range()","scanf()"],
correct:[0,1,2],explanation:"len(), print(), range() are built-in. scanf() is from C; Python uses input()."},

{id:831,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which are valid string methods that return a new string? (Select all that apply)",
options:["upper()","replace()","reverse()","strip()"],
correct:[0,1,3],explanation:"upper(), replace(), strip() return new strings. 'reverse()' doesn't exist for strings — use [::-1]."},

{id:832,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which of the following are hashable (can be dict keys)? (Select all that apply)",
options:["int","str","tuple","list"],
correct:[0,1,2],explanation:"int, str, and tuple are hashable (immutable). list is mutable and not hashable."},

{id:833,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"easy",
question:"Which Python features make it popular for data science? (Select all that apply)",
options:["Rich ecosystem (numpy, pandas, sklearn)","Easy syntax","Strong typing","Interactive notebooks (Jupyter)"],
correct:[0,1,3],explanation:"Python is popular for data science due to rich libraries, easy syntax, and Jupyter notebooks. Python is DYNAMICALLY typed, not strongly typed."},

{id:834,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which are valid ways to copy a list? (Select all that apply)",
options:["lst.copy()","list(lst)","lst[:]","lst = lst"],
correct:[0,1,2],explanation:"copy(), list(), and [:] all create shallow copies. lst = lst is just reassignment — same object, no copy."},

{id:835,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which are PEP 8 guidelines? (Select all that apply)",
options:["4 spaces for indentation","max 79 chars per line","snake_case for functions/variables","PascalCase for classes"],
correct:[0,1,2,3],explanation:"All four are PEP 8 conventions."},

{id:836,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which Python 3 features were NOT in Python 2? (Select all that apply)",
options:["print() as function","f-strings","type hints","yield from"],
correct:[0,1,2,3],explanation:"All four are Python 3 features. Python 2 had print statement, no f-strings, no type hints, no yield from."},

{id:837,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which of the following are shallow copy methods? (Select all that apply)",
options:["list.copy()","list[:]","list(lst)","copy.deepcopy()"],
correct:[0,1,2],explanation:"copy(), [:], and list() are shallow copies. copy.deepcopy() creates a deep (fully independent) copy."},

{id:838,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which exceptions inherit directly from Exception? (Select all that apply)",
options:["ValueError","TypeError","KeyboardInterrupt","RuntimeError"],
correct:[0,1,3],explanation:"ValueError, TypeError, RuntimeError inherit from Exception. KeyboardInterrupt inherits from BaseException directly."},

{id:839,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which are valid comprehension types in Python? (Select all that apply)",
options:["[x for x in lst]","{x for x in lst}","{k:v for k,v in d.items()}","(x for x in lst)"],
correct:[0,1,2,3],explanation:"All four. Note: (x for x in lst) is a GENERATOR EXPRESSION, not a tuple comprehension."},

{id:840,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"easy",
question:"Which operators are used for floor division and modulo? (Select all that apply)",
options:["// (floor division)","% (modulo)","** (exponent)","/ (true division)"],
correct:[0,1],explanation:"// is floor division, % is modulo. ** is exponent, / is true division."},

{id:841,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which of the following are true about Python's GIL? (Select all that apply)",
options:["GIL = Global Interpreter Lock","Prevents multiple threads from executing Python bytecode simultaneously","Affects CPU-bound multithreading","Can be bypassed with multiprocessing"],
correct:[0,1,2,3],explanation:"All four are true about the GIL. Use multiprocessing (not threading) to bypass GIL for CPU-bound tasks."},

{id:842,section:"Interview & Placement",sectionId:10,type:"msq",difficulty:"medium",
question:"Which are true about Python's memory management? (Select all that apply)",
options:["Uses reference counting","Has garbage collector for cycles","CPython manages memory automatically","Programmer must manually free memory"],
correct:[0,1,2],explanation:"Python uses reference counting + cyclic garbage collector. Memory is managed automatically. Programmers don't manually free memory (unlike C/C++)."},

// ── PLACEMENT CODING 843–856 ─────────────────────────────────────────────────
{id:843,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"easy",
question:"Reverse a string without using slicing [::-1].",
starterCode:"def reverse_string(s):\n    # Write your solution WITHOUT using [::-1]\n    pass\n\nprint(reverse_string('placement'))  # tnemecalp",
modelAnswer:"def reverse_string(s):\n    result = ''\n    for ch in s:\n        result = ch + result\n    return result\n\n# Alternative using a loop:\ndef reverse_string2(s):\n    chars = list(s)\n    left, right = 0, len(chars)-1\n    while left < right:\n        chars[left], chars[right] = chars[right], chars[left]\n        left += 1; right -= 1\n    return ''.join(chars)\n\nprint(reverse_string('placement'))  # tnemecalp"},

{id:844,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"easy",
question:"Check if two strings are anagrams of each other.\nExample: 'listen' and 'silent' are anagrams.",
starterCode:"def are_anagrams(s1, s2):\n    # Write your solution here\n    pass\n\nprint(are_anagrams('listen', 'silent'))  # True\nprint(are_anagrams('hello', 'world'))   # False",
modelAnswer:"def are_anagrams(s1, s2):\n    return sorted(s1.lower()) == sorted(s2.lower())\n\n# Alternative (faster for large strings):\nfrom collections import Counter\ndef are_anagrams2(s1, s2):\n    return Counter(s1.lower()) == Counter(s2.lower())\n\nprint(are_anagrams('listen', 'silent'))  # True\nprint(are_anagrams('hello', 'world'))    # False"},

{id:845,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Find the second largest element in a list without using sort().",
starterCode:"def second_largest(lst):\n    # Write your solution here\n    pass\n\nprint(second_largest([3,1,4,1,5,9,2,6]))  # Expected: 6",
modelAnswer:"def second_largest(lst):\n    first = second = float('-inf')\n    for num in lst:\n        if num > first:\n            second = first\n            first = num\n        elif num > second and num != first:\n            second = num\n    return second if second != float('-inf') else None\n\nprint(second_largest([3,1,4,1,5,9,2,6]))  # 6"},

{id:846,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"easy",
question:"Count the frequency of each character in a string (without Counter).",
starterCode:"def char_frequency(s):\n    # Write your solution here (do not use Counter)\n    pass\n\nprint(char_frequency('placement'))",
modelAnswer:"def char_frequency(s):\n    freq = {}\n    for ch in s:\n        freq[ch] = freq.get(ch, 0) + 1\n    return freq\n\nprint(char_frequency('placement'))\n# {'p':1,'l':1,'a':1,'c':1,'e':2,'m':1,'n':1,'t':1}"},

{id:847,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Find all duplicate elements in a list.",
starterCode:"def find_duplicates(lst):\n    # Write your solution here\n    pass\n\nprint(find_duplicates([1,2,3,2,4,3,5]))  # Expected: [2,3]",
modelAnswer:"def find_duplicates(lst):\n    seen = set()\n    duplicates = set()\n    for item in lst:\n        if item in seen:\n            duplicates.add(item)\n        else:\n            seen.add(item)\n    return list(duplicates)\n\nprint(find_duplicates([1,2,3,2,4,3,5]))  # [2,3]"},

{id:848,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Implement binary search on a sorted list.",
starterCode:"def binary_search(lst, target):\n    # Returns index if found, -1 if not\n    pass\n\nprint(binary_search([1,3,5,7,9,11], 7))  # Expected: 3\nprint(binary_search([1,3,5,7,9,11], 4))  # Expected: -1",
modelAnswer:"def binary_search(lst, target):\n    left, right = 0, len(lst) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if lst[mid] == target: return mid\n        elif lst[mid] < target: left = mid + 1\n        else: right = mid - 1\n    return -1\n\nprint(binary_search([1,3,5,7,9,11], 7))  # 3\nprint(binary_search([1,3,5,7,9,11], 4))  # -1"},

{id:849,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Implement bubble sort.",
starterCode:"def bubble_sort(lst):\n    # Sort in-place using bubble sort\n    pass\n\narr = [64, 34, 25, 12, 22, 11, 90]\nbubble_sort(arr)\nprint(arr)  # Expected: [11,12,22,25,34,64,90]",
modelAnswer:"def bubble_sort(lst):\n    n = len(lst)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if lst[j] > lst[j+1]:\n                lst[j], lst[j+1] = lst[j+1], lst[j]\n\narr = [64,34,25,12,22,11,90]\nbubble_sort(arr)\nprint(arr)  # [11,12,22,25,34,64,90]"},

{id:850,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Check if parentheses/brackets are balanced in a string.\nExample: '({[]})' → True, '({)}' → False",
starterCode:"def is_balanced(s):\n    # Write your solution here\n    pass\n\nprint(is_balanced('({[]})'))  # True\nprint(is_balanced('({)}'))    # False\nprint(is_balanced('((()'))    # False",
modelAnswer:"def is_balanced(s):\n    stack = []\n    matching = {')':'(', '}':'{', ']':'['}\n    for ch in s:\n        if ch in '({[':\n            stack.append(ch)\n        elif ch in ')}]':\n            if not stack or stack[-1] != matching[ch]:\n                return False\n            stack.pop()\n    return len(stack) == 0\n\nprint(is_balanced('({[]})'))  # True\nprint(is_balanced('({)}'))    # False"},

{id:851,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Find the longest common prefix among a list of strings.",
starterCode:"def longest_common_prefix(strs):\n    # Write your solution here\n    pass\n\nprint(longest_common_prefix(['flower','flow','flight']))  # 'fl'\nprint(longest_common_prefix(['dog','racecar','car']))     # ''",
modelAnswer:"def longest_common_prefix(strs):\n    if not strs: return ''\n    prefix = strs[0]\n    for s in strs[1:]:\n        while not s.startswith(prefix):\n            prefix = prefix[:-1]\n            if not prefix: return ''\n    return prefix\n\nprint(longest_common_prefix(['flower','flow','flight']))  # 'fl'\nprint(longest_common_prefix(['dog','racecar','car']))     # ''"},

{id:852,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Find the missing number in a list containing 1 to n with one number missing.",
starterCode:"def find_missing(lst, n):\n    # lst contains numbers 1 to n with one missing\n    pass\n\nprint(find_missing([1,2,4,5,6], 6))  # Expected: 3",
modelAnswer:"def find_missing(lst, n):\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(lst)\n    return expected_sum - actual_sum\n\nprint(find_missing([1,2,4,5,6], 6))  # 3"},

{id:853,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Rotate a list to the right by k positions.\nExample: [1,2,3,4,5] rotated by 2 → [4,5,1,2,3]",
starterCode:"def rotate(lst, k):\n    # Write your solution here\n    pass\n\nprint(rotate([1,2,3,4,5], 2))  # Expected: [4,5,1,2,3]",
modelAnswer:"def rotate(lst, k):\n    if not lst: return lst\n    k = k % len(lst)\n    return lst[-k:] + lst[:-k]\n\nprint(rotate([1,2,3,4,5], 2))  # [4,5,1,2,3]"},

{id:854,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"easy",
question:"Count the total number of words, sentences, and paragraphs in a string.",
starterCode:"def text_stats(text):\n    # Write your solution here\n    pass\n\ntext = 'Hello world. How are you? I am fine.\\n\\nThis is paragraph two.'\nprint(text_stats(text))",
modelAnswer:"def text_stats(text):\n    words = len(text.split())\n    sentences = text.count('.') + text.count('?') + text.count('!')\n    paragraphs = len([p for p in text.split('\\n\\n') if p.strip()])\n    return {'words': words, 'sentences': sentences, 'paragraphs': paragraphs}\n\ntext = 'Hello world. How are you? I am fine.\\n\\nThis is paragraph two.'\nprint(text_stats(text))"},

{id:855,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"hard",
question:"Implement a function to check if a string is a pangram (contains every letter of the alphabet).",
starterCode:"def is_pangram(s):\n    # Write your solution here\n    pass\n\nprint(is_pangram('The quick brown fox jumps over the lazy dog'))  # True\nprint(is_pangram('Hello World'))  # False",
modelAnswer:"def is_pangram(s):\n    return set('abcdefghijklmnopqrstuvwxyz').issubset(set(s.lower()))\n\n# Alternative:\ndef is_pangram2(s):\n    return len(set(s.lower()) & set('abcdefghijklmnopqrstuvwxyz')) == 26\n\nprint(is_pangram('The quick brown fox jumps over the lazy dog'))  # True\nprint(is_pangram('Hello World'))  # False"},

{id:856,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Convert a Roman numeral string to integer.\nExample: 'XIV' → 14, 'IX' → 9",
starterCode:"def roman_to_int(s):\n    # Write your solution here\n    pass\n\nprint(roman_to_int('XIV'))   # Expected: 14\nprint(roman_to_int('IX'))    # Expected: 9\nprint(roman_to_int('MCMXC'))  # Expected: 1990",
modelAnswer:"def roman_to_int(s):\n    values = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}\n    result = 0\n    for i in range(len(s)):\n        if i+1 < len(s) and values[s[i]] < values[s[i+1]]:\n            result -= values[s[i]]\n        else:\n            result += values[s[i]]\n    return result\n\nprint(roman_to_int('XIV'))    # 14\nprint(roman_to_int('IX'))     # 9\nprint(roman_to_int('MCMXC')) # 1990"},

// ── PLACEMENT SHORT ANSWERS 857–870 ──────────────────────────────────────────
{id:857,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"hard",
question:"What is the GIL (Global Interpreter Lock) in Python? Why does it exist?",
modelAnswer:"GIL (Global Interpreter Lock) is a mutex that allows only ONE Python thread to execute bytecode at a time, even on multi-core processors.\nWhy it exists: CPython's memory management (reference counting) is not thread-safe. The GIL protects internal data structures from race conditions.\nImpact:\n- Threading works well for I/O-bound tasks (GIL is released during I/O)\n- Threading does NOT speed up CPU-bound tasks (only one thread runs at a time)\n- Fix for CPU-bound: use multiprocessing (separate processes, each with own GIL)"},

{id:858,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"medium",
question:"What is the difference between deep copy and shallow copy? Give an example.",
modelAnswer:"Shallow copy: new container object, but elements are REFERENCES to same objects.\nDeep copy: completely independent copy — new container AND new copies of all nested objects.\nimport copy\noriginal = [[1,2],[3,4]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\nshallow[0][0] = 99\nprint(original[0][0])  # 99 — shallow copy shares inner lists!\ndeep[0][0] = 99\nprint(original[0][0])  # 1 — deep copy is fully independent"},

{id:859,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"medium",
question:"How does Python manage memory? Explain reference counting and garbage collection.",
modelAnswer:"Python uses two mechanisms:\n1. Reference Counting: each object tracks how many references point to it. When count = 0, object is freed immediately.\nsys.getrefcount(obj) returns the count.\n2. Garbage Collector: handles cyclic references (A → B → A — both would have count > 0 even if unreachable).\nThe gc module uses generational garbage collection to detect and clean cycles.\ndel obj doesn't immediately free memory — it decrements the reference count. Memory is freed when count hits 0."},

{id:860,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"easy",
question:"What are Python's built-in data types?",
modelAnswer:"Numeric: int, float, complex, bool\nSequence: str, list, tuple, range\nMapping: dict\nSet: set, frozenset\nBinary: bytes, bytearray, memoryview\nNone: NoneType\nCommonly tested: int, float, str, bool, list, tuple, dict, set, None"},

{id:861,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"easy",
question:"What is the difference between '==' and 'is' in Python?",
modelAnswer:"== checks VALUE equality: do they have the same value?\nis checks IDENTITY: are they the same object in memory (same id())?\nExample:\na = [1,2,3]\nb = [1,2,3]\na == b  # True (same values)\na is b  # False (different objects)\nc = a\na is c  # True (same object)\nGotcha: Python caches small ints (-5 to 256) and interned strings, so 'is' may return True unexpectedly. Always use == for value comparison."},

{id:862,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"easy",
question:"What is monkey patching in Python?",
modelAnswer:"Monkey patching = dynamically modifying a class or module at runtime to add or change behavior.\nExample:\nclass Dog:\n    def speak(self): return 'Woof'\n\ndef new_speak(self): return 'Moo'\nDog.speak = new_speak  # monkey patch!\nDog().speak()  # 'Moo'\nUsed in: testing (patch external services), adding features to third-party code.\nRisks: hard to debug, unexpected behavior, maintenance nightmare. Use carefully."},

{id:863,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"easy",
question:"Explain list comprehension with an example. What are its advantages?",
modelAnswer:"List comprehension: concise one-line syntax to create lists.\nSyntax: [expression for item in iterable if condition]\nExample:\nsquares = [x**2 for x in range(1, 6)]  # [1,4,9,16,25]\nevens = [x for x in range(20) if x%2==0]\npairs = [(x,y) for x in range(3) for y in range(3)]\nAdvantages:\n1. More readable and Pythonic than equivalent for loop\n2. Faster (C-level optimization in CPython)\n3. Creates list in one expression"},

{id:864,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"medium",
question:"What is the difference between a module and a package in Python?",
modelAnswer:"Module: a single .py file containing Python code (functions, classes, variables).\nimport mymodule\nPackage: a directory containing __init__.py and multiple modules. Organizes related modules.\nfrom mypackage import mymodule\nExample:\nmypackage/\n    __init__.py\n    auth.py      ← module\n    database.py  ← module\n    utils/       ← sub-package\n        __init__.py\n        helpers.py"},

{id:865,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"easy",
question:"What are *args and **kwargs? Give an example of both.",
modelAnswer:"*args: allows a function to accept any number of POSITIONAL arguments (collected as tuple).\n**kwargs: allows any number of KEYWORD arguments (collected as dict).\nExample:\ndef func(*args, **kwargs):\n    print(args)   # (1, 2, 3)\n    print(kwargs) # {'name': 'Alice', 'age': 22}\nfunc(1, 2, 3, name='Alice', age=22)\nUse cases: flexible APIs, decorators that wrap any function, passing args forward."},

{id:866,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"medium",
question:"What is pickling and unpickling in Python?",
modelAnswer:"Pickling: converting a Python object to a byte stream (serialization) for storage or transmission.\nUnpickling: deserializing the byte stream back to the original Python object.\nimport pickle\n# Pickle\nwith open('data.pkl', 'wb') as f:\n    pickle.dump(my_object, f)\n# Unpickle\nwith open('data.pkl', 'rb') as f:\n    obj = pickle.load(f)\nUses: saving ML models, caching, session state.\nWarning: NEVER unpickle data from untrusted sources — arbitrary code execution vulnerability."},

{id:867,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"easy",
question:"What are negative indexes in Python? Give examples.",
modelAnswer:"Negative indexes count from the END of the sequence.\n-1 = last element, -2 = second-to-last, etc.\nlst = [1, 2, 3, 4, 5]\nlst[-1]  # 5 (last)\nlst[-2]  # 4 (second to last)\nlst[-3:]  # [3,4,5] (last 3 elements)\n'hello'[-1]  # 'o'\n'hello'[::-1]  # 'olleh' (reversed)\nNegative slicing: lst[-3:-1] = [3,4] (step is still left-to-right unless step is negative)"},

{id:868,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"medium",
question:"What is duck typing in Python?",
modelAnswer:"Duck typing: 'If it walks like a duck and quacks like a duck, then it's a duck.'\nPython doesn't check the TYPE of an object — it checks whether it has the required method/attribute at runtime.\ndef make_speak(animal):\n    animal.speak()  # works if obj has speak() — doesn't matter what type\n\nclass Dog: def speak(self): print('Woof')\nclass Robot: def speak(self): print('Beep Boop')\nmake_speak(Dog())    # Woof\nmake_speak(Robot())  # Beep Boop ← works!\nEnables polymorphism without inheritance. Key to Python's flexibility."},

{id:869,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"medium",
question:"What is the difference between range() in Python 2 vs Python 3?",
modelAnswer:"Python 2:\nrange(5) → returns a LIST [0,1,2,3,4] (all values in memory)\nxrange(5) → returns an iterator (lazy, memory efficient)\n\nPython 3:\nrange(5) → returns a range OBJECT (lazy, like Python 2's xrange)\nxrange() no longer exists\n\nIn Python 3, range() is memory efficient — it doesn't create the list. Use list(range(5)) if you need an actual list.\nThis matters for large ranges: range(1000000) in Python 3 uses constant memory."},

{id:870,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"easy",
question:"Name 5 commonly asked Python interview questions and their one-line answers.",
modelAnswer:"1. What is Python? — High-level, interpreted, dynamically-typed, multi-paradigm language.\n2. Mutable vs immutable? — Mutable can change (list, dict, set); immutable cannot (int, str, tuple).\n3. List vs tuple? — List is mutable ([]), tuple is immutable (()).\n4. What is a decorator? — A function that wraps another function to add behavior.\n5. What is GIL? — Global Interpreter Lock; allows only one thread to execute Python bytecode at a time.\n6. Deep vs shallow copy? — Deep copy is fully independent; shallow shares nested objects.\n7. Is vs ==? — 'is' checks identity; '==' checks value equality."},

{id:871,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(list(map(lambda x: x*2, filter(lambda x: x%2==0, range(10)))))",
options:["[0,4,8,12,16]","[0,2,4,6,8]","[2,4,6,8,10]","Error"],
correct:[0],explanation:"filter keeps evens from 0-9: [0,2,4,6,8]. map doubles each: [0,4,8,12,16]."},

{id:872,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"hard",
question:"What is the output of:\nclass A:\n    x = 1\na1 = A()\na2 = A()\na1.x = 2\nprint(A.x, a1.x, a2.x)",
options:["1 2 1","2 2 2","1 1 1","2 2 1"],
correct:[0],explanation:"a1.x = 2 creates an INSTANCE variable on a1, shadowing the class variable. A.x and a2.x still reference class x = 1."},

{id:873,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\ntry:\n    x = 1/0\nexcept ZeroDivisionError:\n    x = -1\nfinally:\n    print(x)",
options:["Error","1","0","-1"],
correct:[3],explanation:"ZeroDivisionError caught → x=-1. finally runs → print(x) = -1."},

{id:874,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"hard",
question:"What is the output of:\ndef gen():\n    yield 1\n    yield 2\ng = gen()\nlist(g)\nprint(list(g))",
options:["[1,2]","[]","[1,2,1,2]","Error"],
correct:[1],explanation:"Generators can only be iterated ONCE. After list(g) exhausts the generator, the second list(g) returns []."},

{id:875,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"Which sorting algorithm does Python's list.sort() use?",
options:["QuickSort","MergeSort","TimSort","HeapSort"],
correct:[2],explanation:"Python uses TimSort — a hybrid of MergeSort and InsertionSort. It's O(n log n) worst case and O(n) best case (already sorted). Stable sort."},

{id:876,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nd = {}\nd[1] = 'a'\nd[True] = 'b'\nprint(d)",
options:["{1:'a', True:'b'}","{1:'b'}","{True:'b'}","Error"],
correct:[1],explanation:"True == 1 and hash(True) == hash(1). So True and 1 are the SAME dict key. The second assignment overwrites: {1:'b'}."},

{id:877,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Write a function to find all pairs in a list that sum to a target value.",
starterCode:"def find_pairs(lst, target):\n    # Return list of tuples (a, b) where a + b == target\n    pass\n\nprint(find_pairs([1,2,3,4,5,6], 7))  # [(1,6),(2,5),(3,4)]",
modelAnswer:"def find_pairs(lst, target):\n    seen = set()\n    pairs = []\n    for num in lst:\n        complement = target - num\n        if complement in seen:\n            pairs.append((complement, num))\n        seen.add(num)\n    return pairs\n\nprint(find_pairs([1,2,3,4,5,6], 7))  # [(1,6),(2,5),(3,4)]"},

{id:878,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Write a function to check if a number is a perfect number.\nA perfect number equals the sum of its proper divisors.\nExample: 6 = 1+2+3 → perfect",
starterCode:"def is_perfect(n):\n    # Write your solution here\n    pass\n\nprint(is_perfect(6))   # True\nprint(is_perfect(28))  # True\nprint(is_perfect(12))  # False",
modelAnswer:"def is_perfect(n):\n    if n < 2: return False\n    divisors_sum = sum(i for i in range(1, n) if n % i == 0)\n    return divisors_sum == n\n\nprint(is_perfect(6))   # True\nprint(is_perfect(28))  # True\nprint(is_perfect(12))  # False"},

{id:879,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"medium",
question:"What is the difference between multiprocessing and multithreading in Python?",
modelAnswer:"Threading: multiple threads in ONE process, share memory. Limited by GIL — only one thread executes Python bytecode at a time. Best for I/O-bound tasks (file/network operations release GIL).\nMultiprocessing: multiple PROCESSES, each with own memory and GIL. True parallelism on multi-core CPUs. Best for CPU-bound tasks (heavy computation).\nExample use:\nthreading: downloading 100 files (I/O bound)\nmultiprocessing: image processing, matrix computation (CPU bound)"},

{id:880,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"medium",
question:"What is a Python list comprehension with nested loops? Give an example.",
modelAnswer:"List comprehension with multiple for clauses simulates nested loops.\nSyntax: [expr for x in outer for y in inner]\nExample 1 — Cartesian product:\npairs = [(x,y) for x in [1,2] for y in ['a','b']]\n# [(1,'a'),(1,'b'),(2,'a'),(2,'b')]\nExample 2 — Flatten 2D list:\nmatrix = [[1,2,3],[4,5,6],[7,8,9]]\nflat = [x for row in matrix for x in row]\n# [1,2,3,4,5,6,7,8,9]"},

{id:881,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"easy",
question:"What is the 'pass' statement in Python? When would you use it in production code?",
modelAnswer:"pass is a null operation — does nothing, used as a placeholder.\nProduction use cases:\n1. Abstract methods (before implementing): def process(self): pass\n2. Empty exception suppression (use carefully): except Exception: pass\n3. Stub class for future implementation: class FutureFeature: pass\n4. Empty if branch: if debug_mode: pass  # TODO\nNote: For exception suppression, contextlib.suppress() is more explicit and preferred."},

{id:882,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(sum(range(1, 11)))",
options:["10","55","45","Error"],
correct:[1],explanation:"sum of 1 to 10 = 1+2+3+...+10 = 55 (using formula n*(n+1)/2 = 10*11/2 = 55)."},

{id:883,section:"Interview & Placement",sectionId:10,type:"mcq",difficulty:"hard",
question:"What is the output of:\nx = [1, 2, 3]\nprint(x * 2)",
options:["[2, 4, 6]","[1, 2, 3, 1, 2, 3]","6","Error"],
correct:[1],explanation:"List * int repeats the list. [1,2,3] * 2 = [1,2,3,1,2,3]. Does NOT multiply elements."},

{id:884,section:"Interview & Placement",sectionId:10,type:"coding",difficulty:"medium",
question:"Write a function to count how many times each number appears in a list and return as dict, without using Counter.",
starterCode:"def count_elements(lst):\n    # Do not use collections.Counter\n    pass\n\nprint(count_elements([1,2,2,3,3,3,4]))  # {1:1, 2:2, 3:3, 4:1}",
modelAnswer:"def count_elements(lst):\n    counts = {}\n    for item in lst:\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n\nprint(count_elements([1,2,2,3,3,3,4]))  # {1:1, 2:2, 3:3, 4:1}"},

{id:885,section:"Interview & Placement",sectionId:10,type:"short",difficulty:"medium",
question:"How would you swap two variables in Python? Give 3 different ways.",
modelAnswer:"Way 1 — Tuple unpacking (Pythonic, recommended):\na, b = b, a\nWay 2 — Using a temporary variable:\ntemp = a; a = b; b = temp\nWay 3 — Arithmetic (only for numbers):\na = a + b; b = a - b; a = a - b\nWay 4 — XOR (integers only):\na = a ^ b; b = a ^ b; a = a ^ b\nIn Python, always prefer Way 1 — clean, readable, no temporary variable needed."},
];
