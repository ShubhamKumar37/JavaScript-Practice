async function Fetch(URL)
{
    try
    {
        let Data = await fetch(URL);
        let Parsed = await Data.json();
        return Parsed;
    }
    catch(error)
    {
        throw new Error("This is a error");
    }
}

function Fetch_Data(URL)
{
    try
    {
        return Fetch(URL);
    }
    catch(error)
    {
        console.error(error);
    }
}

console.log(Fetch_Data('https://jsonplaceholder.typicode.com/nonexistent'));
// console.log(Fetch_Data('https://jsonplaceholder.typicode.com/todos/1'));