import React from 'react';
import './Todo.css';

const Todo = (props) => {
    const handleClick = () => {
        props.dispatch({type: "TOGGLE_COMPLETED", payload: props.data.id})
    }
    return (
        <div className={props.data.completed ? "item completed" : "item"} onClick={handleClick}>
    
            <p>Task: {props.data.item}. <br /> ID: {props.data.id}. Completed? {props.data.completed ? "yes" : "no"}</p>
        </div>
    )
}

export default Todo;