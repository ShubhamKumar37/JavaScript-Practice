function Rectangle(Length, Breath) {
    this.Length = Length;
    this.Breath = Breath;
    this.Draw = function () {
        console.log("Draw a rectangle of area = ", this.Length * this.Breath);
    }
}

let Obj1 = new Rectangle(10, 43);
console.log(Obj1.Length);
console.log(Obj1.Breath);
console.log(Obj1.Draw());

Obj1.Color = "Green";
console.log(Obj1);
delete Obj1.Color;
console.log(Obj1);

// inbuilt implementation of constructor "Function"
let Main_Rectangle = new Function("Length", "Breath", `this.Length = Length;
this.Breath = Breath;
this.Draw = function () {
    console.log("Draw a rectangle of area = ", this.Length * this.Breath);
}`);

let Rect = new Main_Rectangle(10, 334);
console.log(Rect);