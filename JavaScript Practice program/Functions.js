// function Add(A, B)
// {
//     return Math.round((A + B) >> 1);
// }

// console.log("Sum of 2 number = ", Add(10, 34));
// console.log("Sum of 2 number = ", Add(102, 334));
// console.log("Sum of 2 number = ", Add(130, 354));

// A new type of short notation for creating function is arrow function "=>"
// const A = (N)=>
// let A = (N)=>
// {
//     if(N == 0)
//     {
//         console.log(N);
//         return ;
//     }
//     console.log(N--);
//     A(N);
// }

// A(10);

// let Arr = [1, 3, 4, -1, -4, 12];
// let Filter = Arr.filter(i => i > 0);

// console.log(Filter);

// function Sum()
// {
//     let Total = 0;
//     for(let i of arguments)
//     {
//         Total += i;
//     }
    
//     return Total;
// }

// we cann't add more parameter after using rest operator as it will result to error

function Sum(a, ...args)
{
    console.log(a, ...args);
}

console.log(Sum([1, 3, 4, 2, 5, 6, 3, 3]));