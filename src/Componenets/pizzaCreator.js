import React, { useState } from "react"

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
  const [madePizza, setMadePizza] = useState([initialFormValues])
  const [formValues, setFormValues] = useState({ })
  
  const change = (event) => {
    const { name, value, checked, type } = event.target
    const valueToUse = type === "checkbox" ? checked : value
    setFormValues({ ...formValues, [name]: valueToUse})
  }
  const submit = (event) => {
    event.preventDefault();
    setMadePizza(madePizza.concat({name: formValues.name, size: formValues.size, pepperoni: formValues.pepperoni, sausage: formValues.sausage, bacon: formValues.bacon, ham: formValues.ham, pineapple: formValues.pineapple}));
  } 
  const checkout = (event) => {
    event.preventDefault();
  }
  console.log(madePizza);
  return (
    <>
      <div>
        <h2>Lets make your pizza!</h2>
      </div>
      <form onSubmit={submit}>
      <div>
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
        <label>What Toppings?
          <input name="pepperoni" onChange={change} checked={madePizza.pepperoni} type="checkbox" />
          <input name="sausage" onChange={change} checked={madePizza.sausage} type="checkbox" />
          <input name="bacon" onChange={change} checked={madePizza.bacon} type="checkbox" />
          <input name="ham" onChange={change} checked={madePizza.ham} type="checkbox" />
          <input name="pineapple" onChange={change} checked={madePizza.pineapple} type="checkbox" />
        </label>
      </div>
      <input type="submit" value="Create your pizza" />
      </form>
      <div className="pizzaMadeWrapper">
        <h2>Pizza's Made</h2>
        {madePizza.map((val, idx) => {
          return (
            <div key={idx}>
              {val.name} ordered a {val.size} pizza, with the following toppings: {val.pepperoni ? "pepperoni" : ""} {val.sausage ? "sausage" : ""} {val.bacon ? "bacon" : ""} {val.ham ? "ham" : ""} {val.pineapple ? "pineapple" : ""}
            </div>  

          )
        })}
      </div>
      <form onSubmit={checkout}>
        <input type="submit" value="checkout" />
      </form>
    </>
  )

}
export default PizzaCreator