import { Button } from "@mui/base";
import React from "react";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = (props) => {
  const history = useNavigate();

  const { _id, name, author, description, price, available, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`https://novel-nest-rho.vercel.app/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button sx={{ mt: "auto" }}>
        <Link to={`/books/${_id}`}>Update</Link>
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
