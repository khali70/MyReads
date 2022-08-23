import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, updateBookState, searchShelf }) => {
  return (
    <div>
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  book.imageLinks && book.imageLinks.thumbnail
                }")`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                defaultValue={book.shelf ? book.shelf : searchShelf}
                onChange={(e) => updateBookState(e, book)}
              >
                <option value="moveTo" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors ? book.authors : "No Author"}
          </div>
        </div>
      </li>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  updateBookState: PropTypes.func,
  searchShelf: PropTypes.string,
};

export default Book;
