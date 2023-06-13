import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h3 className="book-title">Add new book</h3>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="button"
          className="button"
          id="addBttn"
          onClick={handleAddBook}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
