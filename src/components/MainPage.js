import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import "../App.css";
import PropTypes from "prop-types";

const MainPage = ({ books, updateBookState }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            updateBookState={updateBookState}
            books={books.filter((book) => book.shelf === "currentlyReading")}
            title="Currently Reading"
          />
          <Shelf
            updateBookState={updateBookState}
            books={books.filter((book) => book.shelf === "wantToRead")}
            title="Want to Read"
          />
          <Shelf
            updateBookState={updateBookState}
            books={books.filter((book) => book.shelf === "read")}
            title="Read"
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add</Link>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  books: PropTypes.array,
  updateBookState: PropTypes.func,
};

export default MainPage;
