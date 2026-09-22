import React from "react";
import Items from "./items";

import phone from "../assets/phone.jpg";
import car from "../assets/car.jpg";
import hero from "../assets/hero.png";
import box1 from "../assets/box1.jpg";
import box2 from "../assets/box2.jpg";
import box4 from "../assets/box4.jpg";
import box5 from "../assets/box5.jpg";

const Home = () => {
  const itemdata = [
    { image: phone, title: "Smart Phone", price: 20000 },
    { image: car, title: "Car", price: 1000000 },
    { image: box5, title: "Vivo", price: 95000 },
    { image: box1, title: "HeadPhone", price: 1000 },
    { image: box2, title: "Laptop", price: 67000 },
    { image: box4, title: "Chocolate", price: 700 },
  ];

  return (
    <div className="home">
      {itemdata.map((item, index) => {
        return <Items key={index} {...item} />;
      })}
    </div>
  );
};

export default Home;