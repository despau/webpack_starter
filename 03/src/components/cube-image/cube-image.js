import Cube from './cube.png';
import './cube-image.scss';


class CubeImmage {
    render(){
        const img = document.createElement('img');
        img.alt='Cube';
        img.src= Cube;
        img.classList.add('cube-image');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default CubeImmage;