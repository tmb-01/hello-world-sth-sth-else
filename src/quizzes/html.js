const html = [
  {
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinks and Text Markup Language"
],
    answer:""
  },
  {
    question: "Who is making the Web standards?",
    options: [
        "Microsoft",
        "Mozilla",
        "The World Wide Web Consortium",
        "Google"
    ],
    answer:""
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: [
        "<heading>",
        "<h1>",
        "<head>",
        "<h6>",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: [
        "<break>",
        "<br>",
        "<lb>",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
        "<body style=\"background-color:yellow;\">",
        "<body bg=\"yellow\">",
        "<background>yellow</background>",
    ],
    answer:""
  },
  {
    question: "Choose the correct HTML element to define important text",
    options: [
        "<important>",
        "<i>",
        "<b>",
        "<strong>",
    ],
    answer:""
  },
  {
    question: "Choose the correct HTML element to define emphasized text",
    options: [
        "<italic>",
        "<i>",
        "<em>",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
        "<a>http://www.w3schools.com</a>",
        "<a name=\"http://www.w3schools.com\">W3Schools.com</a>",
        "<a url=\"http://www.w3schools.com\">W3Schools.com</a>",
        "<a href=\"http://www.w3schools.com\">W3Schools</a>",
    ],
    answer:""
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: [
        "/",
        "<",
        "^",
        "*",
    ],
    answer:""
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    options: [
        "<a href=\"url\" new>",
        "<a href=\"url\" target=\"new\">",
        " <a href=\"url\" target=\"_blank\">",
    ],
    answer:""
  },
  {
    question: "Which of these elements are all <table> elements?",
    options: [
        "<table><tr><td>",
        "<thead><body><tr>",
        "<table><tr><tt>",
        "<table><head><tfoot>",
    ],
    answer:""
  },
  {
    question: "Inline elements are normally displayed without starting a new line.",
    options: [
        "True",
        "False",
    ],
    answer:""
  },
  {
    question: "How can you make a numbered list?",
    options: [
        "<list>",
        "<dl>",
        "<ol>",
        "<ul>",
    ],
    answer:""
  },
  {
    question: "How can you make a bulleted list?",
    options: [
        "<ul>",
        "<dl>",
        "<ol>",
        "<list>",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    options: [
        "<check>",
        "<input type=\"checkbox\">",
        "<input type=\"check\">",
        "<checkbox>",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML for making a text input field?",
    options: [
        "<textfield>",
        "<textinput type=\"text\">",
        "<input type=\"textfield\">",
        "<input type=\"text\">",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML for making a drop-down list?",
    options: [
        "<list>",
        "<input type=\"dropdown\">",
        "<input type=\"list\">",
        "<select>",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML for making a text area?",
    options: [
        "<input type=\"textbox\">",
        "<textarea>",
        "<input type=\"textarea\">",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML for inserting an image?",
    options: [
        "<img src=\"image.gif\" alt=\"MyImage\">",
        "<img href=\"image.gif\" alt=\"MyImage\">",
        "<image src=\"image.gif\" alt=\"MyImage\">",
        "<img alt=\"MyImage\">image.gif</img>",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML for inserting a background image?",
    options: [
        "<background img=\"background.gif\">",
        "<body bg=\"background.gif\">",
        "<body style=\"background-image:url(background.gif)\">",
    ],
    answer:""
  },
  {
    question: "An <iframe> is used to display a web page within a web page.",
    options: [
        "There is no such thing as an <iframe>",
        "False",
        "True",
    ],
    answer:""
  },
  {
    question: "HTML comments start with <!-- and end with -->",
    options: [
        "False",
        "True",
    ],
    answer:""
  },
  {
    question: "Block elements are normally displayed without starting a new line.",
    options: [
        "False",
        "True",
    ],
    answer:""
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: [
        "<meta>",
        "<title>",
        "<head>",
    ],
    answer:""
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: [
        "title",
        "alt",
        "src",
        "longdesc",
    ],
    answer:""
  },
  {
    question: "Which doctype is correct for HTML5?",
    options: [
        "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.0//EN\" \"http://www.w3.org/TR/html5/strict.dtd\">",
        "<!DOCTYPE html>",
        "<!DOCTYPE HTML5>",
    ],
    answer:""
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: [
        "<footer>",
        "<bottom>",
        "<section>",
    ],
    answer:""
  },
  {
    question: "In HTML, you can embed SVG elements directly into an HTML page.",
    options: [
        "False",
        "True",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML element for playing video files?",
    options: [
        "<movie>",
        "<media>",
        "<video>",
    ],
    answer:""
  },
  {
    question: "What is the correct HTML element for playing audio files?",
    options: [
        "<mp3>",
        "<sound>",
        "<audio>",
    ],
    answer:""
  },
  {
    question: "The HTML global attribute, \"contenteditable\" is used to:",
    options: [
        "Specify whether the content of an element should be editable or not",
        "Update content from the server",
        "Return the position of the first found occurrence of content inside a string",
        "Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
    ],
    answer:""
  },
  {
    question: "In HTML, onblur and onfocus are:",
    options: [
        "HTML elements",
        "Event attributes",
        "Style attributes",
    ],
    answer:""
  },
  {
    question: "Graphics defined by SVG is in which format?",
    options: [
        "CSS",
        "HTML",
        "XML",
    ],
    answer:""
  },
  {
    question: "The HTML <canvas> element is used to:",
    options: [
        "draw graphics",
        "display database records",
        "create draggable elements",
        "manipulate data in MySQL",
    ],
    answer:""
  },
  {
    question: "In HTML, which attribute is used to specify that an input field must be filled out?",
    options: [
        "formvalidate",
        "required",
        "placeholder",
        "validate",
    ],
    answer:""
  },
  {
    question: "Which input type defines a slider control?",
    options: [
        "slider",
        "search",
        "range",
        "controls",
    ],
    answer:""
  },
  {
    question: "Which HTML element is used to display a scalar measurement within a range?",
    options: [
        "<gauge>",
        "<measure>",
        "<range>",
        "<meter>",
    ],
    answer:"<meter>"
  },
  {
    question: "Which HTML element defines navigation links?",
    options: [
        "<nav>",
        "<navigate>",
        "<navigation>",
    ],
    answer:""
  },
  {
    question: "In HTML, what does the <aside> element define?",
    options: [
        "The ASCII character-set; to send information between computers on the Internet",
        "A navigation list to be shown at the left side of the page",
        "Content aside from the page content",
    ],
    answer:""
  },
  {
    question: "Which HTML element is used to specify a header for a document or section?",
    options: [
        "<section>",
        "<head>",
        "<top>",
        "<header>",
    ],
    answer:""
  },
];