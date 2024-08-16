import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ListPage from "./pages/ListPage";
import { getAll } from "./BooksAPI";

// Array including the differences in UI between bookshelves
const bookshelves = [
  { id: 1, name: "currentlyReading", header: "Currently Reading" },
  { id: 2, name: "wantToRead", header: "Want to Read" },
  { id: 3, name: "read", header: "Read" },
];

function App() {
  const [books, setBooks] = useState([]);

  // Add the book if it isn't in the books array
  const addBooks = (book) => {
    setBooks(books.filter((b) => b.id !== book.id).concat(book));
  };

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };

    getAllBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListPage
              books={books}
              addBooks={addBooks}
              bookshelves={bookshelves}
            />
          }
        />
        <Route
          exact
          path="/search"
          element={
            <SearchPage
              books={books}
              addBooks={addBooks}
              bookshelves={bookshelves}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
