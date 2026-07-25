const names = [
    "White",
    "Pinkman",
    "Fring",
    "Schrader",
    "Salamanca",
    "Ehrmantraut",
    "Goodman"
];

const name_get = document.getElementById("name");
const chars_get = document.getElementById("chars");
const generate = document.getElementById("generate");

const output_page = document.querySelector(".output-wrapper");
output_page.style.display = "none";

const output1 = document.querySelector(".output-1");
const output2 = document.querySelector(".output-2");
const output3 = document.querySelector(".output-3");

generate.addEventListener("click", () => {
    const unique_names = []; 
    let name = name_get.value;
    let chars = chars_get.value;

    console.log(name);
    console.log(Math.ceil(10 * Math.random()) % 7);
    
    output_page.style.display = "flex";
    
    while(unique_names.length !== 3){
        
        let idx = Math.ceil(10 * Math.random()) % 7;
        let check = true;
        let output_name = name.slice(0, chars) + " " + names[idx];

        // if(unique_names.length === 0) unique_names.push(output_name);

        unique_names.forEach((name) => {
            if(output_name === name) check = false;
        });

        if(check) unique_names.push(output_name);

    }

    output1.innerHTML = unique_names[0];
    output2.innerHTML = unique_names[1];
    output3.innerHTML = unique_names[2];

});