import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
           
            {props.data.map(obj => <Todo data={obj} key={obj.id} onClick={() => {props.dispatch({type: "TOGGLE_COMPLETED", payload: {obj}})}}/>)}
            
        </div>
    )
}

export default TodoList;