import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiId =	'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3M9u7ePlYhtNH1JJSthG/books';
// get
export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(apiId);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Fetch error... try again');
    }
  },
);
// post
export const postBook = createAsyncThunk('books/postBook', async (data) =>{
try {
const response = await axios.post(apiId, data);
return {
  mesage: response.data,
  data,
};
} catch (error) {
return error;
}
});
// remove
export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    await axios.delete(`${apiId}/${id}`);
    return id;
  } catch (error) {
    return error
  }
});

// const initialState = {
//   books: [
//     {
//       item_id: 'item1',
//       title: 'The Great Gatsby',
//       author: 'John Smith',
//       category: 'Fiction',
//     },
//     {
//       item_id: 'item2',
//       title: 'Anna Karenina',
//       author: 'Leo Tolstoy',
//       category: 'Fiction',
//     },
//     {
//       item_id: 'item3',
//       title: 'The Selfish Gene',
//       author: 'Richard Dawkins',
//       category: 'Nonfiction',
//     },
//   ],
// };

const booksSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getBooks.fulfilled, (state, action) => {
    const booksObj = action.payload;
    const bookIdArray = Object.keys(booksObj);
    const books = bookIdArray.map((bookId) => ({
      item_id: bookId,
          title: booksObj[bookId][0].title,
          author: booksObj[bookId][0].author,
          category: booksObj[bookId][0].category,
        }));
        return { ...state, books };
    })
    .addCase(postBook.fulfilled, (state, action) => {
      const IsFulfilled = state;
      IsFulfilled.books = [action.payload.data, ...IsFulfilled.books];
    })
    .addCase(deleteBook.fulfilled, (state, action) => {
      const filteredBooks = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
      return { ...state, books: filteredBooks };
    });
  }
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;


// addBook: (state, action) => {
//   state.books.push(action.payload);
// },
// removeBook: (state, action) => {
//   state.books = state.books.filter((book) => book.item_id !== action.payload);
// },
