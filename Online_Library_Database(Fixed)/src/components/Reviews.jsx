import React from "react";

function Review(props) {
  return (
    <div className="review">
      <h1>{props.rating}</h1>
      <p>{props.comment}</p>
    </div>
  );
}

export default Review;