"use client";
import useBook from "@/useBook";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { postBook } = useBook({ id, title, price });

  return (
    <main>
      <form>
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
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="border-2"
          placeholder="price"
          type="text"
          value={price}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </main>
  );
}
