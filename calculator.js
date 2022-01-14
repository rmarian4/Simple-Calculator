var num1 = "";
var num2 = "";
var operator = null;
var result = null;



/*
To do:
1. test for bugs
*/

function printNum(num){
    /**
     * Function to print each number 
     */

    if(num.length > 18){ // if the length of the number is greater than 28, then express the number in scientific notation
        document.getElementById("num").innerHTML =  Number(num).toExponential().toString();
    }

    else{ 
        document.getElementById("num").innerHTML = num
    }

}

function getNum(num){
    if(result != null){
        /*
        if the result variable is not null, then that means that the when the user clicks on a number they are starting
        a new calculation so we need to reset all the variables to their default values
        */
        num1 = "";
        num2 = null;
        result = null;
        operator = null;
    }

    if(operator == null && num1.length <15 ){
        /*
        if the operator variable is null, then that means that the number the user is inputting corresponds to 
        num1 in the program. Also, if the number has already reached the max length then we do not add any more digits
        (max length of num1 and num2 is 15 digits)
        */

        if(num == "0" && num1 == "0"){
            return;
        }
        
        num1 += num

        printNum(num1);
        console.log(num1);
    }

    else if( operator != null && num2.length < 15 ){
        /*
        If the operator variable does not equal null, then the number that the user is inputting corresponds to 
        num2 in the program. Also check if num2 is num2 is below the max length before adding another digit
        */

        if(num == "0" && num2 == "0"){
            return ;
        }

        num2 += num
        printNum(num2);
    }
    

}

function percent(){
    if(operator == null){
        num1 = Number(num1)
        if(num1 == 0){
            return;
        }
        num1 = (num1/100);
        result = num1;
        num1 = num1.toString();
        document.getElementById("num").innerHTML = num1;
    }
    else{
        num2 = Number(num2);
        if(num2 == 0){
            return;
        }
        num2 = (num2/100);
        result = num2;
        num2 = num2.toString();
        document.getElementById("num").innerHTML = num2;
    }
}

function clearEntry(){
    if(operator == null){
        num1 = "";
        num1Decimal = false;
        document.getElementById("num").innerHTML = "0";
    }
    else{
        num2 = "";
        num2Decimal = false;
        document.getElementById("num").innerHTML = "0";
    }
}

function clearCalculation(){
    /*
    reset all values to their default values
    */
    operator = null;
    num1 = "";
    num2 = null;
    document.getElementById("num").innerHTML = "0";
}

function deleteDigit(){
    if(result != null){
        return;
    }

    else if(operator == null){
        /*
        remove last digit of number and output result back to the user
        Example, if the number was 77, then 77 modulo 10 equals 7, subtracting 7 from 77 gives 70 and dividing
        70 by 10 gives 7. The number 7 is then outputed back to the user
        */
        if(num1.length <= 1){
            document.getElementById("num").innerHTML = "0";
            num1 = num1.slice(0,num1.length-1);
        }
        else{
            num1 = num1.slice(0,num1.length-1);
            printNum(num1);
        }
        
    }

    else{
        if(num2.length <= 1){
            document.getElementById("num").innerHTML = "0"
            num2 = num2.slice(0, num2.length-1);
        }
        else{
            num2 = num2.slice(0, num2.length-1);
            printNum(num2);
        }
    }
}

function plusMinus(){
    if(operator == null){
        num1 = Number(num1);
        num1 = num1*-1;
        num1 = num1.toString();
        printNum(num1);
    }
    else{
        num2 = Number(num2);
        num2 = num2*-1;
        num2 = num2.toString();
        printNum(num2);
    }
}

function division(){
    /*
    set the operator variabel to "divide" and reset num2 to null so that the user can input a fresh number for num2
    */
    operator = "divide";
    num2 = "";
    result = null;
}

function multiplication(){
    operator = "multiply";
    num2 = "";
    result = null;
}

function add(){
    operator = "addition";
    num2 = "";
    result = null;
}

function subtract(){
    operator = "subtraction";
    num2 = "";
    result = null;
}

function square(){
    if(operator == null){
        num1 = Number(num1);
        num1 = num1*num1;
        result = num1;
        num1 = num1.toString();
        document.getElementById("num").innerHTML = num1;
    }
    else{
        num2 = Number(num2);
        num2 = num2*num2;
        result = num2;
        num2 = num2.toString();
        document.getElementById("num").innerHTML = num2;
    }
}

