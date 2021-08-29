import "./styles.css";
import { useState } from "react";

const BooksLists = {
  Javascript: [
    {
      name: "Eloquent JavaScript",
      description:
        "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game ",
      rating: "4/5"
    },
    {
      name: "You Don't Know JS",
      rating: "5/5",
      description:
        "Are you looking for a better way to deeply learn the fundamentals of JavaScript?"
    },
    {
      name: "Good Parts Of Javascript",
      description:
        "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad,",
      rating: "5/5"
    },
    {
      name: "You Don't Know JS: Scope & Closures",
      description:
        "The foundation of all programs is the organization of its variables and functions into different nested scopes.",
      rating: "4.5/5"
    }
  ],

  Must_Read: [
    {
      name: "Shiva Trilogy",
      description:
        "Combo of The Immortals of Meluha, The Secret of Nagas and The Oath of the Vayuputras The Immortals of Meluha 1900 BC.",
      rating: "5/5"
    },
    {
      name: "Moon",
      description:
        "Filmmaker Duncan Jones is moving forward with the final movie in his “Moon” film trilogy, just not in the way many fans are probably ...",
      rating: "4.5/5"
    },
    {
      name: "Adiyogi: The Source of Yoga",
      description:
        "Shiva does not spell religion. Shiva spells responsibility -- our ability to take our very life process in our hands.",
      rating: "5/5"
    },
    {
      name: "Death; An Inside Story: A book for all those who shall die",
      description:
        "Death is a taboo in most societies in the world. But what if we have got this completely wrong?",
      rating: "5/5"
    }
  ],
  Thriller: [
    {
      name: "The Bodyguard",
      description:
        "Rachel, a singer and an actor, receives death threats from an obsessive stalker.",
      rating: "3.5/5"
    },
    {
      name: "Emily the Exorcist",
      description:
        "Reverend Moore performs an exorcism on a girl believed to be possessed by demons.",
      rating: "5/5"
    },
    {
      name: "Love Birds",
      description:
        " her valentine to this irresistible avian wonder is the subject of this Complete Care Made Easy pet guide.",
      rating: "2/5"
    },

    {
      name: "The Guest List",
      description:
        "On an island off the coast of Ireland, guests gather to celebrate two people joining their lives together as one.",
      rating: "3/5"
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
            <h1>#{book.name}</h1>
            <hr />
            <span>{book.description}</span>
            <p>{book.rating}</p>
          </div>
        ))}
      </div>
    </>
  );
}
