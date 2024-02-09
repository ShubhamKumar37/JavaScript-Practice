let Arr = [1, 4, 56, "Shubham", false, null];

console.log(Arr[0]);
console.log(Arr[1]);
console.log(Arr[3]);
Arr[6] = 1023;
Arr[8] = 1023;

for(let i of Arr)
{
    console.log(i);
}

for(let i = 0; i < Arr.length; i++)
{
    console.log(Arr[i]);
}