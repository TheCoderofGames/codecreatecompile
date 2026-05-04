const button = document.getElementById('myButton');
const title = document.getElementById('title');

button.addEventListener('click', () => {
    title.innerText = "You clicked the button!";
    title.style.color = "darkgreen";
});
