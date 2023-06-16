import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book flex">
      <div className="books-container flex">
        <div>
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
        </div>
        <div className="modifyBttns-box flex">
          <button type="button" className="modifyBttns">Comments</button>
          <span />
          <button
            type="button"
            className="modifyBttns"
            id="deleteBttn"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
          <span />
          <button type="button" className="modifyBttns">Edith</button>
        </div>
      </div>

      <div className="books-progress-box">
        <div className="progressBar">
          <p>dibujo</p>
          <div>
            <p>64%</p>
            <p>Completed</p>
          </div>
        </div>
        <span />
        <div>
          <h4>CURRENT CHAPTER</h4>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
