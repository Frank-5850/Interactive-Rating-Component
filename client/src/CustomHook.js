import React from "react";
import { useState } from "react";

const CustomHook = () => {
  const [shown, setShown] = useState(true);
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5]);
  const [currentRating, setCurrentRatings] = useState(null);

  const changeColor = (e) => {
    setCurrentRatings(e.target.innerHTML);
  };

  const isSelected = (currentRating, index) => {
    if (currentRating == index + 1) {
      return { backgroundColor: "grey" };
    } else {
      return { backgroundColor: "hsl(216, 12%, 8%)" };
    }
  };
  return [
    shown,
    setShown,
    ratings,
    currentRating,
    setCurrentRatings,
    changeColor,
    isSelected,
  ];
};

export default CustomHook;
