const start_button = document.getElementById("start");
const main_page = document.querySelector(".main-page");
const quiz_page = document.querySelector(".quiz-page");
const restart_page = document.querySelector(".restart-page");

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

const progressBar = document.querySelector(".progress-bar");
const score_disp = document.getElementById("score-1");
const play_again = document.getElementById("play-again");
const home_page = document.getElementById("home-page");

const review_line_1 = document.getElementById("review-line-1");

const options = [opt_1, opt_2, opt_3, opt_4];

let counter = 0;
let score = 0;

quiz_page.style.display = "none";
restart_page.style.display = "none";

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
        image : "./assets/images/question-2.jpeg",
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
        image : "./assets/images/question-3.png",
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
        image : "./assets/images/question-4.jpg",
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
        image : "./assets/images/question-5.jpg",
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
        image : "./assets/images/question-6.webp",
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
        image : "./assets/images/question-7.jpg",
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

start_button.addEventListener("click", () => {
    main_page.style.display = "none";
    quiz_page.style.display = "flex";
    restart_page.style.display = "none";
    resetGame();
    startQuiz();
});

function startQuiz(){

    optionButtons.forEach((button) => {
        button.style.backgroundColor = "";
        button.style.borderColor = "";
        button.style.pointerEvents = "auto";
    });

    ans.innerHTML = "";
    
    next_button.disabled = true;
    next_button.style.backgroundColor = "#F3F4F6";
    next_button.style.color = "#D1D5DC";

    if(counter === questionnaire.length - 1){
        next_button.innerHTML = "See My Results";
    }
    else{
        next_button.innerHTML = "Next Question";
    }

    
    question_image.style.backgroundImage = `url("${questionnaire[counter].image}")`;
    question_number.innerHTML = `QUESTION ${counter+1}`;
    question_disp.innerHTML = questionnaire[counter].question;
    
    options.forEach((option, index) => {
        option.innerHTML = questionnaire[counter].options[index];
    });
    
}

optionButtons.forEach((button, index) => {
    
    button.addEventListener("click", () => {
        
        next_button.disabled = false;
        next_button.style.backgroundColor = "#7008E7";
        next_button.style.color = "white";
        
        
        optionButtons.forEach((option) => {
            option.style.pointerEvents = "none";
        });
        
        let progress = ((counter + 1) / questionnaire.length) * 100;
        progressBar.style.width = `${progress}%`;
        question_counter.innerHTML = `${counter + 1} / ${questionnaire.length}`;
        
        if(questionnaire[counter].answer - 1 === index){
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
        quiz_page.style.display = "none";
        restart_page.style.display = "flex";
        showResults();
    }
});

function showResults(){
    score_disp.innerHTML = `${score}`;

    if (score <= 2){
        review_line_1.textContent = "Don't worry, every expert starts somewhere. Keep practicing and you'll improve fast!";
    } 
    else if (score <= 4){
        review_line_1.textContent = "Nice effort! You've got a good grasp, just a little more revision and you'll nail it.";
    }
    else if (score <= 6){
        review_line_1.textContent = "Great job! You clearly know your stuff - just shy of perfection.";
    }
    else{
        review_line_1.textContent = "Outstanding! You're a true quiz master - flawless performance!";
    }
}

play_again.addEventListener("click", () => {
    quiz_page.style.display = "flex";
    restart_page.style.display = "none";
    
    resetGame();
    startQuiz();
});

home_page.addEventListener("click", () => {
    main_page.style.display = "flex";
    quiz_page.style.display = "none";
    restart_page.style.display = "none";
    
    resetGame();
});

function resetGame() {
    counter = 0;
    score = 0;
    progressBar.style.width = "0%";
    question_counter.innerHTML = `0 / ${questionnaire.length}`;
}