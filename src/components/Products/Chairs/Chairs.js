import React from 'react'
import Chairdata from './Chairdata'
import Chaircard from './Chaircard'



const Chairs = () => {
  return (

    <div className=" grid grid-cols-2 gap-5 justify-center w-10/12 mx-auto 
    md:gap-16 md:grid-cols-3 md-w-8/12
    lg:grid-cols-4
    ">    

     {Chairdata.map(chair => 

     <Chaircard key = {chair.itemno} name = {chair.name} price={chair.price} image={chair.img[`chair${chair.itemno}`]}/>
     
  )}

  </div>
  
  )
}

export default Chairs
