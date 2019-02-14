let count = 10;

export default (state = count, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return state + 1;
    case 'REMOVE_COUNT':
      return state - 1;
    case 'RESET_COUNT':
      return state = count
    default:
      return state;
  }
}
