import React from 'react';

function CategoryFilter() {
  const filterCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <select>
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

export default CategoryFilter;
