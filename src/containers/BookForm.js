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
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    const { title, category, author } = this.state;

    return (
      <form>
        <input name="title" placeholder="Title:" value={title} onChange={this.handleChange} />
        <input name="author" placeholder="Author:" value={author} onChange={this.handleChange} />
        <select name="category" id="category" value={category} onChange={this.handleChange}>
          {categories.map(categ => (
            <option
              value={categ.toLowerCase()}
              key={Math.floor(Math.random() * 1040)}
            >
              {categ}
            </option>
          ))}
        </select>
        <button type="submit">CREATE</button>
      </form>
    );
  }
}

export default BookForm;
