import React from "react";

const Rating = ({ handleResult }) => {
  const handleBtnClick = (event) => {
    const ratings = document.querySelectorAll(".btn--rating");
    ratings.forEach((btn) => {
      btn.classList.remove("btn--active");
    });

    event.target.classList.add("btn--active");
    // console.log(+event.target.innerHTML);
    handleResult(+event.target.innerHTML);
  };

  const rating = [1, 2, 3, 4, 5];
  const Btns = rating.map((btn, index) => {
    return (
      <button
        className="btn btn--rating"
        key={index}
        onClick={(e) => handleBtnClick(e)}
      >
        {btn}
      </button>
    );
  });

  return <div className="rating">{Btns}</div>;
};

export default Rating;
