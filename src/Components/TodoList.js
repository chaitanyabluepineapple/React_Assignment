import React from 'react'
import Todo from './Todo'


const TodoList = ({ todos, setTodos }) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* {} means we are writing javascript here and we are using map to access array of objects from todos array of objects */}
                {todos.map((todo) => (
                    <Todo text={todo.text} key={todo.id} todo={todo} 
                    setTodos={setTodos} todos={todos} />
                    // here we are passing newly added todo item into Todo component using props to access text from todos array we are using . operator same for id
                ))}
            </ul>
        </div>
    );
};


export default TodoList;
