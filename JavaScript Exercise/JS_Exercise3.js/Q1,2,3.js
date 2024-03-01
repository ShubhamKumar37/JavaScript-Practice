let State = document.querySelector('#Click_Button');

// State.addEventListener('click', () =>{State.innerText = "Click on me now "});
State.addEventListener('mouseover', () =>{
    // alert("Mouseover done");
    State.classList.add('bg-[#A9060A]');
});

function Remove_Class()
{
    if(State.classList.contains('bg-[#A9060A]'))
    {
        State.classList.remove('bg-[#A9060A]');
        console.log(23423);
    }
}

State.addEventListener('scroll', Remove_Class());