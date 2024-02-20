function Event()
{
    console.log("He you click on dark web stuff");
}
var Count = 0;
document.addEventListener('keydown', Event);
// document.removeEventListener('click', Event);
// Count++;
// if(Count > 4)
// {
// }

// Creating a new custom event
const customEvent = new Event('customEvent');

// Getting the target element (could be any DOM element)
const targetElement = document.getElementById('script');

// Adding an event listener to the target element
targetElement.addEventListener('customEvent', function(event) {
    console.log('Custom event triggered!');
});

// Dispatching the custom event on the target element
targetElement.dispatchEvent(customEvent);
