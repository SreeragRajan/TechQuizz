const jsQuestions = [
      {
        "question": "What is JavaScript primarily used for?",
        "options": {
          "A": "Styling web pages",
          "B": "Adding interactivity to web pages",
          "C": "Managing databases",
          "D": "Handling file systems"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a JavaScript data type?",
        "options": {
          "A": "String",
          "B": "Number",
          "C": "Boolean",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'let' keyword in JavaScript?",
        "options": {
          "A": "To declare a block-scoped variable",
          "B": "To declare a global variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which method is used to add an element to the end of an array in JavaScript?",
        "options": {
          "A": "push()",
          "B": "pop()",
          "C": "shift()",
          "D": "unshift()"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'const' keyword in JavaScript?",
        "options": {
          "A": "To declare a variable that cannot be reassigned",
          "B": "To declare a global variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript loop structure?",
        "options": {
          "A": "for",
          "B": "while",
          "C": "do-while",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'this' keyword in JavaScript?",
        "options": {
          "A": "To refer to the current object",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript event?",
        "options": {
          "A": "click",
          "B": "mouseover",
          "C": "keydown",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'async' keyword in JavaScript?",
        "options": {
          "A": "To define an asynchronous function",
          "B": "To declare a variable",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which method is used to remove the last element from an array in JavaScript?",
        "options": {
          "A": "push()",
          "B": "pop()",
          "C": "shift()",
          "D": "unshift()"
        },
        "answer": "B"
      },
      {
        "question": "What is the purpose of the 'await' keyword in JavaScript?",
        "options": {
          "A": "To pause execution until a promise is resolved",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript framework?",
        "options": {
          "A": "React",
          "B": "Angular",
          "C": "Vue",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'map()' method in JavaScript?",
        "options": {
          "A": "To create a new array with transformed elements",
          "B": "To remove elements from an array",
          "C": "To sort an array",
          "D": "To reverse an array"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript object method?",
        "options": {
          "A": "toString()",
          "B": "valueOf()",
          "C": "hasOwnProperty()",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'filter()' method in JavaScript?",
        "options": {
          "A": "To create a new array with elements that pass a test",
          "B": "To remove elements from an array",
          "C": "To sort an array",
          "D": "To reverse an array"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript error handling mechanism?",
        "options": {
          "A": "try-catch",
          "B": "if-else",
          "C": "for loop",
          "D": "while loop"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'reduce()' method in JavaScript?",
        "options": {
          "A": "To reduce an array to a single value",
          "B": "To remove elements from an array",
          "C": "To sort an array",
          "D": "To reverse an array"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript data structure?",
        "options": {
          "A": "Array",
          "B": "Object",
          "C": "Map",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'setTimeout()' function in JavaScript?",
        "options": {
          "A": "To execute a function after a specified delay",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript module system?",
        "options": {
          "A": "CommonJS",
          "B": "ES Modules",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'JSON.parse()' method in JavaScript?",
        "options": {
          "A": "To convert a JSON string to a JavaScript object",
          "B": "To convert a JavaScript object to a JSON string",
          "C": "To sort an array",
          "D": "To reverse an array"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript event listener method?",
        "options": {
          "A": "addEventListener()",
          "B": "removeEventListener()",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
        "options": {
          "A": "To convert a JSON string to a JavaScript object",
          "B": "To convert a JavaScript object to a JSON string",
          "C": "To sort an array",
          "D": "To reverse an array"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a JavaScript promise state?",
        "options": {
          "A": "Pending",
          "B": "Fulfilled",
          "C": "Rejected",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'slice()' method in JavaScript?",
        "options": {
          "A": "To extract a portion of an array",
          "B": "To remove elements from an array",
          "C": "To sort an array",
          "D": "To reverse an array"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript closure?",
        "options": {
          "A": "A function with access to its own scope and outer scope",
          "B": "A global variable",
          "C": "A loop structure",
          "D": "An error handler"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'setInterval()' function in JavaScript?",
        "options": {
          "A": "To execute a function repeatedly at a specified interval",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript operator?",
        "options": {
          "A": "typeof",
          "B": "instanceof",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'forEach()' method in JavaScript?",
        "options": {
          "A": "To execute a function for each array element",
          "B": "To remove elements from an array",
          "C": "To sort an array",
          "D": "To reverse an array"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript scoping rule?",
        "options": {
          "A": "Lexical Scoping",
          "B": "Dynamic Scoping",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'bind()' method in JavaScript?",
        "options": {
          "A": "To create a new function with a specific 'this' value",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript array method?",
        "options": {
          "A": "concat()",
          "B": "join()",
          "C": "splice()",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'call()' method in JavaScript?",
        "options": {
          "A": "To invoke a function with a specific 'this' value",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript data type introduced in ES6?",
        "options": {
          "A": "Symbol",
          "B": "String",
          "C": "Number",
          "D": "Boolean"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'apply()' method in JavaScript?",
        "options": {
          "A": "To invoke a function with a specific 'this' value and arguments array",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript module export syntax?",
        "options": {
          "A": "export",
          "B": "module.exports",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'Promise.all()' method in JavaScript?",
        "options": {
          "A": "To handle multiple promises concurrently",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript DOM method?",
        "options": {
          "A": "getElementById()",
          "B": "querySelector()",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'arrow function' in JavaScript?",
        "options": {
          "A": "To provide a shorter syntax for functions",
          "B": "To declare a variable",
          "C": "To handle errors",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript strict mode feature?",
        "options": {
          "A": "Prevents undeclared variables",
          "B": "Disallows duplicate parameter names",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'spread operator' in JavaScript?",
        "options": {
          "A": "To expand elements or properties",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript class feature?",
        "options": {
          "A": "Constructor",
          "B": "Methods",
          "C": "Inheritance",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'rest parameter' in JavaScript?",
        "options": {
          "A": "To collect multiple arguments into an array",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript debugging tool?",
        "options": {
          "A": "console.log()",
          "B": "debugger",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'template literal' in JavaScript?",
        "options": {
          "A": "To allow multi-line strings and interpolation",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript module import syntax?",
        "options": {
          "A": "import",
          "B": "require()",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'Object.keys()' method in JavaScript?",
        "options": {
          "A": "To return an array of an object's property names",
          "B": "To declare a variable",
          "C": "To define a function",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a JavaScript array sorting method?",
        "options": {
          "A": "sort()",
          "B": "reverse()",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      }
    ]

export default jsQuestions;