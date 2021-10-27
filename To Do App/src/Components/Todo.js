import React from 'react'

const Todo = ({ text, todo, setTodos, todos }) => {
    // Delete Function 
    const deleteFun = () => {
        console.log(todo.id);
        setTodos(todos.filter(item => item.id !== todo.id));
    } 

    // Completed Function 
    const completedFun = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id)
            {
                console.log(item.id);
                console.log(todo.id);
                return{
                    ...item, completed: !item.completed
                    // changing state of todo task from False to true
                };
            }
            return item;
        }));
    }

    return (
        <div className="todo">
            
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {/* task completed apply 'completed' class of css */}
                {text}
            </li>
            
            <button onClick={completedFun} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteFun} className="trash-btn"><i className="fas fa-trash"></i></button>

            
        </div>
        
    );
};

export default Todo;