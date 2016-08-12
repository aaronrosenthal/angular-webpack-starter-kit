# An Angular Webpack Starter kit

A complete, yet simple, component-way starter for Angular using Webpack.

This workflow serves as a starting point for building Angular 1.x applications using Webpack. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* Based on component way.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.
* Generic components via plop.

Inspired/based on the following github projects:

* https://github.com/preboot/angular-webpack
* https://github.com/zombiQWERTY/angular-component-way-webpack-starter-kit
* https://github.com/AngularClass/NG6-starter

>Warning: Make sure you're using the latest version of Node.js and NPM

### Installing

```bash
# clone our repo
$ git clone https://github.com/aaronrosenthal/angular-webpack-starter-kit my-app

# change directory to your app
$ cd my-app

# install global dependencies with npm
$ npm install -g karma karma-cli webpack

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Installing](#installing)
    * [Dependencies](#dependencies)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
    * [Other](#other)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` Once you have these, install the following as global dependencies: `npm install -g karma karma-cli webpack`
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`

## Testing

#### 1. Unit Tests

* single run: `npm run test`
* live mode (TDD style): `npm run test-watch`

## Other

* `npm run plop` for generating files
* `npm run stats` for code analysing ([webpack.github.io/analyse](https://webpack.github.io/analyse/))
* Store your content (images, etc.) that loads from html in [assets folder](./src/public/) folder
