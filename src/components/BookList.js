import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  // eslint-disable-next-line max-len
  const books = useSelector((state) => Object.values(state.books).flatMap((bookArray) => bookArray));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (books.length === 0) {
    return <p>Add some books</p>;
  }

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
};

export default BookList;
