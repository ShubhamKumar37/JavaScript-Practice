const Share_Button = document.querySelector('.Share_Model_Section');
const Bg_Tint = document.querySelector('.Faded_Tint');

function Open_Share()
{
    console.log("Function is now active");
    Share_Button.classList.add('Active');
    Bg_Tint.classList.add('Active');
}
function Close_Share()
{
    console.log("Function is now Deactive");
    Share_Button.classList.remove('Active');
    Bg_Tint.classList.remove('Active');
}

