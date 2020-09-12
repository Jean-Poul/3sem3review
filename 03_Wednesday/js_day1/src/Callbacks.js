/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Opgave 1
// Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
// Use the filter method to create a new array with only names of length <=3.
// Use the forEach method to iterate and print (console.log) both the original and the new array.

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var namesLengthMoreThanThree = names.filter(name => name.length <= 3);
function printElements(item, index) {
    console.log(index + ": " + item);
}

names.forEach(printElements);
console.log("\n");
namesLengthMoreThanThree.forEach(printElements);
console.log("\n");

// Opgave 2
// Use the names-array created above, and, using its map method, create a new array with all names uppercased.

var allNamesUpperCase = names.map(arr => arr.toUpperCase());
allNamesUpperCase.forEach(printElements);

// Opgave 3
// Use map, join + just a little bit more to create a function, which given the array of names, for example: 
// ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul>

var namesToHtmlList = "<ul>" + names.map(function (name) {
	return "<li>" + name + "</li>";
}).join("") + "</ul>";
console.log(namesToHtmlList);

// Alternative way of making the list
//let namesToHtmlList = names.map(function(name){
//    return "<li>"+name+"</li>";
//});
//let listAsString = "<ul>" + names.join("") + "<ul>";

// Opgave 4

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// Use the filter filter function to get arrays with only:
// Cars newer than 1999
var resultYear = cars.filter(car => car.year > 1999);
console.log(resultYear);
// All  Volvo’s
var resultMaker = cars.filter(car => car.make === 'Volvo');
console.log(resultMaker);
// All cars with a price below 5000
var resultPrice = cars.filter(car => car.price < 5000);
console.log(resultPrice);


// Opgave 4 a)
// Use map, join + just a little bit more to implement a function, that , given the cars array used above, will create, 
// and return a string with valid SQL statements to insert the data into a table with matching column names (id, year, make, model, price)

    let values = cars.map(function(car){
       let code = "INSERT INTO cars (id,year,make,model,price) VALUES ";

       let code2 =  "(" + car.id + ", " + car.year + ", " + car.make + ", " + car.model + ", " + car.price + ");";
            return code + code2;
    });
    console.log(values);