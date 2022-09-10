import "./App.css";

import React from "react";
import { Route } from "react-router-dom";
import * as API from "./components/BooksAPI";

import SearchPage from "./components/SearchPage";
import MainPage from "./components/MainPage";

const MyReads = () => {
  const [books, setBooks] = React.useState([]);

  // Func to fetch books from the bookAPI.
  const getAllBooks = () => {
    API.getAll().then((books) => setBooks(books));
  };
  React.useEffect(() => {
    getAllBooks();
  }, []);

  const updateBook = (e, book) => {
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
        <MainPage books={books} updateBook={updateBook} />
      </Route>
      <Route exact path="/search">
        <SearchPage books={books} updateBook={updateBook} />
      </Route>
    </div>
  );
};

export default MyReads;
