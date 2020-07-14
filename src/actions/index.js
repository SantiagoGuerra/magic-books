export const createBook = book => {
  const {
    title, author, category, id,
  } = book;
  return {
    type: 'CREATE_BOOK',
    content: {
      title,
      author,
      category,
      id,
    },
  };
};

export const removeBook = book => {
  const { id } = book;

  return {
    type: 'REMOVE_BOOK',
    content: {
      id,
    },
  };
};
