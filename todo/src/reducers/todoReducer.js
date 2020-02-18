export const initialState = {
  toDoItems: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
      item: "Learn about redux",
      completed: false,
      id: 3892987590
    }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      let newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return { ...state, toDoItems: [...state.toDoItems, newTodo] };

    case "TOGGLE_COMPLETED":
      let updatedToDo = state.toDoItems.map(obj => {
        if(obj.id === action.payload){
          return {
            item: obj.item,
            completed: !obj.completed,
            id: obj.id
          }} else {
            return obj;
          }
        }
      );
      return {...state, toDoItems: [...updatedToDo]};

    case "FILTER_COMPLETED":
      let filteredToDo = state.toDoItems.filter(obj => !obj.completed);
      return {...state, toDoItems: [...filteredToDo]}  

    default:
      return state;

  }
};
