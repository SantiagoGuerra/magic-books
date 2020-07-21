import initialState from './index';

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
