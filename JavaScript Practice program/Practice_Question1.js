// Q1
let A = 1;
let B = "Shubham";
console.log(A + "Shubham");

// Q2
console.log(typeof (A + B));

// Q3
const C = 
{
    Shubham:34,
    Nikhil:32,
    Prabal:34,
    Nitin:30
}

// i cann't change the structure/data type of the constant variable but can change value using the reference of the object
C['Shubham'] = 100;
console.log(C);

// Q4
C['Inderpreet'] = 34;
console.log(C);