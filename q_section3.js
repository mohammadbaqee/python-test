const SECTION3_QUESTIONS = [
// ── MCQ 201–222 ──────────────────────────────────────────────────────────────
{id:201,section:"Functions",sectionId:3,type:"mcq",difficulty:"easy",
question:"What is the output of:\ndef greet(name='World'):\n    return f'Hello, {name}!'\nprint(greet())",
options:["Hello, World!","Hello, name!","Error","None"],
correct:[0],explanation:"Default parameter 'World' is used when no argument is passed."},

{id:202,section:"Functions",sectionId:3,type:"mcq",difficulty:"easy",
question:"What is the output of:\ndef add(a, b):\n    return a + b\nprint(add(3, 4))",
options:["7","34","3 4","Error"],
correct:[0],explanation:"add(3, 4) returns 3 + 4 = 7."},

{id:203,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func():\n    pass\nprint(func())",
options:["None","0","Error","''"],
correct:[0],explanation:"A function with no return statement (or just pass) returns None."},

{id:204,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func(a, b=10):\n    return a + b\nprint(func(5))",
options:["15","5","10","Error"],
correct:[0],explanation:"b defaults to 10. func(5) → a=5, b=10 → 5+10=15."},

{id:205,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func(*args):\n    return sum(args)\nprint(func(1, 2, 3, 4))",
options:["10","[1,2,3,4]","Error","(1,2,3,4)"],
correct:[0],explanation:"*args collects all positional arguments as a tuple. sum((1,2,3,4)) = 10."},

{id:206,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func(**kwargs):\n    return kwargs\nprint(func(a=1, b=2))",
options:["{'a':1,'b':2}","(1,2)","[1,2]","Error"],
correct:[0],explanation:"**kwargs collects keyword arguments as a dictionary."},

{id:207,section:"Functions",sectionId:3,type:"mcq",difficulty:"easy",
question:"What is the output of:\nf = lambda x, y: x * y\nprint(f(3, 4))",
options:["12","7","34","Error"],
correct:[0],explanation:"Lambda function multiplies x and y. f(3,4) = 12."},

{id:208,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef outer():\n    x = 10\n    def inner():\n        return x\n    return inner()\nprint(outer())",
options:["10","Error","None","inner"],
correct:[0],explanation:"inner() can access x from outer's scope (closure). Returns 10."},

{id:209,section:"Functions",sectionId:3,type:"mcq",difficulty:"hard",
question:"What is the output of:\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x = 20\n    inner()\n    return x\nprint(outer())",
options:["10","20","Error","None"],
correct:[1],explanation:"nonlocal x lets inner() modify outer's x. After inner(), x=20 is returned."},

{id:210,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\nx = 5\ndef func():\n    x = 10\n    print(x)\nfunc()\nprint(x)",
options:["10\n5","10\n10","5\n5","5\n10"],
correct:[0],explanation:"Inside func, x=10 is local. Outside, x=5 is global. Each print sees its own scope."},

{id:211,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(5))",
options:["120","5","25","Error"],
correct:[0],explanation:"5! = 5*4*3*2*1 = 120. Recursive base case: factorial(0)=1."},

{id:212,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func(lst=[]):\n    lst.append(1)\n    return lst\nprint(func())\nprint(func())",
options:["[1]\n[1]","[1]\n[1,1]","[1,1]\n[1,1,1]","Error"],
correct:[1],explanation:"Mutable default arguments are shared across calls! The same list is reused. First call: [1], second call: [1,1]."},

{id:213,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What does 'return' without a value return in Python?",
options:["0","False","None","''"],
correct:[2],explanation:"A bare 'return' or no return statement returns None."},

{id:214,section:"Functions",sectionId:3,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(list(map(lambda x: x**2, [1,2,3,4])))",
options:["[1,4,9,16]","[1,2,3,4]","[2,4,6,8]","Error"],
correct:[0],explanation:"map applies the lambda to each element. 1²=1, 2²=4, 3²=9, 4²=16."},

{id:215,section:"Functions",sectionId:3,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(list(filter(lambda x: x%2==0, [1,2,3,4,5,6])))",
options:["[1,3,5]","[2,4,6]","[1,2,3,4,5,6]","Error"],
correct:[1],explanation:"filter keeps elements where lambda returns True. Even numbers: 2, 4, 6."},

