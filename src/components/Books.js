import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ title, author }) => (
  <section className="book">
    <div>
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
    </div>
    <button type="button" className="button" id="deleteBttn">Remove</button>
  </section>
);
Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
