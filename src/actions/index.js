let listItemId = 0;

export const addTodo = value => {
  return {
    type: 'ADD_TODO',
    id: listItemId++,
    value,
  }
}
export const addTodoAsync = value => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addTodo(value))
    }, 2000)
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'FILTER_TODO',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
