"use client";
import useBook from "@/useBook";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { postBook, books } = useBook({ id, title, price });
  const bookReverse = books.reverse();

  function handleSubmit(e: any) {
    e.preventDefault();
    if (id && title && price) postBook();
  }
  return (
    <main>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          setId("");
          setPrice("");
          setTitle("");
        }}
      >
        <input
          className="border-2"
          placeholder="book id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="border-2"
          placeholder="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border-2"
          placeholder="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      {bookReverse.map((book) => {
        return <div key={book.title}>{book.title}</div>;
      })}
    </main>
  );
}
