const Val = document.querySelector('#Count');

const Increase = (Flag) =>
{
    let Temp = parseInt(Val.innerText);
    
    Temp = Flag == false ? Temp + 1 : Temp + 10;
    Val.innerText = Temp;
};
const Decrease = (Flag) =>
{
    let Temp = parseInt(Val.innerText);
    
    Temp = Flag == false ? Temp - 1 : Temp - 10;
    Val.innerText = Temp;
};