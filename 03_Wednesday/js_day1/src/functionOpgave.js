/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Opgave 1
// Function Declaration
// Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 + n2;
};

// Function Expression
var sub = function(n1,n2){
  return n1 - n2;
};

// Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

// Opgave 2
// What will the following print?
console.log(add(1, 2)); // 3
console.log( add ); // Function add
console.log( add(1,2,3) ); // 3
console.log( add(1) );	// NaN
console.log( cb(3,3,add) ); // cb function 3+3=6
console.log( cb(4,3,sub) ); // cb function 4+3=1
console.log( cb(3,3,add() ) ); // error since there are no arguments 
console.log( cb(3,"hh",add) ); // String 3hh and the scope of the function add

// Opgave 3
// try / catch like in java. TypeError will give a stacktrace from the error

try {
    console.log(cb(3, 3, add()));
} catch (e) {
    if (e instanceof TypeError) {
        console.error(e.name + ': ' + e.message)
    }
}

// part two

var cb2 = function (n1, n2, callback) {
    if (typeof n1 !== "number") {
        console.log("Expected a number but got: " + n1);
    }
    if (typeof n2 !== "number") {
        console.log("Expected a number but got: " + n2);
    }
    if (typeof callback !== "function") {
        console.log("Expected a function but got: " + callback);
    }
    return "Result from the two numbers: " + n1 + " + " + n2 + " + " + n1 + " * " + n2 + " = " + (n1 + n2 + callback(n1, n2));
};

// Opgave 4

var mul = function(n1,n2){
  return n1 - n2;
};


// Opgave 5

var div = function (n1, n2) {
    return n1 / n2;
};



