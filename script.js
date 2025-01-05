//declare variables

let num1 = "";
let num2 = "";
let operator = "";
const displayScreen = document.getElementById("display")

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
        return "Error: Division by 0";
    }
}

//function that takes operator and nums and uses above function

function operate(num1f,operatorf,num2f){
    switch (operatorf) {
        case '+':
            return addNumbers(num1f, num2f);
        case '-':
            return minusNumbers(num1f, num2f);
        case '*':
            return multNumbers(num1f, num2f);
        case '/':
            return divNumbers(num1f, num2f);
        default:
            return "Error: Invalid operator";
    }
}


// button press should give content
const abuttons = document.querySelectorAll('button');

        // Loop through all the buttons
        abuttons.forEach(button => {
            // Add event listener for click event
            button.addEventListener('click', function() {
                // Get the text content of the button


                
                const buttonText = button.textContent;
                if (button.classList.contains("equal")){
                    console.log("num1:", num1);   // Debug log for num1
                    console.log("operator:", operator); // Debug log for operator
                    console.log("num2:", num2);  // Debug log for num2
                    if(num1 != "" && operator != "" && num2 != ""){
                        console.log("hollo");
                        const result = operate(parseFloat(num1),operator,parseFloat(num2));
                        if (result === "Error: Division by 0") {
                            displayScreen.textContent = result;  // Show error on the screen
                            num1 = "";  // Clear the variables
                            num2 = "";
                            operator = "";
                            return;
                        }            
                        num1 = result.toString();
                        num2 = "";
                        operator = "";
                        console.log(num1);
                        displayScreen.textContent = num1;
                    }
                    
                    return;
                }

                //if its a number then work with num1 and 2
                // but num1 if operator empty otherwise num2
                if (!isNaN(buttonText)) {
                    if (operator === ""){
                        num1 = num1 + buttonText;
                        // Log the button text to the console
                        console.log('Button clicked: ' + num1);
                    }  else{
                        num2 = num2 + buttonText;

                        console.log('Button clicked: ' + num2);
                    }
                } else if (button.classList.contains("operation")){
                    // if num1 isnt empty though
                    if (num1 !== ""){
                    operator = buttonText;
                    console.log("operator pressed : " + operator);
                    }
                }
                displayScreen.textContent = num1 + operator + num2;
            });
        });


document.querySelector('.clear').addEventListener('click', () => {
    displayScreen.textContent = "Press Buttons";
    num1 = "";
    num2 = "";
    operator = "";
});