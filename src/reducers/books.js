const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, [action.content]];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.bookID);
    default:
      return state;
  }
};

export default booksReducer;
