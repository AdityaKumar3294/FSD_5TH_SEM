import React from 'react';
import Items from "./items";

const Home = () => {
  const itemdata = [
    { image: "", title: "book 1", price: 645 },
    { image: "", title: "book 2", price: 678 },
    { image: "", title: "book 3", price: 700 },
    { image: "", title: "book 4", price: 645 },
    { image: "", title: "book 5", price: 678 },
  ];

  return (
    <div 
      className="home"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '20px',
        padding: '30px',
        backgroundColor: '#f4f5f7',
      }}
    >
      {
        itemdata.map((item, index) => {
          return <Items key={index} {...item} />
        })
      }
    </div>
  );
};

export default Home;