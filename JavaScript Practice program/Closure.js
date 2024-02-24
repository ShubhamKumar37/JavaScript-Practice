function Temp1()
{
    let A = 123;
    function Temp2()
    {
        let C = 340;
        console.log(A, B);
        function Temp3()
        {
            console.log(A, B, C, D);
            B += 3;
        }
        Temp3();
    }
    let B = 1;
    let D = 'N';
    Temp2();
    console.log(B);

}

Temp1();