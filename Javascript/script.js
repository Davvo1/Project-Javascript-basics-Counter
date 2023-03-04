let output = document.querySelector("#output");
let clear = document.querySelector("#clear");
const buttonHolder = document.querySelector("#buttonHolder");

let buttonPlus = document.createElement('button');
buttonPlus.classList.add("button");
buttonPlus.id = "add";
buttonPlus.innerText = "+"; 
buttonHolder.append(buttonPlus);

let buttonMinus = document.createElement('button');
buttonMinus.classList.add("button");
buttonMinus.id = "subtract";
buttonMinus.innerText = "-"; 
buttonHolder.append(buttonMinus);

let buttonClear = document.createElement('button');
buttonClear.classList.add("button");
buttonClear.id = "clear";
buttonClear.innerText = "Clear"; 
buttonHolder.append(buttonClear);

buttonPlus.addEventListener("click", function(){
 let result = Number(output.innerText) + 1;
 output.innerText = result;
});

buttonMinus.addEventListener("click", function(){
    let result = Number(output.innerText) - 1;
    
    if (result < 0) {
        result = 0;
    }
    
    output.innerText = result;
   });

buttonClear.addEventListener("click", function(){
 output.innerText = "0";
   });

add.addEventListener("dblclick", function(){
    let result = Number(output.innerText) + 10;
    output.innerText = result;
})

subtract.addEventListener("dblclick", function(){
    let result = Number(output.innerText) - 10;

    if (result < 0) {
        result = 0;
    }
    output.innerText = result;
})