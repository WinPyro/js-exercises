// Instructions: Make a function named
// "greeting" that takes one argument. It should return a string like
// "Hello Niyaz!" when passed the argument "Niyaz"


const greeting=(Hello , Niyaz)=> `${Hello}${Niyaz}`;

// Instructions: Make a function named
// "isThisValueTrue" that takes one argument (of any type). It should
// return true if the argument is truthy, and false otherwise.


const isThisValueTrue = function(value) {
    return Boolean(value);
  }
  
  

// Instructions: Make a function named
// "isThisNumberEven" that takes one argument, a number. It should return
// true if the number is even, and false if odd.

const isThisNumberEven = function(number) {
    return number % 2 === 0;
  }
  

// Instructions: Make a function named "makeNumberNegative" that takes one argument,
//  a number. It should return the same number, but negative.

const makeNumberNegative = function(number) {
    return Math.abs(number) * -1;
  }
  



// Instructions: Make a function named
// "doYouWantCake" that takes one argument, a boolean. If the boolean is
// true, return "yes". Otherwise return "no".

const doYouWantCake = (bool) => {
    return bool ? "yes" : "no";
  }
  

// Instructions: Make a function named "wordLength" that takes one argument,
//  a string. It should return the length of the string as a number.

const wordLength = function(str) {
    return str.length;
  }

// Instructions: Make a function named
// "carBuilder" that takes 3 arguments, string, string, and number. It
// should return an object that has 3 keys: "make", "model", and "year",
// with the first/second/third arguments as the "make", "model", and "year"
// values.

const carBuilder = (make, model, year) => ({ make, model, year });


// Instructions: Make a function named
// "teachersNeeded" that takes 2 arguments, a number and a number. The
// first number is how many students there are. The second number is how
// many students there should be per teacher. It should return the minimum
// number of teachers required for that many students (integer, no
// decimals. google "Math.ceil")

const teachersNeeded = (students, perTeacher) => Math.ceil(students / perTeacher);
