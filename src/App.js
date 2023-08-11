import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Componenets/Home"
import PizzaCreator from "./Componenets/pizzaCreator";
import Checkout from "./Componenets/Checkout";


const App = () => {
  return (
    <>
    {/* <BrowserRouter> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<PizzaCreator />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    {/* </BrowserRouter> */}
    </>
  );
};
export default App;
