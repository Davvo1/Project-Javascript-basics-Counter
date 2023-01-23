let output = document.querySelector("#output");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let clear = document.querySelector("#clear");




add.addEventListener("click", function(){
 let result = Number(output.innerText) + 1;
 output.innerText = result;
});

subtract.addEventListener("click", function(){
    let result = Number(output.innerText) - 1;
    
    if (result < 0) {
        result = 0;
    }
    
    output.innerText = result;
   });

clear.addEventListener("click", function(){
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