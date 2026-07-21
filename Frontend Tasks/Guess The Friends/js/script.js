const start_button = document.getElementById("start");
const main_page = document.querySelector(".main-page");
const quiz_page = document.querySelector(".quiz-page");

const question_image = document.querySelector(".question-image");
const question_number = document.querySelector(".question-number");
const question_disp = document.querySelector(".question");

const opt_1_button = document.getElementById("option-wrapper-1");
const opt_2_button = document.getElementById("option-wrapper-2");
const opt_3_button = document.getElementById("option-wrapper-3");
const opt_4_button = document.getElementById("option-wrapper-4");

const opt_1 = document.getElementById("option-1");
const opt_2 = document.getElementById("option-2");
const opt_3 = document.getElementById("option-3");
const opt_4 = document.getElementById("option-4");
const next_button = document.getElementById("next");

let counter = 0;

quiz_page.style.display = "none";

console.log(start_button);
console.log(main_page);
console.log(quiz_page);
console.log(opt_1);
console.log(question_image);
console.log(opt_1_button.innerHTML);

const questionnaire = [
    {
        image : "./assets/images/question-1.jpg",
        question : "What is the name of the iconic coffee shop where the gang always hangs out?",
        options : [
            "The Coffee bean",
            "Central Perk",
            "Grounded",
            "Java Joe's"
        ],
        answer : 2
    },
    
    {
        image : "../assets/images/question-1.jpg",
        question : "What is Chandler Bing's official job title?",
        options : [
            "Statistical analysis and data recognition",
            "Advertising Executive",
            "IT Consultant",
            "Financial Advisor"
        ],
        answer : 1
    },
    
    {
        image : "../assets/images/question-1.jpg",
        question : "Which character is famous for the iconic catchphrase 'How you doin'?",
        options : [
            "Ross Geller",
            "Chandler Bing",
            "Joey Tribbiani",
            "Gunther"
        ],
        answer : 3
    },
    
    {
        image : "../assets/images/question-1.jpg",
        question : "What is the name of Ross Geller's beloved pet monkey?",
        options : [
            "Marcel",
            "George",
            "Charlie",
            "Noodle"
        ],
        answer : 1
    },
    
    {
        image : "../assets/images/question-1.jpg",
        question : "What is the name of Phoebe Buffay's most famous original song?",
        options : [
            "Sticky Shoes",
            "Smelly Cat",
            "Little Black Curly Hair",
            "The Snowman"
        ],
        answer : 2
    },
    
    {
        image : "../assets/images/question-1.jpg",
        question : "How many times has Ross Geller been divorced throughout the series?",
        options : [
            "Once",
            "Twice",
            "Three times",
            "Four times"
        ],
        answer : 3
    },
    
    {
        image : "../assets/images/question-1.jpg",
        question : "Whose name did Ross accidentally say during his wedding vows to Emily?",
        options : [
            "Carol's",
            "Rachel's",
            "Monica's",
            "Julie's"
        ],
        answer : 2
    }
]

console.log(questionnaire[0].image);

start_button.addEventListener("click", () => {
    main_page.style.display = "none";
    quiz_page.style.display = "flex";
    counter = 0;
    startQuiz();
});

function startQuiz(){
    question_image.style.backgroundImage = `url("${questionnaire[0].image}")`;
    question_number.innerHTML = "QUESTION 1";
    question_disp.innerHTML = questionnaire[0].question;
    opt_1.innerHTML = questionnaire[0].options[0];
    opt_2.innerHTML = questionnaire[0].options[1];
    opt_3.innerHTML = questionnaire[0].options[2];
    opt_4.innerHTML = questionnaire[0].options[3];


    
}