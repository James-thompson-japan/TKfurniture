import React from 'react'
import Lampdata from './Lampdata'
import Lampcard from './Lampcard'



const Lamps = () => {
  return (

    <div className=" grid grid-cols-2 gap-5 justify-center w-10/12 mx-auto 
    md:gap-16 md:grid-cols-3 md-w-8/12
    lg:grid-cols-4
    ">    

     {Lampdata.map(lamp => 

     <Lampcard key = {lamp.itemno} name = {lamp.name} price={lamp.price} image={lamp.img[`lamp${lamp.itemno}`]}/>
     
  )}

  </div>
  
  )
}

export default Lamps
