import React from 'react';

const Form = () => (
  <div>
    <h3 className="book-title">ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button type="button" className="button" id="addBttn">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
