import React, { useEffect, useState } from 'react';
import './style.css'
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);


  // Save Data into Local Storage
  const savedToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // JSON.stringify() takes a JavaScript object and transforms it into a JSON string.
  };

  // Get Data From Local Storage
  const getFromLocalStorage = () => {

    let getFromLocal = localStorage.getItem("todos");
    getFromLocal = JSON.parse(getFromLocal);
    // JSON.parse() takes a JSON string and transforms it into a JavaScript object.
    console.log("data" + getFromLocal);
    setTodos(getFromLocal);
  };

  //useEffect for getting data from Local Storage only once 

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  // useEffect 
  useEffect(() => {
    savedToLocalStorage();
  }, [todos]);

  const deleteAllTaksFun= () => {
    setTodos([]);
  }

  return (
    <div className="App">
      <header >
        <h1>To Do List App </h1>

      </header>

      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />

      <button onClick={deleteAllTaksFun} className="clearAll-btn">Clear All Todos  <i className="fas fa-trash"></i></button>
      <br />
      <br />

      <p className="todosLeft">
        Todos Left: {todos.filter(todo => !todo.completed).length}
      </p>
      <br />
      <TodoList todos={todos} inputText={inputText} setTodos={setTodos} />

      
    </div>
  );
}

export default App;
