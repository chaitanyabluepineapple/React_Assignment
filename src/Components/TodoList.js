import React from 'react'
import Todo from './Todo'


const TodoList = ({ todos, setTodos }) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* using map to access array of todos */}
                {todos.map((todo) => (
                    <Todo text={todo.text} key={todo.id} todo={todo} 
                    setTodos={setTodos} todos={todos} />
                    // passing newly created todo item with props
                    
                ))}
            </ul>
        </div>
    );
};


export default TodoList;
