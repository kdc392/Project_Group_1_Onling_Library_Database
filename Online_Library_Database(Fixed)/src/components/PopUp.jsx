import React, { useState } from "react";
import { BookPreview } from "../Mongoose.js";
import BookIMG from "./BookIMG";
import CreateReviews from "./CreateReviews.jsx";

function createBook(book) {
  const [isExtended, setExtended] = useState(false);

  const [review, setReview] = useState([]);

  function addReview(newReview) {
    setReview((prevReview) => {
      return [...prevReview, newReview];
    });
  }

  function extend() {
    if (isExtended === false) {
      setExtended(true);
    } else {
      setExtended(false);
    }
  }

  return (
    <div onClick={extend} className="extendedView">
      {isExtended ? (
        <div className="extended-view">
          <div className="extended-main">
            <BookIMG img={book.ImgURL} id="extended-img" />
            <h1 className="extended-name"> {book.title} </h1>
          </div>
          <div className="extended-details">
            <p>
              <b>Author:</b> {book.author}
            </p>
            <p>
              <b>Genre:</b> {book.genre}
            </p>
            <p>
              <b>Publication: </b> {book.publication}
            </p>
            <p>
              <b>Description: </b> {book.description}
            </p>

            <CreateReviews
              onAdd={addReview}
              key={book.id}
              rating={book.rating}
              comment={book.comment}
            />
          </div>
        </div>
      ) : (
        <BookPreview
          key={book.id}
          img={book.ImgURL}
          title={book.title}
          author={book.author}
          genre={book.genre}
        />
      )}
    </div>
  );
}

export default createBook;