import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
      author: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;

    createBook({ ...this.state, id: Number(Math.random() * 10000).toFixed() });

    this.setState({
      author: '',
      title: '',
      id: 0,
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    const { title, category, author } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" placeholder="Title:" value={title} onChange={this.handleChange} required />
        <input name="author" placeholder="Author:" value={author} onChange={this.handleChange} required />
        <select name="category" id="category" value={category} onChange={this.handleChange}>
          {categories.map(categ => (
            <option
              value={categ.toLowerCase()}
              key={Math.floor(Math.random() * 10040)}
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

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state,
});

export default connect(
  mapStateToProps,
  { createBook },
)(BookForm);
