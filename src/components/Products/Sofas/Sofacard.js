import React from 'react'

const Sofacard = ({ name, price, image, itemno }) => {

  return (
    <div className="relative items-center rounded-xl overflow-hidden shadow-xl">

      <img alt={name} className="mx-auto" src={image}/>

     <div className="absolute bottom-0 left-auto right-auto opacity-75 bg-blue-100 rounded-tr p-2 w-full flex justify-between text-xs self-center">

     <p className="font-bold">{name}</p>
     <p>{price}</p>

     </div> 
      
    </div>
  )
}

export default Sofacard
