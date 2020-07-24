import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { changeFilter } from '../actions';

function CategoryFilter({ handleFilterChange }) {
  const filter = useSelector(state => state.filter);
  const [select, changeSelect] = useState(filter);

  const filterCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const onChangeSelect = e => {
    const { value } = e.target;

    changeSelect(value);

    handleFilterChange(changeFilter(value));
  };

  return (
    <select
      name="categoryFilter"
      id="categoryFilter"
      value={select}
      onChange={onChangeSelect}
    >
      {filterCategories.map(categ => (
        <option
          value={categ.toLowerCase()}
          key={Math.floor(Math.random() * 10040)}
        >
          {categ}
        </option>
      ))}
    </select>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: propTypes.func.isRequired,
};

export default CategoryFilter;