function addDecimal(){
    if(operator == null){
        /*
        convert the number to a string and then add a period to the string
        */
        num1 = num1.toString();
        num1 += ".";
        document.getElementById("num").innerHTML = num1;
    }

    else{
        num2 = num2.toString();
        num2 += ".";
        document.getElementById("num").innerHTML = num2;
    }
}


function sqrt(){
    if(operator == null)
    {
        num1 = Number(num1);
        if(num1 < 0){
            document.getElementById("num").innerHTML = "Invalid Input";
        }
        else{
            num1 = Math.sqrt(num1);
            result = num1;
            num1 = num1.toString();
            printNum(num1);
        }
    }
    else{
        num2 = Number(num2);
        if(num2 < 0){
            document.getElementById("num").innerHTML = "Invalid Input";
        }
        else{
            num2 = Math.sqrt(num2);
            result = num2;
            num2 = num2.toString();
            printNum(num2);
        }
    }
}

function inverse(){
    if(operator == null)
    {
        num1 = Number(num1);
        if(num1 == 0){
            document.getElementById("num").innerHTML = "Cannot divide by zero";
        }
        else{
            num1 = 1/num1;
            result = num1;
            num1 = num1.toString()
            printNum(num1);
        }
    }
    else{
        num2 = Number(num2);
        if(num2 == 0){
            document.getElementById("num").innerHTML = "Cannot divide by zero";
        }
        else{
            num2 = 1/num2;
            result = num2;
            num2 = num2.toString();
            printNum(num2);
        }
    }
}

function equals(){
    if(operator == null){
        document.getElementById("num").innerHTML = num1;
    }
    else if(operator == "multiply"){
        if(num2 == ""){
            /*
            if the user inputs a number and hits the multiply button and then equals without inputting a second numver
            then the calculator should just square the number 
            */
            num1 = Number(num1);
            num2 = Number(num1.toString()); //create a deep copy of num1
            num1 = num1*num2;
            result = num1
        }
        else{
            num1 = Number(num1);
            num2 = Number(num2);
            num1 = num1*num2;
            result = num1;
        }
        num1 = num1.toString()
        num2 = num2.toString()
        printNum(num1);
    }

    else if (operator == "divide"){
        if(num1 == "" && num2 == ""){
            document.getElementById("num").innerHTML = "Result is undefined";
        }
        else if(num1 != "" && num2 == ""){
            /*
            if the user inputs a number and then clicks divide and then clicks equals without inputting a second number 
            then the output should be num1 divided by itself. 
            */
            num1 = Number(num1);
            num2 = Number(num1.toString()); //create a deep copy of num1
            num1 = num1/num2;
            num1 = num1.toString();
            num2 = num2.toString();
            printNum(num1);
        }
        else if(num2 == "0"){
            document.getElementById("num").innerHTML = "Cannot divide by zero";
        }
        else{
            num1 = Number(num1);
            num2 = Number(num2);
            num1 = num1/num2;
            result = num1;
            num1 = num1.toString();
            num2 = num2.toString();
            printNum(num1);
        }
    }

    

    else if(operator == "addition"){
        if(num2 == ""){
            /*
            if the user inputs only one number and clicks the addition number followed by equals without inputting
            a second number then the num1 should just be added to itself
            */
            num1 = Number(num1)
            num2 = Number(num1.toString()); //create deep copy of num1 and store it in num2
            num1 = num1 + num2;
            num1 = num1.toString();
            num2 = num2.toString();
            result = num1;
        }

        else {
            num1 = Number(num1)
            num2 = Number(num2)
            num1 = num1+num2;
            num1 = num1.toString();
            num2 = num2.toString();
            result = num1;
        }

        printNum(num1);
    }

    else if (operator == "subtraction"){
        if(num2 == ""){
            /*
            if the user inputs only one number and clicks the addition number followed by equals without inputting
            a second number then the num1 should just be subtracted from itself
            */
            num1 = Number(num1);
            num2 = Number(num1.toString());
            num1 = num1-num2;
            result = num1
            num1 = num1.toString();
            num2 = num2.toString();
        }
        else{
            num1 = Number(num1);
            num2 = Number(num2);
            num1 = num1-num2;
            result = num1;
            num1 = num1.toString();
            num2 = num2.toString();
        }

        printNum(num1);
    }
}