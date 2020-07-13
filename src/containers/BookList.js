import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

function BookList() {
  const books = useSelector(state => state);
  return (
    <table>
      <thead>
        <tr>
          <th>
            Title
          </th>
          <th>
            Category
          </th>
          <th>
            Author
          </th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>

    </table>
  );
}

export default BookList;
