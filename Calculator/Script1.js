// JavaScript source code

function Calculator(){
    var number1 = Number(document.getElementById("#num1").value);
    var number2 = Number(document.getElementById("#num2").value);
    var answer = document.querySelector("#answer");
    var select = document.querySelector("select");
    var operator = select.options[select.selectedIndex].value;
    var theCalculatedAnswer;

    if (operator == "add") {
        theCalculatedAnswer = number1 + number2;
    }
    else if (operator == "minus") {
        theCalculatedAnswer = number1 - number2;
    }
    else if (operator == "divide") {
        theCalculatedAnswer = number1 / number2;
    }
    else if (operator == "multiply") {
        theCalculatedAnswer = number1 * number2;
    } else {
        //alert("Are you kidding me?");
        //return false;
        theCalculatedAnswer = "Invalid Operator"
    } answer.innerHTML = theCalculatedAnswer;
    console.log(answer);
} 