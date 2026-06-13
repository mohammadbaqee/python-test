const SECTION4_QUESTIONS = [
// ── MCQ 301–325 ──────────────────────────────────────────────────────────────
{id:301,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"easy",
question:"What is the output of:\nlst = [1, 2, 3]\nlst.append([4, 5])\nprint(len(lst))",
options:["5","4","3","Error"],
correct:[1],explanation:"append() adds [4,5] as a single element. Length becomes 4."},

{id:302,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"easy",
question:"What is the output of:\nlst = [1, 2, 3, 4, 5]\nprint(lst[1:4])",
options:["[1,2,3]","[2,3,4]","[2,3,4,5]","[1,2,3,4]"],
correct:[1],explanation:"Slicing [1:4] gets indices 1,2,3 → [2,3,4]. Stop index is exclusive."},

{id:303,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"easy",
question:"What is the output of:\nlst = [1, 2, 3]\nlst.extend([4, 5])\nprint(lst)",
options:["[1,2,3,[4,5]]","[1,2,3,4,5]","[4,5,1,2,3]","Error"],
correct:[1],explanation:"extend() adds each element of the iterable individually. Result: [1,2,3,4,5]."},

{id:304,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"easy",
question:"What is the output of:\nlst = [3, 1, 4, 1, 5, 9]\nprint(sorted(lst))",
options:["[3,1,4,1,5,9]","[1,1,3,4,5,9]","[9,5,4,3,1,1]","Error"],
correct:[1],explanation:"sorted() returns a NEW sorted list without modifying the original."},

{id:305,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nlst = [3, 1, 4, 1, 5]\nlst.sort(reverse=True)\nprint(lst)",
options:["[1,1,3,4,5]","[5,4,3,1,1]","[3,1,4,1,5]","Error"],
correct:[1],explanation:".sort() modifies in-place. reverse=True gives descending order."},

{id:306,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"easy",
question:"What is the output of:\nd = {'a':1, 'b':2, 'c':3}\nprint(d.get('d', 0))",
options:["None","0","Error","KeyError"],
correct:[1],explanation:"dict.get(key, default) returns default if key not found. 'd' not in dict, returns 0."},

{id:307,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"easy",
question:"What is the output of:\nd = {'a':1, 'b':2}\nd['c'] = 3\nprint(len(d))",
options:["2","3","4","Error"],
correct:[1],explanation:"Adding 'c':3 increases the dict length from 2 to 3."},

{id:308,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\ns = {1, 2, 3}\ns.add(2)\nprint(len(s))",
options:["4","3","2","Error"],
correct:[1],explanation:"Sets don't allow duplicates. Adding 2 again has no effect. Length stays 3."},

{id:309,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint({1, 2, 3} & {2, 3, 4})",
options:["{1,2,3,4}","{2,3}","{1,4}","Error"],
correct:[1],explanation:"& is intersection. Elements in both sets: {2, 3}."},

{id:310,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint({1, 2, 3} | {3, 4, 5})",
options:["{3}","{1,2,4,5}","{1,2,3,4,5}","Error"],
correct:[2],explanation:"| is union. All unique elements from both sets: {1,2,3,4,5}."},

{id:311,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint({1,2,3} - {2,3,4})",
options:["{1}","{2,3}","{4}","Error"],
correct:[0],explanation:"- is set difference. Elements in first set NOT in second: {1}."},

{id:312,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nlst = [1, 2, 3, 4, 5]\nprint(lst[-1])",
options:["5","1","Error","None"],
correct:[0],explanation:"Negative index -1 refers to the last element: 5."},

{id:313,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nlst = [1, 2, 3, 4, 5]\nprint(lst[::-1])",
options:["[5,4,3,2,1]","[1,2,3,4,5]","Error","[5,4,3]"],
correct:[0],explanation:"[::-1] reverses the list. step=-1 means go backwards."},

{id:314,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"easy",
question:"What is the output of:\nt = (1, 2, 3)\nt[0] = 10",
options:["(10, 2, 3)","Error","(1, 2, 3)","(10,)"],
correct:[1],explanation:"Tuples are immutable. You cannot modify elements. Raises TypeError."},

{id:315,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint([x**2 for x in range(5)])",
options:["[0,1,4,9,16]","[1,4,9,16,25]","[0,2,4,6,8]","Error"],
correct:[0],explanation:"List comprehension: x² for x in 0,1,2,3,4 → [0,1,4,9,16]."},

{id:316,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint([x for x in range(10) if x%2==0])",
options:["[0,2,4,6,8]","[1,3,5,7,9]","[0,2,4,6,8,10]","Error"],
correct:[0],explanation:"Filter: keep only even numbers from 0-9."},

{id:317,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nd = {x: x**2 for x in range(4)}\nprint(d)",
options:["{0:0,1:1,2:4,3:9}","[0,1,4,9]","{0,1,4,9}","Error"],
correct:[0],explanation:"Dict comprehension: {x: x²} for x in 0,1,2,3."},

{id:318,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint('b' in {'a':1, 'b':2})",
options:["True","False","2","Error"],
correct:[0],explanation:"'in' checks KEYS of a dictionary. 'b' is a key, so True."},

{id:319,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nlst = [1, [2, 3], [4, [5, 6]]]\nprint(lst[2][1][0])",
options:["4","5","6","Error"],
correct:[1],explanation:"lst[2] = [4,[5,6]], [1] = [5,6], [0] = 5."},

{id:320,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nimport copy\nlst = [[1,2],[3,4]]\nlst2 = copy.copy(lst)\nlst2[0][0] = 99\nprint(lst[0][0])",
options:["1","99","Error","None"],
correct:[1],explanation:"Shallow copy: lst2 contains references to same inner lists. Modifying lst2[0] also modifies lst[0]."},

{id:321,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nd = {'a':1, 'b':2, 'c':3}\nprint(sorted(d))",
options:["['a','b','c']","{'a':1,'b':2,'c':3}","[1,2,3]","Error"],
correct:[0],explanation:"sorted() on a dict sorts its KEYS. Returns ['a','b','c']."},

{id:322,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(list(zip([1,2,3],[4,5,6])))",
options:["[(1,4),(2,5),(3,6)]","[1,4,2,5,3,6]","[(1,2,3),(4,5,6)]","Error"],
correct:[0],explanation:"zip() pairs elements from both lists: [(1,4),(2,5),(3,6)]."},

{id:323,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"easy",
question:"What is the output of:\nlst = [1, 2, 3]\nprint(lst.pop())",
options:["1","3","2","Error"],
correct:[1],explanation:"pop() with no argument removes and returns the LAST element: 3."},

{id:324,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nprint(dict.fromkeys(['a','b','c'], 0))",
options:["{'a':0,'b':0,'c':0}","['a','b','c']","{0:0,0:0,0:0}","Error"],
correct:[0],explanation:"fromkeys() creates a dict with given keys and a common default value."},

{id:325,section:"Data Structures",sectionId:4,type:"mcq",difficulty:"medium",
question:"What is the output of:\nlst = [1, 2, 3, 4]\nprint(lst[::2])",
options:["[1,3]","[2,4]","[1,2]","[1,2,3,4]"],
correct:[0],explanation:"[::2] takes every 2nd element starting from index 0: [1,3]."},

// ── MSQ 326–337 ──────────────────────────────────────────────────────────────
{id:326,section:"Data Structures",sectionId:4,type:"msq",difficulty:"easy",
question:"Which of the following are mutable data structures in Python? (Select all that apply)",
options:["list","tuple","dict","set"],
correct:[0,2,3],explanation:"list, dict, and set are mutable. tuple is immutable."},

{id:327,section:"Data Structures",sectionId:4,type:"msq",difficulty:"easy",
question:"Which methods can add elements to a list? (Select all that apply)",
options:["append()","extend()","insert()","add()"],
correct:[0,1,2],explanation:"append() adds one, extend() adds multiple, insert() adds at index. add() is a set method."},

{id:328,section:"Data Structures",sectionId:4,type:"msq",difficulty:"easy",
question:"Which of the following are ordered (maintain insertion order) in Python 3.7+? (Select all that apply)",
options:["list","tuple","dict","set"],
correct:[0,1,2],explanation:"list, tuple, and dict (Python 3.7+) maintain insertion order. Sets are unordered."},

{id:329,section:"Data Structures",sectionId:4,type:"msq",difficulty:"medium",
question:"Which of the following dict methods return a view object? (Select all that apply)",
options:["keys()","values()","items()","get()"],
correct:[0,1,2],explanation:"keys(), values(), and items() return view objects. get() returns a value or default."},

{id:330,section:"Data Structures",sectionId:4,type:"msq",difficulty:"medium",
question:"Which of the following are valid set operations in Python? (Select all that apply)",
options:["union (|)","intersection (&)","difference (-)","division (/)"],
correct:[0,1,2],explanation:"Sets support union |, intersection &, and difference -. Division / is not a set operation."},

{id:331,section:"Data Structures",sectionId:4,type:"msq",difficulty:"easy",
question:"Which of the following can be used as dictionary keys? (Select all that apply)",
options:["int","str","list","tuple"],
correct:[0,1,3],explanation:"Dict keys must be hashable (immutable). int, str, tuple are hashable. list is mutable and not hashable."},

{id:332,section:"Data Structures",sectionId:4,type:"msq",difficulty:"medium",
question:"Which of the following comprehensions are valid in Python? (Select all that apply)",
options:["List comprehension: [x for x in range(5)]","Dict comprehension: {k:v for k,v in items}","Set comprehension: {x for x in lst}","Tuple comprehension: (x for x in lst)"],
correct:[0,1,2,3],explanation:"All are valid. (x for x in lst) creates a GENERATOR, not a tuple. Use tuple(x for x in lst) for a tuple."},

{id:333,section:"Data Structures",sectionId:4,type:"msq",difficulty:"medium",
question:"Which of the following are true about tuples vs lists? (Select all that apply)",
options:["Tuples are immutable; lists are mutable","Tuples can be dict keys; lists cannot","Lists use [] and tuples use ()","Tuples are generally faster than lists"],
correct:[0,1,2,3],explanation:"All four are true differences between tuples and lists."},

{id:334,section:"Data Structures",sectionId:4,type:"msq",difficulty:"medium",
question:"Which methods remove elements from a list? (Select all that apply)",
options:["pop()","remove()","del lst[i]","discard()"],
correct:[0,1,2],explanation:"pop() removes by index (returns element), remove() removes by value, del lst[i] removes by index. discard() is a set method."},

{id:335,section:"Data Structures",sectionId:4,type:"msq",difficulty:"easy",
question:"Which of the following can store duplicate values? (Select all that apply)",
options:["list","tuple","dict","set"],
correct:[0,1],explanation:"Lists and tuples allow duplicates. Sets and dict keys do not allow duplicates."},

{id:336,section:"Data Structures",sectionId:4,type:"msq",difficulty:"medium",
question:"Which of the following are ways to copy a list? (Select all that apply)",
options:["lst.copy()","list(lst)","lst[:]","import copy; copy.deepcopy(lst)"],
correct:[0,1,2,3],explanation:"All four create a copy. Note: the first three are SHALLOW copies; deepcopy creates a fully independent deep copy."},

{id:337,section:"Data Structures",sectionId:4,type:"msq",difficulty:"medium",
question:"Which of the following are true about Python sets? (Select all that apply)",
options:["Sets are unordered","Sets do not allow duplicates","Sets support O(1) average lookup","Sets can contain lists as elements"],
correct:[0,1,2],explanation:"Sets are unordered, no duplicates, O(1) lookup. Lists are not hashable so cannot be set elements."},

// ── CODING 338–345 ───────────────────────────────────────────────────────────
{id:338,section:"Data Structures",sectionId:4,type:"coding",difficulty:"medium",
question:"Write a function to remove duplicates from a list while preserving the original order.",
starterCode:"def remove_duplicates(lst):\n    # Write your solution here\n    pass\n\nprint(remove_duplicates([1,2,3,2,1,4]))  # Expected: [1,2,3,4]",
modelAnswer:"def remove_duplicates(lst):\n    seen = set()\n    result = []\n    for item in lst:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result\n\nprint(remove_duplicates([1,2,3,2,1,4]))  # [1,2,3,4]"},

{id:339,section:"Data Structures",sectionId:4,type:"coding",difficulty:"medium",
question:"Write a function that counts the frequency of each word in a sentence.",
starterCode:"def word_frequency(sentence):\n    # Write your solution here\n    pass\n\nprint(word_frequency('to be or not to be'))  # {'to':2,'be':2,'or':1,'not':1}",
modelAnswer:"def word_frequency(sentence):\n    freq = {}\n    for word in sentence.split():\n        freq[word] = freq.get(word, 0) + 1\n    return freq\n\nprint(word_frequency('to be or not to be'))"},

{id:340,section:"Data Structures",sectionId:4,type:"coding",difficulty:"medium",
question:"Write a function to find common elements of two lists (without duplicates).",
starterCode:"def common_elements(lst1, lst2):\n    # Write your solution here\n    pass\n\nprint(common_elements([1,2,3,4],[3,4,5,6]))  # [3,4]",
modelAnswer:"def common_elements(lst1, lst2):\n    return list(set(lst1) & set(lst2))\n\nprint(common_elements([1,2,3,4],[3,4,5,6]))  # [3,4] or [4,3]"},

{id:341,section:"Data Structures",sectionId:4,type:"coding",difficulty:"medium",
question:"Write a function that sorts a dictionary by its values in descending order.",
starterCode:"def sort_by_value(d):\n    # Write your solution here\n    pass\n\nprint(sort_by_value({'a':3,'b':1,'c':2}))  # {'a':3,'c':2,'b':1}",
modelAnswer:"def sort_by_value(d):\n    return dict(sorted(d.items(), key=lambda x: x[1], reverse=True))\n\nprint(sort_by_value({'a':3,'b':1,'c':2}))"},

{id:342,section:"Data Structures",sectionId:4,type:"coding",difficulty:"medium",
question:"Write a function to flatten a nested list (one level deep).",
starterCode:"def flatten(lst):\n    # Write your solution here\n    pass\n\nprint(flatten([[1,2],[3,4],[5]]))  # [1,2,3,4,5]",
modelAnswer:"def flatten(lst):\n    return [item for sublist in lst for item in sublist]\n\nprint(flatten([[1,2],[3,4],[5]]))  # [1,2,3,4,5]"},

{id:343,section:"Data Structures",sectionId:4,type:"coding",difficulty:"hard",
question:"Given a list of strings, group anagrams together.\nExample: ['eat','tea','tan','ate','nat','bat'] → [['eat','tea','ate'],['tan','nat'],['bat']]",
starterCode:"def group_anagrams(words):\n    # Write your solution here\n    pass\n\nprint(group_anagrams(['eat','tea','tan','ate','nat','bat']))",
modelAnswer:"def group_anagrams(words):\n    groups = {}\n    for word in words:\n        key = tuple(sorted(word))\n        groups.setdefault(key, []).append(word)\n    return list(groups.values())\n\nprint(group_anagrams(['eat','tea','tan','ate','nat','bat']))"},

{id:344,section:"Data Structures",sectionId:4,type:"coding",difficulty:"medium",
question:"Two Sum: Given a list and a target, find two numbers that add up to target. Return their indices.",
starterCode:"def two_sum(nums, target):\n    # Write your solution here\n    pass\n\nprint(two_sum([2,7,11,15], 9))  # Expected: [0,1] (2+7=9)",
modelAnswer:"def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []\n\nprint(two_sum([2,7,11,15], 9))  # [0,1]"},

{id:345,section:"Data Structures",sectionId:4,type:"coding",difficulty:"medium",
question:"Write a function to merge two sorted lists into one sorted list without using sort().",
starterCode:"def merge_sorted(l1, l2):\n    # Write your solution here\n    pass\n\nprint(merge_sorted([1,3,5],[2,4,6]))  # Expected: [1,2,3,4,5,6]",
modelAnswer:"def merge_sorted(l1, l2):\n    result = []\n    i = j = 0\n    while i < len(l1) and j < len(l2):\n        if l1[i] <= l2[j]:\n            result.append(l1[i]); i += 1\n        else:\n            result.append(l2[j]); j += 1\n    result.extend(l1[i:])\n    result.extend(l2[j:])\n    return result\n\nprint(merge_sorted([1,3,5],[2,4,6]))"},

// ── SHORT ANSWER 346–355 ─────────────────────────────────────────────────────
{id:346,section:"Data Structures",sectionId:4,type:"short",difficulty:"easy",
question:"What is the difference between a list and a set in Python?",
modelAnswer:"List: ordered, allows duplicates, supports indexing, O(n) lookup.\nSet: unordered, NO duplicates, NO indexing, O(1) average lookup.\nUse set when: checking membership, removing duplicates, set operations (union/intersection).\nUse list when: order matters, duplicates needed, indexing required."},

{id:347,section:"Data Structures",sectionId:4,type:"short",difficulty:"easy",
question:"What is the difference between append() and extend() for lists?",
modelAnswer:"append(x): adds x as a SINGLE element at the end.\n  lst = [1,2,3]; lst.append([4,5]) → [1,2,3,[4,5]]\nextend(iterable): adds each element of iterable individually.\n  lst = [1,2,3]; lst.extend([4,5]) → [1,2,3,4,5]\nKey difference: append adds one element (even if it's a list); extend unpacks and adds each item."},

{id:348,section:"Data Structures",sectionId:4,type:"short",difficulty:"easy",
question:"When should you use a tuple instead of a list?",
modelAnswer:"Use a tuple when:\n1. Data should not change (immutable) — coordinates, RGB values, DB records.\n2. As dictionary keys (lists can't be dict keys, tuples can).\n3. Returning multiple values from a function — Python packs them as tuples.\n4. Slightly faster than lists for iteration.\nUse list when you need to modify (add/remove/change) elements."},

{id:349,section:"Data Structures",sectionId:4,type:"short",difficulty:"medium",
question:"How does a Python dictionary work internally? What is hashing?",
modelAnswer:"A dict uses a hash table internally.\nWhen you do d['key'] = value:\n1. Python calls hash('key') to compute a hash (integer).\n2. The hash determines which 'bucket' to store the value in.\n3. For lookup, Python hashes the key again and checks that bucket — O(1) average.\nHashable: objects with a fixed hash (int, str, tuple). Mutable objects (list, dict) are not hashable and cannot be dict keys."},

{id:350,section:"Data Structures",sectionId:4,type:"short",difficulty:"medium",
question:"What is the difference between a shallow copy and a deep copy?",
modelAnswer:"Shallow copy: creates a new object but references the SAME inner objects.\nimport copy; lst2 = copy.copy(lst) OR lst2 = lst[:]\nModifying nested objects in lst2 ALSO changes lst.\n\nDeep copy: creates a fully independent copy — new object AND new inner objects.\nlst2 = copy.deepcopy(lst)\nModifying lst2 never affects lst.\n\nFor flat lists of immutables (ints, strings), shallow and deep copy behave the same."},

{id:351,section:"Data Structures",sectionId:4,type:"short",difficulty:"easy",
question:"What is the difference between dict['key'] and dict.get('key')?",
modelAnswer:"d['key']: raises KeyError if key doesn't exist.\nd.get('key'): returns None (or a default value) if key doesn't exist — no exception.\nBest practice: use .get() when the key may not exist.\nd.get('name', 'Unknown')  # returns 'Unknown' if 'name' not in d"},

{id:352,section:"Data Structures",sectionId:4,type:"short",difficulty:"medium",
question:"What is a list comprehension? How is it better than a regular loop?",
modelAnswer:"List comprehension: one-line syntax to create a list.\n[expression for item in iterable if condition]\nExample: [x**2 for x in range(10) if x%2==0]\nAdvantages:\n1. More concise and readable\n2. Faster than equivalent for loop (C-level optimization in CPython)\n3. Creates a new list directly\nUse for simple transformations. For complex logic, use a regular loop for readability."},

{id:353,section:"Data Structures",sectionId:4,type:"short",difficulty:"easy",
question:"What are the differences between sorted() and list.sort()?",
modelAnswer:"sorted(iterable): works on ANY iterable, returns a NEW sorted list, original unchanged.\nlist.sort(): works ONLY on lists, sorts IN-PLACE, returns None.\nExample:\nlst = [3,1,2]\nnew = sorted(lst)  # [1,2,3] — lst unchanged\nlst.sort()         # lst is now [1,2,3] — in-place\nPrefer sorted() when you need the original unchanged; .sort() for efficiency (no new list created)."},

{id:354,section:"Data Structures",sectionId:4,type:"short",difficulty:"medium",
question:"What does zip() do? Give a practical example.",
modelAnswer:"zip() pairs elements from multiple iterables into tuples, stopping at the shortest.\nExample:\nnames = ['Alice','Bob','Charlie']\nscores = [90, 85, 92]\nfor name, score in zip(names, scores):\n    print(f'{name}: {score}')\nPractical uses: iterating over two lists in parallel, creating dicts from two lists:\nd = dict(zip(keys, values))"},

{id:355,section:"Data Structures",sectionId:4,type:"short",difficulty:"easy",
question:"What is the time complexity of common list operations in Python?",
modelAnswer:"Access by index lst[i]: O(1)\nSearch (in operator): O(n)\nAppend at end: O(1) amortized\nInsert at beginning: O(n) — all elements shift\nDelete by index: O(n)\nSort: O(n log n)\nFor O(1) lookup, use a dict or set instead of a list."},
];
