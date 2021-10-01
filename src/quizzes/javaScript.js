const javaScriptTest = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "<script>",
            "<javascript>",
            "<scripting>",
            "<js>",
        ],
        answer:""
      },
      {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n\n"+
        "<p id=\"demo\">This is a demonstration.</p>",
        options: [
            "document.getElement(\"p\").innerHTML = \"Hello World!\";",
            "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
            "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
            "#demo.innerHTML = \"Hello World!\";",
        ],
        answer:""
      },
      {
        question: "Where is the correct place to insert a JavaScript?",
        options: [
            "The <body> section",
            "Both the <head> section and the <body> section are correct",
            "The <head> section",
        ],
        answer:""
      },
      {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        options: [
            "<script href=\"xxx.js\">",
            "<script src=\"xxx.js\">",
            "<script name=\"xxx.js\">",
        ],
        answer:""
      },
      {
        question: "The external JavaScript file must contain the <script> tag.",
        options: [
            "True",
            "False",
        ],
        answer:""
      },
      {
        question: "How do you write \"Hello World\" in an alert box?",
        options: [
            "msg(\"Hello World\");",
            "alertBox(\"Hello World\");",
            "msgBox(\"Hello World\");",
            "alert(\"Hello World\");",
        ],
        answer:""
      },
      {
        question: "How do you create a function in JavaScript?",
        options: [
            "function = myFunction()",
            "function myFunction()",
            "function:myFunction()",
        ],
        answer:""
      },
      {
        question: "How do you call a function named \"myFunction\"?",
        options: [
            "call function myFunction()",
            "myFunction()",
            "call myFunction()",
        ],
        answer:""
      },
      {
        question: "How to write an IF statement in JavaScript?",
        options: [
            "if i = 5",
            "if (i == 5)",
            "if i == 5 then",
            "if i = 5 then",
        ],
        answer:""
      },
      {
        question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        options: [
            "if (i != 5)",
            "if i =! 5 then",
            "if (i <> 5)",
            "if i <> 5",
        ],
        answer:""
      },
      {
        question: "How does a WHILE loop start?",
        options: [
            "while i = 1 to 10",
            "while (i <= 10; i++)",
            "while (i <= 10)",
        ],
        answer:""
      },
      {
        question: "How does a FOR loop start?",
        options: [
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)",
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
        ],
        answer:""
      },
      {
        question: "How can you add a comment in a JavaScript?",
        options: [
            "<!--This is a comment-->",
            "'This is a comment",
            "//This is a comment",
        ],
        answer:""
      },
      {
        question: "How to insert a comment that has more than one line?",
        options: [
            "//This comment has\nmore than one line//",
            "/*This comment has\nmore than one line*/",
            "<!--This comment has\nmore than one line-->",
            "",
        ],
        answer:""
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
            "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
            "var colors = [\"red\", \"green\", \"blue\"]",
            "var colors = \"red\", \"green\", \"blue\"",
        ],
        answer:""
      },
      {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: [
            "round(7.25)",
            "Math.rnd(7.25)",
            "Math.round(7.25)",
            "rnd(7.25)",
        ],
        answer:""
      },
      {
        question: "How do you find the number with the highest value of x and y?",
        options: [
            "Math.ceil(x, y)",
            "ceil(x, y)",
            "top(x, y)",
            "Math.max(x, y)",
        ],
        answer:""
      },
      {
        question: "What is the correct JavaScript syntax for opening a new window called \"w2\" ?",
        options: [
            "w2 = window.open(\"http://www.w3schools.com\");",
            "w2 = window.new(\"http://www.w3schools.com\");",
        ],
        answer:""
      },
      {
        question: "JavaScript is the same as Java.",
        options: [
            "True",
            "False",
        ],
        answer:""
      },
      {
        question: "How can you detect the client's browser name?",
        options: [
            "browser.name",
            "client.navName",
            "navigator.appName",
        ],
        answer:""
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            "onmouseover",
            "onclick",
            "onmouseclick",
            "onchange",
        ],
        answer:""
      },
      {
        question: "How do you declare a JavaScript variable?",
        options: [
            "var carName;",
            "variable carName;",
            "v carName;",
        ],
        answer:""
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "=",
            "-",
            "*",
            "x",
        ],
        answer:""
      },
      {
        question: "What will the following code return: Boolean(10 > 9)",
        options: [
            "false",
            "true",
            "NaN",
        ],
        answer:""
      },
      {
        question: "Is JavaScript case-sensitive?",
        options: [
            "Yes",
            "No",
        ],
        answer:""
      },
]



