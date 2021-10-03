import { useState } from "react";

export function SearchBooks(props: any) {
  const [books, setBooks] = useState([]);

  return (
    <input onChange={props.handleChangeInput()} type="text" placeholder="Procure por um livro" className="search-item" />
  );
}