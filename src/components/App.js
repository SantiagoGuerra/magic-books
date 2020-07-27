import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

const App = () => (
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
                CATEGORIES
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

export default App;
