const start_button = document.getElementById("start");
const main_page = document.querySelector(".main-page");
const quiz_page = document.querySelector(".quiz-page");

const question_image = document.querySelector(".question-image");
const question_number = document.querySelector(".question-number");
const question_disp = document.querySelector(".question");
const question_counter = document.querySelector(".question-counter");

const opt_1_button = document.getElementById("option-wrapper-1");
const opt_2_button = document.getElementById("option-wrapper-2");
const opt_3_button = document.getElementById("option-wrapper-3");
const opt_4_button = document.getElementById("option-wrapper-4");

const optionButtons = [opt_1_button, opt_2_button, opt_3_button, opt_4_button];

const opt_1 = document.getElementById("option-1");
const opt_2 = document.getElementById("option-2");
const opt_3 = document.getElementById("option-3");
const opt_4 = document.getElementById("option-4");
const ans = document.querySelector(".answer");
const next_button = document.getElementById("next");

const options = [opt_1, opt_2, opt_3, opt_4];

let counter = 0;
let score = 0;

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
    score = 0;
    startQuiz();
});

function startQuiz(){
    optionButtons.forEach((button) => {
        button.style.backgroundColor = "white";
        button.style.borderColor = "#E9D4FF";
        button.style.pointerEvents = "auto";
    });

    ans.innerHTML = "";
    next_button.style.backgroundColor = "#F3F4F6";
    next_button.style.color = "#D1D5DC";

    question_image.style.backgroundImage = `url("${questionnaire[counter].image}")`;
    question_number.innerHTML = `QUESTION ${counter+1}`;
    question_disp.innerHTML = questionnaire[counter].question;
    opt_1.innerHTML = questionnaire[counter].options[0];
    opt_2.innerHTML = questionnaire[counter].options[1];
    opt_3.innerHTML = questionnaire[counter].options[2];
    opt_4.innerHTML = questionnaire[counter].options[3];

    next_button.disabled = true;
}

optionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        console.log(index);
        console.log(button);
        next_button.style.backgroundColor = "#7008E7";
        next_button.style.color = "white";

        question_counter.innerHTML = `${counter+1}` + " / 7";

        next_button.disabled = false;
        optionButtons.forEach((option) => {
            option.style.pointerEvents = "none";
        });

        if(questionnaire[counter].answer - 1 == index){
            button.style.backgroundColor = "#ECFDF5";
            button.style.borderColor = "#00D492";
            ans.innerHTML = "Correct! Nice one!";
            ans.style.color = "#00D492";

            score++;
        }
        else{
            optionButtons[questionnaire[counter].answer - 1].style.backgroundColor = "#ECFDF5";
            optionButtons[questionnaire[counter].answer - 1].style.borderColor = "#00D492";
            button.style.backgroundColor = "#FEF2F2";
            button.style.borderColor = "#FF6467";
            ans.innerHTML = `Not Quite - The answer was "${questionnaire[counter].options[questionnaire[counter].answer - 1]}"`; 
            ans.style.color = "#FF6467";
        }
    });
});

next_button.addEventListener("click", () => {

    counter++;

    if(counter < questionnaire.length){
        startQuiz();
    }
    else{
        alert("Quiz Finished!");
    }

});