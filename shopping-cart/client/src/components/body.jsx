import React from 'react';
import Items from "./items";

const Home = () => {
  const itemdata = [
    { image: "Phone", title: "book 1", price: 645 },
    { image: "Laptop", title: "book 2", price: 678 },
    { image: "Tablet", title: "book 3", price: 700 },
    { image: "Headphones", title: "book 4", price: 645 },
    { image: "Smartwatch", title: "book 5", price: 678 },
    { image: "Camera", title: "book 6", price: 700 },
  ];

  return (
    <div className="home">
      {
        itemdata.map((item, index) => {
          return <Items key={index} {...item} />
        })
      }
    </div>
  );
};

export default Home;