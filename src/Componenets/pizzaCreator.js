import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const PizzaCreator = (props) => {
  const initialFormValues = {
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    bacon: false,
    ham: false,
    pineapple: false
  }
  const [madePizza, setMadePizza] = useState([])
  const [formValues, setFormValues] = useState({ })
  
  const change = (event) => {
    const { name, value, checked, type } = event.target
    const valueToUse = type === "checkbox" ? checked : value
    setFormValues({ ...formValues, [name]: valueToUse})
  }
  const submit = (event) => {
    event.preventDefault();
    setMadePizza(madePizza.concat({name: formValues.name, size: formValues.size, pepperoni: formValues.pepperoni, sausage: formValues.sausage, bacon: formValues.bacon, ham: formValues.ham, pineapple: formValues.pineapple, specialInstruction: formValues.specialInstruction}));
    console.log(event);
  } 
  const checkout = (event) => {
    event.preventDefault();
    console.log(event.target)
    axios.post("https://reqres.in/api/orders", madePizza)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.error(err))
    // const checkoutTime = checkout => {
    //   axios.post("https://reqres.in/api/orders", checkout)
    //   .then(res => {
    //     console.log(res)
    //   })
    // }
  }
  // console.log(madePizza);
  return (
    <>
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
      <div className="makeAPizzaWrapper">
      <div>
        <h2>Lets make your pizza!</h2>
      </div>
      <form id="pizza-form" onSubmit={submit} className="pizzaDetails">
      <div className="pizzaDetails">
        <label>Your Name
          <input onChange={change} name="name" value={formValues.name} type="text" id="name-input" />
        </label>
        <label>What size pizza?
          <select name="size" onChange={change} type="dropdown" id="size-dropdown" >
            <option value="">Choose a size..</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label className="toppingLabel">What Toppings?
          pepperoni<input name="pepperoni" onChange={change} checked={madePizza.pepperoni} type="checkbox" />
          sausage<input name="sausage" onChange={change} checked={madePizza.sausage} type="checkbox" />
          bacon<input name="bacon" onChange={change} checked={madePizza.bacon} type="checkbox" />
          ham<input name="ham" onChange={change} checked={madePizza.ham} type="checkbox" />
          pineapple<input name="pineapple" onChange={change} checked={madePizza.pineapple} type="checkbox" />
        </label>
      </div>
      <div>
        <label>Any special requests?
          <input onChange={change} name="specialInstruction" value={formValues.specialInstruction} type="text" id="special-text" />

        </label>
      </div>
      <input type="submit" value="Create your pizza" />
      </form>
      <form onSubmit={checkout}>
      <div className="pizzaMadeWrapper">
      
        <h2>Pizza's Made</h2>
        
        <div className="madePizza">
        {madePizza.map((val, idx) => {
          return (
            <div key={idx} >
              <p>{val.name} ordered a {val.size} pizza, with the following toppings: {val.pepperoni ? "pepperoni" : ""} {val.sausage ? "sausage" : ""} {val.bacon ? "bacon" : ""} {val.ham ? "ham" : ""} {val.pineapple ? "pineapple" : ""}</p>            
              {val.specialInstruction ? `Special Request! ${val.specialInstruction}` : ""}
            </div>  

          )
        })}
        </div>
      </div>
        <input type="submit" value="checkout" />
      </form>
      </div>
    </>
  )

}
export default PizzaCreator