{id:216,section:"Functions",sectionId:3,type:"mcq",difficulty:"easy",
question:"What type does a lambda function have?",
options:["<class 'function'>","<class 'lambda'>","<class 'method'>","<class 'callable'>"],
correct:[0],explanation:"lambda creates an anonymous function. type(lambda: None) returns <class 'function'>."},

{id:217,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func(a, b, c):\n    return a + b + c\nargs = [1, 2, 3]\nprint(func(*args))",
options:["6","[1,2,3]","Error","123"],
correct:[0],explanation:"*args unpacks the list into positional arguments. func(1, 2, 3) = 6."},

{id:218,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func(a, b, c):\n    return f'{a}{b}{c}'\nd = {'a':1,'b':2,'c':3}\nprint(func(**d))",
options:["123","{'a':1,'b':2,'c':3}","Error","1 2 3"],
correct:[0],explanation:"**d unpacks the dictionary as keyword arguments. func(a=1, b=2, c=3) = '123'."},

{id:219,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the LEGB rule in Python?",
options:["Local, Enclosing, Global, Built-in","List, Enumerate, Generator, Builtin","Local, External, Global, Boolean","Lambda, Enclosing, Global, Built-in"],
correct:[0],explanation:"LEGB is Python's scope lookup order: Local → Enclosing (closures) → Global → Built-in."},

{id:220,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef make_adder(n):\n    return lambda x: x + n\nadd5 = make_adder(5)\nprint(add5(3))",
options:["8","5","3","Error"],
correct:[0],explanation:"make_adder(5) returns a lambda that adds 5 to x. add5(3) = 3 + 5 = 8. This is a closure."},

{id:221,section:"Functions",sectionId:3,type:"mcq",difficulty:"hard",
question:"What is the output of:\nfuncs = [lambda x: x+i for i in range(3)]\nprint([f(0) for f in funcs])",
options:["[0,1,2]","[2,2,2]","[0,0,0]","Error"],
correct:[1],explanation:"Late binding closure bug! All lambdas capture the SAME variable i. By the time they're called, i=2. So all return 0+2=2."},

{id:222,section:"Functions",sectionId:3,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func(a, /, b):\n    return a + b\nprint(func(1, b=2))",
options:["3","Error","1","2"],
correct:[0],explanation:"/ marks positional-only parameters. 'a' must be positional (not keyword). b can be keyword. func(1, b=2) = 3."},

// ── MSQ 223–232 ──────────────────────────────────────────────────────────────
{id:223,section:"Functions",sectionId:3,type:"msq",difficulty:"easy",
question:"Which of the following are valid ways to define a function in Python? (Select all that apply)",
options:["def foo():","function foo():","foo = lambda: None","foo = lambda x: x+1"],
correct:[0,2,3],explanation:"'def' and 'lambda' are the two ways to define functions. 'function' keyword does not exist in Python."},

{id:224,section:"Functions",sectionId:3,type:"msq",difficulty:"medium",
question:"Which of the following are true about lambda functions? (Select all that apply)",
options:["Can have only one expression","Can have multiple statements","Can be assigned to a variable","Cannot have default arguments"],
correct:[0,2],explanation:"Lambda can have only one expression and can be assigned to a variable. It CAN have default arguments (lambda x=5: x). It cannot have multiple statements."},

{id:225,section:"Functions",sectionId:3,type:"msq",difficulty:"medium",
question:"Which of the following statements about *args are true? (Select all that apply)",
options:["Collects extra positional args as a tuple","Must be the last parameter","Can be combined with **kwargs","Allows any number of positional arguments"],
correct:[0,2,3],explanation:"*args collects positional args as a tuple, can combine with **kwargs (args comes first), allows any number. It does NOT have to be last — **kwargs must come after it though."},

{id:226,section:"Functions",sectionId:3,type:"msq",difficulty:"medium",
question:"Which of the following are true about default parameter values? (Select all that apply)",
options:["Default values are evaluated once at function definition","Using mutable default (like []) can cause bugs","Default parameters must come after non-default parameters","Can be overridden when calling the function"],
correct:[0,1,2,3],explanation:"All are true. The mutable default bug (id:212 example) is a classic Python gotcha."},

