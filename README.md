Below you will find some information on how to perform common tasks.<br>

## Table of Contents

* [Technologies and tools](#technologies-and-tools)
* [Folder Structure](#folder-structure)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)

## Technologies and tools

* [React](https://reactjs.org/) with [Redux](https://redux.js.org/),
  [React Router](https://reacttraining.com/react-router/web/guides/philosophy),
  [Thunk](https://github.com/gaearon/redux-thunk) and
  [Axios](https://github.com/axios/axios)
* [webpack](https://webpack.js.org/) with
  [webpack-dev-server](https://github.com/webpack/webpack-dev-server),
  [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
  and [style-loader](https://github.com/webpack/style-loader)
* [Babel](http://babeljs.io/) with ES6 and extensions used by Facebook (JSX,
  [object spread](https://github.com/sebmarkbage/ecmascript-rest-spread/commits/master),
  [class properties](https://github.com/jeffmo/es-class-public-fields))
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [ESLint](http://eslint.org/)
* [Prettier](https://prettier.io/)
* [Jest](http://facebook.github.io/jest)
* [Husky](https://github.com/typicode/husky)

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
      fonts/
      icons/
      logos/
      images/
    components/
      common/
        ...
    containers/
        ...
    reducers/
        ...
      index.js
    App.js
    App.test.js
    index.css
    index.js
```

## Available Scripts

### `npm start`

Runs the app in the development mode.<br> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in
the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br> See the section
about [running tests](#running-tests) for more information.
# code-selector
