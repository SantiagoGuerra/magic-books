import React from 'react';

class BookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
      author: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    return (
      <form onChange={this.handleChange}>
        <input name="title" placeholder="Title:" />
        <input name="author" placeholder="Author:" />
        <select name="category" id="category">
          {categories.map(category => (
            <option
              value={category.toLowerCase()}
              key={Math.floor(Math.random() * 1040)}
            >
              {category}
            </option>
          ))}
        </select>
        <button type="submit">CREATE</button>
      </form>
    );
  }
}

export default BookForm;