{id:227,section:"Functions",sectionId:3,type:"msq",difficulty:"easy",
question:"Which of the following are built-in higher-order functions in Python? (Select all that apply)",
options:["map()","filter()","reduce()","sort()"],
correct:[0,1],explanation:"map() and filter() are built-in. reduce() is in functools module (not built-in). sort() is a list method, not a higher-order function."},

{id:228,section:"Functions",sectionId:3,type:"msq",difficulty:"medium",
question:"What does a closure in Python have access to? (Select all that apply)",
options:["Its own local variables","Variables from enclosing function scope","Global variables","Built-in names"],
correct:[0,1,2,3],explanation:"A closure follows LEGB — it can access all four scopes."},

{id:229,section:"Functions",sectionId:3,type:"msq",difficulty:"medium",
question:"Which of the following are true about the 'global' keyword? (Select all that apply)",
options:["It allows modifying a global variable inside a function","It must be used to READ global variables","It declares the variable as global scope","Without it, assignment inside function creates a local variable"],
correct:[0,2,3],explanation:"You do NOT need 'global' to READ a global variable — only to MODIFY it. Options A, C, D are correct."},

{id:230,section:"Functions",sectionId:3,type:"msq",difficulty:"medium",
question:"Which of the following are differences between lambda and def? (Select all that apply)",
options:["lambda is one line; def can be multi-line","lambda cannot have a docstring","lambda returns implicitly; def needs explicit return","lambda creates anonymous functions"],
correct:[0,1,2,3],explanation:"All four are correct differences between lambda and def."},

{id:231,section:"Functions",sectionId:3,type:"msq",difficulty:"hard",
question:"Which functions are part of Python's functools module? (Select all that apply)",
options:["reduce()","wraps()","partial()","filter()"],
correct:[0,1,2],explanation:"reduce, wraps, and partial are in functools. filter() is a built-in function."},

{id:232,section:"Functions",sectionId:3,type:"msq",difficulty:"medium",
question:"Which of these are valid function argument types in Python? (Select all that apply)",
options:["Positional arguments","Keyword arguments","Default arguments","Type-annotated arguments"],
correct:[0,1,2,3],explanation:"All four are valid. Type annotations (def f(x: int) -> str) are valid in Python 3 though not enforced at runtime."},

// ── CODING 233–240 ───────────────────────────────────────────────────────────
{id:233,section:"Functions",sectionId:3,type:"coding",difficulty:"medium",
question:"Write a recursive function to calculate the nth Fibonacci number.\nfibonacci(10) should return 55.",
starterCode:"def fibonacci(n):\n    # Write your solution here\n    pass\n\nprint(fibonacci(10))  # Expected: 55",
modelAnswer:"def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(10))  # 55"},

{id:234,section:"Functions",sectionId:3,type:"coding",difficulty:"easy",
question:"Write a decorator that prints 'Before' before calling a function and 'After' after it.",
starterCode:"def my_decorator(func):\n    # Write your solution here\n    pass\n\n@my_decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()",
modelAnswer:"def my_decorator(func):\n    def wrapper(*args, **kwargs):\n        print('Before')\n        result = func(*args, **kwargs)\n        print('After')\n        return result\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()\n# Output:\n# Before\n# Hello!\n# After"},

{id:235,section:"Functions",sectionId:3,type:"coding",difficulty:"medium",
question:"Write a function using *args that accepts any number of numbers and returns their average.",
starterCode:"def average(*args):\n    # Write your solution here\n    pass\n\nprint(average(10, 20, 30))  # Expected: 20.0\nprint(average(1, 2, 3, 4, 5))  # Expected: 3.0",
modelAnswer:"def average(*args):\n    if not args:\n        return 0\n    return sum(args) / len(args)\n\nprint(average(10, 20, 30))  # 20.0\nprint(average(1, 2, 3, 4, 5))  # 3.0"},

{id:236,section:"Functions",sectionId:3,type:"coding",difficulty:"medium",
question:"Write a closure function 'make_multiplier(n)' that returns a function which multiplies its argument by n.",
starterCode:"def make_multiplier(n):\n    # Write your solution here\n    pass\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\nprint(double(5))  # Expected: 10\nprint(triple(5))  # Expected: 15",
modelAnswer:"def make_multiplier(n):\n    def multiplier(x):\n        return x * n\n    return multiplier\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\nprint(double(5))   # 10\nprint(triple(5))   # 15"},

