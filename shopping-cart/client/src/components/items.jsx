import React from "react";
import "./items.css";

const Items = (props) => {
  return (
    <div className="item">
      <img
        src={props.image}
        alt={props.title}
      />

      <h2>{props.title}</h2>

      <h3>{props.price}</h3>

      <button className="btn">
        Add To Cart
      </button>
    </div>
  );
};

export default Items;