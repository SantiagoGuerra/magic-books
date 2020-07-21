import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

const App = () => (
  <div>
    Filter:
    <BookList />
    <BookForm />
  </div>
);

export default App;