{id:237,section:"Functions",sectionId:3,type:"coding",difficulty:"medium",
question:"Write a memoized version of fibonacci using a dictionary cache.",
starterCode:"def fibonacci_memo(n, cache={}):\n    # Write your solution here\n    pass\n\nprint(fibonacci_memo(50))  # Should run fast",
modelAnswer:"def fibonacci_memo(n, cache={}):\n    if n in cache:\n        return cache[n]\n    if n <= 1:\n        return n\n    cache[n] = fibonacci_memo(n-1, cache) + fibonacci_memo(n-2, cache)\n    return cache[n]\n\nprint(fibonacci_memo(50))  # 12586269025"},

{id:238,section:"Functions",sectionId:3,type:"coding",difficulty:"medium",
question:"Write a function that accepts a function and an integer n, and returns a new function that calls the original n times.",
starterCode:"def repeat(func, n):\n    # Write your solution here\n    pass\n\nrepeated_hello = repeat(lambda: print('Hello'), 3)\nrepeated_hello()  # Should print Hello 3 times",
modelAnswer:"def repeat(func, n):\n    def wrapper():\n        for _ in range(n):\n            func()\n    return wrapper\n\nrepeated_hello = repeat(lambda: print('Hello'), 3)\nrepeated_hello()\n# Hello\n# Hello\n# Hello"},

{id:239,section:"Functions",sectionId:3,type:"coding",difficulty:"medium",
question:"Write a function using **kwargs that prints a person's details (name, age, city). Handle missing keys gracefully.",
starterCode:"def print_details(**kwargs):\n    # Write your solution here\n    pass\n\nprint_details(name='Alice', age=22, city='Mumbai')\nprint_details(name='Bob')",
modelAnswer:"def print_details(**kwargs):\n    name = kwargs.get('name', 'Unknown')\n    age = kwargs.get('age', 'N/A')\n    city = kwargs.get('city', 'N/A')\n    print(f'Name: {name}, Age: {age}, City: {city}')\n\nprint_details(name='Alice', age=22, city='Mumbai')\n# Name: Alice, Age: 22, City: Mumbai\nprint_details(name='Bob')\n# Name: Bob, Age: N/A, City: N/A"},

{id:240,section:"Functions",sectionId:3,type:"coding",difficulty:"hard",
question:"Write a timer decorator that measures and prints how long a function takes to execute.",
starterCode:"import time\n\ndef timer(func):\n    # Write your solution here\n    pass\n\n@timer\ndef slow_function():\n    time.sleep(0.1)\n    return 'done'\n\nslow_function()",
modelAnswer:"import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end-start:.4f}s')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(0.1)\n    return 'done'\n\nslow_function()\n# slow_function took 0.1005s"},

// ── SHORT ANSWER 241–250 ─────────────────────────────────────────────────────
{id:241,section:"Functions",sectionId:3,type:"short",difficulty:"medium",
question:"What is the difference between *args and **kwargs?",
modelAnswer:"*args: collects extra POSITIONAL arguments as a TUPLE.\n**kwargs: collects extra KEYWORD arguments as a DICTIONARY.\nExample:\ndef func(*args, **kwargs):\n    print(args)   # tuple of positional args\n    print(kwargs) # dict of keyword args\nfunc(1, 2, name='Alice')  # args=(1,2), kwargs={'name':'Alice'}\nOrder in definition: def func(normal, *args, **kwargs)"},

{id:242,section:"Functions",sectionId:3,type:"short",difficulty:"easy",
question:"What is the difference between lambda and def?",
modelAnswer:"lambda: anonymous function, single expression, no statements, no docstring, used inline.\ndef: named function, multiple statements/lines, can have docstring, used for complex logic.\nExample:\nlambda x: x*2          # lambda\ndef double(x): return x*2  # def\nUse lambda for short, throwaway functions (in map/filter/sorted). Use def for everything else."},

