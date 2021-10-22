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
                    // here are we are changing state of task to true from false i.e. task is completed and return all the items from array
                };
            }
            return item;
        }));
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {/* here we are using bakctiks becaz we are using 2 classname at one time if task is completed then apply completed class from css and if not then keep it uncompleted i.e. clear */}
                {text}
            </li>
            
            <button onClick={completedFun} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteFun} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
        
    );
};

export default Todo;