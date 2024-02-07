// nn ss bb u

// Primitive datatypes
let a = 234;
let b = null;
let c = "Shubham";
let d = Symbol("This is a statement");
let e = true;
let f = BigInt("342");
let g = undefined;
let h;  // empty variable is also marked as undefined by default

console.log(a, b, c, d, e, f, g, h);


// non primitive data types

let i = {
    "Solid" : 1,
    "Liquid" : 2,
    "Gas" : 3,
    "Extra" : 4,
    5 : "Plasma"
}

console.log(i["Solid"]);
console.log(i[5]);
