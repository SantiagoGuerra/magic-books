import React from 'react';

const Book = book => {
  const {
    title, category, author, id,
  } = book;

  return (
    <tr id={`book-${id}`}>
      <td>{title}</td>
      <td>{category}</td>
      <td>{author}</td>
    </tr>
  );
};

export default Book;
