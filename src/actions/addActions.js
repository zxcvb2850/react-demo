export const add_count = () => {
  return {type: 'ADD_COUNT'}
}
export const add_count_async = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(add_count());
    }, 2000)
  }
}
export const remove_count = () => {
  return {type: 'REMOVE_COUNT'}
}
export const reset_count = () => {
  return {type: 'RESET_COUNT'}
}
