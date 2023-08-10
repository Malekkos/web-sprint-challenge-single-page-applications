import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Componenets/Home"
import PizzaCreator from "./Componenets/pizzaCreator";



const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="topWrapper">
        <nav className="nav">
          <h1 id="Headermain" className="Headermain">Carpachos Carparchiest Pizza!</h1>
          <div className="linkWrapper">
            <Link id="order-pizza" className="homeLink" to="/" >Home</Link>
            <Link id="pizza-form" className="pizzaLink" to="pizza" >Make a Pizza!</Link>
          </div>
          {/* <Link to="pizzaCreator">Make a Pie!</Link> */}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<PizzaCreator />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
