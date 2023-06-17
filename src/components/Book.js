import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };

  const percentage = 66;

  return (
    <div className="book flex">
      <div className="books-container flex">
        <div>
          <h4 className="categorie-title">Action</h4>
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

      <div className="books-progress-box flex">
        <div className="progressBar flex">
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar value={percentage} />
          </div>
          <div>
            <p className="porcentage">66%</p>
            <p className="completed-progress">Completed</p>
          </div>
        </div>
        <span />
        <div className="chapter-box flex">
          <div>
            <h4 className="current-chapter">CURRENT CHAPTER</h4>
            <p className="nro-chapter">Chapter 17</p>
          </div>
          <button type="button" className="bttnUpdate">UPDATE PROGRESS</button>
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
