const url ="https://api.thecatapi.com/v1/images/search"
const catPlace = document.querySelector('.container');
const button = document.querySelector('.btn');

button.addEventListener('click' , getRandomCats);

randomCatPhoto = (json) => {
    let photo = json [0].url
    catPlace.classList.add('cats')
    let image = document.createElement ('img')
    image.src = photo;
    image.classList.add('random_cats')
    image.alt = photo
    catPlace.appendChild(image);
}
async function getRandomCats() {
    catPlace.innerHTML = ""
    try {
        const response = await fetch (url);
        const json = await response.json();
        console.log('JSON:', json);
        return randomCatPhoto(json);
    } catch (e){
        console.log('Error from API')
        console.log(e)
    }
}