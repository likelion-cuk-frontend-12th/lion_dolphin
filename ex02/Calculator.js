var num1 = document.querySelector(".text1");
var num2 = document.querySelector(".text2");
var button = document.getElementById("button");
var result = document.getElementById("result");
var operator = document.querySelector("#op");


button.addEventListener("click",function(){
    let answer;
    var Num1 = parseFloat(num1.value);
    var Num2 = parseFloat(num2.value);
    switch(operator.value){
        case 'plus':
            answer = Num1 + Num2; break;
        case 'minus':
            answer = Num1 - Num2; break;
        case 'multiple':
            answer = Num1 * Num2; break;
        case 'division':
            answer = Num1 / Num2; break;
    }
    result.innerHTML = `<h1>Result: ${answer}</h1>`;
});