import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";
import "./App.css";
import * as API from "./components/BooksAPI";

// Class component has a lifted state items that going to change
// and passed to different components
const MyReads = () => {
  const [books, setBooks] = React.useState([]);

  // Func to fetch books from the bookAPI.
  const getAllBooks = () => {
    API.getAll().then((books) => setBooks(books));
  };
  React.useEffect(() => {
    getAllBooks();
  }, []);

  const updateBookState = (e, book) => {
    const shelf = e.target.value;
    if (books) {
      API.update(book, shelf).then(() => {
        book.shelf = shelf;
        setBooks((prevBooksState) =>
          prevBooksState
            .filter((bookItem) => bookItem.id !== book.id)
            .concat([book])
        );
      });
    }
  };

  return (
    <div className="app">
      <Route exact path="/">
        <MainPage books={books} updateBookState={updateBookState} />
      </Route>
      <Route exact path="/search">
        <SearchPage books={books} updateBookState={updateBookState} />
      </Route>
    </div>
  );
};

export default MyReads;
