import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <p>{props.data.item} with id{props.data.id}</p>
        </div>
    )
}

export default Todo;