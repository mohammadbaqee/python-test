const SECTION5_QUESTIONS = [
// ── MCQ 401–422 ──────────────────────────────────────────────────────────────
{id:401,section:"OOP",sectionId:5,type:"mcq",difficulty:"easy",
question:"What is the output of:\nclass Dog:\n    def __init__(self, name):\n        self.name = name\nd = Dog('Rex')\nprint(d.name)",
options:["Rex","name","Dog","Error"],
correct:[0],explanation:"self.name is set to 'Rex' in __init__. d.name returns 'Rex'."},

{id:402,section:"OOP",sectionId:5,type:"mcq",difficulty:"easy",
question:"What is the output of:\nclass Counter:\n    count = 0\n    def increment(self):\n        Counter.count += 1\nc1 = Counter()\nc2 = Counter()\nc1.increment()\nc2.increment()\nprint(Counter.count)",
options:["1","2","0","Error"],
correct:[1],explanation:"count is a CLASS variable shared by all instances. Both increments apply to Counter.count. Result: 2."},

{id:403,section:"OOP",sectionId:5,type:"mcq",difficulty:"easy",
question:"What does 'self' represent in a Python class?",
options:["The class itself","The current instance","A reserved keyword","The parent class"],
correct:[1],explanation:"'self' refers to the current instance of the class. It's the first parameter of instance methods."},

{id:404,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass Animal:\n    def speak(self):\n        return 'Some sound'\nclass Dog(Animal):\n    def speak(self):\n        return 'Woof'\nd = Dog()\nprint(d.speak())",
options:["Some sound","Woof","Error","None"],
correct:[1],explanation:"Dog overrides speak(). Method resolution starts with the subclass. Dog.speak() returns 'Woof'."},

{id:405,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\nd = Dog('Rex', 'Lab')\nprint(d.name, d.breed)",
options:["Rex Lab","Error","Rex","None"],
correct:[0],explanation:"super().__init__(name) calls Animal.__init__. Dog also has breed. Both attributes are set."},

{id:406,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass MyClass:\n    def __str__(self):\n        return 'Hello from MyClass'\nobj = MyClass()\nprint(obj)",
options:["<__main__.MyClass object>","Hello from MyClass","MyClass","Error"],
correct:[1],explanation:"__str__ is called by print() and str(). Returns 'Hello from MyClass'."},

{id:407,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass A:\n    pass\nclass B(A):\n    pass\nb = B()\nprint(isinstance(b, A))",
options:["True","False","Error","None"],
correct:[0],explanation:"isinstance checks if b is an instance of A or any subclass. B inherits from A, so isinstance(b, A) is True."},

{id:408,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass MyClass:\n    def __len__(self):\n        return 42\nobj = MyClass()\nprint(len(obj))",
options:["42","Error","None","0"],
correct:[0],explanation:"len() calls __len__. Since __len__ returns 42, len(obj) = 42."},

{id:409,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the difference between a class variable and an instance variable?",
options:["No difference","Class vars are shared; instance vars are per object","Instance vars are shared; class vars are per object","Class vars are private"],
correct:[1],explanation:"Class variables are shared by all instances. Instance variables are unique to each object and defined via self."},

{id:410,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass MyClass:\n    @staticmethod\n    def greet():\n        return 'Hello'\nprint(MyClass.greet())",
options:["Hello","Error","None","<staticmethod>"],
correct:[0],explanation:"@staticmethod methods can be called on the class directly without an instance. Returns 'Hello'."},

{id:411,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass MyClass:\n    @classmethod\n    def create(cls):\n        return cls()\nobj = MyClass.create()\nprint(type(obj))",
options:["<class '__main__.MyClass'>","MyClass","None","Error"],
correct:[0],explanation:"classmethod receives cls (the class). cls() creates an instance. type() shows the class."},

{id:412,section:"OOP",sectionId:5,type:"mcq",difficulty:"hard",
question:"What is the MRO (Method Resolution Order)?",
options:["The order methods are defined in a class","The order Python searches for methods in inheritance","The order of method execution","The order instance variables are created"],
correct:[1],explanation:"MRO determines which class's method is called in multiple inheritance. Python uses C3 linearization. Check with ClassName.__mro__"},

{id:413,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What does double underscore prefix (__var) do to a class attribute?",
options:["Makes it public","Makes it private (name mangling)","Makes it protected","Makes it a class variable"],
correct:[1],explanation:"__var triggers name mangling: it becomes _ClassName__var. This makes it harder to access from outside (but not truly private)."},

{id:414,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass A:\n    def method(self):\n        print('A')\nclass B(A):\n    pass\nclass C(A):\n    def method(self):\n        print('C')\nclass D(B, C):\n    pass\nd = D()\nd.method()",
options:["A","C","B","Error"],
correct:[1],explanation:"MRO for D: D → B → C → A. B doesn't define method, so C.method() is found next. Prints 'C'."},

{id:415,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass MyClass:\n    def __init__(self):\n        self.__secret = 42\nobj = MyClass()\nprint(obj._MyClass__secret)",
options:["42","Error","None","AttributeError"],
correct:[0],explanation:"Name mangling: __secret becomes _MyClass__secret. You can still access it with the mangled name."},

{id:416,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What does @property do?",
options:["Creates a private attribute","Allows method to be accessed like an attribute","Prevents attribute modification","Creates a class variable"],
correct:[1],explanation:"@property allows a method to be accessed like an attribute without parentheses. Enables getter/setter pattern."},

{id:417,section:"OOP",sectionId:5,type:"mcq",difficulty:"easy",
question:"What is the output of:\nprint(issubclass(bool, int))",
options:["True","False","Error","None"],
correct:[0],explanation:"bool is a subclass of int in Python. True == 1 and False == 0 because of this."},

{id:418,section:"OOP",sectionId:5,type:"mcq",difficulty:"hard",
question:"What is the output of:\nclass A:\n    def __init__(self):\n        print('A init')\nclass B(A):\n    def __init__(self):\n        print('B init')\nb = B()",
options:["A init\nB init","B init","A init","Error"],
correct:[1],explanation:"B overrides __init__ and does NOT call super().__init__(). Only 'B init' is printed."},

{id:419,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"Which dunder method is called when you use '+' on two objects?",
options:["__plus__","__add__","__sum__","__concat__"],
correct:[1],explanation:"__add__ is called when '+' operator is used. Example: a + b calls a.__add__(b)."},

{id:420,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is abstraction in OOP?",
options:["Hiding implementation details and showing only interface","Making all variables private","Inheriting from multiple classes","Overriding parent methods"],
correct:[0],explanation:"Abstraction hides complex implementation and exposes only what is necessary. In Python, implemented via ABC (Abstract Base Classes)."},

{id:421,section:"OOP",sectionId:5,type:"mcq",difficulty:"medium",
question:"What is the output of:\nclass MyClass:\n    x = 10\nobj = MyClass()\nobj.x = 20\nprint(MyClass.x, obj.x)",
options:["10 10","20 20","10 20","20 10"],
correct:[2],explanation:"obj.x = 20 creates an INSTANCE variable that shadows the class variable. MyClass.x remains 10."},

{id:422,section:"OOP",sectionId:5,type:"mcq",difficulty:"hard",
question:"What is the output of:\nclass Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\na = Singleton()\nb = Singleton()\nprint(a is b)",
options:["True","False","Error","None"],
correct:[0],explanation:"Singleton pattern: __new__ always returns the same instance. a is b → True."},

// ── MSQ 423–434 ──────────────────────────────────────────────────────────────
{id:423,section:"OOP",sectionId:5,type:"msq",difficulty:"easy",
question:"Which of the following are pillars of OOP? (Select all that apply)",
options:["Encapsulation","Inheritance","Compilation","Polymorphism"],
correct:[0,1,3],explanation:"The 4 pillars of OOP: Encapsulation, Inheritance, Polymorphism, Abstraction. Compilation is not one."},

{id:424,section:"OOP",sectionId:5,type:"msq",difficulty:"medium",
question:"Which of the following are dunder (magic) methods in Python? (Select all that apply)",
options:["__init__","__str__","__len__","__constructor__"],
correct:[0,1,2],explanation:"__init__, __str__, __len__ are valid dunder methods. __constructor__ does not exist."},

{id:425,section:"OOP",sectionId:5,type:"msq",difficulty:"medium",
question:"Which of the following are true about @staticmethod? (Select all that apply)",
options:["Does not receive self or cls","Can be called without creating an instance","Can access class variables directly","Is inherited by subclasses"],
correct:[0,1,3],explanation:"@staticmethod has no self or cls. Can be called on class or instance. It's inherited. It CANNOT access class variables directly without the class name."},

{id:426,section:"OOP",sectionId:5,type:"msq",difficulty:"medium",
question:"Which of the following are true about @classmethod? (Select all that apply)",
options:["Receives cls as first argument","Can access and modify class-level data","Can be used as an alternative constructor","Can access instance variables via cls"],
correct:[0,1,2],explanation:"@classmethod receives cls, can access class-level data, and is used as alternate constructor (e.g., from_string()). It cannot access instance variables via cls (no instance context)."},

{id:427,section:"OOP",sectionId:5,type:"msq",difficulty:"easy",
question:"Which of the following are types of inheritance in Python? (Select all that apply)",
options:["Single inheritance","Multiple inheritance","Multilevel inheritance","Hybrid inheritance"],
correct:[0,1,2,3],explanation:"Python supports all four: Single (A→B), Multiple (A,B→C), Multilevel (A→B→C), Hybrid (combination)."},

{id:428,section:"OOP",sectionId:5,type:"msq",difficulty:"medium",
question:"What does encapsulation provide? (Select all that apply)",
options:["Data hiding","Bundling data and methods together","Preventing subclassing","Controlled access via getters/setters"],
correct:[0,1,3],explanation:"Encapsulation: bundles data+methods, hides internal state, provides controlled access. It doesn't prevent subclassing."},

{id:429,section:"OOP",sectionId:5,type:"msq",difficulty:"medium",
question:"Which dunder methods are used to make a class iterable? (Select all that apply)",
options:["__iter__","__next__","__len__","__getitem__"],
correct:[0,1],explanation:"__iter__ returns the iterator object, __next__ returns the next value. These two make an object iterable. __len__ and __getitem__ alone don't make it iterable in the full iterator protocol sense."},

{id:430,section:"OOP",sectionId:5,type:"msq",difficulty:"medium",
question:"Which of the following are true about Python's __init__ method? (Select all that apply)",
options:["Called when an object is created","Initializes instance attributes","Is the constructor in Python","Can be overridden in subclasses"],
correct:[0,1,3],explanation:"All except C. __init__ initializes the object but __new__ actually creates it. __new__ is the true constructor. __init__ is the initializer."},

{id:431,section:"OOP",sectionId:5,type:"msq",difficulty:"hard",
question:"Which of the following statements about Python's abstract classes are true? (Select all that apply)",
options:["Defined using abc module","Cannot be instantiated directly","Subclasses must implement abstract methods","Are the same as interfaces in Java"],
correct:[0,1,2],explanation:"Abstract classes use ABC from abc module, cannot be instantiated, force subclasses to implement abstract methods. They are SIMILAR but not identical to Java interfaces (Python ABCs can have concrete methods)."},

{id:432,section:"OOP",sectionId:5,type:"msq",difficulty:"medium",
question:"Which of the following demonstrate polymorphism? (Select all that apply)",
options:["Method overriding in subclasses","Using + for both int and str","Passing different object types to the same function","Using @staticmethod"],
correct:[0,1,2],explanation:"Polymorphism: same interface, different behavior. Method overriding, operator overloading (+), duck typing all demonstrate it. @staticmethod is not polymorphism."},

{id:433,section:"OOP",sectionId:5,type:"msq",difficulty:"medium",
question:"Which of the following are ways to achieve data hiding in Python? (Select all that apply)",
options:["Single underscore prefix _var (convention)","Double underscore prefix __var (name mangling)","Using @property with no setter","Using private keyword"],
correct:[0,1,2],explanation:"Python uses _var convention and __var name mangling for access control. @property without setter makes attribute read-only. Python has no 'private' keyword."},

{id:434,section:"OOP",sectionId:5,type:"msq",difficulty:"medium",
question:"Which dunder methods support operator overloading? (Select all that apply)",
options:["__add__ (+)","__eq__ (==)","__lt__ (<)","__print__ (print())"],
correct:[0,1,2],explanation:"__add__, __eq__, __lt__ are dunder methods for +, ==, <. There is no __print__ — print() calls __str__."},

// ── CODING 435–444 ───────────────────────────────────────────────────────────
{id:435,section:"OOP",sectionId:5,type:"coding",difficulty:"medium",
question:"Create a class 'BankAccount' with deposit(), withdraw(), and get_balance(). Balance cannot go negative.",
starterCode:"class BankAccount:\n    # Write your solution here\n    pass\n\nacc = BankAccount(1000)\nacc.deposit(500)\nacc.withdraw(200)\nprint(acc.get_balance())  # Expected: 1300",
modelAnswer:"class BankAccount:\n    def __init__(self, balance=0):\n        self.__balance = balance\n    def deposit(self, amount):\n        if amount > 0: self.__balance += amount\n    def withdraw(self, amount):\n        if 0 < amount <= self.__balance: self.__balance -= amount\n        else: print('Insufficient funds')\n    def get_balance(self): return self.__balance\n\nacc = BankAccount(1000)\nacc.deposit(500)\nacc.withdraw(200)\nprint(acc.get_balance())  # 1300"},

{id:436,section:"OOP",sectionId:5,type:"coding",difficulty:"medium",
question:"Create a base class 'Shape' with area() method. Create 'Circle' and 'Rectangle' subclasses with proper implementations.",
starterCode:"import math\n\nclass Shape:\n    def area(self):\n        pass\n\n# Write Circle and Rectangle classes here\n\nc = Circle(5)\nr = Rectangle(4, 6)\nprint(c.area())  # 78.54\nprint(r.area())  # 24",
modelAnswer:"import math\n\nclass Shape:\n    def area(self):\n        raise NotImplementedError('Subclasses must implement area()')\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return round(math.pi * self.radius**2, 2)\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w = w; self.h = h\n    def area(self):\n        return self.w * self.h\n\nprint(Circle(5).area())     # 78.54\nprint(Rectangle(4,6).area()) # 24"},

{id:437,section:"OOP",sectionId:5,type:"coding",difficulty:"medium",
question:"Create a class 'Stack' using a list with push(), pop(), peek(), and is_empty() methods.",
starterCode:"class Stack:\n    # Write your solution here\n    pass\n\ns = Stack()\ns.push(1); s.push(2); s.push(3)\nprint(s.peek())  # 3\nprint(s.pop())   # 3\nprint(s.pop())   # 2",
modelAnswer:"class Stack:\n    def __init__(self): self._data = []\n    def push(self, val): self._data.append(val)\n    def pop(self):\n        if not self.is_empty(): return self._data.pop()\n        raise IndexError('Stack is empty')\n    def peek(self):\n        if not self.is_empty(): return self._data[-1]\n        raise IndexError('Stack is empty')\n    def is_empty(self): return len(self._data) == 0\n    def __len__(self): return len(self._data)\n\ns = Stack()\ns.push(1); s.push(2); s.push(3)\nprint(s.peek())  # 3\nprint(s.pop())   # 3"},

{id:438,section:"OOP",sectionId:5,type:"coding",difficulty:"hard",
question:"Create a class with __iter__ and __next__ to iterate over a range of even numbers.",
starterCode:"class EvenRange:\n    # Write your solution here\n    pass\n\nfor num in EvenRange(1, 10):\n    print(num, end=' ')  # Expected: 2 4 6 8",
modelAnswer:"class EvenRange:\n    def __init__(self, start, end):\n        self.current = start if start%2==0 else start+1\n        self.end = end\n    def __iter__(self): return self\n    def __next__(self):\n        if self.current >= self.end: raise StopIteration\n        val = self.current\n        self.current += 2\n        return val\n\nfor num in EvenRange(1, 10):\n    print(num, end=' ')  # 2 4 6 8"},

{id:439,section:"OOP",sectionId:5,type:"coding",difficulty:"hard",
question:"Implement a class using @property to ensure 'age' is always positive.",
starterCode:"class Person:\n    # Write your solution here\n    pass\n\np = Person('Alice', 25)\nprint(p.age)   # 25\np.age = -5     # Should raise ValueError",
modelAnswer:"class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age  # Uses the setter\n    @property\n    def age(self): return self._age\n    @age.setter\n    def age(self, value):\n        if value < 0: raise ValueError('Age cannot be negative')\n        self._age = value\n\np = Person('Alice', 25)\nprint(p.age)  # 25\ntry: p.age = -5\nexcept ValueError as e: print(e)"},

{id:440,section:"OOP",sectionId:5,type:"coding",difficulty:"hard",
question:"Implement a context manager class that times code execution using __enter__ and __exit__.",
starterCode:"import time\n\nclass Timer:\n    # Write your solution here\n    pass\n\nwith Timer() as t:\n    time.sleep(0.1)\nprint(f'Elapsed: {t.elapsed:.3f}s')",
modelAnswer:"import time\n\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    def __exit__(self, *args):\n        self.elapsed = time.time() - self.start\n\nwith Timer() as t:\n    time.sleep(0.1)\nprint(f'Elapsed: {t.elapsed:.3f}s')  # ~0.100s"},

{id:441,section:"OOP",sectionId:5,type:"coding",difficulty:"hard",
question:"Create an abstract class 'Vehicle' with an abstract method 'fuel_type()'. Implement 'Car' and 'ElectricCar'.",
starterCode:"from abc import ABC, abstractmethod\n\nclass Vehicle(ABC):\n    # Write your solution here\n    pass\n\n# Implement Car and ElectricCar\n\nprint(Car().fuel_type())         # Petrol\nprint(ElectricCar().fuel_type()) # Electric",
modelAnswer:"from abc import ABC, abstractmethod\n\nclass Vehicle(ABC):\n    @abstractmethod\n    def fuel_type(self): pass\n\nclass Car(Vehicle):\n    def fuel_type(self): return 'Petrol'\n\nclass ElectricCar(Vehicle):\n    def fuel_type(self): return 'Electric'\n\nprint(Car().fuel_type())          # Petrol\nprint(ElectricCar().fuel_type())  # Electric"},

{id:442,section:"OOP",sectionId:5,type:"coding",difficulty:"medium",
question:"Implement operator overloading: create a 'Vector' class that supports addition (+) of two vectors.",
starterCode:"class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    # Write your solution here\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nv3 = v1 + v2\nprint(v3.x, v3.y)  # Expected: 4 6",
modelAnswer:"class Vector:\n    def __init__(self, x, y): self.x = x; self.y = y\n    def __add__(self, other): return Vector(self.x+other.x, self.y+other.y)\n    def __str__(self): return f'Vector({self.x}, {self.y})'\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nv3 = v1 + v2\nprint(v3.x, v3.y)  # 4 6"},

{id:443,section:"OOP",sectionId:5,type:"coding",difficulty:"medium",
question:"Create a class 'Node' and a 'LinkedList' with append() and display() methods.",
starterCode:"class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nclass LinkedList:\n    # Write your solution here\n    pass\n\nll = LinkedList()\nll.append(1); ll.append(2); ll.append(3)\nll.display()  # 1 -> 2 -> 3",
modelAnswer:"class Node:\n    def __init__(self, data): self.data = data; self.next = None\n\nclass LinkedList:\n    def __init__(self): self.head = None\n    def append(self, data):\n        node = Node(data)\n        if not self.head: self.head = node; return\n        cur = self.head\n        while cur.next: cur = cur.next\n        cur.next = node\n    def display(self):\n        vals, cur = [], self.head\n        while cur: vals.append(str(cur.data)); cur = cur.next\n        print(' -> '.join(vals))\n\nll = LinkedList()\nll.append(1); ll.append(2); ll.append(3)\nll.display()  # 1 -> 2 -> 3"},

{id:444,section:"OOP",sectionId:5,type:"coding",difficulty:"medium",
question:"Create a class 'Employee' and a subclass 'Manager'. Manager has an additional 'team_size' attribute and overrides the __str__ method.",
starterCode:"class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    def __str__(self):\n        return f'Employee: {self.name}, Salary: {self.salary}'\n\nclass Manager(Employee):\n    # Write your solution here\n    pass\n\nm = Manager('Alice', 80000, 10)\nprint(m)",
modelAnswer:"class Employee:\n    def __init__(self, name, salary): self.name=name; self.salary=salary\n    def __str__(self): return f'Employee: {self.name}, Salary: {self.salary}'\n\nclass Manager(Employee):\n    def __init__(self, name, salary, team_size):\n        super().__init__(name, salary)\n        self.team_size = team_size\n    def __str__(self):\n        return f'Manager: {self.name}, Salary: {self.salary}, Team: {self.team_size}'\n\nprint(Manager('Alice', 80000, 10))  # Manager: Alice, Salary: 80000, Team: 10"},

// ── SHORT ANSWER 445–455 ─────────────────────────────────────────────────────
{id:445,section:"OOP",sectionId:5,type:"short",difficulty:"medium",
question:"What is the difference between @staticmethod and @classmethod?",
modelAnswer:"@staticmethod: no implicit first argument. Just a regular function inside a class. Cannot access class or instance data without explicit reference.\n\n@classmethod: receives cls (the class) as first argument. Can access and modify class-level state. Used as alternative constructors.\n\nExample:\nclass Date:\n    @classmethod\n    def from_string(cls, s):  # alternate constructor\n        y,m,d = map(int, s.split('-'))\n        return cls(y, m, d)\n    @staticmethod\n    def is_valid(y, m, d): return 1<=m<=12"},

{id:446,section:"OOP",sectionId:5,type:"short",difficulty:"medium",
question:"What is the difference between __init__ and __new__?",
modelAnswer:"__new__: creates and returns a NEW instance (allocates memory). Called before __init__.\n__init__: initializes the instance created by __new__. Sets up attributes.\nFlow: object = ClassName() → __new__ creates the object → __init__ sets it up.\nYou rarely override __new__ — mainly for immutable types (int, str) or Singleton pattern.\nExample of Singleton: override __new__ to always return same instance."},

{id:447,section:"OOP",sectionId:5,type:"short",difficulty:"easy",
question:"What is inheritance in OOP? What are its advantages?",
modelAnswer:"Inheritance: a class (child/subclass) inherits attributes and methods from another class (parent/superclass).\nAdvantages:\n1. Code reuse — don't repeat common logic\n2. Extensibility — add behavior without modifying parent\n3. Polymorphism — same interface, different implementations\n4. Hierarchy modeling — models real-world relationships\nExample: Dog, Cat, Bird all inherit from Animal — they reuse common attributes (name, age) and override speak()."},

{id:448,section:"OOP",sectionId:5,type:"short",difficulty:"easy",
question:"What is polymorphism in Python? Give an example.",
modelAnswer:"Polymorphism: same function/interface works with different types.\nExample 1 — Method overriding:\nclass Animal:\n    def speak(self): return '...'\nclass Dog(Animal):\n    def speak(self): return 'Woof'\nclass Cat(Animal):\n    def speak(self): return 'Meow'\nfor a in [Dog(), Cat()]: print(a.speak())\n\nExample 2 — Duck typing:\ndef process(obj): obj.speak()  # works for ANY object with speak()"},

{id:449,section:"OOP",sectionId:5,type:"short",difficulty:"medium",
question:"What is the diamond problem in multiple inheritance? How does Python solve it?",
modelAnswer:"Diamond problem: class D inherits from B and C, both of which inherit from A. When D calls a method, which path should be followed?\nA\n/ \\\nB   C\n \\ /\n  D\nPython solves this with C3 Linearization (MRO). It defines a deterministic order: D → B → C → A.\nCheck: D.__mro__ shows the exact lookup order.\nThis ensures each class appears exactly once in the lookup chain."},

{id:450,section:"OOP",sectionId:5,type:"short",difficulty:"easy",
question:"What is encapsulation? How is it implemented in Python?",
modelAnswer:"Encapsulation: bundling data (attributes) and methods together, and restricting direct access to internal state.\nIn Python:\n_var: single underscore = convention for 'protected' (accessible but not intended for external use)\n__var: double underscore = name mangling → becomes _ClassName__var (harder but not impossible to access)\n@property: provides controlled getter/setter access\nPython has no true 'private' — it uses conventions and name mangling."},

{id:451,section:"OOP",sectionId:5,type:"short",difficulty:"medium",
question:"What is abstraction? How do you implement it in Python?",
modelAnswer:"Abstraction: hiding implementation details, showing only the interface.\nIn Python: use ABC (Abstract Base Classes) from the abc module.\nfrom abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): pass  # must be implemented by subclasses\n\nclass Circle(Shape):\n    def area(self): return 3.14 * r**2\nShape()  # TypeError — cannot instantiate abstract class\nForces subclasses to implement all abstract methods."},

{id:452,section:"OOP",sectionId:5,type:"short",difficulty:"medium",
question:"What is composition vs inheritance? When would you prefer one over the other?",
modelAnswer:"Inheritance: 'is-a' relationship. Dog IS-A Animal.\nComposition: 'has-a' relationship. Car HAS-A Engine.\nPrefer composition when:\n- Relationship is 'has-a', not 'is-a'\n- You want to avoid tight coupling\n- Behavior should be swappable at runtime\n- Multiple inheritance would get complex\nPrinciple: 'Favor composition over inheritance' (Gang of Four).\nExample: instead of Robot extending Person, Robot HAS-A Person (if it simulates one)."},

{id:453,section:"OOP",sectionId:5,type:"short",difficulty:"hard",
question:"What are dunder/magic methods? Name 5 commonly used ones.",
modelAnswer:"Dunder (double underscore) methods are special Python methods that enable operator overloading and built-in behavior.\nCommonly used:\n1. __init__: object initialization\n2. __str__: string representation (for print())\n3. __repr__: developer representation (for debugging)\n4. __len__: enables len(obj)\n5. __eq__: enables == operator\n6. __add__: enables + operator\n7. __iter__ / __next__: makes object iterable\n8. __enter__ / __exit__: context manager (with statement)"},

{id:454,section:"OOP",sectionId:5,type:"short",difficulty:"medium",
question:"What is the difference between __str__ and __repr__?",
modelAnswer:"__str__: human-readable string. Called by print() and str().\n__repr__: unambiguous developer representation. Called by repr(), and as fallback for print() if __str__ not defined. Should ideally be eval()-able to recreate the object.\nExample:\nclass Point:\n    def __str__(self): return f'({self.x}, {self.y})'\n    def __repr__(self): return f'Point({self.x}, {self.y})'\np = Point(); print(p)     # (3, 4) — __str__\nIn REPL: p                # Point(3, 4) — __repr__"},

{id:455,section:"OOP",sectionId:5,type:"short",difficulty:"hard",
question:"What is duck typing in Python?",
modelAnswer:"Duck typing: 'If it walks like a duck and quacks like a duck, it's a duck.'\nPython doesn't check the TYPE of an object — it checks whether it has the required method/attribute.\nExample:\ndef make_it_speak(animal):\n    animal.speak()  # works for any object with speak()\nclass Dog: def speak(self): print('Woof')\nclass Robot: def speak(self): print('Beep')\nmake_it_speak(Dog())   # Woof\nmake_it_speak(Robot()) # Beep — works!\nNo inheritance needed — just the right interface."},
];
