let score = false
// tried values --> 33, "33", "33abc", null, undefined, true, "Gaurika", 2, false

console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" -> 33
// "33abc" -> NaN
// true -> 1, false -> 0

let isLoggedIn = " "
// tried values --> 1, 0, 2, -6, "Gaurika", "", " ",@

let booleanIsLogged = Boolean(isLoggedIn)
console.log(booleanIsLogged);

// 1 -> true, 0 -> false
// "" -> false, " " -> true
// "Gaurika" -> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);
