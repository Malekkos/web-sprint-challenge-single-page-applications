import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Componenets/Home"




const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="topWrapper">
        <nav className="nav">
          <h1 id="Headermain" className="Headermain">Carpachos Carparchiest Pizza!</h1>
          <Link className="homeLink" to="/" >Home</Link>
          {/* <Link to="pizzaCreator">Make a Pie!</Link> */}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
