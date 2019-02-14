const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: action.id,
        value: action.value,
        status: false,
      }]
    case 'ADD_TODO_ASYNC':
      console.log('---------', state, action)
      return setTimeout(() => ([...state, {
        id: action.id,
        value: action.value,
        status: false,
      }]), 2000)
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) ? {...todo, status: !todo.status} : todo
      )
    default:
      return state;
  }
}

export default todos;
