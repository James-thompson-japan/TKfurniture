import React from 'react'
import Beddata from './Beddata'
import Bedcard from './Bedcard'



const Beds = () => {
  return (

    <div className=" grid grid-cols-2 gap-5 justify-center w-10/12 mx-auto 
    md:gap-16 md:grid-cols-3 md-w-8/12
    lg:grid-cols-4
    ">    

     {Beddata.map(bed => 

     <Bedcard key = {bed.itemno} name = {bed.name} price={bed.price} image={bed.img[`bed${bed.itemno}`]}/>
     
  )}

  </div>
  
  )
}

export default Beds
