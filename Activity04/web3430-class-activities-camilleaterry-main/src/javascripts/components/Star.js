import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// this will set the colors to be a constat for if being used or not usedc 
const Star = ({ selected = false }) => (
  <FaStar color={selected ? "maroon" : "grey"} />
);


const createArray = length => [...Array(length)];

export default function StarRating(props) {
  //const [selectedStars] = useState(1);
  // does the math
  const [selectedStars] = useState(Math.floor((props.movie.rating) / 2) - 1);
  console.log(selectedStars)
  return (
    // kinda an if staement but not 
    <>
      {createArray(5).map((n, i) => (
        <Star key={i} selected={i <= selectedStars} />
      ))}
      
    </>
  );
}