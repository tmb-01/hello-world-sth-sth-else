const reactTest = [
  {
    question: "React was developed by:",
    options: ["Facebook", "Microsoft", "Apple", "Google"],
    answer: "",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Document Order Management",
      "Directional Object Maker",
    ],
    answer: "",
  },
  {
    question: "Where in the HTML document should you put the script tags?",
    options: [
      "In the head",
      "In the title tag",
      "In a div tag",
      "In the footer",
    ],
    answer: "",
  },
  {
    question:
      "Which of the following files represents the entry point of the React application?",
    options: ["package.json", "index.css", "index.html", "index.js"],
    answer: "",
  },
  {
    question:
      "Which of the following bundling tools does Create React App use?",
    options: ["BundleJS", "PackIt", "Webpack", "Babel"],
    answer: "",
  },
  {
    question: "Which folder does the index.html file live in?",
    options: ["src", "readme", "package.json", "public"],
    answer: "",
  },
  {
    question: "ReactDOM.render is which of the following:",
    options: [
      "Used to retrieve an element of ID “root” from the CSS file",
      "Is a method containing three arguments",
      "Used to add the React application inside the element",
    ],
    answer: "",
  },
  {
    question:
      "To see the list of project dependencies, we need to go to which file?",
    options: [
      "package.json",
      "public/manifest.json",
      "src/App.js",
      "public/index.html",
    ],
    answer: "",
  },
  {
    question:
      "Which of the following is the term that refers to your computer?",
    options: ["localserver", "host", "hostserver", "localhost"],
    answer: "",
  },
  {
    question:
      "What must JavaScript expressions be wrapped with to add them to the JSX?",
    options: ["Square brackets", "Parentheses", "Curly braces"],
    answer: "",
  },
  {
    question: "DOM represents the page as a:",
    options: ["tree", "graph", "list", "function"],
    answer: "",
  },
  {
    question:
      "Which of the following is a design principle for dividing a computer program into distinct sections in order to address each component individually?",
    options: [
      "Node Package Manager (NPM)",
      "Separation of Concerns",
      "React.Component",
    ],
    answer: "Separation of Concerns",
  },
  {
    question:
      "What is the output of this code?\n" +
      "function Test(props) {\n" +
      'return <p>{"A"+props.title}</p>;\n' +
      "}\n\n" +
      'const el = <Test title="X" />; \n' +
      "ReactDOM.render(\n" +
      "el, \n" +
      "document.getElementById('root')\n" +
      ");\n",
    options: ["AX", "X", "A", "AA"],
    answer: "",
  },
  {
    question: "You can use a component in other components multiple times.",
    options: ["False", "True"],
    answer: "",
  },
  {
    question: "How did we apply CSS styles to the Item elements?",
    options: ["using a CSS class", "using the root container", "using an ID"],
    answer: "",
  },
  {
    question:
      "When a component's state is changed, the whole DOM of the page is reloaded.",
    options: ["False", "True"],
    answer: "",
  },
  {
    question: "The useState() hook can be used in class components.",
    options: ["False", "True"],
    answer: "",
  },
  {
    question:
      "Given the code below, what will be the value of x after <div><Test /><Test /></div> has been rendered on the page?\n\n" +
      "let x = 0;\n" +
      "class Test extends React.Component {\n" +
      "\tcomponentDidMount() {\n" +
      "\t\tx+=3;\n" +
      "\t}\n" +
      "\trender() {\n" +
      "\t\treturn null;\n" +
      "\t}\n" +
      "}",
    options: ["undefined", "6", "3", "0"],
    answer: "",
  },
  {
    question:
      "What will be the text on the button after it is clicked 3 times?\n\n" +
      "function Toggle() {\n" +
      'const [val, setVal] = useState("ON");\n' +
      "function toggle() {\n" +
      'setVal((val=="ON")?"OFF":"ON");\n' +
      "}\n" +
      "return <button onClick={toggle}>{val}</button>;\n" +
      "}",
    options: ["toggle", "OFF", "ON", "undefined"],
    answer: "",
  },
  {
    question: "What do we use to store the form values?",
    options: ["props", "state", "libraries", "class"],
    answer: "",
  },
  {
    question:
      "What is the output of this code?\n" +
      "const arr = [2, 3, 1, 7];\n" +
      "const res = arr.map(x => x * 3);\n" +
      "console.log(res[1]);\n",
    options: ["4", "9", "6", "1"],
    answer: "",
  },
  {
    question: "How can data flow in React?",
    options: [
      "From parent component to child component",
      "From child component to parent component",
      "From both parent to child and from child to parent",
    ],
    answer: "",
  },
  {
    question:
      'The parent component uses the following code to pass down its "calculate()" function: \n' +
      "<Child doStuff={calculate} />\n" +
      "How can the child component call that function?",
    options: [
      "props.calculate()",
      "props.parent()",
      "props.doStuff()",
      "props.child()",
    ],
    answer: "",
  },
  {
    question:
      "Which of the following is used to pass down information from parent component to child component?",
    options: ["handlers", "classes", "state", "props"],
    answer: "",
  },
  {
    question:
      "The pattern that allows developers to break different functionalities into smaller pieces is called what?",
    options: ["Component", "Separation of Concerns", "setState", "ReactDOM"],
    answer: "",
  },
  {
    question:
      "How would you pass down data from the parent component to its child?",
    options: ["Using classes", "Using event handlers", "Using props"],
    answer: "",
  },
  {
    question: "Redux can be used with Angular.",
    options: ["False", "True"],
    answer: "",
  },
  {
    question: "The store is a(n):",
    options: ["object", "array", "function", "class"],
    answer: "",
  },
  {
    question:
      "Which of the following is an attribute describing a pure function?",
    options: [
      "A function that does not change its input parameters",
      "A function that returns null",
      "A function that changes the input parameters",
    ],
    answer: "",
  },
  {
    question: "The default case is used to:",
    options: [
      "return a pure function",
      "handle unknown actions",
      "clear the state",
      "handle state changes",
    ],
    answer: "",
  },
  {
    question:
      "When a component is connected to the store, the store properties can be accessed using:",
    options: ["functions", "props", "handlers", "classes"],
    answer: "",
  },
  {
    question:
      "Which of the following is the name of the required property inside the action object?",
    options: ["type", "class", "literal", "function"],
    answer: "",
  },
  {
    question:
      "Which of the following is used for selecting the part of the data from the store that the connected component needs?",
    options: ["mapStateToProps", "action", "reducer", "mapDispatchToProps"],
    answer: "",
  },
  {
    question: "React is mainly used for building ___.",
    options: ["Database", "Connectivity", "User interface", "Design Platform"],
    answer: "",
  },
  {
    question: "The lifecycle methods are mainly used for ___.",
    options: [
      "keeping track of event history",
      "enhancing components",
      "freeing up resources",
      "none of the above",
    ],
    answer: "",
  },
  {
    question:
      "___ can be done while multiple elements need to be returned from a component.",
    options: ["Abstraction", "Packing", "Insulation", "Wrapping"],
    answer: "",
  },
  {
    question:
      "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
    options: [
      "<h1>{fetch()}</h1>",
      "<h1>${fetch()}</h1>",
      "<h1>{fetch}</h1>",
      "<h1>${fetch}</h1>",
    ],
    answer: "",
  },
  {
    question:
      "Which of the following methods in a React Component should be overridden to stop the component from updating?",
    options: [
      "willComponentUpdate",
      "shouldComponentUpdate",
      "componentDidUpdate",
      "componentDidMount",
    ],
    answer: "",
  },
  {
    question: "What is used to pass data to a component from outside?",
    options: ["setState", "render with arguments", "PropTypes", "props"],
    answer: "",
  },
  {
    question:
      "Which of the following methods in a React Component is called after the component is rendered for the first time?",
    options: [
      "componentDidUpdate",
      "componentDidMount",
      "componentMounted",
      "componentUpdated",
    ],
    answer: "",
  },
  {
    question:
      "Which of the following is the correct syntax for a button click event handler foo?",
    options: [
      "<button onclick={this.foo()}>",
      "<button onclick={this.foo}>",
      "<button onClick={this.foo()}>",
      "<button onClick={this.foo}>",
    ],
    answer: "",
  },
  {
    question: "What will happen if you call setState() inside render() method?",
    options: [
      "Repetitive output appears on the screen",
      "Duplicate key error",
      "Stack overflow error",
      "Nothing happens",
    ],
    answer: "",
  },
  {
    question:
      "How do you write an inline style which specifies the font-size:12px and color:red; in JSX?",
    options: [
      "style={{font-size:12,color:'red'}}",
      "style={{fontSize:'12px',color:'red'}}",
      "style={fontSize:'12px',color:'red'}",
      "style={{font-size:12px,color:'red'}}",
    ],
    answer: "",
  },
  {
    question: "What advantages does ReactJS have?",
    options: [
      "Increases the application’s performance with Virtual DOM",
      "JSX makes a code that is easy to read and write",
      "It renders both on client and server side",
      "Easy to integrate with other frameworks(Angular, BackboneJS) since it is only a view library",
      "All of the above",
    ],
    answer: "",
  },
  {
    question: "What is state in React?",
    options: [
      "A persistant storage.",
      "An internal data store (object) of a component.",
    ],
    answer: "",
  },
  {
    question: "What is ReactJS?",
    options: [
      "Server side Framework",
      "User-interface framework",
      "Library for building interaction interfaces",
    ],
    answer: "",
  },
  {
    question: "What are the two ways that data gets handled in React?",
    options: ["state & props", "services & components"],
    answer: "",
  },
  {
    question: "What disadvantages does ReactJS have?",
    options: [
      "It is only a view layer. You have to plug your code for Ajax requests, events and so on.",
      "The library is pretty large.",
      "The learning curve can be slow.",
      "All of the above options",
    ],
    answer: "",
  },
  {
    question: "Choose the right answer about JSX.",
    options: [
      "JSX is faster as it performs optimization while compiling code to JavaScript",
      "JSX is a syntax notation for JavaScript XML",
      "JSX provides expressiveness of JavaScript along with HTML, like template syntax",
      "All of the above options",
    ],
    answer: "",
  },
  {
    question:
      "React merges the object provided into the current state using ___.",
    options: ["setState()", "State()"],
    answer: "",
  },
  {
    question: "The arbitrary inputs of components are called ___.",
    options: ["Keys", "Props", "Elements", "Ref"],
    answer: "",
  },
  {
    question:
      "Ref is used for referring an element or component returned by ___.",
    options: ["react()", "render()", "reduce()", "refer()"],
    answer: "",
  },
];
