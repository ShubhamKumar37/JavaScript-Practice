// async function Utility()
// {
//     let Content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let Objects = await Content.json();
    
//     console.log(Objects);
// }

// Utility();

async function New_Data()
{
    let Options = 
    {
        method : 'POST',
        body : JSON.stringify(
            {
                Title : "Shubham",
                Body : 'Hi my name is present in above',
                Experience : "20Min"
            }
        ),
        headers :
        {
            'Content-type' : 'application/json; chatset=UTF-8'
        }
    };
    
    let Content = await fetch('https://jsonplaceholder.typicode.com/posts', Options);
    let Objects = await Content.json();
    
    return Objects;
}

async function Utility()
{
    let Json_Data = await New_Data();

    console.log(Json_Data);
}

Utility();

