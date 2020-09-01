import React, { useState } from 'react'
import Sofas from './Products/Sofas/Sofas'
import Beds from './Products/Beds/Beds'
import Chairs from './Products/Chairs/Chairs'
import Lamps from './Products/Lamps/Lamps'

const Products = () => {

  const [product, setProduct] = useState("Chairs");
  const [sofasisselected, setSofasisselected] = useState("border-b border-gray-800");
  const [chairsisselected, setChairsisselected] = useState("");
  const [lapsisselected, setLampsisselected] = useState("");
  const [bedsisselected, setBedsisselected] = useState("");

  const SofasClick = () => {
    setProduct("Sofas")
    setSofasisselected("border-b border-gray-800")
    setBedsisselected("");
    setChairsisselected("")
    setLampsisselected("")
  }

  const BedsClick = () => {
    setProduct("Beds")
    setSofasisselected("");
    setBedsisselected("border-b border-gray-800");
    setChairsisselected("");
    setLampsisselected("");
  }

  const ChairsClick = () => {
    setProduct("Chairs")
    setSofasisselected("");
    setBedsisselected("");
    setChairsisselected("border-b border-gray-800");
    setLampsisselected("");
  }

  const LampsClick = () => {
    setProduct("Lamps")
    setSofasisselected("");
    setBedsisselected("");
    setChairsisselected("");
    setLampsisselected("border-b border-gray-800");
  }



  return (

    <div className = "mb-10">

      <div className="flex mx-auto w-8/12 py-5 rounded-2xl shadow-xl justify-evenly my-12 text-sm md:text-lg bg-gray-200 ">


        <div onClick = { () =>  SofasClick()} className ={`cursor-pointer ${sofasisselected}`} >Sofas</div>
        <div onClick = { () => BedsClick() }  className ={`cursor-pointer ${bedsisselected}`} >Beds</div>
        <div onClick = { () => ChairsClick() }  className ={`cursor-pointer ${chairsisselected}`} >Chairs</div>
        <div onClick = { () => LampsClick() } className ={`cursor-pointer ${lapsisselected}`} >Lamps</div>


      </div>

    {product === "Sofas" &&  <Sofas/>} 
    {product === "Beds" && <Beds/> }
    {product === "Chairs" && <Chairs/> }
    {product === "Lamps" && <Lamps/> }
 
      
    </div>
  )
}

export default Products
