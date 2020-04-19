"use strict";

// alert('Welcome');
//
// prompt('Are you seeing this?');
//
// confirm('Are you sure?');

//Write a function that takes in two numbers and returns the sum.
    var userInputNumber1 = parseInt(prompt('Enter value for first number.'));
    var userInputNumber2 = parseInt(prompt('Enter value for second number.'));

    function sumOfTwoNumbers(num1, num2) {
        return num1 + num2;
    }
    console.log(sumOfTwoNumbers(userInputNumber1, userInputNumber2));

//Write a function that returns the index of 'l' in a string.
   var string1 = "This is the first string with a small l."

    function returnsLowerCasel(str) {
        return str.indexOf('l');
    }

    console.log(returnsLowerCasel(string1));