import React from 'react'
import Sofadata from './Sofadata'
import Sofacard from './Sofacard'



const Sofas = () => {
  return (

    <div className=" grid grid-cols-2 gap-5 justify-center w-10/12 mx-auto 
    md:gap-16 md:grid-cols-3 md-w-8/12
    lg:grid-cols-4
    ">    

     {Sofadata.map(sofa => 

     <Sofacard key = {sofa.itemno} name = {sofa.name} price={sofa.price} image={sofa.img[`sofa${sofa.itemno}`]}/>
     
  )}

  </div>
  
  )
}

export default Sofas
