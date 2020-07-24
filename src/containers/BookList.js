import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

function BookList() {
  const books = useSelector(state => state.books);
  const filter = useSelector(state => state.filter);
  const handleFilterChange = useDispatch();

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
        books.filter(book => filter === 'all' || book.category === filter)
          .map(({
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
    </>
  );
}

export default BookList;
