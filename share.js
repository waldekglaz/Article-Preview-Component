const elShareBtn = document.querySelector('.share-btn');
const elShareBox = document.querySelector('.share-box');
// const elShareBoxClose = document.querySelector('.close');

elShareBtn.addEventListener('click',() => {
    elShareBox.classList.toggle('active');
    elShareBtn.classList.toggle('active');
});
// elShareBoxClose.addEventListener('click', () =>{
//     elShareBox.classList.remove('active')
// })