{id:243,section:"Functions",sectionId:3,type:"short",difficulty:"medium",
question:"What is a closure in Python? Give a real-world use case.",
modelAnswer:"A closure is a function that remembers variables from its enclosing scope even after that scope has finished executing.\nExample:\ndef make_counter():\n    count = 0\n    def counter():\n        nonlocal count\n        count += 1\n        return count\n    return counter\nc = make_counter()\nprint(c())  # 1\nprint(c())  # 2\nUse cases: factory functions, memoization, partial application, event handlers."},

{id:244,section:"Functions",sectionId:3,type:"short",difficulty:"medium",
question:"What is the LEGB rule? Give an example showing each scope.",
modelAnswer:"LEGB = scope lookup order in Python:\nL - Local: inside current function\nE - Enclosing: in enclosing function (for closures)\nG - Global: module level\nB - Built-in: Python's built-in names (len, print, etc.)\nExample:\nx = 'global'\ndef outer():\n    x = 'enclosing'\n    def inner():\n        x = 'local'\n        print(x)  # 'local' (L wins)\n    inner()\nouter()"},

{id:245,section:"Functions",sectionId:3,type:"short",difficulty:"medium",
question:"What is a decorator in Python? How does it work?",
modelAnswer:"A decorator is a function that takes another function as input, adds functionality, and returns a new function.\nIt uses the @syntax as syntactic sugar.\n@decorator\ndef func(): ...\nis equivalent to: func = decorator(func)\nCommon uses: logging, timing, authentication, caching.\nExample:\ndef bold(func):\n    def wrapper():\n        return '<b>' + func() + '</b>'\n    return wrapper\n@bold\ndef hello():\n    return 'Hello'\nprint(hello())  # <b>Hello</b>"},

{id:246,section:"Functions",sectionId:3,type:"short",difficulty:"easy",
question:"What are first-class functions in Python?",
modelAnswer:"In Python, functions are first-class citizens — they can be:\n1. Assigned to variables: f = print\n2. Passed as arguments: map(str, [1,2,3])\n3. Returned from functions: def make_adder(n): return lambda x: x+n\n4. Stored in data structures: funcs = [len, str, type]\nThis enables higher-order functions, decorators, callbacks, and functional programming patterns."},

{id:247,section:"Functions",sectionId:3,type:"short",difficulty:"medium",
question:"What is the mutable default argument bug in Python? How do you fix it?",
modelAnswer:"When a mutable object (list, dict) is used as a default argument, it is shared across all calls.\nBUG:\ndef append_item(item, lst=[]):\n    lst.append(item)\n    return lst\nappend_item(1)  # [1]\nappend_item(2)  # [1, 2]  ← unexpected!\nFIX: Use None as default and create inside function:\ndef append_item(item, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(item)\n    return lst"},

{id:248,section:"Functions",sectionId:3,type:"short",difficulty:"easy",
question:"Can a function return multiple values in Python? How?",
modelAnswer:"Yes. Python functions can return multiple values as a tuple.\nExample:\ndef min_max(lst):\n    return min(lst), max(lst)\nlo, hi = min_max([3,1,4,1,5,9])\nprint(lo, hi)  # 1 9\nThe return statement 'return a, b' is equivalent to 'return (a, b)' — Python packs them into a tuple, and the caller can unpack."},

{id:249,section:"Functions",sectionId:3,type:"short",difficulty:"medium",
question:"What is recursion? What is the base case and why is it important?",
modelAnswer:"Recursion is when a function calls itself to solve smaller instances of the same problem.\nBase case: the condition where recursion stops (no further calls).\nWhy it's important: without a base case, the function recurses infinitely, causing a RecursionError (max depth exceeded, default ~1000).\nExample:\ndef factorial(n):\n    if n == 0: return 1   # base case\n    return n * factorial(n-1)  # recursive case"},

{id:250,section:"Functions",sectionId:3,type:"short",difficulty:"medium",
question:"What is functools.wraps() and why should you use it in decorators?",
modelAnswer:"When you wrap a function with a decorator, the wrapped function loses its __name__, __doc__, and other metadata.\nfunctools.wraps copies these attributes from the original function to the wrapper.\nWithout wraps:\n@decorator\ndef hello(): pass\nprint(hello.__name__)  # 'wrapper' ← wrong!\nWith wraps:\nfrom functools import wraps\ndef decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs): return func(*args, **kwargs)\n    return wrapper\nprint(hello.__name__)  # 'hello' ← correct!"},
];
