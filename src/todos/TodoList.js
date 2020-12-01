import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
// import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos = [{ text: 'Hello Lu'}] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;