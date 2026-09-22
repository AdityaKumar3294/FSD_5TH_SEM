import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";
import Items from "./components/items";

import phone from "./assets/phone.jpg";
import car from "./assets/car.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Body />

              <div className="products">
                <Items
                  title="Smart Phone"
                  price="25000"
                  image={phone}
                />

                <Items
                  title="Car"
                  price="500000"
                  image={car}
                />
              </div>
            </>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;