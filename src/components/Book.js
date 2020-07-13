import React from 'react';

const Book = ({
  title, category, author, id,
}) => (
  <tr id={`book-${id}`}>
    <td>{title}</td>
    <td>{category}</td>
    <td>{author}</td>
  </tr>
);

export default Book;
