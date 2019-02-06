const form = document.getElementById('form');
const input = document.getElementById('input');
const imageUrl = input.value;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('POST', '/search', imageUrl, () => { })
})

const renderData = (emotionObj) => {

}