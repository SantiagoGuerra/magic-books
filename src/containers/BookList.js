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
      <div className="container">
        <table>
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
      </div>

    </>
  );
}

export default BookList;
