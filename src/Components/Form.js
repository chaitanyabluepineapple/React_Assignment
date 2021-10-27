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

        // adding todo task into array todos
        if(inputText === "" || inputText === undefined) 
        {
            console.log("Text From Input Text:-",setInputText);
            alert("Please Enter Something In Text Box");
        }
        else{
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
        // empty becaz state holding old values
        }
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
