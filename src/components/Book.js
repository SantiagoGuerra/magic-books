import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../actions/index';

const Book = book => {
  const dispatch = useDispatch();
  const handleRemoveBook = book => {
    dispatch(removeBook(book));
  };

  const {
    title, category, author, id,
  } = book;

  return (
    <tr id={`book-${id}`}>
      <td>{title}</td>
      <td>{category}</td>
      <td>{author}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            handleRemoveBook(book);
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Book;
