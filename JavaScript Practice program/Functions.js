function Add(A, B)
{
    return Math.round((A + B) >> 1);
}

console.log("Sum of 2 number = ", Add(10, 34));
console.log("Sum of 2 number = ", Add(102, 334));
console.log("Sum of 2 number = ", Add(130, 354));

// A new type of short notation for creating function is arrow function "=>"
// const A = (N)=>
let A = (N)=>
{
    if(N == 0)
    {
        console.log(N);
        return ;
    }
    console.log(N--);
    A(N);
}

A(10);