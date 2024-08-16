import Book from "./Book";

const Bookshelf = ({ books, header, addBooks, bookshelves }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
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

export default Bookshelf;
