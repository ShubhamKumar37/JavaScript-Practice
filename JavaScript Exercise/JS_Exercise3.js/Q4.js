function Remove_Add_Display(Div_Id)
{
    if(document.querySelector(Div_Id).style.scale == 2)
    {
        document.querySelector(Div_Id).style.scale = 1;
    }
    else
    {
        document.querySelector(Div_Id).style.scale = 2;
    }
}