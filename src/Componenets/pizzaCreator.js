import React, { useState } from "react"

const PizzaCreator = (props) => {
  
  const [size,setSize] = useState("")
  const [name, setName] = useState("")
  const handleChangeSize = (event) => {
    setSize(event.target.value);
  }
  const handleChangeName = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <div>
        <h2>Hello! Lets make your pizza!</h2>
      </div>
      <div>
        <label>Your Name
          <input onChange={handleChangeName} type="text" id="name-input" />
        </label>
        <label>What size pizza?
          <select onChange={handleChangeSize} type="dropdown" id="size-dropdown" >
            <option value="">Choose a size..</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>What Toppings?
          <input type="checkbox" value="pepperoni" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </label>
      </div>
    </>
  )

}
export default PizzaCreator