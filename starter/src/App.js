import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ListPage from "./pages/ListPage";
import { getAll } from "./BooksAPI";

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
          element={<ListPage books={books} addBooks={addBooks} />}
        />
        <Route
          exact
          path="/search"
          element={<SearchPage books={books} addBooks={addBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
