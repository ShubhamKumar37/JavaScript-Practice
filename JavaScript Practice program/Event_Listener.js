// function Event()
// {
//     console.log("He you click on dark web stuff");
// }
// var Count = 0;
// document.addEventListener('keydown', Event);

// let Content = document.querySelector('#Para');

// Content.addEventListener('dblclick', function(Event)
// {
//     console.log(Event);
// });

// let Links = document.querySelector('a');
// Links.addEventListener('click', function(Event)
// {
//     Event.preventDefault();
//     console.log("Ops, we delete the default action");
// })

// let My_Div = document.createElement('div');

// function Event_Para(Event)
// {
//     console.log(Event.target.textContent);
// }

// for(let i = 1; i <= 100; i++)
// {
//     let New_Tag = document.createElement('p');
//     New_Tag.textContent = 'Hi this is para ' + i; 
    
//     New_Tag.addEventListener('click', Event_Para);
//     My_Div.appendChild(New_Tag);
// }

// document.body.appendChild(My_Div);

let Content = document.querySelector('.Check_Portion_Event');
Content.addEventListener('click', function(Event)
{
    if(Event.target.nodeName == 'SPAN')
    {
        console.log('You Touched ' + Event.target.textContent);
    }
});