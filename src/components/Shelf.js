import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ books, title, updateBookState }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} updateBookState={updateBookState} />
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array,
  updateBookState: PropTypes.func,
  title: PropTypes.string,
};

export default Shelf;
