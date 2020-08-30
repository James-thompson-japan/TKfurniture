import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div>

    <nav className="h-20 flex justify-evenly items-center text-2xl font-hairline">

        <Link to = "/" ><div className="navbarline">Home</div></Link>
        <Link to = "/Products" ><div className="navbarline">Products</div></Link>
        <Link to =  "/Aboutus" ><div className="navbarline">Contact us</div></Link>
      
    </nav>

    <div className="h-32 bg-blue-100 flex justify-center items-center">

        <h2 className="text-4xl font-hairline">TK Furniture</h2>

    </div>

  </div> 

  )
}

export default Navbar
