// Q1
// function Add(A, B)
// {
//     return A + B;
// }

// let Add = (A, B) => {return A + B};

// console.log(Add(234,123));

// Q2
// function Length_Str(Str)
// {
//     return Str.length;
// }

// let Length_Str = (Str) => {return Str.length};

// console.log(Length_Str("Shubham"));

// Q3
// function Diff_Operator_Mani(A, B)
// {
//     console.log(A + B);
//     console.log(A - B);
//     console.log(A * B);
//     console.log(A / B);
// }

// let Diff_Operator_Mani = (A, B) =>
// {
//     console.log(A + B);
//     console.log(A - B);
//     console.log(A * B);
//     console.log(A / B);
// }

// Diff_Operator_Mani(100, 34);

// Q4
// function Max_Int(A, B)
// {
//     return A > B ? A : B;
// }

// console.log("Max value is " + Max_Int(342, 3432));

// Q5
// function Reverse(Str)
// {
//     return Str.split('').reverse().join('');
// }

// console.log(Reverse("Shubham Kumar"));

// Q6
// function Check_Int(A)
// {
//     return A > 0 ? "Number greater then zero" : ((A < 0) ? "Number lesser then zero" : "Number is equal to zero");
// }

// console.log(Check_Int(-234));

// Q7
// function Number_Table(Num)
// {
//     for(let i = 1; i <= 10; i++)
//     {
//         console.log(Num * i);
//     }
// }

// Number_Table(3);

// Q8
// function Natural_Sum(Num)
// {
    // return (Num * (Num + 1)) / 2;
    // let Ans = 0;
    // for(let i = 1; i <= Num; i++)
    // {
    //     Ans += i;
    // }

    // return Ans;
// }

// console.log(Natural_Sum(10));

// Q9
// function Count_Vowel(Str)
// {
//     let Vowel = ['a', 'e', 'i', 'o', 'u'];
//     let Ans = 0; 
//     Str = Str.toLowerCase();

//     for(i of Str)
//     {
//         if(Vowel.includes(i))
//         {
//             Ans++;
//         }
//     }

//     return Ans;
// }

// console.log(Count_Vowel("Shubham, Sparsh, Harsh, Vansh, Yash"));

// Q10
// function Delete_Duplicate(Arr1, Arr2)
// {
//     let Arr3 = [];

//     for(i of Arr1)
//     {
//         if(!Arr2.includes(i))
//         {
//             Arr3.push(i);
//         }
//     }
//     for(i of Arr2)
//     {
//         if(!Arr1.includes(i))
//         {
//             Arr3.push(i);
//         }
//     }
//     return Arr3;
// }

// console.log(Delete_Duplicate([1, 4, 2, 5, 6], [2, 5, 4, 3, 8, 7, 2]));