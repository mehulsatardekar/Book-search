import "./styles.css";
import { useState } from "react";

const BooksLists = {
  Javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "5/5" },
    { name: "Good Parts Of Javascript", rating: "3.5/5" }
  ],

  Must_Read: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Moon",
      rating: "4.5/5"
    },
    {
      name: "Mahashivratri by sadguru",
      rating: "5/5"
    }
  ],
  Thriller: [
    {
      name: "The Bodyguard",
      rating: "3.5/5"
    },
    {
      name: "Emily the Exorcist",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [setBooks, updateBooks] = useState("Javascript");

  function setgenre(genre) {
    console.log(genre.target.innerText);
    updateBooks(genre.target.innerText);
  }

  return (
    <>
      <div className="App">
        <div className="title">
          <h1>GoodBooks</h1>
          <p>Checkout my favorite books. Select a genre to get started</p>
        </div>
        <div className="genre-btns">
          {Object.keys(BooksLists).map((book) => {
            return (
              <button className="btn" onClick={setgenre}>
                {book}
              </button>
            );
          })}
        </div>
      </div>

      <div className="container">
        {console.log(BooksLists[setBooks])}
        {BooksLists[setBooks].map((book) => (
          <div className="card">
            <h1>{book.name}</h1>
            <p>{book.rating}</p>
          </div>
        ))}
      </div>
    </>
  );
}
