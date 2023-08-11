import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Componenets/Home"
import PizzaCreator from "./Componenets/pizzaCreator";



const App = () => {
  return (
    <>
    {/* <BrowserRouter> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<PizzaCreator />} />
      </Routes>
    {/* </BrowserRouter> */}
    </>
  );
};
export default App;
