"use strict";

//Exercise 1
    var onMarsRightNow = false;

//Exercise 2
    var fruits = ['mango', 'banana', 'guava', 'kiwi', 'strawberry'];

//Exercise 3
    var vegetables = ['eggplant', 'broccoli', 'carrot', 'cauliflower', 'zucchini'];

//Exercise 4
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Exercise 5
    fruits.push('tomato');

//Exercise 6
    vegetables.push('tomato');

//Exercise 7
    var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    someNumbers.reverse();

//Exercise 8
    vegetables.sort();

//Exercise 9
    fruits.sort();

//Exercise 10
    var fruitsAndVeggies = fruits.concat(vegetables);

//Required code

        // This function generates a random number that is both positive and even
        function randomPositiveEvenNumber() {
            var randomNumber = Math.ceil(Math.random() * 100) + 10;
            if(randomNumber % 2 !== 0) {
                return randomPositiveEvenNumber()
            }

            return randomNumber;
        }

        // this function generates a random number that is both positive and odd
        function randomPositiveOddNumber() {
            var randomNumber = Math.ceil(Math.random() * 100) + 10;
            if(randomNumber % 2 === 0) {
                return randomPositiveOddNumber();
            }

            return randomNumber;
        }

        // this function generates a random number that is both negative and even.
        function randomNegativeEvenNumber() {
            var randomNumber = Math.ceil(Math.random() * -100) - 10;
            if(randomNumber % 2 === 0) {
                return randomNumber;
            }

            return randomNegativeEvenNumber();
        }

        // this function generates a random number that is both negative and odd.
        function randomNegativeOddNumber() {
            var randomNumber = Math.ceil(Math.random() * -100) - 10;
            if(randomNumber % 2 === 0) {
                return randomNegativeOddNumber();
            }

            return randomNumber;
        }

        // The next 4 lines create variables that hold these generated random numbers
        var positiveEvenNumber = randomPositiveEvenNumber();
        var positiveOddNumber = randomPositiveOddNumber();
        var negativeEvenNumber = randomNegativeEvenNumber();
        var negativeOddNumber = randomNegativeOddNumber();

//End of Required code

//Exercise 11
    function addOne(num) {
        return num + 1;
    }

//Exercise 12
    function isPositive(num) {
        return num >= 0;
    }

console.log(isPositive(positiveOddNumber), true, "Exercise 12");
console.log(isPositive(positiveEvenNumber), true, "Exercise 12");
console.log(isPositive(negativeOddNumber), false, "Exercise 12");
console.log(isPositive(negativeEvenNumber), false, "Exercise 12");
