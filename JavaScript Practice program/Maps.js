let Arr = [3, 5, 2, -7, -8];

// let Mapped = Arr.map(Value => "Shubham Got " + Value + " Number");

// console.log(Arr);
// console.log(Mapped );

// Chaining
let Mapped_Obj = Arr.filter(Val => Val >= 0).map((Value) =>
{
    return {Value : Value};
});

console.log(Mapped_Obj);