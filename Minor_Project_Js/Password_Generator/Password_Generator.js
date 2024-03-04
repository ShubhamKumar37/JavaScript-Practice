let Password_Display = document.querySelector('[Password_Display]');
let Password_Copy = document.querySelector('[Password_Copy]');
let Password_Copy_Message = document.querySelector('[Password_Copy_Message]');
let Password_length_Number = document.querySelector('[Password_length_Number]');
let Password_length_Slider = document.querySelector('[Password_length_Slider]');
let Uppercase_Val = document.querySelector('#Uppercase');
let Lowercase_Val = document.querySelector('#Lowercase');
let Number = document.querySelector('#Number');
let Symbol = document.querySelector('#Symbol');
let Strength_Indicator = document.querySelector('[Strength_Indicator]');
let Generate_Password = document.querySelector('[Generate_Password]');
let All_Check_Box = document.querySelectorAll('input[type=checkbox]');

let Pass_Length = 4;
Change_Password_Length_Slider();


function Change_Password_Length_Slider()
{
    Password_length_Number.innerText = Pass_Length;
    Password_length_Slider.value = Pass_Length;
}

function Generate_Random_Number(Min, Max)
{
    return Math.floor(Math.random() * (Max - Min) + Min);
}

function Generate_Random_Integer()
{
    return Generate_Random_Number(0, 9);
}

function Generate_Random_Char()
{
    let Flag = Generate_Random_Number(0, 2);
    if(Flag == 1)
    {
        return String.fromCharCode(Generate_Random_Number(97, 97 + 26));
    }
    return String.fromCharCode(Generate_Random_Number(65, 65 + 26));
}

function Generate_Random_Symbols()
{
    let Symbols = "~`!@#$%^&*()_+-={}|][';:.,<>";
    return Symbols[Generate_Random_Number(0, Symbols.length)];
}