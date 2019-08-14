import CubeImage from './components/cube-image/cube-image';
import Heading from './components/heading/heading';
import _ from 'lodash'; //this makes it too slow. lets configure it in webpack prod

const heading = new Heading();
heading.render(_.upperFirst('cube'));

const cubeImage = new CubeImage();
cubeImage.render();


if (process.env.NODE_ENV === 'production'){
    console.log('production mode');
} else if (process.env.NODE_ENV === 'development'){
    console.log('development mode');
}
