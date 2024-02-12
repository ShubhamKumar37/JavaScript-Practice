let Obj = 
{
    First_Name : 'Shubham',
    Last_Name : 'Kumar',

    get Name() {return `${this.First_Name} ${this.Last_Name}`},
    set Name(Input_Name)
    {
        let Arr = Input_Name.split(' ');
        this.First_Name = Arr[0];
        this.Last_Name = Arr[1];
    }
};


console.log(Obj);
Obj.Name = 'Nikhil Suryavanshi';
console.log(Obj);