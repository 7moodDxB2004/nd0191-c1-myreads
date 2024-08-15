import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";

// Array including the differences in UI between bookshelves
const bookshelfTypes = [
  { name: "currentlyReading", header: "Currently Reading" },
  { name: "wantToRead", header: "Want to Read" },
  { name: "read", header: "Read" },
];

const ListPage = ({ books, addBooks }) => {
  const booksByShelf = (shelf) =>
    books.filter((book) => {
      return book.shelf === shelf;
    });
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookshelfTypes.map((bookshelf, id) => (
          <Bookshelf
            key={id}
            books={booksByShelf(bookshelf.name)}
            header={bookshelf.header}
            addBooks={addBooks}
          />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListPage;
