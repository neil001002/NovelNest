import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";
// require("dotenv").config();

const URL = "https://novel-nest-rho.vercel.app/books";
// const URL = `${process.env.API_URL}/books`;

const fetchBooks = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchBooks().then((data) => setBooks(data.books));
  }, []);

  console.log("Here are your books-->", books);

  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
