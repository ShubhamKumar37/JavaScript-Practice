// // Q1
// let A = 1;
// let B = "Shubham";
// console.log(A + "Shubham");

// // Q2
// console.log(typeof (A + B));

// // Q3
// const C = 
// {
//     Shubham:34,
//     Nikhil:32,
//     Prabal:34,
//     Nitin:30
// }

// // i cann't change the structure/data type of the constant variable but can change value using the reference of the object
// C['Shubham'] = 100;
// console.log(C);

// // Q4
// C['Inderpreet'] = 34;
// console.log(C);

// const Marks = 
// {
//     "Shubham" : 90,
//     "Nitin" : 80,
//     "Prabal" : 80,
//     "Nikhil" : 89
// }

// for(let i in Marks)
// {
//     // console.log(Marks[i]);
//     console.log(i, Marks[i]);
// }

// for(let i = 0; i < Object.keys(Marks).length; i++)
// {
//     console.log("Marks of " + Object.keys(Marks)[i] + " is " + Marks[Object.keys(Marks)[i]]);
// }

// let N = 10;
// while(true)
// {
//     let Temp = prompt("Enter the Number - ");
//     if(Temp != N)
//     {
//         console.log("Enter again");
//         continue;
//     }
//     else
//     {
//         console.log("Now you entered the correct number BH");
//         break;
//     }
// }

// const Mean = (a, b, c, d, e)=>
// {
//     let Ans = 0;
//     for(let i = 0; i < 5; i++)
//     {
//         let Temp = prompt("Enter the " + (i + 1) + "th number");
//         Ans = Ans + Temp;
//     }
//     Ans = (Ans / 5);

//     return Ans;

//     return Math.round((a + b + c + d + e) / 5);
// }

// console.log("Mean of 5 number are  = ", Mean(1, 2, 3, 4, 5));

// console.log("Shubham\"".length);

// let Str = "Shubham";
// console.log(Str.toLowerCase());
// console.log(Str.toUpperCase());

// Str = "Please give me 1000";
// console.log(parseInt(Str.slice("Please give me ".length)));

// // Not change in original string and also not giving any error for changing immutable string.
// Str[5] = "O";
// console.log(Str);