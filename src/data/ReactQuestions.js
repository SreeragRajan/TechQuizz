const reactQuestions = [
      {
        "question": "What is React primarily used for?",
        "options": {
          "A": "Building user interfaces",
          "B": "Managing databases",
          "C": "Handling file systems",
          "D": "Styling web pages"
        },
        "answer": "A"
      },
      {
        "question": "What is a React component?",
        "options": {
          "A": "A reusable piece of UI",
          "B": "A database table",
          "C": "A file system",
          "D": "A CSS style"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of React component?",
        "options": {
          "A": "Functional Component",
          "B": "Class Component",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'useState' hook in React?",
        "options": {
          "A": "To manage state in functional components",
          "B": "To handle routing",
          "C": "To manage file permissions",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React lifecycle method?",
        "options": {
          "A": "componentDidMount",
          "B": "componentWillUnmount",
          "C": "componentDidUpdate",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'useEffect' hook in React?",
        "options": {
          "A": "To handle side effects in functional components",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React prop?",
        "options": {
          "A": "A value passed to a component",
          "B": "A database query",
          "C": "A file system path",
          "D": "A CSS style"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'key' prop in React?",
        "options": {
          "A": "To uniquely identify elements in a list",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React hook?",
        "options": {
          "A": "useContext",
          "B": "useReducer",
          "C": "useMemo",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'ReactDOM.render()' method?",
        "options": {
          "A": "To render a React component to the DOM",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'useReducer' hook in React?",
        "options": {
          "A": "To manage complex state logic",
          "B": "To handle API calls",
          "C": "To manage routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which method is used to update the state in a class-based React component?",
        "options": {
          "A": "setState()",
          "B": "updateState()",
          "C": "changeState()",
          "D": "modifyState()"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'useContext' hook in React?",
        "options": {
          "A": "To access context values",
          "B": "To manage state",
          "C": "To handle side effects",
          "D": "To optimize performance"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a feature of React's virtual DOM?",
        "options": {
          "A": "Improves performance by minimizing direct DOM manipulation",
          "B": "Stores data in memory",
          "C": "Handles API calls",
          "D": "Manages file systems"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'useMemo' hook in React?",
        "options": {
          "A": "To memoize expensive computations",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React event handler?",
        "options": {
          "A": "onClick",
          "B": "onChange",
          "C": "onSubmit",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'useCallback' hook in React?",
        "options": {
          "A": "To memoize functions",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a way to pass props in React?",
        "options": {
          "A": "As attributes in JSX",
          "B": "As global variables",
          "C": "As database queries",
          "D": "As file paths"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'React.Fragment' component?",
        "options": {
          "A": "To group multiple elements without adding extra nodes",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React context API method?",
        "options": {
          "A": "createContext",
          "B": "useContext",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'useRef' hook in React?",
        "options": {
          "A": "To create a mutable reference",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React component lifecycle phase?",
        "options": {
          "A": "Mounting",
          "B": "Updating",
          "C": "Unmounting",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'shouldComponentUpdate' method in React?",
        "options": {
          "A": "To control whether a component should re-render",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React higher-order component (HOC)?",
        "options": {
          "A": "A function that takes a component and returns a new component",
          "B": "A database query",
          "C": "A file system path",
          "D": "A CSS style"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'React.memo' function?",
        "options": {
          "A": "To prevent unnecessary re-renders of functional components",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React prop drilling issue?",
        "options": {
          "A": "Passing props through multiple layers of components",
          "B": "Managing state",
          "C": "Handling routing",
          "D": "Styling components"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'useImperativeHandle' hook in React?",
        "options": {
          "A": "To customize the instance value exposed to parent components",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React state management library?",
        "options": {
          "A": "Redux",
          "B": "MobX",
          "C": "Zustand",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'useLayoutEffect' hook in React?",
        "options": {
          "A": "To handle side effects synchronously after DOM updates",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To manage file permissions"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React router library?",
        "options": {
          "A": "React Router",
          "B": "Redux",
          "C": "Axios",
          "D": "Lodash"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'useTransition' hook in React?",
        "options": {
          "A": "To manage state transitions for better performance",
          "B": "To handle routing",
          "C": "To manage file permissions",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React testing library?",
        "options": {
          "A": "Jest",
          "B": "React Testing Library",
          "C": "Enzyme",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'useDeferredValue' hook in React?",
        "options": {
          "A": "To defer rendering of less urgent updates",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React component prop type checking library?",
        "options": {
          "A": "PropTypes",
          "B": "TypeScript",
          "C": "Flow",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'React.StrictMode' component?",
        "options": {
          "A": "To highlight potential problems in development",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React performance optimization technique?",
        "options": {
          "A": "Code Splitting",
          "B": "Lazy Loading",
          "C": "Memoization",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'React.lazy' function?",
        "options": {
          "A": "To lazily load components",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React suspense feature?",
        "options": {
          "A": "Handling asynchronous rendering",
          "B": "Managing state",
          "C": "Handling routing",
          "D": "Styling components"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'useId' hook in React?",
        "options": {
          "A": "To generate unique IDs for accessibility",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React form handling library?",
        "options": {
          "A": "Formik",
          "B": "React Hook Form",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.Children' utility?",
        "options": {
          "A": "To manipulate and transform children components",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React error boundary?",
        "options": {
          "A": "A component that catches JavaScript errors",
          "B": "A database query",
          "C": "A file system path",
          "D": "A CSS style"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'getDerivedStateFromProps' static lifecycle method?",
        "options": {
          "A": "To update state based on prop changes",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React portal?",
        "options": {
          "A": "A way to render children into a different DOM node",
          "B": "A database query",
          "C": "A file system path",
          "D": "A CSS style"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'useSyncExternalStore' hook in React?",
        "options": {
          "A": "To subscribe to external stores",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React component composition technique?",
        "options": {
          "A": "Render Props",
          "B": "Higher-Order Components",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.createRef' method?",
        "options": {
          "A": "To create a reference to a DOM element or component",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React state management pattern?",
        "options": {
          "A": "Lifting State Up",
          "B": "Prop Drilling",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.forwardRef' function?",
        "options": {
          "A": "To forward refs to child components",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React server-side rendering library?",
        "options": {
          "A": "Next.js",
          "B": "Gatsby",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'useDebugValue' hook in React?",
        "options": {
          "A": "To display custom debugging information",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React animation library?",
        "options": {
          "A": "Framer Motion",
          "B": "React Spring",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.cloneElement' method?",
        "options": {
          "A": "To create a copy of a React element with new props",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React performance profiling tool?",
        "options": {
          "A": "React Developer Tools",
          "B": "Chrome DevTools",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'useReducer' hook in React?",
        "options": {
          "A": "To manage complex state logic with a reducer",
          "B": "To handle routing",
          "C": "To manage file permissions",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React component library?",
        "options": {
          "A": "Material-UI",
          "B": "Ant Design",
          "C": "Chakra UI",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'React.PureComponent' class?",
        "options": {
          "A": "To optimize rendering by shallow prop and state comparison",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React data fetching library?",
        "options": {
          "A": "Axios",
          "B": "React Query",
          "C": "SWR",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'React.createElement' method?",
        "options": {
          "A": "To create a React element programmatically",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React context provider?",
        "options": {
          "A": "A component that provides context to its children",
          "B": "A database query",
          "C": "A file system path",
          "D": "A CSS style"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'useEffect' cleanup function in React?",
        "options": {
          "A": "To clean up resources before unmounting",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React accessibility feature?",
        "options": {
          "A": "ARIA attributes",
          "B": "Semantic HTML",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.Suspense' component?",
        "options": {
          "A": "To handle asynchronous rendering with a fallback",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React state management hook?",
        "options": {
          "A": "useState",
          "B": "useReducer",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'ReactDOM.createPortal' method?",
        "options": {
          "A": "To render children into a different DOM node",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React optimization technique?",
        "options": {
          "A": "useMemo",
          "B": "useCallback",
          "C": "React.memo",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'getSnapshotBeforeUpdate' lifecycle method?",
        "options": {
          "A": "To capture information from the DOM before updates",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React form validation library?",
        "options": {
          "A": "Yup",
          "B": "Joi",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.useEffect' dependency array?",
        "options": {
          "A": "To control when the effect runs",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React component styling solution?",
        "options": {
          "A": "Styled-Components",
          "B": "Emotion",
          "C": "Tailwind CSS",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'React.useState' initial value?",
        "options": {
          "A": "To set the initial state of a component",
          "B": "To manage routing",
          "C": "To handle errors",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React global state management solution?",
        "options": {
          "A": "Context API",
          "B": "Redux",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.useCallback' dependency array?",
        "options": {
          "A": "To control when the memoized function is recreated",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React testing utility?",
        "options": {
          "A": "render",
          "B": "screen",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.useMemo' dependency array?",
        "options": {
          "A": "To control when the memoized value is recalculated",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React component lifecycle method for error handling?",
        "options": {
          "A": "componentDidCatch",
          "B": "getDerivedStateFromError",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.useRef' hook for DOM manipulation?",
        "options": {
          "A": "To directly access DOM elements",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React state management middleware for Redux?",
        "options": {
          "A": "Redux Thunk",
          "B": "Redux Saga",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.useReducer' reducer function?",
        "options": {
          "A": "To define how state transitions occur",
          "B": "To manage routing",
          "C": "To handle errors",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React server component feature?",
        "options": {
          "A": "Rendering on the server to reduce client-side load",
          "B": "Managing state",
          "C": "Handling routing",
          "D": "Styling components"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the 'React.useContext' hook for global state?",
        "options": {
          "A": "To access context values across components",
          "B": "To manage routing",
          "C": "To handle errors",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React performance monitoring tool?",
        "options": {
          "A": "React Profiler",
          "B": "Chrome Performance Tab",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.useEffect' hook for cleanup?",
        "options": {
          "A": "To clean up subscriptions or timers",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React component prop validation technique?",
        "options": {
          "A": "PropTypes",
          "B": "TypeScript",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.useTransition' hook for performance?",
        "options": {
          "A": "To prioritize urgent updates",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React static site generation framework?",
        "options": {
          "A": "Gatsby",
          "B": "Next.js",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.useId' hook for accessibility?",
        "options": {
          "A": "To ensure unique IDs for form elements",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React internationalization library?",
        "options": {
          "A": "React-i18next",
          "B": "React Intl",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.useDeferredValue' hook for performance?",
        "options": {
          "A": "To defer non-critical rendering",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To handle errors"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React component testing strategy?",
        "options": {
          "A": "Snapshot Testing",
          "B": "Unit Testing",
          "C": "Integration Testing",
          "D": "All of the above"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of the 'React.useLayoutEffect' hook for DOM updates?",
        "options": {
          "A": "To perform DOM mutations synchronously",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React form state management hook?",
        "options": {
          "A": "useState",
          "B": "useReducer",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the 'React.createContext' method?",
        "options": {
          "A": "To create a context object for sharing data",
          "B": "To manage state",
          "C": "To handle routing",
          "D": "To style components"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a React performance optimization hook?",
        "options": {
          "A": "useMemo",
          "B": "useCallback",
          "C": "Both A and B",
          "D": "None of the above"
        },
        "answer": "C"
      },
    ]

export default reactQuestions;