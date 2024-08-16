import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import { search } from "../BooksAPI";

const SearchPage = ({ books, addBooks, bookshelves }) => {
  const [query, setQuery] = useState("");
  const [visibleBooks, setVisibleBooks] = useState(books);

  const handleQuery = (e) => {
    setQuery(e.target.value);
    if (!query) {
      setVisibleBooks(books);
      return;
    }

    // Check if the results are in the correct datatype
    // and include the correct shelf that the book belongs to.
    search(query.toLowerCase(), 20).then((res) => {
      if (Array.isArray(res)) {
        const updateBooks = res.map((searchBook) => {
          const bookFound = books.find((b) => b.id === searchBook.id);
          if (bookFound) searchBook.shelf = bookFound.shelf;

          return searchBook;
        });

        setVisibleBooks(updateBooks);
      }
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            id="book-search"
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handleQuery}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.isArray(visibleBooks) &&
            visibleBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                addBooks={addBooks}
                bookshelves={bookshelves}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
