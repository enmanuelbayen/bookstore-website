import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <section className="book">
      <div>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
      <button
        type="button"
        className="button"
        id="deleteBttn"
        onClick={handleRemoveBook}
      >
        Remove
      </button>
    </section>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
