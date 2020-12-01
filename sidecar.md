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
