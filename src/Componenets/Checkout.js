import React from "react"
import axios from "axios"
const Checkout = (props) => {

  axios.get("https://reqres.in/api/orders")
  .then(res => {
    console.log(res)
  })
  .catch(err => console.error(err))

  return (
    <>
      <div>
        <h2>Congrats! You ordered ${}</h2>
      </div>
    </>
  )
}

export default Checkout