const Val = document.querySelector('#Count');

function Increase(Flag)
{
    let Temp = parseInt(Val.innerText);
    
    Temp = Flag == false ? Temp + 1 : Temp + 1000;
    Val.innerText = Temp;
};
function Decrease(Flag)
{
    let Temp = parseInt(Val.innerText);
    
    Temp = Flag == false ? Temp - 1 : Temp - 1000;
    Val.innerText = Temp;
};