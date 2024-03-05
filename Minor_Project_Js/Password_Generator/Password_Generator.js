let Password_Display = document.querySelector('[Password_Display]');
let Password_Copy = document.querySelector('[Password_Copy]');
let Password_Copy_Message = document.querySelector('[Password_Copy_Message]');
let Password_length_Number = document.querySelector('[Password_length_Number]');
let Password_length_Slider = document.querySelector('[Password_length_Slider]');
let Uppercase_Val = document.querySelector('#Uppercase');
let Lowercase_Val = document.querySelector('#Lowercase');
let Number_Val = document.querySelector('#Number');
let Symbol_Val = document.querySelector('#Symbol');
let Strength_Indicator = document.querySelector('[Strength_Indicator]');
let Generate_Password = document.querySelector('[Generate_Password]');
let All_Check_Box = document.querySelectorAll('input[type=checkbox]');
let Checked_Boxes = 0;
let Password = "";
let Pass_Length = 10;

async function Copy_To_Clipboard()
{
    try
    {
        await navigator.clipboard.writeText(Password_Display.value);
        Password_Copy_Message.innerText = "Copied!";
    }
    catch
    {
        Password_Copy_Message.innerText = "Failed";
    }

    Password_Copy_Message.classList.add('Active');
    
    setTimeout(() =>
    {
        Password_Copy_Message.classList.remove('Active');
    }, 2000);
}

function Change_Password_Length_Slider()
{
    Password_length_Number.innerText = Pass_Length;
    Password_length_Slider.value = Pass_Length;
}

Password_length_Slider.addEventListener('input', (Event) =>
{
    Password_length_Number.innerText = Event.target.value;
    Pass_Length = Password_length_Slider.value;
    Change_Password_Length_Slider();
})

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

function Calculate_Password_Strength()
{
    let Length = Pass_Length;
    let Green = "bg-[#20EA00]";
    let Blue = "bg-[#014AFF]";
    let Red = "bg-[#F40C01]";
    let Upper = false;
    let Lower = false;
    let Int = false;
    let Symbol = false;

    if(Uppercase_Val.checked) {Upper = true;}
    if(Lowercase_Val.checked) {Lower = true;}
    if(Number_Val.checked) {Int = true;}
    if(Symbol_Val.checked) {Symbol = true;}


    if(Length <= 7)
    {
        if(Upper && Lower && Int && Symbol)
        {
            Strength_Indicator.classList.add(Blue);
        }
        else if(Checked_Boxes > 1)
        {
            Strength_Indicator.classList.add(Green);
        }
        else 
        {
            Strength_Indicator.classList.add(Red);
        }
    }
    else if(Length <= 14)
    {
        if(Upper && Lower && Int && Symbol)
        {
            Strength_Indicator.classList.add(Blue);
        }
        else if(Checked_Boxes > 1)
        {
            Strength_Indicator.classList.add(Green);
        }
        else 
        {
            Strength_Indicator.classList.add(Red);
        }
    }
    else
    {
        Strength_Indicator.classList.add(Blue);
    }
}

Password_Copy.addEventListener('click', () =>
{
    if(Password_Display.value)
    {
        Copy_To_Clipboard();
    }
});

function Check_All_box()
{
    Checked_Boxes = 0;
    All_Check_Box.forEach((Box) =>
    {
        if(Box.checked)
        {
            Checked_Boxes++;
        }
    })

    console.log("Checked");
}

All_Check_Box.forEach((Box) => 
{
    Box.addEventListener('change', Check_All_box());
})