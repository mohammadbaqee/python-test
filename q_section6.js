const SECTION6_QUESTIONS = [
// ═══════════════════════════════════════════════════════
// SECTION 6: FILE HANDLING (sectionId: 6, ids 501-535)
// ═══════════════════════════════════════════════════════
// ── MCQ 501–515 ──────────────────────────────────────────────────────────────
{id:501,section:"File Handling",sectionId:6,type:"mcq",difficulty:"easy",
question:"Which of the following correctly opens a file for reading?",
options:["open('file.txt', 'r')","open('file.txt', 'read')","open('file.txt')","Both A and C"],
correct:[3],explanation:"open('file.txt') defaults to 'r' mode. Both A and C are correct."},

{id:502,section:"File Handling",sectionId:6,type:"mcq",difficulty:"easy",
question:"What does file mode 'w' do?",
options:["Read only","Write only (truncates existing content)","Append to file","Read and write"],
correct:[1],explanation:"'w' opens for writing. If file exists, it is TRUNCATED (emptied). If not, creates it."},

{id:503,section:"File Handling",sectionId:6,type:"mcq",difficulty:"easy",
question:"What does file mode 'a' do?",
options:["Read only","Truncates and writes","Appends without erasing existing content","Raises error if file exists"],
correct:[2],explanation:"'a' appends to file. Existing content is preserved. File pointer is at end."},

{id:504,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What is the output of:\nwith open('test.txt', 'w') as f:\n    f.write('Hello')\nwith open('test.txt', 'w') as f:\n    f.write('World')\nwith open('test.txt') as f:\n    print(f.read())",
options:["HelloWorld","Hello\nWorld","World","Hello"],
correct:[2],explanation:"Second 'w' opens truncates the file and writes 'World'. 'Hello' is gone."},

{id:505,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What does f.readline() do?",
options:["Reads all lines into a list","Reads the entire file","Reads one line at a time","Reads last line"],
correct:[2],explanation:"readline() reads ONE line per call, including the newline character."},

{id:506,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What does f.readlines() return?",
options:["A string with all content","A list of all lines","The number of lines","The first line"],
correct:[1],explanation:"readlines() returns a LIST where each element is a line (with newline chars)."},

{id:507,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What is the difference between 'r+' and 'w+' mode?",
options:["No difference","r+ reads only; w+ writes only","r+ preserves content; w+ truncates content","r+ is faster"],
correct:[2],explanation:"r+: opens for reading AND writing, does NOT truncate. w+: opens for reading AND writing, DOES truncate (empties file)."},

{id:508,section:"File Handling",sectionId:6,type:"mcq",difficulty:"easy",
question:"Why should you use 'with open()' instead of just 'open()'?",
options:["It's faster","It automatically closes the file even if an exception occurs","It's required for binary files","It reads faster"],
correct:[1],explanation:"'with' is a context manager. It calls file.close() automatically when the block exits, even if an exception occurs."},

{id:509,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What does json.dump() do?",
options:["Reads JSON from a file","Converts JSON string to dict","Writes Python object as JSON to a file","Parses a JSON string"],
correct:[2],explanation:"json.dump(obj, file) writes the Python object as JSON to an open file."},

{id:510,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What is the difference between json.dumps() and json.dump()?",
options:["No difference","dumps() writes to file; dump() returns string","dumps() returns string; dump() writes to file","dumps() is for dict; dump() is for list"],
correct:[2],explanation:"json.dumps() → converts to JSON STRING (s = 'string'). json.dump() → writes to FILE."},

{id:511,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What does json.loads() do?",
options:["Loads JSON from a file","Converts a JSON string to a Python object","Writes a Python dict to JSON","Lists all JSON keys"],
correct:[1],explanation:"json.loads(string) parses a JSON-formatted string and returns a Python dict/list/etc."},

{id:512,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What does f.write() return?",
options:["None","The string written","The number of characters written","True on success"],
correct:[2],explanation:"file.write(s) returns the number of characters written."},

{id:513,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What does 'rb' mode mean?",
options:["Read with buffer","Read binary","Read backwards","Read bytes as string"],
correct:[1],explanation:"'rb' = Read Binary. Used for non-text files like images, PDFs, pickled data."},

{id:514,section:"File Handling",sectionId:6,type:"mcq",difficulty:"medium",
question:"What does os.path.exists('file.txt') do?",
options:["Creates the file","Deletes the file","Returns True if file exists, else False","Returns file size"],
correct:[2],explanation:"os.path.exists() checks if a path exists. Returns True or False."},

{id:515,section:"File Handling",sectionId:6,type:"mcq",difficulty:"easy",
question:"Which module do you import to work with CSV files?",
options:["csv","file","io","pandas"],
correct:[0],explanation:"import csv — Python's built-in csv module handles reading and writing CSV files."},

// ── MSQ 516–523 ──────────────────────────────────────────────────────────────
{id:516,section:"File Handling",sectionId:6,type:"msq",difficulty:"easy",
question:"Which file modes allow writing? (Select all that apply)",
options:["'w'","'r'","'a'","'r+'"],
correct:[0,2,3],explanation:"'w' (write+truncate), 'a' (append), 'r+' (read+write) all allow writing. 'r' is read-only."},

{id:517,section:"File Handling",sectionId:6,type:"msq",difficulty:"medium",
question:"What does the 'with' statement guarantee? (Select all that apply)",
options:["File is always closed","Exception handling for file errors","No need to call f.close()","Faster file reading"],
correct:[0,2],explanation:"'with' guarantees the file is closed via __exit__, so you don't need to call close() manually. It doesn't automatically handle all exceptions for you."},

{id:518,section:"File Handling",sectionId:6,type:"msq",difficulty:"medium",
question:"Which are valid json module functions? (Select all that apply)",
options:["json.load()","json.loads()","json.dump()","json.dumps()"],
correct:[0,1,2,3],explanation:"All four: load() reads from file, loads() parses string, dump() writes to file, dumps() returns string."},

{id:519,section:"File Handling",sectionId:6,type:"msq",difficulty:"medium",
question:"Which of the following are valid os.path functions? (Select all that apply)",
options:["os.path.exists()","os.path.join()","os.path.split()","os.path.read()"],
correct:[0,1,2],explanation:"exists(), join(), split() are valid os.path functions. os.path.read() does not exist."},

{id:520,section:"File Handling",sectionId:6,type:"msq",difficulty:"medium",
question:"What are advantages of using csv.DictReader over csv.reader? (Select all that apply)",
options:["Rows returned as dicts with header keys","Easier column access by name","Automatically handles quoted fields","Always faster"],
correct:[0,1,2],explanation:"DictReader returns OrderedDict/dict per row with keys from header — easier access. csv.reader returns plain lists. Both handle quoted fields; DictReader isn't always faster."},

{id:521,section:"File Handling",sectionId:6,type:"msq",difficulty:"easy",
question:"Which Python data types can be serialized to JSON? (Select all that apply)",
options:["dict","list","set","tuple"],
correct:[0,1,3],explanation:"JSON supports dict, list, str, int, float, bool, None. set is NOT JSON-serializable (convert to list first). tuple is serialized as JSON array."},

{id:522,section:"File Handling",sectionId:6,type:"msq",difficulty:"medium",
question:"Which of the following are true about file modes in Python? (Select all that apply)",
options:["'w' creates the file if it doesn't exist","'r' raises FileNotFoundError if file missing","'a' moves pointer to end of file","'x' creates new file, fails if already exists"],
correct:[0,1,2,3],explanation:"All are correct. 'x' (exclusive creation) is a less common but valid mode."},

{id:523,section:"File Handling",sectionId:6,type:"msq",difficulty:"medium",
question:"Which methods can be used to read from a file? (Select all that apply)",
options:["read()","readline()","readlines()","readall()"],
correct:[0,1,2],explanation:"read(), readline(), readlines() are all valid. readall() does not exist."},

// ── CODING 524–529 ───────────────────────────────────────────────────────────
{id:524,section:"File Handling",sectionId:6,type:"coding",difficulty:"medium",
question:"Write a Python program to count the number of lines, words, and characters in a text file 'sample.txt'.",
starterCode:"# Assume 'sample.txt' exists\n# Write your solution here\n",
modelAnswer:"with open('sample.txt', 'r') as f:\n    content = f.read()\nlines = content.split('\\n')\nwords = content.split()\nchars = len(content)\nprint(f'Lines: {len(lines)}')\nprint(f'Words: {len(words)}')\nprint(f'Characters: {chars}')"},

{id:525,section:"File Handling",sectionId:6,type:"coding",difficulty:"easy",
question:"Write a program to write a list of student names to a file 'names.txt', one per line.",
starterCode:"students = ['Alice', 'Bob', 'Charlie', 'Diana']\n# Write your solution here\n",
modelAnswer:"students = ['Alice', 'Bob', 'Charlie', 'Diana']\nwith open('names.txt', 'w') as f:\n    for name in students:\n        f.write(name + '\\n')\nprint('Names written successfully.')"},

{id:526,section:"File Handling",sectionId:6,type:"coding",difficulty:"medium",
question:"Write a Python program to read a CSV file 'students.csv' (with columns name, marks) and print students who scored above 75.",
starterCode:"import csv\n# Assume 'students.csv' exists with columns: name, marks\n# Write your solution here\n",
modelAnswer:"import csv\nwith open('students.csv', 'r') as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        if int(row['marks']) > 75:\n            print(row['name'], row['marks'])"},

{id:527,section:"File Handling",sectionId:6,type:"coding",difficulty:"medium",
question:"Write a program to save a Python dictionary as JSON to 'data.json' and read it back.",
starterCode:"import json\ndata = {'name': 'Alice', 'age': 22, 'skills': ['Python', 'SQL']}\n# Write your solution here\n",
modelAnswer:"import json\ndata = {'name': 'Alice', 'age': 22, 'skills': ['Python', 'SQL']}\n# Write to JSON\nwith open('data.json', 'w') as f:\n    json.dump(data, f, indent=4)\n# Read from JSON\nwith open('data.json', 'r') as f:\n    loaded = json.load(f)\nprint(loaded)"},

{id:528,section:"File Handling",sectionId:6,type:"coding",difficulty:"medium",
question:"Write a program to find and replace a word in a file. Replace 'Python' with 'Java' in 'code.txt'.",
starterCode:"# Assume 'code.txt' exists\n# Write your solution here\n",
modelAnswer:"with open('code.txt', 'r') as f:\n    content = f.read()\nnew_content = content.replace('Python', 'Java')\nwith open('code.txt', 'w') as f:\n    f.write(new_content)\nprint('Replacement done.')"},

{id:529,section:"File Handling",sectionId:6,type:"coding",difficulty:"easy",
question:"Write a program to append a new log entry to 'app.log' with the current timestamp.",
starterCode:"from datetime import datetime\n# Write your solution here\n",
modelAnswer:"from datetime import datetime\nlog_entry = f'[{datetime.now()}] App started\\n'\nwith open('app.log', 'a') as f:\n    f.write(log_entry)\nprint('Log entry added.')"},

// ── SHORT ANSWER 530–535 ─────────────────────────────────────────────────────
{id:530,section:"File Handling",sectionId:6,type:"short",difficulty:"easy",
question:"Why should you use 'with open()' instead of open() + f.close()?",
modelAnswer:"The 'with' statement is a context manager. It automatically calls f.close() when the block exits — even if an exception is raised inside the block.\nWithout 'with':\nf = open('file.txt')\ncontent = f.read()  # if exception here...\nf.close()           # ...this never runs → file stays open\nWith 'with':\nwith open('file.txt') as f:\n    content = f.read()  # exception or not, file closes\nThis prevents resource leaks."},

{id:531,section:"File Handling",sectionId:6,type:"short",difficulty:"medium",
question:"What is the difference between 'r+' and 'w+' mode?",
modelAnswer:"Both allow reading AND writing. But:\nr+ (read/write): opens existing file, does NOT truncate. Pointer starts at beginning.\nw+ (write/read): opens file for writing, TRUNCATES (empties) existing content. Creates file if not exists.\nUse r+ when you want to update a file without losing existing content.\nUse w+ when you want to overwrite the file and also read from it."},

{id:532,section:"File Handling",sectionId:6,type:"short",difficulty:"medium",
question:"What is the difference between json.load() and json.loads()?",
modelAnswer:"json.load(file_obj): reads JSON from an open FILE object.\njson.loads(string): parses a JSON-formatted STRING.\nSimilarly:\njson.dump(obj, file): writes to a file.\njson.dumps(obj): returns a JSON string.\nMnemonic: 's' at end = string (not file)."},

{id:533,section:"File Handling",sectionId:6,type:"short",difficulty:"easy",
question:"What is pickling in Python?",
modelAnswer:"Pickling is the process of serializing a Python object to a byte stream so it can be stored or transmitted.\nUnpickling is deserializing back to the original object.\nimport pickle\nwith open('data.pkl', 'wb') as f:\n    pickle.dump(obj, f)     # pickle\nwith open('data.pkl', 'rb') as f:\n    obj = pickle.load(f)    # unpickle\nUse for saving ML models, caching, session data. Warning: never unpickle data from untrusted sources (security risk)."},

{id:534,section:"File Handling",sectionId:6,type:"short",difficulty:"easy",
question:"How do you read a file line by line efficiently (without loading entire file in memory)?",
modelAnswer:"Use a for loop directly on the file object — it's lazy (reads one line at a time):\nwith open('large_file.txt') as f:\n    for line in f:\n        process(line)\nThis is memory-efficient for large files because it doesn't load all lines at once.\nAvoid readlines() for large files — it loads ALL lines into a list in memory at once."},

{id:535,section:"File Handling",sectionId:6,type:"short",difficulty:"medium",
question:"How would you use os.path to safely join file paths across operating systems?",
modelAnswer:"Use os.path.join() instead of string concatenation:\nimport os\npath = os.path.join('home', 'user', 'documents', 'file.txt')\n# On Linux: home/user/documents/file.txt\n# On Windows: home\\user\\documents\\file.txt\nWhy: different OS use different path separators (/ vs \\). os.path.join handles this automatically.\nAlso useful: os.path.exists(), os.path.dirname(), os.path.basename(), os.path.abspath()"},

// ═══════════════════════════════════════════════════════
// SECTION 7: EXCEPTION HANDLING (sectionId: 7, ids 536-570)
// ═══════════════════════════════════════════════════════
// ── MCQ 536–550 ──────────────────────────────────────────────────────────────
{id:536,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"easy",
question:"What is the output of:\ntry:\n    print(1/0)\nexcept ZeroDivisionError:\n    print('Error')\nfinally:\n    print('Done')",
options:["Error","Done","Error\nDone","1/0"],
correct:[2],explanation:"except prints 'Error'. finally ALWAYS runs and prints 'Done'."},

{id:537,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"easy",
question:"What exception is raised when you access an invalid list index?",
options:["KeyError","ValueError","IndexError","TypeError"],
correct:[2],explanation:"IndexError is raised when you try to access an index that doesn't exist."},

{id:538,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"easy",
question:"What exception is raised when a key is not found in a dictionary?",
options:["IndexError","KeyError","AttributeError","LookupError"],
correct:[1],explanation:"KeyError is raised when you try to access a dictionary key that doesn't exist."},

{id:539,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"easy",
question:"What exception is raised when you do: int('hello')?",
options:["TypeError","ValueError","SyntaxError","AttributeError"],
correct:[1],explanation:"ValueError: right type (str) but wrong value ('hello' can't be converted to int)."},

{id:540,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"easy",
question:"What exception is raised when you do: '5' + 5?",
options:["ValueError","TypeError","SyntaxError","Error"],
correct:[1],explanation:"TypeError: unsupported operand types for +: 'str' and 'int'."},

{id:541,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"medium",
question:"What is the output of:\ntry:\n    x = 1\nexcept:\n    print('Error')\nelse:\n    print('No Error')\nfinally:\n    print('Done')",
options:["Error\nDone","No Error\nDone","Done","No Error"],
correct:[1],explanation:"No exception raised, so else block runs ('No Error'). finally always runs ('Done')."},

{id:542,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"medium",
question:"When does the 'else' block in try-except run?",
options:["Always","When an exception occurs","When NO exception occurs","When finally runs"],
correct:[2],explanation:"The else block runs ONLY when the try block completes WITHOUT raising any exception."},

{id:543,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"medium",
question:"What is the output of:\ntry:\n    raise ValueError('bad value')\nexcept ValueError as e:\n    print(e)",
options:["ValueError","bad value","Error","None"],
correct:[1],explanation:"'as e' captures the exception. print(e) prints the exception message: 'bad value'."},

{id:544,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"medium",
question:"What is the output of:\ntry:\n    raise\nexcept:\n    print('Error')",
options:["Error","None","RuntimeError: No active exception","SyntaxError"],
correct:[2],explanation:"'raise' with no argument re-raises the active exception. But there's no active exception here, so RuntimeError is raised."},

{id:545,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"medium",
question:"Which exception class do all user-defined exceptions typically inherit from?",
options:["BaseException","Error","Exception","RuntimeError"],
correct:[2],explanation:"User-defined exceptions should inherit from Exception (not BaseException, which also catches SystemExit and KeyboardInterrupt)."},

{id:546,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"medium",
question:"What is the output of:\ndef func():\n    try:\n        return 1\n    finally:\n        return 2\nprint(func())",
options:["1","2","1\n2","Error"],
correct:[1],explanation:"finally always runs, even after return. The return in finally overrides the return in try. Returns 2."},

{id:547,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"easy",
question:"What does the 'assert' statement do?",
options:["Prints a message","Raises AssertionError if condition is False","Exits the program","Logs an error"],
correct:[1],explanation:"assert condition, 'message' raises AssertionError if condition is False. Used for debugging."},

{id:548,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"medium",
question:"What is exception chaining? Which keyword enables it?",
options:["Using multiple except blocks","Raising a new exception with 'raise X from Y'","Catching base exceptions","Using finally"],
correct:[1],explanation:"'raise NewException from original' chains exceptions, preserving the original traceback context."},

{id:549,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"medium",
question:"What is the output of:\ntry:\n    lst = [1,2,3]\n    print(lst[5])\nexcept IndexError:\n    print('Index Error')\nexcept Exception:\n    print('General Error')",
options:["Index Error","General Error","Index Error\nGeneral Error","Error"],
correct:[0],explanation:"IndexError is caught by the first except block. More specific exceptions should always come first."},

{id:550,section:"Exception Handling",sectionId:7,type:"mcq",difficulty:"medium",
question:"What is the output of:\ntry:\n    x = int(input())\nexcept (ValueError, TypeError) as e:\n    print('Caught:', type(e).__name__)",
options:["Caught: Exception","Caught: ValueError or Caught: TypeError","Error","Nothing"],
correct:[1],explanation:"You can catch multiple exceptions in one tuple. The caught exception type is printed."},

// ── MSQ 551–558 ──────────────────────────────────────────────────────────────
{id:551,section:"Exception Handling",sectionId:7,type:"msq",difficulty:"medium",
question:"Which of the following are built-in exceptions in Python? (Select all that apply)",
options:["ValueError","TypeError","FileNotFoundError","ConnectionError"],
correct:[0,1,2,3],explanation:"All are built-in Python exceptions."},

{id:552,section:"Exception Handling",sectionId:7,type:"msq",difficulty:"medium",
question:"When does the 'finally' block run? (Select all that apply)",
options:["When try block succeeds","When try block raises an exception","When except block catches exception","Always — no matter what"],
correct:[0,1,2,3],explanation:"finally ALWAYS runs — after try (success or failure), after except. The only exception: os._exit() or power failure."},

{id:553,section:"Exception Handling",sectionId:7,type:"msq",difficulty:"easy",
question:"Which of the following can you do in a try-except block? (Select all that apply)",
options:["Catch multiple exceptions with tuple","Use 'as' to access exception object","Have multiple except blocks","Nest try-except inside try-except"],
correct:[0,1,2,3],explanation:"All are valid. You can do all four in Python exception handling."},

{id:554,section:"Exception Handling",sectionId:7,type:"msq",difficulty:"medium",
question:"Which of the following inherit from BaseException but NOT Exception? (Select all that apply)",
options:["SystemExit","KeyboardInterrupt","GeneratorExit","RuntimeError"],
correct:[0,1,2],explanation:"SystemExit, KeyboardInterrupt, GeneratorExit inherit directly from BaseException — catching Exception won't catch them. RuntimeError inherits from Exception."},

{id:555,section:"Exception Handling",sectionId:7,type:"msq",difficulty:"medium",
question:"Which are valid uses of the 'raise' statement? (Select all that apply)",
options:["raise ValueError('message')","raise  (re-raises current exception)","raise ValueError from original_exception","raise 'error message'"],
correct:[0,1,2],explanation:"You can raise an exception class instance, re-raise with bare raise, or chain exceptions. You CANNOT raise a plain string."},

{id:556,section:"Exception Handling",sectionId:7,type:"msq",difficulty:"easy",
question:"Which exceptions are raised by these operations? (Select all that apply that are correct pairings)",
options:["int('abc') → ValueError","[][5] → IndexError","{}['x'] → KeyError","1/0 → ZeroDivisionError"],
correct:[0,1,2,3],explanation:"All four pairings are correct."},

{id:557,section:"Exception Handling",sectionId:7,type:"msq",difficulty:"medium",
question:"Which of the following are true about user-defined exceptions? (Select all that apply)",
options:["Must inherit from Exception (or its subclass)","Can have custom attributes","Should end in 'Error' by convention","Can only be raised, not caught"],
correct:[0,1,2],explanation:"Custom exceptions inherit from Exception, can have extra attributes (like error codes), should end in 'Error'. They can definitely be caught."},

{id:558,section:"Exception Handling",sectionId:7,type:"msq",difficulty:"medium",
question:"What are advantages of exception handling? (Select all that apply)",
options:["Prevents program crash on unexpected errors","Separates error handling from normal logic","Makes code run faster","Allows graceful error messages"],
correct:[0,1,3],explanation:"Exception handling prevents crashes, separates concerns, allows graceful messages. It does NOT make code faster — there's a small overhead."},

// ── CODING 559–564 ───────────────────────────────────────────────────────────
{id:559,section:"Exception Handling",sectionId:7,type:"coding",difficulty:"medium",
question:"Create a custom exception 'InvalidAgeError' and raise it if age is negative or over 150.",
starterCode:"class InvalidAgeError(Exception):\n    # Write your solution here\n    pass\n\ndef set_age(age):\n    # Write your solution here\n    pass\n\nset_age(25)   # No error\nset_age(-5)   # Should raise InvalidAgeError",
modelAnswer:"class InvalidAgeError(Exception):\n    def __init__(self, age):\n        self.age = age\n        super().__init__(f'Invalid age: {age}. Must be 0-150.')\n\ndef set_age(age):\n    if age < 0 or age > 150:\n        raise InvalidAgeError(age)\n    print(f'Age set to {age}')\n\nset_age(25)\ntry:\n    set_age(-5)\nexcept InvalidAgeError as e:\n    print(e)"},

{id:560,section:"Exception Handling",sectionId:7,type:"coding",difficulty:"medium",
question:"Write a function that keeps asking for integer input until valid input is given (using exception handling).",
starterCode:"def get_integer():\n    # Write your solution here\n    pass\n\nresult = get_integer()\nprint(f'You entered: {result}')",
modelAnswer:"def get_integer():\n    while True:\n        try:\n            return int(input('Enter an integer: '))\n        except ValueError:\n            print('Invalid input. Please enter a valid integer.')\n\nresult = get_integer()\nprint(f'You entered: {result}')"},

{id:561,section:"Exception Handling",sectionId:7,type:"coding",difficulty:"medium",
question:"Write a safe_divide function that handles ZeroDivisionError and TypeError, returning None on error.",
starterCode:"def safe_divide(a, b):\n    # Write your solution here\n    pass\n\nprint(safe_divide(10, 2))   # 5.0\nprint(safe_divide(10, 0))   # None\nprint(safe_divide(10, 'a')) # None",
modelAnswer:"def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        print('Error: Cannot divide by zero')\n        return None\n    except TypeError:\n        print('Error: Invalid types for division')\n        return None\n\nprint(safe_divide(10, 2))    # 5.0\nprint(safe_divide(10, 0))    # None\nprint(safe_divide(10, 'a'))  # None"},

{id:562,section:"Exception Handling",sectionId:7,type:"coding",difficulty:"hard",
question:"Write a function to safely read a JSON file, handling FileNotFoundError and json.JSONDecodeError.",
starterCode:"import json\n\ndef safe_read_json(filepath):\n    # Write your solution here\n    pass\n\ndata = safe_read_json('config.json')\nprint(data)",
modelAnswer:"import json\n\ndef safe_read_json(filepath):\n    try:\n        with open(filepath, 'r') as f:\n            return json.load(f)\n    except FileNotFoundError:\n        print(f'File not found: {filepath}')\n        return None\n    except json.JSONDecodeError as e:\n        print(f'Invalid JSON: {e}')\n        return None\n\ndata = safe_read_json('config.json')\nprint(data)"},

{id:563,section:"Exception Handling",sectionId:7,type:"coding",difficulty:"medium",
question:"Implement exception chaining: wrap a ValueError inside a custom exception with context.",
starterCode:"class DataProcessingError(Exception):\n    pass\n\ndef process(data):\n    # Raise DataProcessingError wrapping original exception\n    pass\n\ntry:\n    process('abc')\nexcept DataProcessingError as e:\n    print(e)\n    print(f'Caused by: {e.__cause__}')",
modelAnswer:"class DataProcessingError(Exception):\n    pass\n\ndef process(data):\n    try:\n        value = int(data)\n    except ValueError as e:\n        raise DataProcessingError(f'Failed to process {data!r}') from e\n\ntry:\n    process('abc')\nexcept DataProcessingError as e:\n    print(e)\n    print(f'Caused by: {e.__cause__}')"},

{id:564,section:"Exception Handling",sectionId:7,type:"coding",difficulty:"medium",
question:"Write a retry decorator that retries a function up to 3 times on exception before giving up.",
starterCode:"def retry(func):\n    # Write your solution here\n    pass\n\n@retry\ndef unstable_function():\n    import random\n    if random.random() < 0.7:\n        raise ValueError('Random failure')\n    return 'Success'\n\nprint(unstable_function())",
modelAnswer:"def retry(func):\n    def wrapper(*args, **kwargs):\n        for attempt in range(1, 4):\n            try:\n                return func(*args, **kwargs)\n            except Exception as e:\n                print(f'Attempt {attempt} failed: {e}')\n                if attempt == 3: raise\n    return wrapper\n\n@retry\ndef unstable_function():\n    import random\n    if random.random() < 0.7: raise ValueError('Random failure')\n    return 'Success'\n\nprint(unstable_function())"},

// ── SHORT ANSWER 565–570 ─────────────────────────────────────────────────────
{id:565,section:"Exception Handling",sectionId:7,type:"short",difficulty:"easy",
question:"Explain the purpose of try, except, else, and finally blocks.",
modelAnswer:"try: code that might raise an exception.\nexcept: code that runs if a specific exception is raised.\nelse: code that runs ONLY if no exception was raised in try.\nfinally: code that ALWAYS runs — cleanup code (close files, release resources).\nOrder: try → (exception? → except) → (no exception? → else) → finally (always)"},

{id:566,section:"Exception Handling",sectionId:7,type:"short",difficulty:"medium",
question:"What is the difference between 'raise' and 'raise e'?",
modelAnswer:"raise (bare): re-raises the CURRENT active exception with its original traceback preserved.\nraise e: raises exception 'e' but RESETS the traceback to the current location (you lose the original traceback info).\nBest practice: use bare 'raise' in except blocks when you want to re-raise without losing context:\nexcept Exception:\n    log_error()\n    raise  # preserves original traceback"},

{id:567,section:"Exception Handling",sectionId:7,type:"short",difficulty:"medium",
question:"What is the exception hierarchy in Python? What is the difference between Exception and BaseException?",
modelAnswer:"BaseException is the root of ALL exceptions.\nException inherits from BaseException and is the base for all regular exceptions.\nDirect children of BaseException (NOT Exception):\n- SystemExit (sys.exit())\n- KeyboardInterrupt (Ctrl+C)\n- GeneratorExit\nAlways catch Exception, not BaseException, unless you specifically want to catch SystemExit/KeyboardInterrupt too."},

{id:568,section:"Exception Handling",sectionId:7,type:"short",difficulty:"easy",
question:"When should you use assert statements?",
modelAnswer:"assert is for DEBUGGING and development — checking invariants and assumptions:\nassert len(lst) > 0, 'List cannot be empty'\nassert isinstance(x, int), f'Expected int, got {type(x)}'\nWhen NOT to use assert:\n- For validating user input (use if + raise instead)\n- In production code for critical checks (assert can be disabled with python -O)\nAssert raises AssertionError when the condition is False."},

{id:569,section:"Exception Handling",sectionId:7,type:"short",difficulty:"medium",
question:"How do you create and use custom exceptions in Python?",
modelAnswer:"class MyError(Exception):\n    def __init__(self, message, code=None):\n        super().__init__(message)\n        self.code = code\n\n# Raise it:\nraise MyError('Something went wrong', code=404)\n\n# Catch it:\ntry:\n    raise MyError('Bad request', code=400)\nexcept MyError as e:\n    print(e, e.code)\n\nConvention: Name ends in 'Error'. Inherit from Exception or a specific built-in exception."},

{id:570,section:"Exception Handling",sectionId:7,type:"short",difficulty:"medium",
question:"What happens if an exception is raised in the finally block?",
modelAnswer:"If an exception is raised in finally, it REPLACES the original exception from try/except.\nExample:\ntry:\n    raise ValueError('original')\nfinally:\n    raise RuntimeError('in finally')  # This is what propagates!\nResult: RuntimeError is raised, ValueError is silently discarded.\nBest practice: avoid raising exceptions in finally blocks. Use them only for guaranteed cleanup (close files, release locks)."},
];
