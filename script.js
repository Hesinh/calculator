// mid prototype of the btm values
let valueA = '';
let extraA = ''; 
let extraB = '';
let totalValue = '';




const container = document.getElementById("container");
for (let i = 0 ; i < 10 ; i++){
    let btnCreate = document.createElement('button')
    container.appendChild(btnCreate).className = i;
    btnCreate.textContent= i;
btnCreate.addEventListener ('click', () => {
    valueA += btnCreate.className;
    if (operator === ''){
    displayNum1.textContent = valueA;
    }
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
    displayNum1.textContent = extraA;
    displayNum2.textContent = valueA;
    }
})}
//There are the values of every operator button and operator itself

let operator = '';

let SelOpPlus = document.querySelector("#plus");
SelOpPlus.addEventListener('click', () => {
    operator = '+';
    alert(operator);
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        extraA = parseInt(valueA);
        valueA = '';
    }
})
let SelOpMin = document.querySelector("#minus");
SelOpMin.addEventListener('click', () => {
    operator = '-';
    alert(operator);
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        extraA = parseInt(valueA);
        valueA = '';
    }
})

let SelOpMul = document.querySelector("#multiply");
SelOpMul.addEventListener('click', () => {
    operator = '*';
    alert(operator);
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        extraA = parseInt(valueA);
        valueA = '';
    }
})

let SelOpDiv = document.querySelector("#divide");
SelOpDiv.addEventListener('click', () => {
    operator = '/';
    alert(operator);
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        extraA = parseInt(valueA);
        valueA = '';
    }
})

// final part of the program
let equalStore = '';

let selEqual = document.querySelector("#equal");
selEqual.addEventListener('click', () => {
    extraB = parseInt(valueA);
    equalStore = '=';
    if(operator === '+'){
        totalValue = sum(extraA,extraB)
    }
    if(operator === '-'){
        totalValue = res(extraA,extraB)
    }
    if(operator === '*'){
        totalValue = mul(extraA,extraB)
    }
    if(operator === '/'){
        totalValue = div(extraA,extraB)
    }
    displayTotal.textContent = totalValue;
})


// This are the operators, it needs an adjusment to work in events
let sum = function(valueA, valueB){
    let result = valueA + valueB ;
    return result
}
let mul = function(valueA, valueB){
    let result = valueA * valueB;
    return result
}
let res = function(valueA, valueB) {
    let result = valueA - valueB;
    return result
}
let div = function(valueA, valueB){
    let result = valueA / valueB;
    return result
}
//early prototype of display
let displayNum1 = document.querySelector("#number1");
let displayNum2 = document.querySelector("#number2");
let displayTotal = document.querySelector("#total");