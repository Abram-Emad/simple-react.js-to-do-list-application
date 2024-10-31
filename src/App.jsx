import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  function handleAddTodo() {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  }

  function handleItemDone(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function handleDeleteItem(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className='App'>
      <h2>To Do List</h2>
      <div className='to-do-container'>
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div key={index} className='item'>
                <li 
                  className={completed ? "done" : ""}
                  onClick={() => {
                    handleItemDone(index);
                  }}>
                  {text}
                </li>
                <span
                  className='trash'
                  onClick={() => {
                    handleDeleteItem(index);
                  }}>
                  ❌
                </span>
              </div>
            );
          })}
        </ul>
        <input ref={inputRef} placeholder='Enter item...' />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
