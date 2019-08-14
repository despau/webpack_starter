import Cube from './cube.png';

function addImage(){
    const img = document.createElement('img');
    img.alt='Cube';
    img.width=300;
    img.src= Cube;

    const body = document.querySelector('body');
    body.appendChild(img)
}

export default addImage;