import React from "react";
import propTypes from "prop-types";
const BookElement = (props) => {
  const {
    book: { imageLinks, shelf, authors, title },
    updateBook,
    searchShelf,
  } = props;

  const handelChanger = (e) => {
    updateBook(e, props.book);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imageLinks && imageLinks.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={shelf || searchShelf}
              onChange={handelChanger}
            >
              <option value="moveto" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors || "unknown Author"}</div>
      </div>
    </li>
  );
};
BookElement.propTypes = {
  book: propTypes.object,
  searchShelf: propTypes.string,
  updateBook: propTypes.func,
};

export default BookElement;
