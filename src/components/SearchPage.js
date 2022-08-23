import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as API from "./BooksAPI";
import PropTypes from "prop-types";
import { debounce } from "lodash";

const SearchPage = ({ books, updateBookState }) => {
  const [filteredBox, setFilteredBox] = React.useState([]);

  // to fix fetching experience DEBOUNCE was implemented
  const queryEqualStateSearch = debounce((query) => {
    if (query) {
      query = query ? query : " ";
      API.search(query).then((filteredBox) => {
        if (!filteredBox.error) {
          setFilteredBox(filteredBox);
        } else {
          setFilteredBox([]);
        }
      });
    } else {
      setFilteredBox([]);
    }
  }, 1000);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => queryEqualStateSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {filteredBox.map((searchedBook) => {
            let shelf = "none";
            books.map((book) =>
              book.id === searchedBook.id ? (shelf = book.shelf) : ""
            );
            return (
              <div key={searchedBook.id}>
                <Book
                  book={searchedBook}
                  updateBookState={updateBookState}
                  searchShelf={shelf}
                />
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
SearchPage.propTypes = {
  booksAfterSearch: PropTypes.array,
  updateBookState: PropTypes.func,
  queryEqualStateSearch: PropTypes.func,
};
export default SearchPage;
