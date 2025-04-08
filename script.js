console.log("Hello World");

//Declare a variable using let or const
let age = 26;

//Use of a Function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("John"));

//Use of document.getElementById();
document.getElementById("text").innerText = "Mission 2";

//Use of Events
document.getElementById("button").onclick = function() {
    alert("The button was clicked");
};

//Use of Loop
for (let i = 0; i < 10; i++) {
    console.log("Number: ", i);
}

let x = 2, y = 1;

//Arithmetic Operators

console.log(x + y); // 3
console.log(x - y); // 1
console.log(x * y); // 2
console.log(x / y); // 2
console.log(x % y); // 0
console.log(x ** y); // 2

x++; // Increases x by 1
console.log(x); // 3

y--; // Decreases y by 1
console.log(y); // 0


//Comparitive Operators

console.log(x === y); // false 
console.log(x != y);  // true
console.log(x > y);   // true
console.log(x < y);   // false
console.log(x >= 2);  // true
console.log(y <= 1);  // true
