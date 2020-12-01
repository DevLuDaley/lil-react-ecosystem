React ecosystem
REDUX - State Management using Flux architecture
REDUX THUNK - separate out side-affects(permanent changes like modifying user data on a server or uploading an article, network requests) -- helps with sep of concerns

RESELECT - selectors library --- abstract away how data is

STYLED COMPONENTS - cleaner way to style components without using multiple files + abstracts away the state's structure

- REDUX
- REDUX THUNK
- RESELECT
- STYLED COMPONENTS


CREATE REACT APP WITHOUT USING Boilerplate like create-react-app
What do we need?
1 - index.html
2 - support for ES6
3 - webpack
4 - Root Component
5 - react-hot-loader

# create directory/folder
    cd dir_name

# setup git
  git init
  git add .
  git commit -m 'first commit'

  in Github Desktop app
    add new repository
    publish repository

  git status

# setup new npm package
    npm init -y

# Create public && src folders

create index.html file inside public dir

# update index.html file

```html
<!-- ! index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
    <title>React Ecosystem</title>
</head>
<body>
    <div id="root"></div>
    <noscript>
        Please enable Javascript to view this site.
    </noscript>
    <script src="../dist/bundles.js"></script>
</body>
</html>
```

# install babel for ES6 feature
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react

# create .babelrc file
```json
// .babelrc
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

# create app
 inside of the SRC dir 
    create index.js && App.js && App.css 

# update app.js
```js
// app.js

import React, { Fragment, Component } from 'react'
import './App.css'
const App = () => {
    return (
    <Fragment className="App">
    <h1> Hello, World!</h1>
    </Fragment>  );
}
export default App;
```

# update App.css

```css
/* app.css */
.App {
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
}
```
# update Index.js

```js
//  Index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));
```


npm install react
npm install react-dom

# setup webpack to serve and build app
 webpack will take code in source directory and perform operations on it (i.e converting to ES6 syntax host public dir so we can view our app in a browser)

 install packages for webpack

```zsh
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader

---response =>
+ webpack-dev-server@3.11.0
+ webpack-cli@4.2.0
+ css-loader@5.0.1
+ babel-loader@8.2.2
+ webpack@5.9.0
+ style-loader@2.0.0
added 369 packages from 266 contributors and audited 690 packages in 30.978s
```
# create webpack.config.js file

```js
// webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

```

# Webpack

```json
NPM package.json scripts are a convenient and useful means to run locally installed binaries without having to be concerned about their full paths. Simply define a script as such:

+ For webpack-cli 3.x:
+
"scripts": {
  "start:dev": "webpack-dev-server"
}

+ For webpack-cli 4.x:
+
+ "scripts": {
+  "start:dev": "webpack serve"
+}


OR

"start:dev": "webpack serve --mode development --open"

"start": "webpack serve --mode development --open index.js"

And run the following in your terminal/console:


```

# Webpack script inside package.json
    "dev": "npx webpack-dev-server --mode development",
# run webpack dev server
    npm run dev

# Webpack build script inside package.json
    "build": "npx webpack --mode development",

# fix webpack in package.json
```json
// package.json -- 12/1/2020 up to date versions
"devDependencies": {
    "@babel/cli": "^7.12.8",
    "@babel/core": "^7.12.9",
    "@babel/preset-env": "^7.12.7",
    "@babel/preset-react": "^7.12.7",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.0.1",
    "style-loader": "^2.0.0",
    "webpack": "^5.9.0",
    "webpack-cli": "^4.2.0",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {
    "fsevents": "^2.2.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  }

```

# install react-hot-loader
     npm i --save-dev react-hot-loader

```js
// App.js
import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
const App = () => (
    <div className="App">
        <h1>Hello, World!</h1>
    </div>
);
    // const App = () => {
    //     return (
    //     <Fragment className="App">
    //         <h1> Hello, World!</h1>
    //     </Fragment>
    //     );
    // }
export default hot(module)(App);
```

# create new start script in package.json

```json
// package.json

```
    


# adding redux to react app
     $ npm install redux react-redux


# setup store
create store.js file

```js
// store.js
import { createStore, combineReducers } from 'redux';

const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);

```


```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App.js';

ReactDOM.render(
    <Provider store={configureStore()} >
        <App />
    </Provider>,
    document.getElementById('root'),
);

```

# Create Actions & Reducers