import 'normalize.css';
import './index.css';

import initMap from './map/map.js';

const mapContainer = document.querySelector('#map');
const map = initMap(mapContainer);

// remove following lines and modify map.css to disable opening animation 
mapContainer.style.transition = 'opacity 2s, transform 1s';
mapContainer.style.transitionTimingFunction = 'ease-in';
mapContainer.style.opacity = '1';
mapContainer.style.transform = 'scale(1, 1)';
