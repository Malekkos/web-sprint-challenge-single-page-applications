import React from "react";
import { Routes, Route, Link } from "react-router-dom"
const App = () => {
  return (
    <>
      <div className="topWrapper">
        <nav>
          <h1 id="Headermain" className="Headermain">Carpachos Carparchiest Pizza!</h1>
          <Link to="/" >Home</Link>
          {/* <Link to="pizzaCreator">Make a Pie!</Link> */}
        </nav>
      </div>
      <Routes>
        <Route to="/" />
      </Routes>
    </>
  );
};
export default App;
