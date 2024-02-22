// const T1 = performance.now();
// for(let i = 1; i < 1001; i++)
// {
//     let New_Tag = document.createElement('p');
//     New_Tag.innerText = 'Hi this is para ' + i; 
    
//     document.body.appendChild(New_Tag);
// }
// const T2 = performance.now();
// console.log(T2 - T1);

// const T3 = performance.now();
// let My_Div = document.createElement('div');
// for(let i = 1; i < 1001; i++)
// {
//     let New_Tag = document.createElement('p');
//     New_Tag.innerText = 'Hi this is para ' + i; 
    
//     My_Div.appendChild(New_Tag);
// }

// const T4 = performance.now();
// document.body.appendChild(My_Div);

// console.log(T4 - T3);

// let Frag = document.createDocumentFragment();
// let T5 = performance.now();

// for(let i = 1; i < 1001; i++)
// {
//     let New_Tag = document.createElement('p');
//     New_Tag.innerText = 'Hi this is para ' + i; 
    
//     Frag.appendChild(New_Tag);
// }

// let T6 = performance.now();
// document.body.appendChild(Frag);

// console.log(T6 - T5);