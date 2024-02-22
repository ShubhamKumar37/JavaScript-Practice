console.log("MAN");

let My_Prom1 = new Promise(function(resolve, reject)
{
    // resolve(1);
    setTimeout(() => {
        console.log("Yes your promise worked 1");
    }, 3000);
    reject(new Error("You broke the promise"));
});
let My_Prom2 = new Promise(function(resolve, reject)
{
    resolve(1);
    setTimeout(() => {
        console.log("Yes your promise worked 2");
    }, 4000);
    reject(new Error("You broke the promise"));
});

// console.log("Out of your mind");
My_Prom1.then((value) => {console.log("Hi there you MAN");}), My_Prom1.catch((reason) => {console.log("You Created a Error MAN");});