// for(let i = 0; i < 10; i++)
// {
//     console.log("Shubham");
// }

let Obj = 
{
    Shubham:123,
    Nitin:23,
    Prabal:1,
    Nikhil:121
}

// for(let i in Obj)
// {
//     console.log(i, Obj[i]);
// }

// for-of loop - we use in array mostly
// for(let i of "Shubham")
// {
//     console.log(i);
// }
for(const i of Object.keys(Obj))
{
    // console.log(keys, value);
    console.log(i);
}

console.log("Shubham" in Obj ? "Present" : "Absent");
console.log("Sundeep" in Obj ? "Present" : "Absent");