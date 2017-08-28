
//Declares globals to be continually updated
//I know it's bad practice but couldn't think around it
numEntries = [];
finalNum1 = 0;
finalNum2 = 0;
currentOperator = "";
currentOperator2 = "";
numEntries2 = [];


//Allow for number chaining on first number
function joinNums1(input) {
    //Disallow for starting first num with a decimal point
    if (input == "." && numEntries[0] == ".") {
        return;
    }

    //Disallow for continuous 0's
    else if (input == 0 && finalNum1 == 0) {
        return;
    }

    //Allows for toggling +/- on first number
    else if (input == 'plusMinus') {
       plusMinus();
    }

    //Sets current operator allows for it to change before second number func is called
    else if (input == "+" || input == "-" || input == "*" || input == "/" || input == '%') {
        currentOperator = input;
    }

    //Allows to move forward to getting second number after an operator has been selected
    else if (currentOperator != "") {
        joinNums2(input);
    }

    //Disallows entries more than 9 decimal places long
     else if (numEntries.length >= 9) {
            document.getElementById("zero").disabled = true;
       }
    
    //Continually allows number chaining, provided '=' is not put in the display
    else if (input != "=" ) {
        numEntries.push(input.toString());
        finalNum1 = numEntries.join("");
        document.getElementById("display").innerHTML = finalNum1;
    }
}

//Reduces margin of error for parseFloat calls
function CleanNum(num) {
  num = num.toString().split("");
    i = (num.length-1);
    while (num[i] == '0' || num[i] == ".") {
        num.pop();
        i--;
    }
    return num.join("");
}


//OPERATIONS 

//Adds
function add() {
    finalNum1 = (parseFloat(finalNum1) + parseFloat(finalNum2)).toPrecision(12);
    finalNum1 = CleanNum(finalNum1);
    document.getElementById("display").innerHTML = finalNum1;
    continueOperating();
}

//Subtracts
function subtract() {
    finalNum1 = (parseFloat(finalNum1) - parseFloat(finalNum2)).toPrecision(12);
    finalNum1 = CleanNum(finalNum1);
    document.getElementById("display").innerHTML = finalNum1;
    continueOperating();
}

//Multiplies
function multiply() {
    finalNum1 = (parseFloat(finalNum1) * parseFloat(finalNum2));
    finalNum1 = CleanNum(finalNum1);
    document.getElementById("display").innerHTML = finalNum1;
    continueOperating();
}

//Divides
function divide() {
    finalNum1 = (parseFloat(finalNum1) / parseFloat(finalNum2));
    finalNum1 = CleanNum(finalNum1);
    document.getElementById("display").innerHTML = finalNum1;
    continueOperating();
}

//Calcs Percentage
function percentage() {
    finalNum1 = parseFloat(finalNum1) / 100;
    document.getElementById("display").innerHTML = finalNum1;
    continueOperating();
}

//Continues Operating
function continueOperating() {
    finalNum2 = 0;
    numEntries = [];
    numEntries2 = [];
    currentOperator = "";
}

//Clears Display and resets nums
function clearDisplay() {
    finalNum1 = 0;
    finalNum2 = 0;
    numEntries = [];
    numEntries2 = [];
    currentOperator = "";
    document.getElementById("display").innerHTML = parseFloat(finalNum1);
}

//Toggles number btwn pos and neg
function plusMinus() {
    if (finalNum1[0] == '-') {
        finalNum1 = finalNum1.slice(1);
        document.getElementById("display").innerHTML = finalNum1;
        }
    else {
        finalNum1 = finalNum1.split("")
        finalNum1.unshift("-");
        finalNum1 = finalNum1.join("");
        document.getElementById("display").innerHTML = finalNum1;
    }
}

//Solves
function solve() {
    if (currentOperator == "+") {
        add();
    }
    else if (currentOperator == "-") {
        subtract();
    }
     else if (currentOperator == "*") {
        multiply();
    }
      else if (currentOperator == "/") {
        divide();
    }
    else if (currentOperator == "%") {
        percentage();
    }

}

//Allows for num chaining on second num
function joinNums2(input) {

    if (input == "=") {
       solve();
    }
    
    else if (numEntries2.length < 9) {
        numEntries2.push(input.toString());
        finalNum2 = numEntries2.join("");
        document.getElementById("display").innerHTML = finalNum2;
    }
}



