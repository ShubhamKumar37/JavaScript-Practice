// Q1
// function Greet(Name)
// {
//     console.log(`Hi
// Congratulation on your first Internship ${Name}`);
// }

// Greet("Shubham Kumar");

// Q2
// function Get_Square(Num)
// {
//     return Num ** 2;
// }

// console.log(Get_Square(2));

// Q3
// function Count_Char(Str)
// {
//     let Obj = {};
//     for(i of Str)
//     {
//         Obj[i] = Obj[i] == undefined ? 1 : Obj[i]++;
//         // if(Obj[i])
//         // {
//         //     Obj[i]++;
//         // }
//         // else
//         // {
//         //     Obj[i] = 1;
//         // }
//     }

//     return Obj;
// }

// console.log(Count_Char("Shubham"));

// Q4
// function Create_Counter()
// {
//     let Num = 0;
//     return () =>
//     {
//         Num++;
//         return Num;
//     }
// }

// let Counter = Create_Counter();
// console.log(Counter());
// console.log(Counter());
// console.log(Counter());

// Q5
// function Sum_Even(Arr)
// {
//     let Sum = 0;
//     for(let i of Arr)
//     {
//         if((i & 1) == 0)
//         {
//             Sum += i;
//         }
//     }

//     return Sum;
// }

// console.log(Sum_Even([1, 4, 2, 6, 4, 5, 2]));

// Q6
// function Sum_Arr(Arr)
// {
//     let Sum = 0;
//     for(let i of Arr)
//     {
//         Sum += i;
//     }
    
//     return Sum;
// }

// console.log(Sum_Arr([1, 4, 2, 6, 4, 5, 2]));

// Q7
// function Return_Length_5_String(Arr)
// {
//     let Ans = [];
//     for(let i of Arr)
//     {
//         if(i.length >= 6)
//         {
//             Ans.push(i);
//         }
//     }

//     return Ans;
// }

// console.log(Return_Length_5_String(["Shubham", "Anna", "Harsh", "Prabal", "Nitin", "Sparsh"]));

// Q8
// let Obj = {
//     1 : "Shubham",
//     2 : "Sparsh",
//     3 : "Harsh",
//     4 : "Yash"
// }

// console.log(Object.keys(Obj));
// function Print_Keys(Obj)
// {
//     let Arr = [];
//     for(let i in Obj)
//     {
//         Arr.push(i);
//     }

//     return Arr; 
// }

// console.log(Print_Keys(Obj));

// Q9
// function Return_Value(Arr, Key)
// {
//     return Arr.map((Obj) => Obj[Key]);
// }

// let Arr = [
//     {"Name" : "Shubham Kumar", "Number" : 100},
//     {"Name" : "Sparsh", "Number" : 90},
//     {"Name" : "Harsh", "Number" : 80}
// ];

// console.log(Return_Value(Arr, "Number"));

// Q10
// function Max_Value_Object(Arr, Key)
// {
    // return Math.max(Arr.map((Obj) => Obj[Key]));
//     let Ans = Arr.map((Obj) => Obj[Key]);
//     let Max_Value = 0;
//     for(let i of Ans)
//     {
//         if(Max_Value < i)
//         {
//             Max_Value = i;
//         }
//     }

//     return Max_Value;
// }

// let Arr = [
//     {"Name" : "Shubham Kumar", "Number" : 100},
//     {"Name" : "Sparsh", "Number" : 90},
//     {"Name" : "Harsh", "Number" : 80}
// ];

// console.log(Max_Value_Object(Arr, "Number"));