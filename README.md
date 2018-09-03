# OpenLayers 5.x with Webpack starter project

This is a basic project to start using OpenLayers 5.x with Webpack.

* [Separate webpack configurations](https://webpack.js.org/guides/production/) for development and production. Development config features source mapping and a localhost server with live reloading and hot module replacement. Production config focuses on minified bundles, lighter weight source maps to improve load time
* [Babel](https://babeljs.io/docs/setup/#installation) with [env preset](https://babeljs.io/docs/en/babel-preset-env/)
* [OpenLayers 5](https://openlayers.org/) with ES6 module imports
* [Normalize.css](https://necolas.github.io/normalize.css/) for CSS consistency
* [ol-layerswitcher](https://github.com/walkermatt/ol-layerswitcher) control for basic layer management

## Usage

Clone or download the project and then install the dipendencies:

```bash
cd ol-webpack-starter
npm install
```

Start the development server:

```bash
npm start
```

Create a minified bundle:

```bash
npm run build
```
