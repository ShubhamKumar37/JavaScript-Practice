function Fac_Rectangle()
{
    return Rectangle = {
        Length: 1,
        Breath: 103,

        Draw()
        {
            console.log('The area of Rectangle is', this.Length * this.Breath);
        }
    };
}

let Obj1 = Fac_Rectangle();
console.log(Obj1.Draw());