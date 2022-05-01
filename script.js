let number1 = '';
let storeNumber = document.querySelector("#btn");
storeNumber.addEventListener('click' , function(){
   let testing = '1';
   number1 += testing;
});
let operate = function() {


    let number1 = prompt("please,select a number")
    let number2 = prompt("PLESEEEEE , number again")
    let operator = prompt('you want to sum, mul, divide, or rest?');
    if(operator == "+" ){
        return sum(parseInt(number1),parseInt(number2))
    }
    else if(operator == "-"){
        return res(number1,number2)
    }
}


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
