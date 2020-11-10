import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
           
            {props.data.map(obj => <Todo data={obj} key={obj.id} dispatch={props.dispatch}/>)}
            
        </div>
    )
}

export default TodoList;