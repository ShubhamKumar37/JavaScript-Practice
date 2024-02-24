// console.log("MAN");

// let My_Prom1 = new Promise(function(resolve, reject)
// {
//     // resolve(1);
//     setTimeout(() => {
//         console.log("Yes your promise worked 1");
//     }, 3000);
//     reject(new Error("You broke the promise"));
// });
// let My_Prom2 = new Promise(function(resolve, reject)
// {
//     resolve(1);
//     setTimeout(() => {
//         console.log("Yes your promise worked 2");
//     }, 4000);
//     reject(new Error("You broke the promise"));
// });

// // console.log("Out of your mind");
// My_Prom1.then((value) => {console.log("Hi there you MAN")});
// My_Prom1.catch((reason) => {console.log("You Created a Error MAN")});

// let Prom1 = new Promise(function(resolve, reject)
// {
//     setTimeout(() => {console.log("Prom1 time 1")}, 2000);
//     resolve(true);
// });

// Prom1.then((Value) =>
// {
//     let Prom2 = new Promise(function(resolve, reject)
//     {
//         setTimeout(() => {console.log("Prom2 time 2")}, 3000);
//         resolve(10);
//     });
//     return Prom2;
// }).then((Value) => {setTimeout(() => {console.log(Value)}, 1000)});

// async function Ran()
// {
//     console.log("Yes this is a async function");
//     return 123;
// }

async function Temp()
{
    let Prom1 = new Promise((resolve, reject) => setTimeout(() => resolve("Yep we this item available"), 2000));
    let Prom2 = new Promise((resolve, reject) => setTimeout(() => resolve("No we do not have this item available"), 4000));

    let P1 = await Prom1, P2 = await Prom2;
    return [P1, P2];
}
