const form = document.getElementById('form');
const input = document.getElementById('input');
form.addEventListener('submit', (event) => {
    const imageUrl = input.value;
    event.preventDefault();
    fetch('POST', '/search', imageUrl, () => { })
})
const renderData = (error, emotionObj) => {

}