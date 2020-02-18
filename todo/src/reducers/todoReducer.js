export const initialState = {toDoItems: [{

        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      
}, {

    item: 'Learn about redux',
    completed: false,
    id: 3892987590
  
}, {

    item: 'Learn about life in general',
    completed: false,
    id: 3892987591
  
}]}

export const todoReducer = (state, action) => {
  let newState;
  switch(action.type){

  case "ADD_TODO":
    const newTodo = {
      item: action.payload,
      completed: false,
      id: Date.now()
    };
    newState = { ...state, toDoItems: [...state.toDoItems, newTodo]};
    break;

  case "TOGGLE_COMPLETED":
      const updatedToDo = {
          item: action.payload.item,
          completed: true,
          id: action.payload.id
      };
      newState = {...state, todoItems: [...state.todoItems, updatedToDo]};
      break;
    default:
    newState = {...state}
    break;
  }


  return newState;
}
