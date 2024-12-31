//declare variables

let num1;
let num2;
let operator;


function addNumbers(a,b){
    return a + b;
}


function minusNumbers(a,b){
    return a - b;
}

function multNumbers(a,b){
    return a * b;
}

function divNumbers(a,b){
    if(b != 0){
        return a / b;
    } else{
        return 0;
    }
}

//function that takes operator and nums and uses above function

function operate(num1,operatorn,num2){
    switch (operator) {
        case '+':
            return addNumbers(num1, num2);
        case '-':
            return minusNumbers(num1, num2);
        case '*':
            return multNumbers(num1, num2);
        case '/':
            return divNumbers(num1, num2);
        default:
            return "Error: Invalid operator";
    }
}