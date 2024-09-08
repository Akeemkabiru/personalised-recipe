import { useEffect, useState } from "react";
type bookType = {
  id: string;
  title: string;
  price: string;
};

export default function useBook(book: bookType) {
  const [books, setBooks] = useState<bookType[]>([]);
  async function postBook() {
    try {
      const res = await fetch("http://localhost:8080/books/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      await res.json();
    } catch (error: any) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    async function getBooks() {
      try {
        const res = await fetch("http://localhost:8080/books");
        const response = await res.json();
        setBooks(response);
      } catch (error) {}
    }
    getBooks();
  }, [books]);
  return { postBook, books };
}
