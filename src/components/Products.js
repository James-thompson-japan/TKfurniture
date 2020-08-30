import React, { useState } from 'react'
import Sofas from './Products/Sofas/Sofas'
import Beds from './Products/Beds/Beds'
import Chairs from './Products/Chairs/Chairs'
import Lamps from './Products/Lamps/Lamps'

const Products = () => {

  const [product, setProduct] = useState("Chairs");

  return (

    <div>

      <div className="flex mx-auto w-8/12 justify-evenly my-20 text-xl">
        <div onClick = { () => setProduct("Sofas") } className ="cursor-pointer" >Sofas</div>
        <div onClick = { () => setProduct("Beds") }  className ="cursor-pointer">Beds</div>
        <div onClick = { () => setProduct("Chairs") }  className ="cursor-pointer">Chairs</div>
        <div onClick = { () => setProduct("Lamps") } className ="cursor-pointer">Lamps</div>
      </div>

    {product === "Sofas" &&  <Sofas/>} 
    {product === "Beds" && <Beds/> }
    {product === "Chairs" && <Chairs/> }
    {product === "Lamps" && <Lamps/> }
 
      
    </div>
  )
}

export default Products
