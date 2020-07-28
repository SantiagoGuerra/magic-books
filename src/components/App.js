import React from 'react';
import { useDispatch } from 'react-redux';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import CategoryFilter from './CategoryFilter';

const App = () => {
  const handleFilterChange = useDispatch();

  return (
    <div>

      <header className="header">
        <div className="container">
          <div className="header-wrap">
            <h1 className="text-size-xl color-blue font-main logo">
              Bookstore CMS
            </h1>
            <nav className="navigation">
              <ul className="list-nav">
                <li className="list-nav__item">
                  BOOKS
                </li>

                <li className="list-nav__item">
                  <CategoryFilter handleFilterChange={handleFilterChange} />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="avatar" />
      </header>
      <BookList />
      <BookForm />
    </div>
  );
};

export default App;
