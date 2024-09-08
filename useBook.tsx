import { useEffect, useState } from "react";
type bookType = {
  id: string;
  title: string;
  price: string;
};
export default function useBook(book: bookType) {
  async function postBook() {
    try {
      const res = await fetch("http://localhost:8080/books", {
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
  return { postBook };
}
