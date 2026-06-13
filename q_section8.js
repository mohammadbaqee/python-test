const SECTION8_QUESTIONS = [
// ═══════════════════════════════════════════════════════
// SECTION 8: MODULES & LIBRARIES (sectionId: 8, ids 601-640)
// ═══════════════════════════════════════════════════════
{id:601,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"easy",
question:"What is the purpose of 'if __name__ == \"__main__\":'?",
options:["It defines the main function","Code inside only runs when file is executed directly, not when imported","It imports the main module","It runs the file automatically"],
correct:[1],explanation:"When a file is run directly, __name__ is '__main__'. When imported, __name__ is the module name. This guard separates runnable code from importable code."},

{id:602,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"easy",
question:"What does os.getcwd() return?",
options:["The OS name","The current working directory path","The user home directory","List of environment variables"],
correct:[1],explanation:"os.getcwd() = Get Current Working Directory. Returns the full path as a string."},

{id:603,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"easy",
question:"What does os.listdir('.') return?",
options:["List of files in current dir","List of all processes","List of system directories","Current directory path"],
correct:[0],explanation:"os.listdir(path) returns a list of all files and directories in the given path."},

{id:604,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"easy",
question:"What does sys.argv contain?",
options:["System arguments count","Command-line arguments as a list","Python version","Memory usage"],
correct:[1],explanation:"sys.argv is a list of command-line arguments. sys.argv[0] is always the script name."},

{id:605,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What is the output of:\nimport math\nprint(math.ceil(4.1), math.floor(4.9))",
options:["4 4","5 4","4 5","5 5"],
correct:[1],explanation:"ceil(4.1)=5 (round up), floor(4.9)=4 (round down)."},

{id:606,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"easy",
question:"What does random.randint(1, 10) return?",
options:["Random float between 1 and 10","Random int from 1 to 9","Random int from 1 to 10 inclusive","Always 5"],
correct:[2],explanation:"random.randint(a, b) returns a random integer N such that a <= N <= b. Both endpoints are inclusive."},

{id:607,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfrom datetime import datetime\ndt = datetime(2024, 1, 15)\nprint(dt.strftime('%Y-%m-%d'))",
options:["2024/01/15","Jan 15 2024","2024-01-15","15-01-2024"],
correct:[2],explanation:"strftime formats a datetime. %Y=year, %m=month(zero-padded), %d=day → '2024-01-15'."},

{id:608,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"easy",
question:"What is the difference between 'import math' and 'from math import sqrt'?",
options:["No difference","import math loads whole module; from math import sqrt loads only sqrt","from math is faster","import math is deprecated"],
correct:[1],explanation:"'import math' loads the whole module; access via math.sqrt(). 'from math import sqrt' imports only sqrt into namespace; access directly as sqrt()."},

{id:609,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfrom collections import Counter\nc = Counter('abracadabra')\nprint(c.most_common(2))",
options:["[('a',5),('b',2)]","[('a',5),('r',2)]","[('a',5),('c',1)]","Error"],
correct:[0],explanation:"Counter counts occurrences. 'a' appears 5 times, 'b' appears 2 times. most_common(2) returns top 2."},

{id:610,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfrom collections import defaultdict\nd = defaultdict(int)\nd['a'] += 1\nd['b'] += 2\nprint(d['c'])",
options:["KeyError","None","0","1"],
correct:[2],explanation:"defaultdict(int) provides default value 0 for missing keys. d['c'] returns 0 without raising KeyError."},

{id:611,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What does os.path.join('home', 'user', 'file.txt') return on Linux?",
options:["home\\user\\file.txt","home/user/file.txt","home user file.txt","Error"],
correct:[1],explanation:"os.path.join uses the OS separator. On Linux it's /. Returns 'home/user/file.txt'."},

{id:612,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"easy",
question:"What does 'import random; random.shuffle([1,2,3,4])' do?",
options:["Returns a shuffled list","Shuffles the list IN-PLACE and returns None","Creates a sorted version","Reverses the list"],
correct:[1],explanation:"random.shuffle() shuffles in-place (modifies original list) and returns None."},

{id:613,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What is the output of:\nimport math\nprint(math.sqrt(16))",
options:["4","4.0","16","Error"],
correct:[1],explanation:"math.sqrt() always returns a float. sqrt(16) = 4.0, not 4."},

{id:614,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What is __init__.py used for?",
options:["Initializing Python","Marking a directory as a Python package","Running setup code","Importing all modules"],
correct:[1],explanation:"__init__.py marks a directory as a Python package so it can be imported. In Python 3.3+ it's optional but still commonly used."},

{id:615,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What does sys.exit() do?",
options:["Exits the current function","Exits the Python interpreter","Clears memory","Restarts the program"],
correct:[1],explanation:"sys.exit() raises SystemExit exception to exit the Python interpreter. Can pass an exit code: sys.exit(0) = success, sys.exit(1) = error."},

{id:616,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"easy",
question:"What is 'pip'?",
options:["A Python built-in function","Python's package installer","A Python version","A Python IDE"],
correct:[1],explanation:"pip (Pip Installs Packages) is Python's package manager. Used to install third-party packages: pip install numpy."},

{id:617,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What does collections.namedtuple do?",
options:["Creates a dict with named keys","Creates a tuple subclass with named fields","Creates a list with names","Creates a custom class"],
correct:[1],explanation:"namedtuple creates a tuple subclass where elements can be accessed by name (like attributes) in addition to index."},

{id:618,section:"Modules & Libraries",sectionId:8,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfrom itertools import chain\nprint(list(chain([1,2],[3,4],[5])))",
options:["[[1,2],[3,4],[5]]","[1,2,3,4,5]","Error","[1,2],[3,4],[5]"],
correct:[1],explanation:"itertools.chain() chains multiple iterables into a single iterator. Flattens one level."},

// ── MSQ 619–628 ──────────────────────────────────────────────────────────────
{id:619,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"easy",
question:"Which of the following are functions in the 'os' module? (Select all that apply)",
options:["os.getcwd()","os.listdir()","os.mkdir()","os.readfile()"],
correct:[0,1,2],explanation:"getcwd, listdir, mkdir are valid os functions. os.readfile() doesn't exist — use open()."},

{id:620,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"easy",
question:"Which are valid import styles in Python? (Select all that apply)",
options:["import math","from math import sqrt","from math import *","import math as m"],
correct:[0,1,2,3],explanation:"All four are valid. 'from module import *' imports everything but is discouraged in production code."},

{id:621,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"medium",
question:"Which are functions in Python's 'math' module? (Select all that apply)",
options:["math.sqrt()","math.ceil()","math.abs()","math.log()"],
correct:[0,1,3],explanation:"sqrt(), ceil(), log() are in math. abs() is a Python BUILT-IN, not in math module."},

{id:622,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"medium",
question:"Which are in Python's 'collections' module? (Select all that apply)",
options:["Counter","defaultdict","namedtuple","OrderedDict"],
correct:[0,1,2,3],explanation:"All four: Counter, defaultdict, namedtuple, OrderedDict are in collections."},

{id:623,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"medium",
question:"Which of the following are valid datetime operations? (Select all that apply)",
options:["datetime.now()","datetime.today()","datetime.timedelta(days=7)","datetime.sleep(5)"],
correct:[0,1,2],explanation:"now(), today(), timedelta() are datetime operations. sleep() is in the time module."},

{id:624,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"medium",
question:"Which of the following are random module functions? (Select all that apply)",
options:["random.randint()","random.choice()","random.shuffle()","random.sort()"],
correct:[0,1,2],explanation:"randint(), choice(), shuffle() are random functions. sort() doesn't exist in random module."},

{id:625,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"easy",
question:"What are advantages of using virtual environments? (Select all that apply)",
options:["Project-specific dependencies","Avoid version conflicts between projects","Keeps global Python clean","Makes code run faster"],
correct:[0,1,2],explanation:"venv provides isolated environments — project-specific deps, no conflicts, clean global Python. It doesn't affect speed."},

{id:626,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"medium",
question:"Which are true about Python packages vs modules? (Select all that apply)",
options:["Module: single .py file","Package: directory containing __init__.py","Packages can contain sub-packages","Modules cannot be imported"],
correct:[0,1,2],explanation:"Module = single .py file. Package = directory with __init__.py. Packages can be nested. Modules CAN be imported."},

{id:627,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"medium",
question:"Which sys module attributes/functions are commonly used? (Select all that apply)",
options:["sys.argv","sys.path","sys.exit()","sys.version"],
correct:[0,1,2,3],explanation:"All four are commonly used: argv (command-line args), path (module search paths), exit() (quit interpreter), version (Python version string)."},

{id:628,section:"Modules & Libraries",sectionId:8,type:"msq",difficulty:"medium",
question:"Which of the following are itertools functions? (Select all that apply)",
options:["chain()","cycle()","product()","merge()"],
correct:[0,1,2],explanation:"chain(), cycle(), product() are in itertools. merge() doesn't exist in itertools (heapq has merge)."},

// ── CODING 629–634 ───────────────────────────────────────────────────────────
{id:629,section:"Modules & Libraries",sectionId:8,type:"coding",difficulty:"easy",
question:"Write a script to list all .py files in the current directory using the os module.",
starterCode:"import os\n# Write your solution here\n",
modelAnswer:"import os\npy_files = [f for f in os.listdir('.') if f.endswith('.py')]\nfor f in py_files:\n    print(f)"},

{id:630,section:"Modules & Libraries",sectionId:8,type:"coding",difficulty:"medium",
question:"Use collections.Counter to find the 3 most common words in a string.",
starterCode:"from collections import Counter\ntext = 'the quick brown fox jumps over the lazy dog the fox'\n# Write your solution here\n",
modelAnswer:"from collections import Counter\ntext = 'the quick brown fox jumps over the lazy dog the fox'\nwords = text.split()\ncounter = Counter(words)\nprint(counter.most_common(3))\n# [('the', 3), ('fox', 2), ('quick', 1)]"},

{id:631,section:"Modules & Libraries",sectionId:8,type:"coding",difficulty:"easy",
question:"Write a function using the datetime module to calculate the number of days between two dates.",
starterCode:"from datetime import datetime\n\ndef days_between(date1_str, date2_str):\n    # date format: 'YYYY-MM-DD'\n    # Write your solution here\n    pass\n\nprint(days_between('2024-01-01', '2024-12-31'))  # Expected: 365",
modelAnswer:"from datetime import datetime\n\ndef days_between(date1_str, date2_str):\n    d1 = datetime.strptime(date1_str, '%Y-%m-%d')\n    d2 = datetime.strptime(date2_str, '%Y-%m-%d')\n    return abs((d2 - d1).days)\n\nprint(days_between('2024-01-01', '2024-12-31'))  # 365"},

{id:632,section:"Modules & Libraries",sectionId:8,type:"coding",difficulty:"medium",
question:"Use collections.defaultdict to group words by their first letter from a list.",
starterCode:"from collections import defaultdict\nwords = ['apple','banana','avocado','blueberry','cherry','apricot']\n# Write your solution here\n",
modelAnswer:"from collections import defaultdict\nwords = ['apple','banana','avocado','blueberry','cherry','apricot']\ngroups = defaultdict(list)\nfor word in words:\n    groups[word[0]].append(word)\nfor letter, group in sorted(groups.items()):\n    print(f'{letter}: {group}')"},

{id:633,section:"Modules & Libraries",sectionId:8,type:"coding",difficulty:"medium",
question:"Write a program using itertools.combinations to generate all 2-element combinations from a list.",
starterCode:"from itertools import combinations\nitems = ['A', 'B', 'C', 'D']\n# Write your solution here\n",
modelAnswer:"from itertools import combinations\nitems = ['A', 'B', 'C', 'D']\nfor combo in combinations(items, 2):\n    print(combo)\n# ('A','B'), ('A','C'), ('A','D'), ('B','C'), ('B','D'), ('C','D')"},

{id:634,section:"Modules & Libraries",sectionId:8,type:"coding",difficulty:"easy",
question:"Use the random module to simulate rolling a 6-sided die 10 times and count how often each face appears.",
starterCode:"import random\nfrom collections import Counter\n# Write your solution here\n",
modelAnswer:"import random\nfrom collections import Counter\nrolls = [random.randint(1, 6) for _ in range(10)]\ncounts = Counter(rolls)\nfor face in range(1, 7):\n    print(f'Face {face}: {counts[face]} times')"},

// ── SHORT ANSWER 635–640 ─────────────────────────────────────────────────────
{id:635,section:"Modules & Libraries",sectionId:8,type:"short",difficulty:"easy",
question:"What is the purpose of 'if __name__ == \"__main__\":'?",
modelAnswer:"When Python runs a file directly, it sets __name__ = '__main__'.\nWhen the file is imported as a module, __name__ = module filename.\nThis guard ensures certain code (test runs, entry points) only runs when the file is the main script:\nif __name__ == '__main__':\n    main()  # Only runs when executed directly, not when imported\nUse case: write reusable module functions AND a runnable script in the same file."},

{id:636,section:"Modules & Libraries",sectionId:8,type:"short",difficulty:"easy",
question:"What is the difference between a module and a package in Python?",
modelAnswer:"Module: a single .py file. Import: import mymodule\nPackage: a directory containing __init__.py (and other modules). Import: import mypackage.mymodule or from mypackage import mymodule\nPackages allow organizing modules into namespaces.\nExample:\nmypackage/\n    __init__.py\n    utils.py\n    models.py\nfrom mypackage import utils"},

{id:637,section:"Modules & Libraries",sectionId:8,type:"short",difficulty:"easy",
question:"What are the key differences between pip and conda?",
modelAnswer:"pip: Python's default package manager. Installs from PyPI. Works with any Python installation.\nconda: Package manager from Anaconda. Installs Python packages AND non-Python dependencies (C libraries, etc.). Creates environments too.\nWhen to use:\n- pip: standard Python projects, web dev, general use\n- conda: data science, ML (numpy, tensorflow, etc.) — conda resolves complex C-level dependencies better"},

{id:638,section:"Modules & Libraries",sectionId:8,type:"short",difficulty:"medium",
question:"What is a virtual environment in Python and why is it important?",
modelAnswer:"A virtual environment is an isolated Python environment with its own packages and dependencies, separate from the global Python installation.\nCreate: python -m venv myenv\nActivate: source myenv/bin/activate (Linux/Mac) or myenv\\Scripts\\activate (Windows)\nWhy important:\n1. Project A needs Django 3.0, Project B needs Django 4.0 — no conflict\n2. Requirements are trackable: pip freeze > requirements.txt\n3. Clean global Python installation"},

{id:639,section:"Modules & Libraries",sectionId:8,type:"short",difficulty:"medium",
question:"What does sys.argv do? Give a practical example.",
modelAnswer:"sys.argv is a list of command-line arguments passed to the script.\nsys.argv[0] = script name\nsys.argv[1], [2], ... = actual arguments\nExample:\n# greet.py\nimport sys\nname = sys.argv[1] if len(sys.argv) > 1 else 'World'\nprint(f'Hello, {name}!')\n\n# Run: python greet.py Alice → Hello, Alice!\n# Run: python greet.py → Hello, World!"},

{id:640,section:"Modules & Libraries",sectionId:8,type:"short",difficulty:"easy",
question:"What are some commonly used Python standard library modules and what do they do?",
modelAnswer:"os: file system, environment variables, process management\nsys: Python interpreter, command-line args, exit\nmath: mathematical functions (sqrt, ceil, floor, pi)\nrandom: random number generation, shuffling, sampling\ndatetime: date/time manipulation\nre: regular expressions\njson: JSON encoding/decoding\ncollections: specialized containers (Counter, defaultdict, deque, namedtuple)\nitertools: efficient iteration (chain, combinations, permutations)\ncopy: shallow and deep copy\ntime: timing, sleeping"},

// ═══════════════════════════════════════════════════════
// SECTION 9: ADVANCED PYTHON (sectionId: 9, ids 641-680)
// ═══════════════════════════════════════════════════════
{id:641,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef decorator(func):\n    def wrapper():\n        print('Before')\n        func()\n        print('After')\n    return wrapper\n\n@decorator\ndef hello():\n    print('Hello')\n\nhello()",
options:["Hello","Before\nAfter","Before\nHello\nAfter","Error"],
correct:[2],explanation:"Decorator wraps hello(). Calling hello() calls wrapper() which prints Before, calls original hello() (Hello), then After."},

{id:642,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef gen():\n    yield 1\n    yield 2\n    yield 3\ng = gen()\nprint(next(g), next(g))",
options:["1 2","1","2","Error"],
correct:[0],explanation:"Generators use yield to produce values lazily. Each next() call returns the next yielded value. next(g) returns 1, then 2."},

{id:643,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the difference between a generator and a list comprehension?",
options:["No difference","Generator uses () and is lazy; list uses [] and eager","Generator uses [] and list uses ()","Generator is slower"],
correct:[1],explanation:"[x for x in range(10)] creates list in memory. (x for x in range(10)) creates generator — lazy, produces values on demand."},

{id:644,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef gen():\n    for i in range(3):\n        yield i * 2\nprint(list(gen()))",
options:["[0,2,4]","[0,1,2]","[2,4,6]","Error"],
correct:[0],explanation:"Generator yields 0*2=0, 1*2=2, 2*2=4. list() collects all values: [0,2,4]."},

{id:645,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(list(map(str, [1,2,3])))",
options:["[1,2,3]","['1','2','3']","['str','str','str']","Error"],
correct:[1],explanation:"map(str, [1,2,3]) applies str() to each element. Returns ['1','2','3']."},

{id:646,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\nfrom functools import reduce\nprint(reduce(lambda x,y: x*y, [1,2,3,4,5]))",
options:["15","120","24","Error"],
correct:[1],explanation:"reduce applies function cumulatively: ((((1*2)*3)*4)*5) = 120."},

{id:647,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\ng = (x**2 for x in range(5))\nprint(sum(g))",
options:["30","[0,1,4,9,16]","30.0","Error"],
correct:[0],explanation:"Generator expression. sum() consumes the generator: 0+1+4+9+16 = 30."},

{id:648,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"hard",
question:"What is the output of:\ndef outer(x):\n    def inner(y):\n        return x + y\n    return inner\nadd10 = outer(10)\nprint(add10(5))",
options:["15","10","5","Error"],
correct:[0],explanation:"Closure: inner() captures x=10 from outer's scope. add10(5) = inner(5) = 10+5 = 15."},

{id:649,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"hard",
question:"What is the output of:\ndef counter():\n    count = 0\n    def inc():\n        nonlocal count\n        count += 1\n        return count\n    return inc\nc = counter()\nprint(c(), c(), c())",
options:["0 0 0","1 2 3","1 1 1","Error"],
correct:[1],explanation:"Each call to c() increments count. nonlocal allows modifying enclosing scope. Returns 1, 2, 3."},

{id:650,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is lazy evaluation in Python?",
options:["Evaluating expressions immediately","Delaying evaluation until value is needed","Caching function results","Using async/await"],
correct:[1],explanation:"Lazy evaluation delays computation until the result is needed. Generators, map(), filter() are lazy in Python — they don't compute all values upfront."},

{id:651,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(any([False, 0, '', None, 1]))",
options:["False","True","None","Error"],
correct:[1],explanation:"any() returns True if ANY element is truthy. 1 is truthy, so any() returns True."},

{id:652,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(all([1, 2, 3, 4]))",
options:["False","True","4","Error"],
correct:[1],explanation:"all() returns True only if ALL elements are truthy. All are non-zero ints → all truthy → True."},

{id:653,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(sorted([3,1,4,1,5], key=lambda x: -x))",
options:["[1,1,3,4,5]","[5,4,3,1,1]","[3,1,4,1,5]","Error"],
correct:[1],explanation:"key=lambda x: -x sorts by negative value → descending order. Same as reverse=True."},

{id:654,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"hard",
question:"What is the output of:\n@property\ndef x(self): return self._x\nWhat type does @property create?",
options:["A static method","A property descriptor","A class method","A regular method"],
correct:[1],explanation:"@property creates a property descriptor — an object that intercepts attribute access and delegates to getter/setter/deleter methods."},

{id:655,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is a generator expression vs a list comprehension in terms of memory?",
options:["Same memory","Generator uses O(1) memory; list uses O(n)","List uses less memory","Both use O(n²)"],
correct:[1],explanation:"Generator expression produces values lazily — only one value in memory at a time: O(1). List comprehension builds entire list in memory: O(n)."},

{id:656,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"hard",
question:"What is the output of:\nfrom functools import wraps\ndef d(f):\n    @wraps(f)\n    def w(*a,**k): return f(*a,**k)\n    return w\n@d\ndef hello(): pass\nprint(hello.__name__)",
options:["w","d","hello","Error"],
correct:[2],explanation:"@wraps(f) copies metadata from f to w. hello.__name__ returns 'hello' (the original function name)."},

{id:657,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"hard",
question:"What does 'yield from' do in a generator?",
options:["Exits the generator","Delegates to another generator","Returns a value","Restarts the generator"],
correct:[1],explanation:"'yield from iterable' delegates to another generator/iterable, yielding all its values. Equivalent to: for x in iterable: yield x"},

{id:658,section:"Advanced Python",sectionId:9,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(*[1,2,3])",
options:["[1,2,3]","1 2 3","123","Error"],
correct:[1],explanation:"*[1,2,3] unpacks the list. print(*[1,2,3]) = print(1, 2, 3) = '1 2 3'."},

// ── MSQ 659–668 ──────────────────────────────────────────────────────────────
{id:659,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"medium",
question:"What are advantages of using generators over lists? (Select all that apply)",
options:["Memory efficient — values produced lazily","Can represent infinite sequences","Faster to create than lists","Can be iterated multiple times"],
correct:[0,1,2],explanation:"Generators are memory-efficient (lazy), can be infinite (e.g., infinite fibonacci), and faster to create. But they can only be iterated ONCE — lists can be iterated multiple times."},

{id:660,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"medium",
question:"Which of the following make an object iterable in Python? (Select all that apply)",
options:["Implementing __iter__ and __next__","Implementing __getitem__ and __len__","Implementing just __iter__ (returning self)","Being a list or tuple"],
correct:[0,1,2,3],explanation:"All four work. Formally: __iter__+__next__ (iterator protocol). Legacy: __getitem__+__len__. Lists/tuples are iterable by default."},

{id:661,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"medium",
question:"Which of the following are true about Python decorators? (Select all that apply)",
options:["They are higher-order functions","@decorator is syntactic sugar for func = decorator(func)","They can only decorate functions, not classes","They can be stacked (multiple decorators)"],
correct:[0,1,3],explanation:"Decorators are HOFs, @syntax is sugar, can be stacked. They CAN also decorate classes."},

{id:662,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"easy",
question:"Which built-in functions accept iterables and return a single result? (Select all that apply)",
options:["sum()","any()","all()","max()"],
correct:[0,1,2,3],explanation:"all four: sum() sums, any() checks if any truthy, all() checks if all truthy, max() finds maximum."},

{id:663,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"medium",
question:"Which are true about map() and filter() in Python 3? (Select all that apply)",
options:["They return iterators (lazy), not lists","Use list() to convert their output to a list","map() applies function to each element","filter() keeps elements where function returns True"],
correct:[0,1,2,3],explanation:"All four are correct about Python 3's map() and filter()."},

{id:664,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"medium",
question:"Which of the following are valid comprehension types in Python? (Select all that apply)",
options:["List: [x for x in range(5)]","Dict: {k:v for k,v in d.items()}","Set: {x for x in lst}","Tuple: (x for x in lst)"],
correct:[0,1,2,3],explanation:"All are valid. Note: (x for x in lst) is actually a GENERATOR EXPRESSION, not tuple comprehension — use tuple() around it for a tuple."},

{id:665,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"medium",
question:"What are closures useful for? (Select all that apply)",
options:["Factory functions (make_adder, make_multiplier)","Memoization without classes","Callback functions","Event handlers"],
correct:[0,1,2,3],explanation:"All four are common closure use cases."},

{id:666,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"hard",
question:"Which of the following are true about Python's walrus operator (:=)? (Select all that apply)",
options:["Assigns and returns value in one expression","Introduced in Python 3.8","Can be used in while loops and list comprehensions","Is the same as =="],
correct:[0,1,2],explanation:":= (walrus) assigns AND returns value. Python 3.8+. Useful in while loops and comprehensions. It's NOT equality — == is equality."},

{id:667,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"medium",
question:"Which of the following are true about Python's 'with' statement (context managers)? (Select all that apply)",
options:["Calls __enter__ on entering the block","Calls __exit__ on exiting the block","Handles exceptions in __exit__","Only works with files"],
correct:[0,1,2],explanation:"with calls __enter__ and __exit__. __exit__ can handle exceptions (receives exc_type, exc_val, tb). Works with ANY context manager, not just files."},

{id:668,section:"Advanced Python",sectionId:9,type:"msq",difficulty:"medium",
question:"Which are true about Python's type hints? (Select all that apply)",
options:["Added in Python 3.5","Not enforced at runtime","Help IDEs with autocomplete","Used with mypy for static analysis"],
correct:[0,1,2,3],explanation:"All four are true about type hints (PEP 484)."},

// ── CODING 669–674 ───────────────────────────────────────────────────────────
{id:669,section:"Advanced Python",sectionId:9,type:"coding",difficulty:"medium",
question:"Write a generator function that produces an infinite Fibonacci sequence.",
starterCode:"def fibonacci_gen():\n    # Write your solution here\n    pass\n\ng = fibonacci_gen()\nfor _ in range(8):\n    print(next(g), end=' ')  # Expected: 0 1 1 2 3 5 8 13",
modelAnswer:"def fibonacci_gen():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\ng = fibonacci_gen()\nfor _ in range(8):\n    print(next(g), end=' ')  # 0 1 1 2 3 5 8 13"},

{id:670,section:"Advanced Python",sectionId:9,type:"coding",difficulty:"medium",
question:"Write a memoize decorator using functools.lru_cache.",
starterCode:"from functools import lru_cache\n\n# Apply lru_cache to the fibonacci function\ndef fibonacci(n):\n    if n <= 1: return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(50))  # Should run fast",
modelAnswer:"from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fibonacci(n):\n    if n <= 1: return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(50))  # 12586269025 — runs instantly"},

{id:671,section:"Advanced Python",sectionId:9,type:"coding",difficulty:"medium",
question:"Write a generator that reads a large file line by line without loading it all in memory.",
starterCode:"def read_file_lazy(filepath):\n    # Write your solution here\n    pass\n\n# Usage (assumes file exists):\n# for line in read_file_lazy('big_file.txt'):\n#     print(line.strip())",
modelAnswer:"def read_file_lazy(filepath):\n    with open(filepath, 'r') as f:\n        for line in f:\n            yield line.strip()\n\n# Usage:\n# for line in read_file_lazy('big_file.txt'):\n#     process(line)"},

{id:672,section:"Advanced Python",sectionId:9,type:"coding",difficulty:"hard",
question:"Write a class-based context manager that suppresses a specific exception type.",
starterCode:"class suppress:\n    def __init__(self, exception_type):\n        # Write your solution here\n        pass\n    def __enter__(self): pass\n    def __exit__(self, exc_type, exc_val, tb): pass\n\nwith suppress(ZeroDivisionError):\n    print(1/0)  # Should NOT crash\nprint('Continued safely')",
modelAnswer:"class suppress:\n    def __init__(self, exception_type):\n        self.exc_type = exception_type\n    def __enter__(self): return self\n    def __exit__(self, exc_type, exc_val, tb):\n        return exc_type is not None and issubclass(exc_type, self.exc_type)\n\nwith suppress(ZeroDivisionError):\n    print(1/0)\nprint('Continued safely')"},

{id:673,section:"Advanced Python",sectionId:9,type:"coding",difficulty:"medium",
question:"Use a pipeline of generators to: read numbers 1-20, keep only even ones, square them, and print results.",
starterCode:"# Write using generator functions and chaining\ndef numbers(n): pass\ndef evens(seq): pass\ndef squared(seq): pass\n\npipeline = squared(evens(numbers(20)))\nfor val in pipeline:\n    print(val, end=' ')",
modelAnswer:"def numbers(n):\n    for i in range(1, n+1): yield i\n\ndef evens(seq):\n    for x in seq:\n        if x % 2 == 0: yield x\n\ndef squared(seq):\n    for x in seq: yield x**2\n\npipeline = squared(evens(numbers(20)))\nfor val in pipeline:\n    print(val, end=' ')\n# 4 16 36 64 100 144 196 256 324 400"},

{id:674,section:"Advanced Python",sectionId:9,type:"coding",difficulty:"hard",
question:"Write a decorator that caches function results (simple memoization without lru_cache).",
starterCode:"def memoize(func):\n    # Write your solution here\n    pass\n\n@memoize\ndef slow_add(a, b):\n    import time; time.sleep(0.1)\n    return a + b\n\nprint(slow_add(1, 2))  # Slow\nprint(slow_add(1, 2))  # Should be instant (cached)",
modelAnswer:"def memoize(func):\n    cache = {}\n    def wrapper(*args):\n        if args not in cache:\n            cache[args] = func(*args)\n        return cache[args]\n    return wrapper\n\n@memoize\ndef slow_add(a, b):\n    import time; time.sleep(0.1)\n    return a + b\n\nprint(slow_add(1, 2))  # 3 (slow)\nprint(slow_add(1, 2))  # 3 (instant from cache)"},

// ── SHORT ANSWER 675–680 ─────────────────────────────────────────────────────
{id:675,section:"Advanced Python",sectionId:9,type:"short",difficulty:"medium",
question:"What is the difference between a generator and a list? When would you use each?",
modelAnswer:"List: eager — all values computed and stored in memory at once. O(n) memory. Supports indexing, len(), multiple iterations.\nGenerator: lazy — values computed on demand. O(1) memory. Cannot index, no len(), one-time iteration only.\nUse list when: data fits in memory, need random access, need multiple passes.\nUse generator when: large/infinite data, one-pass processing, memory is constrained.\nExample: processing a 10GB log file — generator reads line by line instead of loading 10GB into RAM."},

{id:676,section:"Advanced Python",sectionId:9,type:"short",difficulty:"easy",
question:"What is a Python decorator and what is it used for?",
modelAnswer:"A decorator is a function that takes a function, adds behavior, and returns a new function.\n@decorator\ndef func(): ...\nis syntactic sugar for: func = decorator(func)\nCommon uses:\n1. Logging: log function calls\n2. Timing: measure execution time\n3. Authentication: check if user is logged in before running\n4. Caching: memoize expensive function results\n5. Retry: retry on failure\nDecorators promote the Open-Closed Principle — extend behavior without modifying original code."},

{id:677,section:"Advanced Python",sectionId:9,type:"short",difficulty:"medium",
question:"What is the difference between an iterator and an iterable?",
modelAnswer:"Iterable: any object you can loop over (list, tuple, str, set, dict, generator). Has __iter__ method.\nIterator: an object that produces values one at a time. Has both __iter__ and __next__ methods. Once exhausted, it's done.\nA list is iterable but NOT an iterator. iter(lst) creates an iterator from a list.\nExample:\nlst = [1,2,3]   # iterable\nit = iter(lst)   # iterator\nprint(next(it))  # 1\nprint(next(it))  # 2\nAll iterators are iterables, but not all iterables are iterators."},

{id:678,section:"Advanced Python",sectionId:9,type:"short",difficulty:"easy",
question:"When would you use map/filter vs a list comprehension?",
modelAnswer:"Use list comprehension when: transformation or filtering logic is clear and concise.\n[x**2 for x in range(10) if x%2==0]  # clear and Pythonic\nUse map()/filter() when: applying an existing named function.\nmap(str, numbers)   # cleaner than [str(x) for x in numbers]\nfilter(None, lst)   # remove falsy values\nGeneral rule: list comprehension is preferred in Python for readability. map/filter are fine for simple named function application."},

{id:679,section:"Advanced Python",sectionId:9,type:"short",difficulty:"medium",
question:"What is lazy evaluation and how does Python use it?",
modelAnswer:"Lazy evaluation = computing values only when needed, not upfront.\nPython examples:\n1. Generators: yield produces one value at a time\n2. map() / filter(): return lazy iterators in Python 3\n3. range(): doesn't create the full list, produces on demand\n4. Conditional short-circuit: True or expensive_func() — expensive_func() is never called\nBenefits: memory efficient, can handle infinite sequences, faster startup."},

{id:680,section:"Advanced Python",sectionId:9,type:"short",difficulty:"hard",
question:"What is functools.partial and when would you use it?",
modelAnswer:"functools.partial creates a new function with some arguments pre-filled (partial application).\nfrom functools import partial\ndef power(base, exp): return base ** exp\nsquare = partial(power, exp=2)  # exp always = 2\ncube = partial(power, exp=3)\nprint(square(5))  # 25\nprint(cube(5))    # 125\nUse cases:\n1. Create specialized versions of generic functions\n2. Adapt functions for use with map() when they need extra args\n3. Event handlers that need extra context"},
];
