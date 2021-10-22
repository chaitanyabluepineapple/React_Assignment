import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    // Javascript Function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTask = (e) => {
        // when we submit task page get reloaded to prevent
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        //meaning of ...todos -> if we already have todos in array then pass it and for new to do create one object which contains text and it comes from inputText State , completed we set it as false and id key and their respected value
        setInputText("");
        // here we are setting setInputText as empty becaz state is tich old value holde krtey
    };
    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button onClick={submitTask} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
        
    );
};

export default Form;
