import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as API from "./BooksAPI";
import PropTypes from "prop-types";
import { debounce } from "lodash";

const SearchPage = ({ books, updateBook }) => {
  const [filteredBox, setFilteredBox] = React.useState([]);
  
  const convertBooksToHashMap = () => {
    return books.reduce((hash, cur) => {
      hash[cur.id] = cur.shelf;
      return hash;
    }, {});
  };

  // create hash map of book ids and shelf type
  const [booksIds, setBooksIds] = React.useState(convertBooksToHashMap());
  React.useEffect(() => {
    setBooksIds(convertBooksToHashMap());
    console.log(booksIds);
  }, [books]);
  // to fix fetching experience DEBOUNCE was implemented
  const queryEqualStateSearch = debounce((query) => {
    query = query || "";
    API.search(query).then((filteredBox) => {
      if (filteredBox !== undefined && filteredBox.length > 0) {
        setFilteredBox(filteredBox);
      } else {
        setFilteredBox([]);
      }
    });
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
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => queryEqualStateSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {filteredBox.map((searchedBook) => {
            // get shelf type from book hashMap if found
            let shelf = booksIds[searchedBook.id] || "none";
            console.log(shelf);
            return (
              <div key={searchedBook.id}>
                <Book
                  book={searchedBook}
                  updateBook={updateBook}
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
  queryEqualStateSearch: PropTypes.func,
  updateBook: PropTypes.func,
};
export default SearchPage;
