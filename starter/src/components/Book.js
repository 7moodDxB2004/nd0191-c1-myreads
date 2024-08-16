import PropTypes from "prop-types";
import { update } from "../BooksAPI";

const Book = ({ book, addBooks, bookshelves }) => {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: book.imageLinks
                ? `url(${book.imageLinks.thumbnail})`
                : "",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              id={book.id}
              defaultValue={book.shelf}
              onChange={(e) =>
                update(book, e.target.value).then(() => {
                  book.shelf = e.target.value;
                  addBooks(book);
                })
              }
            >
              <option value="none" disabled>
                {book.shelf ? "Move to..." : "Add to ..."}
              </option>
              {bookshelves.map((bookshelf) => (
                <option key={bookshelf.id} value={bookshelf.name}>
                  {bookshelf.header}
                </option>
              ))}
              {book.shelf && <option value="none">None</option>}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : ""}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  addBooks: PropTypes.func.isRequired,
  bookshelves: PropTypes.array.isRequired,
};

export default Book;
