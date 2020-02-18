import React, {useReducer} from "react";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import {todoReducer, initialState} from "./reducers/todoReducer";
import "./App.css";

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <Title />
    
      <TodoList dispatch={dispatch} data={state.toDoItems}/>
      <TodoForm dispatch={dispatch}/>
    </div>
  );
}

export default App;
