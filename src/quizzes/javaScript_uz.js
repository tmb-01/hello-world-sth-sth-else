export const javaScriptTest = [
  {
    question: "Qaysi teg ichiga JavaScript kodlarini yozamiz?",
    options: ["<script>", "<javascript>", "<scripting>", "<js>"],
    answer: "<script>",
  },
  {
    question:
      "Quyidagi <p>-ni ichidagi tekstlarini uzgartirish uchun nima yozishimiz kerak?\n\n" +
      '<p id="demo">This is a demonstration.</p>',
    options: [
      'document.getElement("p").innerHTML = "Hello World!";',
      'document.getElementById("demo").innerHTML = "Hello World!";',
      'document.getElementByName("p").innerHTML = "Hello World!";',
      '#demo.innerHTML = "Hello World!";',
    ],
    answer: 'document.getElementById("demo").innerHTML = "Hello World!";',
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "<body>ni oxirgi qismida",
      "<head> va <body> qismlarda",
      "<head> qismda",
    ],
    answer: "<body>ni oxirgi qismida",
  },
  {
    question: 'Qaysi biri "xxx.js" fileni tug\'ri chaqirgan?',
    options: [
      '<script href="xxx.js">',
      '<script src="xxx.js">',
      '<script name="xxx.js">',
    ],
    answer: '<script src="xxx.js">',
  },
  {
    question:
      "Eksternal JavaScript kodlari <script> teg ichida yozilishi kerak.",
    options: ["✅ Tug'ri", "❌ Xato"],
    answer: "❌ Xato",
  },
  {
    question: 'alerda "Hello World" ni qanaqasiga chiqariladi?',
    options: [
      'msg("Hello World");',
      'alertBox("Hello World");',
      'msgBox("Hello World");',
      'alert("Hello World");',
    ],
    answer: 'alert("Hello World");',
  },
  {
    question: "JavaScriptda funksiya qanaqasiga ochiladi?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: '"myFunction" nomli funksiyana qanaqasiga chaqiramiz?',
    options: [
      "call function myFunction()",
      "myFunction()",
      "call myFunction()",
    ],
    answer: "myFunction()",
  },
  {
    question: "JavaScriptda If qanaqasiga yoziladi?",
    options: ["if i = 5", "if (i == 5)", "if i == 5 then", "if i = 5 then"],
    answer: "if (i == 5)",
  },
  {
    question: '"i" teng bumasa 5-ga qanaqasiga yoziladi if-da?',
    options: ["if (i != 5)", "if i =! 5 then", "if (i <> 5)", "if i <> 5"],
    answer: "if (i != 5)",
  },
  {
    question: "WHILE loop qanaqasiga yoziladi?",
    options: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)"],
    answer: "while (i <= 10)",
  },
  {
    question: "FOR loop qanaqasiga yoziladi?",
    options: [
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
    ],
    answer: "for (i = 0; i <= 5; i++)",
  },
  {
    question: "JS-da koment qanaqasiga yoziladi?",
    options: [
      "<!--This is a comment-->",
      "'This is a comment",
      "//This is a comment",
    ],
    answer: "//This is a comment",
  },
  {
    question: "Kup qatorni qanaqasiga komentga olish mumkun?",
    options: [
      "//This comment has\nmore than one line//",
      "/*This comment has\nmore than one line*/",
      "<!--This comment has\nmore than one line-->",
    ],
    answer: "/*This comment has\nmore than one line*/",
  },
  {
    question: "JavaScriptda array qanaqasiga yoziladi?",
    options: [
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = ["red", "green", "blue"]',
      'var colors = "red", "green", "blue"',
    ],
    answer: 'var colors = ["red", "green", "blue"]',
  },
  {
    question: "Qanaqasiga 7.25-ga yaqin butun sonni olishimiz mumkun?",
    options: ["round(7.25)", "Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    question: "maksimum raqamni qanaqasiga topamiz?",
    options: ["Math.ceil(x, y)", "ceil(x, y)", "top(x, y)", "Math.max(x, y)"],
    answer: "Math.max(x, y)",
  },
  {
    question: "toFixed() metodi fazifasi nima?",
    options: [
      "nuqtadan keyin nechta raqamni olish kerak ushani kursatadi",
      "butun qismida nechtasini olishi kerak ushani olish uchun",
      "nechta raqam olish kerak butun va kasr qismida usha uchun",
      "bunaqa metod yuq",
    ],
    answer: "nuqtadan keyin nechta raqamni olish kerak ushani kursatadi",
  },
  {
    question: '"Hello world"ni console da qanaqasiga malumot chiqaramiz?',
    options: [
      'console.log("Hello world")',
      'System.out.println("Hello world")',
      'print("Hello world")',
      'console("Hello world")',
    ],
    answer: 'console.log("Hello world")',
  },
  {
    question: "JavaScript bu Java-bilan birxil.",
    options: ["✅ Tug'ri", "❌ Xato"],
    answer: "❌ Xato",
  },
  {
    question: "boolean datatypega qanaqa malumotlar kiradi?",
    options: ['"tekst malumotlar"', "true, false", "naqamlar"],
    answer: "true, false",
  },
  {
    question: "Bosilganda qaysi event ishlaydi?",
    options: ["onmouseover", "onclick", "onmouseclick", "onchange"],
    answer: "onclick",
  },
  {
    question: "JavaScriptda uzgaruvchilar qanaqasiga yoziladi?",
    options: ["var carName;", "variable carName;", "v carName;"],
    answer: "var carName;",
  },
  {
    question: "Qaysi operator orqali uzgaruvchi qiymatini uzgartiramiz?",
    options: ["operator =", "operator -", "operator *", "operator x"],
    answer: "operator =",
  },
  {
    question: "Boolean(10 > 9) nimani qaytaradi",
    options: ["false", "true", "NaN"],
    answer: "true",
  },
  {
    question:
      "JavaScript case-sensitive(kata va kichik harflarda farqi bor)-mi?",
    options: ["Xa", "Yo'q"],
    answer: "Xa",
  },

  {
    question: "JavaScriptda uzgaruvchi nima uchun ishlatiladi?",
    options: [
      "Raqam tekst va boshqa malumotlarni uzida saqlash uchun",
      "Randomni uzgartirib turish uchun",
      "Hechqasi biri uchun",
    ],
    answer: "Raqam tekst va boshqa malumotlarni uzida saqlash uchun",
  },
  {
    question:
      "JavaScriptda frontendda quyidagilarni qaysilarini bajaraolmaymiz?",
    options: [
      "Formni validatsya qilish",
      "Mantiqiy amallarni bajarish",
      "Databazaga malumotlani tug'ridan tug'ri saqlash",
      "Hechqasi biri",
    ],
    answer: "Databazaga malumotlani tug'ridan tug'ri saqlash",
  },
  {
    question: "JavaScriptda funksiya nimalarni qilaoladi?",
    options: [
      "Qiymatlarni qaytaraoladi",
      "Parameterdan melumot ololadi",
      "Ikalasiham tug'ri",
    ],
    answer: "Ikalasiham tug'ri",
  },
  {
    question: "Quyidagilarni qaysi biri JSda uzgaruvchi nomi bulolmaydi?",
    options: [
      "2names",
      "_first_and_last_names",
      "firstAndLast",
      "Hechqaysi biri",
    ],
    answer: "2names",
  },
  {
    question: "JavaScript date obyektida vaqtni qanaqasiga saqliydi?",
    options: [
      "Millisekondlarda, 1 Yanvar 1970 yildan boshlar bugungacha bugan millisekondlarda",
      "Kunlarda, 1 Yanvar 1900 yildan boshlar bugungacha bugan kunlarda",
      "Sekundlarda, 1 Yanvar 1945 yildan boshlar bugungacha bugan sekundlarda",
      "Hechqaysi biri tug'ri emas",
    ],
    answer:
      "Millisekondlarda, 1 Yanvar 1970 yildan boshlar bugungacha bugan millisekondlarda",
  },
  {
    question: "JSda “Hello World” yozish uchun tug'ri sintaksizni toping?",
    options: [
      "System.out.println(“Hello World”)",
      "println (“Hello World”)",
      "document.write(“Hello World”)",
      "response.write(“Hello World”)",
    ],
    answer: "document.write(“Hello World”)",
  },
  {
    question: "HTMLda qaysi teg ichida JavaScript kodlari yoziladi?",
    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: "<script>",
  },
  {
    question: "” abc.js” faylini tug'ri qushilgan qatorni kursating?",
    options: [
      "<script href=” abc.js”>",
      "<script name=” abc.js”>",
      "<script src=” abc.js”>",
    ],
    answer: "<script src=” abc.js”>",
  },
  {
    question: "Qaysi qatorda arrayni tug'ri ochilgan?",
    options: [
      "var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
      "var txt = :1=(“tim”)2=(“kim”)3=(“jim”)",
      "var txt = [“tim”,”kim”,”jim”)]",
      "var txt = {”tim”,”kim”,”jim”}",
    ],
    answer: "var txt = [“tim”,”kim”,”jim”)]",
  },
  {
    question:
      "Agar para1 bu paragraf elementni tanlangan uzgaruvchi busa qaysi qatorda usha element ichiga text yozishni tug'ri kursatgan?",
    options: [
      "“New Text”?",
      "para1.innerText=”New Text”;",
      "para1.inner= “New Text”;",
      "para1.child=”New Text”;",
    ],
    answer: "para1.innerText=”New Text”;",
  },
  {
    question: "Tug'ri ochilgan obyektni kursating",
    options: [
      "let myObject = \"name:'tim'\"",
      "let myObject = {name:'tim'}",
      "let myObject = [name:'tim']",
      "Tug'ri javob yuq",
    ],
    answer: "let myObject = {name:'tim'}",
  },
  {
    question: "Ikki marta bosganda qaysi event ishlaydi?",
    options: ["onfocus", "onblur", "onclick", "ondblclick"],
    answer: "ondblclick",
  },
  {
    question: "Bir marta bosganda qaysi event ishlaydi?",
    options: ["onfocus", "onblur", "onclick", "ondblclick"],
    answer: "onclick",
  },
  {
    question: "focus holatdan chiqganida qaysi event ishlaydi?",
    options: ["onfocus", "onblur", "onclick", "ondblclick"],
    answer: "onblur",
  },
  {
    question: "_______dan foydalanib, biz aniq shartni tekshiramiz.",
    options: ["Select", "If", "Switch", "For"],
    answer: "If",
  },
  {
    question: "JavaScriptda date obyektini qanday chaqiramiz?",
    options: [
      "dateObjectName = new Date([parameters])",
      "dateObjectName.new Date([parameters])",
      "dateObjectName := new Date([parameters])",
      "dateObjectName Date([parameters])",
    ],
    answer: "dateObjectName = new Date([parameters])",
  },
  {
    question:
      "_______ metodi Arrayni ichidagi malumotni qushish va uchirish uchun ishlatamiz",
    options: ["Reverse", "Shift", "Slice", "Splice"],
    answer: "Splice",
  },
  {
    question:
      "<script type=”text/javascript”>\n" +
      "x=4+”4″;\n" +
      "document.write(x);\n" +
      "</script>\n",
    options: ["44", "8", "4", "error"],
    answer: "44",
  },
  {
    question: "“this” nimani bildiradi?",
    options: [
      "Qaysi obyekt ichida bulsa ushana bildiradi",
      "Bundan oldingi obyektni bildiradi",
      "Bu uzgaruvchi ichida malumot saqliydi",
      "Hechqaysibiri",
    ],
    answer: "Qaysi obyekt ichida bulsa ushana bildiradi",
  },
  {
    question:
      "setTimeout() va setInterval()-larda funksiyasining parametrlariga qanaqa typeda malumot quyish kerak?",
    options: [
      "number, number",
      "number, string",
      "function, number",
      "parameter berilmidi",
    ],
    answer: "function, number",
  },
  {
    question:
      "<script type=”text/javascript”>\n" +
      "x = '8' / '4';\n" +
      "document.write(x);\n" +
      "</script>\n",
    options: ["4", "2", "84", "error"],
    answer: "2",
  },
  {
    question: "Number('hello world' nimani qaytaradi)",
    options: ["undefined", "NaN", "hello world", "error"],
    answer: "NaN",
  },
  {
    question: "Math.sqrt() nima uchun ishlatiladi",
    options: [
      "ildizdan chiqarish uchun",
      "tekst yozish uchun",
      "bulish uchun",
      "darajaga kutarish uchun",
    ],
    answer: "ildizdan chiqarish uchun",
  },
  {
    question: "bitta HTML dakumentga faqat bitta JavaScript qushish kerak.",
    options: ["✅ Tug'ri", "❌ Xato"],
    answer: "❌ Xato",
  },
];
