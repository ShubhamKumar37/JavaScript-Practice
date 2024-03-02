function Get_Valiated(Event)
{
    Event.preventDefault();
    let Form_Info = Event.target;
    let Flag = true;
    let N = Form_Info.elements.length;
    
    for (let i = 0; i < N; i++)
    {
        let Element = Form_Info.elements[i];
        let Value = Element.value.trim();
        
        if(Element.hasAttribute('required') && Value === "")
        {
            Flag = false;
            Form_Info.classList.add('Invalid');
        }
        else
        {
            Element.classList.remove('Invalid');
        }
    }
    
    let Message_Para = document.querySelector('#Message');
    if(Flag == true)
    {
        Message_Para.textContent = "Form is submitted successfully";
        Event.target.submit();
    }
    else
    {
        Message_Para.textContent = "You missed a coloumn to fill";
    }
}

let Form = document.querySelector('#My_Form');
Form.addEventListener('submit', Get_Valiated);