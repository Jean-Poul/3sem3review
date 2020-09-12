/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Opgave a) 
// Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions.
// concat does not mutate. Use push or apply for that

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// Opgave b) 
// Create a new array called all, which should be a concatenation of the two arrays given above, starting with the boys and ending with the girls.

var all = boys.concat(girls);

console.log(all);

// Opgave c) 
// Create a comma-separated string containing all the names from the all-array, separated by commas.
// Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.

var arrComma = all.join(", ");

console.log(arrComma);

var arrHyphen = all.join(" - ");

console.log(arrHyphen);

// Opgave d)
// Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
// Add the names, Hans and Kurt, to the start of the array

all.push("Lone", "Gitte");

console.log(all)

all.unshift("Hans", "Kurt");

console.log(all);

// Opgave f) 
// Remove the first name in the array (Hans)
// Remove the last name from the array (Gitte)

all.shift();

console.log(all);

all.pop();

console.log(all);

// Opgave h) 
// Remove Ole and Janne from the middle of the array

all.splice(3, 2);

console.log(all);


// Opgave i)
// Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.

all.reverse();

console.log(all);

// Opgave j)
// Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array

all.sort();

console.log(all);

// Opgave k)
// he default sort algorithm doesn’t handle the situation where the name can be either capitalized or not. 
// Write a user-defined sort method to fix this problem.

all.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

console.log(all);

// Opgave i)
// Convert all the names in the array to uppercase.

var arrUpper = all.map(function(item)
{ return item.toUpperCase() }
        )

console.log(arrUpper);


// Opgave m)
// Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback).

all = all.filter(e => e.startsWith("L"));

console.log(all);