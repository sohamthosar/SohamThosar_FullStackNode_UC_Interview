const start_button = document.getElementById("start");
const main_page = document.querySelector(".main-page");
const quiz_page = document.querySelector(".quiz-page");

quiz_page.style.display = "none";

console.log(start_button);
console.log(main_page);
console.log(quiz_page);



start_button.addEventListener("click", () => {
    main_page.style.display = "none";
    quiz_page.style.display = "flex";
});