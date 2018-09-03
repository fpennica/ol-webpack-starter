import 'ol/ol.css';
import './map.css';
import 'ol-layerswitcher/src/ol-layerswitcher.css';

import LayerGroup from 'ol/layer/Group';
import LayerSwitcher from 'ol-layerswitcher';
import Map from 'ol/Map';
import OSMSource from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';
import XYZSource from 'ol/source/XYZ';
import { transform } from 'ol/proj';

const roma = transform([12.49, 41.89], 'EPSG:4326', 'EPSG:3857');

export default function initMap(target) {

    const map = new Map({
        target: target,
        layers: [
            new LayerGroup({
                title: 'Base',
                layers: [
                    new TileLayer({
                        title: 'Stamen Terrain',
                        type: 'base',
                        visible: true,
                        source: new XYZSource({
                            attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
                            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
                        })
                    }),
                    new TileLayer({
                        title: 'OpenStreetMap',
                        type: 'base',
                        visible: false,
                        source: new OSMSource()
                    })
                ]
            })
        ],
        view: new View({
            center: roma,
            zoom: 11,
            maxZoom: 22,
            minZoom: 2
        })
    });

    const layerSwitcher = new LayerSwitcher();
    map.addControl(layerSwitcher);

    return map;
}
