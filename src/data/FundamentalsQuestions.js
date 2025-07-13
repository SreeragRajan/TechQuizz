const fundamentalsQuestions = [
      {
        "question": "What is a variable in programming?",
        "options": {
          "A": "A fixed value",
          "B": "A storage location with a name and value",
          "C": "A function definition",
          "D": "A loop structure"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a data type in programming?",
        "options": {
          "A": "Integer",
          "B": "Loop",
          "C": "Function",
          "D": "Class"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of a loop in programming?",
        "options": {
          "A": "To store data",
          "B": "To repeat a block of code",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a conditional statement?",
        "options": {
          "A": "for",
          "B": "while",
          "C": "if",
          "D": "break"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a function in programming?",
        "options": {
          "A": "To store data",
          "B": "To perform a specific task",
          "C": "To handle network traffic",
          "D": "To manage file permissions"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of programming paradigm?",
        "options": {
          "A": "Object-Oriented",
          "B": "Sequential",
          "C": "Parallel",
          "D": "Recursive"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of an array in programming?",
        "options": {
          "A": "To store multiple values in a single variable",
          "B": "To define a function",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of loop in programming?",
        "options": {
          "A": "if",
          "B": "for",
          "C": "switch",
          "D": "case"
        },
        "answer": "B"
      },
      {
        "question": "What is the purpose of a variable's scope in programming?",
        "options": {
          "A": "To determine where a variable can be accessed",
          "B": "To store data",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of error in programming?",
        "options": {
          "A": "Syntax Error",
          "B": "Runtime Error",
          "C": "Logical Error",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a comment in programming?",
        "options": {
          "A": "To execute code",
          "B": "To explain the code",
          "C": "To store data",
          "D": "To handle errors"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of operator in programming?",
        "options": {
          "A": "Arithmetic",
          "B": "Logical",
          "C": "Relational",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a pointer in programming?",
        "options": {
          "A": "To store a memory address",
          "B": "To define a function",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a characteristic of object-oriented programming?",
        "options": {
          "A": "Encapsulation",
          "B": "Inheritance",
          "C": "Polymorphism",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a class in programming?",
        "options": {
          "A": "To store data",
          "B": "To define a blueprint for objects",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of programming language?",
        "options": {
          "A": "High-Level",
          "B": "Low-Level",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a debugger in programming?",
        "options": {
          "A": "To write code",
          "B": "To find and fix errors in code",
          "C": "To store data",
          "D": "To manage file permissions"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of control structure in programming?",
        "options": {
          "A": "Sequence",
          "B": "Selection",
          "C": "Iteration",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a variable's data type in programming?",
        "options": {
          "A": "To determine the kind of data it can hold",
          "B": "To define a function",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming error handling technique?",
        "options": {
          "A": "Try-Catch",
          "B": "If-Else",
          "C": "For Loop",
          "D": "While Loop"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of a method in programming?",
        "options": {
          "A": "To store data",
          "B": "To perform a specific task within a class",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of programming variable scope?",
        "options": {
          "A": "Local",
          "B": "Global",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a constructor in programming?",
        "options": {
          "A": "To initialize an object",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming data structure?",
        "options": {
          "A": "Array",
          "B": "Linked List",
          "C": "Stack",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a programming library?",
        "options": {
          "A": "To provide pre-written code for common tasks",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming algorithm?",
        "options": {
          "A": "Sorting",
          "B": "Searching",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a programming interface?",
        "options": {
          "A": "To define a contract for classes",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming loop?",
        "options": {
          "A": "Do-While",
          "B": "If-Else",
          "C": "Switch",
          "D": "Case"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of a programming variable initialization?",
        "options": {
          "A": "To assign an initial value to a variable",
          "B": "To define a function",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming paradigm?",
        "options": {
          "A": "Functional",
          "B": "Procedural",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a programming constant?",
        "options": {
          "A": "To store a fixed value",
          "B": "To define a function",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming operator precedence?",
        "options": {
          "A": "Parentheses",
          "B": "Multiplication",
          "C": "Addition",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a programming exception?",
        "options": {
          "A": "To handle errors during program execution",
          "B": "To store data",
          "C": "To define a function",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming data type?",
        "options": {
          "A": "String",
          "B": "Boolean",
          "C": "Float",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a programming switch statement?",
        "options": {
          "A": "To select one of many code blocks to execute",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming memory management?",
        "options": {
          "A": "Garbage Collection",
          "B": "Manual Memory Management",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a programming recursion?",
        "options": {
          "A": "To call a function within itself",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming variable declaration?",
        "options": {
          "A": "Explicit",
          "B": "Implicit",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a programming namespace?",
        "options": {
          "A": "To organize code and avoid name conflicts",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming design pattern?",
        "options": {
          "A": "Singleton",
          "B": "Factory",
          "C": "Observer",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a programming module?",
        "options": {
          "A": "To organize code into reusable units",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming testing?",
        "options": {
          "A": "Unit Testing",
          "B": "Integration Testing",
          "C": "System Testing",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a programming API?",
        "options": {
          "A": "To provide a way for programs to interact",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming control flow?",
        "options": {
          "A": "Branching",
          "B": "Looping",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a programming framework?",
        "options": {
          "A": "To provide a structure for building applications",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming variable lifetime?",
        "options": {
          "A": "Static",
          "B": "Automatic",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a programming preprocessor?",
        "options": {
          "A": "To process code before compilation",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming abstraction?",
        "options": {
          "A": "Data Abstraction",
          "B": "Procedural Abstraction",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a programming comment block?",
        "options": {
          "A": "To provide multi-line explanations of code",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of programming optimization?",
        "options": {
          "A": "Code Optimization",
          "B": "Memory Optimization",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of a programming breakpoint?",
        "options": {
          "A": "To pause program execution for debugging",
          "B": "To store data",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      }
    ]

export default fundamentalsQuestions;