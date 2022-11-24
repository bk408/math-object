// printing the Math object

let m = Math;
console.log(m);

// Printing the constants from Math object

console.log("The value of Math.E is ", Math.E)
console.log("The value of Math.LN2 is ", Math.LN2)
console.log("The value of Math.LN10 is ", Math.LN10)
console.log("The value of Math.LOG2E is ", Math.LOG2E)
console.log("The value of Math.LOG10E is ", Math.LOG10E)
console.log("The value of Math.PI is ", Math.PI)
console.log("The value of Math.SQRT2 is ", Math.SQRT2)


// Printing the Functions from Math object

let a = 34.764538;
let b = 89;

console.log("The value of a and b is ", a, b);

console.log("The value of a and b is ", Math.round(a), Math.round(b));

console.log("3 raised to the power 2 is", Math.pow(3, 2));

console.log("square root of 36 is", Math.sqrt(36));

// console.log(" The value of sin60 is", Math.sin(60));

// console.log("The value of tan45 is", Math.tan(45));

// ceil and floor
console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8));
console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8));


// Absolute Function

console.log("absolute value of 5.66 is ", Math.abs(5.66));
console.log("absolute value of -5.66 is ", Math.abs(-5.66));

// Trignomatery Function

console.log("The value of sin(pi) is ", Math.sin(Math.PI / 2));
console.log("The value of tan(pi) is ", Math.tan(Math.PI / 2));
console.log("The value of cos(pi) is ", Math.cos(Math.PI / 2));

// Min and max functions

console.log("Minimum value of 4,5,6 is ", Math.min(4, 5, 6));
console.log("Maximum value of 4,5,6 is ", Math.max(4, 5, 6));


// Genrating a Random Number

let r = Math.random();    // When we use random number it will take automatically number in between of 0 to 1

// random number b/w (a, b) = a + (b-a)*Math.random()
let c = 1;
let d = 100;
let r1_100 = c + (d - c) * Math.random();
console.log("The random number is ", r);
console.log("The random number is ", r1_100);