const anotherJS = [
  {
    question: "What are variables used for in JavaScript Programs?",
    options: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of the above",
    ],
    answer:"Storing numbers, dates, or other values"
  },
  {
    question: "Which of the following can’t be done with client-side JavaScript?",
    options: [
        "Validating a form",
        "Sending a form’s contents by email",
        "Storing the form’s contents to a database file on the server",
        "None of the above",
    ],
    answer:"Storing the form’s contents to a database file on the server"
  },
  {
    question: "Which of the following are capabilities of functions in JavaScript?",
    options: [
        "Return a value",
        "Accept parameters and Return a value",
        "Accept parameters",
        "None of the above",
    ],
    answer:"Accept parameters"
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    options: [
        "2names",
        "_first_and_last_names",
        "firstAndLast",
        "None of the above",
    ],
    answer:"2names"
  },
  {
    question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    options: [
        "<SCRIPT>",
        "<BODY>",
        "<HEAD>",
        "<TITLE>",
    ],
    answer:"<SCRIPT>"
  },
  {
    question: "How does JavaScript store dates in a date object?",
    options: [
        "The number of milliseconds since January 1st, 1970",
        "The number of days since January 1st, 1900",
        "The number of seconds since Netscape’s public stock offering.",
        "None of the above",
    ],
    answer:"The number of milliseconds since January 1st, 1970"
  },
  {
    question: "What is the correct JavaScript syntax to write “Hello World”?",
    options: [
        "System.out.println(“Hello World”)",
        "println (“Hello World”)",
        "document.write(“Hello World”)",
        "response.write(“Hello World”)",
    ],
    answer:"document.write(“Hello World”)"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
        "<js>",
        "<scripting>",
        "<script>",
        "<javascript>",
    ],
    answer:"<script>"
  },
  {
    question: "What is the correct syntax for referring to an external script called ” abc.js”?",
    options: [
        "<script href=” abc.js”>",
        "<script name=” abc.js”>",
        "<script src=” abc.js”>",
        "None of the above",
    ],
    answer:"<script src=” abc.js”>"
  },
  {
    question: "Which is the correct way to write a JavaScript array?",
    options: [
        "var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
        "var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",
        "var txt = new Array(“tim”,”kim”,”jim”)",
        "var txt = new Array=”tim”,”kim”,”jim”",
    ],
    answer:"var txt = new Array(“tim”,”kim”,”jim”)"
  },
  {
    question: "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
    options: [
        "“New Text”?",
        "para1.value=”New Text”;",
        "para1.firstChild.nodeValue= “New Text”;",
        "para1.nodeValue=”New Text”;",
    ],
    answer:"para1.value=”New Text”;"
  },
  {
    question: "JavaScript entities start with _______ and end with _________.",
    options: [
        "Semicolon, colon",
        "Semicolon, Ampersand",
        "Ampersand, colon",
        "Ampersand, semicolon",
    ],
    answer:"Ampersand, semicolon"
  },
  {
    question: "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    options: [
        "onfocus",
        "onblur",
        "onclick",
        "ondblclick",
    ],
    answer:"onblur"
  },
  {
    question: "Using _______ statement is how you test for a specific condition.",
    options: [
        "Select",
        "If",
        "Switch",
        "For",
    ],
    answer:"If"
  },
  {
    question: "How to create a Date object in JavaScript?",
    options: [
        "dateObjectName = new Date([parameters])",
        "dateObjectName.new Date([parameters])",
        "dateObjectName := new Date([parameters])",
        "dateObjectName Date([parameters])",
    ],
    answer:"dateObjectName = new Date([parameters])"
  },
  {
    question: "The _______ method of an Array object adds and/or removes elements from an array.",
    options: [
        "Reverse",
        "Shift",
        "Slice",
        "Splice",
    ],
    answer:"Splice"
  },
  {
    question: "<script type=”text/javascript”>"+
    "x=4+”4″;"+
    "document.write(x);"+
    "</script>",
    options: [
        "44",
        "8",
        "4",
        "error",
    ],
    answer:"44"
  },
  {
    question: "What is mean by “this” keyword in javascript?",
    options: [
        "It refers current object",
        "It referes previous object",
        "It is variable which contains value",
        "None of the above",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
  {
    question: "",
    options: [
        "",
        "",
        "",
        "",
    ],
    answer:""
  },
]