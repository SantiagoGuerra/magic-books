import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const books = useSelector(state => state);
  return (
    <table>
      {
      books.map(({
        title, category, author, id,
      }) => (
        <Book
          key={id}
          title={title}
          category={category}
          author={author}
          id={id}
        />
      ))
}
    </table>
  );
}

export default BookList;
