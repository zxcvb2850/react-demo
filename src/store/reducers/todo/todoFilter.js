import {VisibilityFilters} from "../../actions/todo";

const visibleFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'FILTER_TODO':
      return action.filter;
    default:
      return state;
  }
}
export default visibleFilter;
