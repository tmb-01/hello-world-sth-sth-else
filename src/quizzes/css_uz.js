export const cssTest = [
    {
      question: "CSS qaysi suzlar birikmasidan iborat?",
      options: [
        "Colorful Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "CSS faylni HTML-ha tug'ri qushgan variantni toping?",
      options: [
        '<style src="mystyle.css">',
        '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        "<stylesheet>mystyle.css</stylesheet>",
      ],
      answer: "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">",
    },
    {
      question: "CSS faylni HTML-ni qaysi qismiga qushish kerak?",
      options: ["<head> qismida", "<body> qismida", "dokumentni oxirgi qismida"],
      answer: "<head> qismida",
    },
    {
      question: "Internal stillar qaysi tegda yoziladi?",
      options: ["<css>", "<style>", "<script>"],
      answer: "<style>",
    },
    {
      question: "Inlayn stillar qaysi atribyutda yoziladi?",
      options: ["font", "style", "class", "styles"],
      answer: "style",
    },
    {
      question: "Qaysi stil sintaksisi tug'ri yozilgan?",
      options: [
        "{body: color:black;}",
        "body:color=black;",
        "body {color: black;}",
        "{body:color=black;}",
      ],
      answer: "{body: color:black;}",
    },
    {
      question: "CSS da qanaqasiga koment yoziladi?",
      options: [
        "/* this is a comment */",
        "' this is a comment",
        "// this is a comment",
        "// this is a comment //",
      ],
      answer: "/* this is a comment */",
    },
    {
      question: "Orqa fonni uzgartirish uchun biz qaysi stil nomini yozamiz?",
      options: ["background-color", "color", "bgcolor"],
      answer: "background-color",
    },
    {
      question: "Barcha <h1> teglari uchun biz qanaqasiga stil yozamiz?",
      options: [
        "all.h1 {background-color:#FFFFFF;}",
        "h1 {background-color:#FFFFFF;}",
        "h1.all {background-color:#FFFFFF;}",
      ],
      answer: "h1 {background-color:#FFFFFF;}",
    },
    {
      question:
        "Tekst rangini uzgartirish uchun bir qaysi stil nomidan foydalanamiz?",
      options: ["fgcolor", "text-color", "color"],
      answer: "color",
    },
    {
      question:
        "Tekst razmerini uzgartirish uchun biz qaysi stil nomidan foydalanamiz?",
      options: ["font-size", "text-style", "text-size", "font-style"],
      answer: "font-size",
    },
    {
      question: "Hamma <p> lar stillarini uzgartira oladigan qatorni toping?",
      options: [
        "p {font-weight:bold;}",
        '<p style="font-size:bold;">',
        "p {text-size:bold;}",
        '<p style="text-size:bold;">',
      ],
      answer: "p {font-weight:bold;}",
    },
    {
      question: "Qanaqasiga biza ankordagi (<a>) pastgi chiziqni obtashiymiz?",
      options: [
        "a {text-decoration:none;}",
        "a {decoration:no-underline;}",
        "a {underline:none;}",
        "a {text-decoration:no-underline;}",
      ],
      answer: "a {text-decoration:none;}",
    },
    {
      question:
        "Qanaqasiga tekstdagi harbir so'zning birinchi harfini katta harda qib quyishimiz mumkun?",
      options: [
        "text-style:capitalize",
        "CSS-da biz buni qilolmaymiz 😭",
        "text-transform:capitalize",
        "transform:capitalize",
      ],
      answer: "text-transform:capitalize",
    },
    {
      question: "Qaysi stil nomi orqali shriftni uzgartirishimiz mumkun?",
      options: ["font-family", "font-style", "font-weight"],
      answer: "font-family",
    },
    {
      question: "Tekstni qaysi stil bilan qalin (bold) qilish mumkun?",
      options: ["style:bold;", "font:bold;", "font-weight:bold;"],
      answer: "font-weight:bold;",
    },
    {
      question:
        "Manbunaqa chegarani qanaqsiga yozishimiz mumkun:\n\n" +
        "Teppa qism chegarasi = 10 pixels\n" +
        "Pastgi qism chegarasi = 5 pixels\n" +
        "Chap tomon chegarasi = 20 pixels\n" +
        "Uz  tomon chegarasi = 1pixel?",
      options: [
        "border-width:10px 20px 5px 1px;",
        "border-width:10px 1px 5px 20px;",
        "border-width:5px 20px 10px 1px;",
        "border-width:10px 5px 20px 1px;",
      ],
      answer: "border-width:10px 1px 5px 20px;",
    },
    {
      question: "Qaysi stil bilan chap tomonga biz margin bersak buladi?",
      options: ["indent", "padding-left", "margin-left"],
      answer: "margin-left",
    },
    {
      question: "Biza paddingda negativ raqam yozishimiz mukun.",
      options: ["✅ Tug'ri", "❌ Xato"],
      answer: "❌ Xato",
    },
    // {
    //   question: "How do you make a list that lists its items with squares?",
    //   options: [
    //     "list-type: square;",
    //     "list-style-type: square;",
    //     "list: square;",
    //   ],
    //   answer: "",
    // },
    {
      question: "Id nomi 'demo' bugan elementni qanaqasiga tanlab olamiz?",
      options: [".demo", "#demo", "demo", "*demo"],
      answer: "#demo",
    },
    {
      question:
        "Class nomi 'test' bugan elementni qanaqasiga tanlab olishimiz mumkun?",
      options: ["test", ".test", "*test", "#test"],
      answer: ".test",
    },
    {
      question: "div ichidagi p-larni qanaqasiga tanlab olamiz?",
      options: ["div.p", "div p", "div + p"],
      answer: "div.p",
    },
    // {
    //   question: "How do you group selectors?",
    //   options: [
    //     "Separate each selector with a space",
    //     "Separate each selector with a comma",
    //     "Separate each selector with a plus sign",
    //   ],
    //   answer: "",
    // },
    // {
    //   question: "What is the default value of the position property?",
    //   options: ["absolute", "static", "fixed", "relative"],
    //   answer: "",
    // },
  ];
  