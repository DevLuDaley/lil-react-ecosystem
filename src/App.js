import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import TodoList from './todos/TodoList'
import './App.css'

// const App = () => {
//     return (
//     <Fragment className="App">
//         <h1> Hello, World!</h1>
//     </Fragment>
//     );
// }


const App = () => (
    <div className="App">
        <TodoList/>
    </div>
);
export default hot(module)(App);