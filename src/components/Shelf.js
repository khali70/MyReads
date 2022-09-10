import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = (props) => {
  const { books, title, updateBook } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id.toString()}
              book={book}
              updateBook={updateBook}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array,
  title: PropTypes.string,
  updateBook: PropTypes.func,
};

export default Shelf;
