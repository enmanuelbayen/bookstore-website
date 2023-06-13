import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';

const BookList = () => {
  const { books } = useSelector((state) => {state.books})
 
 return (
  <div>
    {books.map((book) =>{
      <Book
        id={book.item_id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    })}
  </div>
 )
};

export default BookList;
