import React from 'react'
import image from "../assets/react.svg"
import "./items.css"

const Items = (props) => {
  return (
    <div className="item">
         <img src={image }  width={100} height={100} alt="item image" />
         <h2>title: {props.title}</h2>
         <h3>{props.price}</h3>
         <button className="btn">AddToCart</button>
    </div>
  )
}

export default Items