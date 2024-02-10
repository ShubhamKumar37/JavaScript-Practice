let Obj1 = {
    a : 10,
    b : 20,
    c : 30
};

let Obj2 = Object.assign({}, Obj1);
// let Obj2 = {...Obj1};



// for(let i in Obj1)
// {
//     Obj2[i] = Obj1[i];
// }

console.log(Obj1);
Obj1.a++;
console.log(Obj1);

console.log(Obj2);