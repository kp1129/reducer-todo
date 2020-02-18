import React, {useState} from 'react';

const TodoForm = ({dispatch}) => {
    const [inputString, setInputString] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: inputString });
        document.querySelector('form').reset();
    }

    return (
        <div>
        
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='new task goes here' onChange={(e) => setInputString(e.target.value)}/>
                <button type='submit'>add task</button>
                <input type="button" value="clear" onClick={() => dispatch({type: "FILTER_COMPLETED"})}/>
            </form>
        </div>
    )
}

export default TodoForm;