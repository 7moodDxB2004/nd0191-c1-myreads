import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";

const ListPage = ({ books, addBooks, bookshelves }) => {
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
        {bookshelves.map((bookshelf) => (
          <Bookshelf
            key={bookshelf.id}
            books={booksByShelf(bookshelf.name)}
            header={bookshelf.header}
            addBooks={addBooks}
            bookshelves={bookshelves}
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
