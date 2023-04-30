import React from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [person, setPerson] = React.useState(people);
  const [num, setNum] = React.useState(0);

  function prevBtn() {
    setNum((prev) => (prev >= 1 && prev < person.length ? prev - 1 : 3));
  }
  function nextBtn() {
    setNum((prev) => (prev >= 0 && prev < person.length - 1 ? prev + 1 : 0));
  }
  function randomBtn() {
    setNum(Math.floor(Math.random() * person.length));
  }
  return (
    <article className="review">
      <div className="img-container">
        <img alt="" src={person[num].image} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{person[num].name}</h4>
      <p className="job">{person[num].job}</p>
      <p className="info">{person[num].text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevBtn}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextBtn}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn random-btn" onClick={randomBtn}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
