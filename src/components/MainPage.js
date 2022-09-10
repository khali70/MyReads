import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import propTypes from "prop-types";

const MainPage = (props) => {
  const { books, updateBook } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            title="Currently Reading"
            books={books.filter((book) => book.shelf === "currentlyReading")}
            updateBook={updateBook}
          />
          <Shelf
            title="Want to Read"
            books={books.filter((book) => book.shelf === "wantToRead")}
            updateBook={updateBook}
          />
          <Shelf
            title="Read"
            books={books.filter((book) => book.shelf === "read")}
            updateBook={updateBook}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
MainPage.propTypes = {
  books: propTypes.array,
  updateBook: propTypes.func,
};

export default MainPage;
