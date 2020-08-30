import React from 'react'

const Aboutus = () => {
  return (
    <div>

      <form className ="flex flex-col my-20 bg-gray-100 my-20 w-11/12 mx-auto text-center p-10 rounded-xl shadow-2xl
      md:w-75 mx-auto
      ">

          <div className="flex m-5">
              <p>Name: </p>
              <input name="name" type="text" className="mx-2 border border-gray-300"></input>
          </div>

          <div className="flex m-5">
              <p>Email: </p>
              <input name="name" type="text" className="mx-2 border border-gray-300"></input>
          </div>


          <div className="flex m-5"><p>Query: </p>
              <textarea className="mx-2 border border-gray-300 w-10/12 h-20"></textarea>
          </div>

          <input onClick={(e) => e.preventDefault()} className="w-3/12 mx-auto p-2 text-xl rounded-full cursor-pointer hover:bg-blue-200" type="submit"/>

      </form>



      <div className="bg-gray-100 my-20 w-11/12 mx-auto text-center p-10 rounded-xl shadow-2xl flex justify-evenly align-middle flex-col
      lg:flex-row
      ">

          <div className="flex m-10 items-center justify-center">
            <i className="fas  fa-envelope text-gray-700 px-5 "></i>
            <div>
                <p>123 Street</p>
                <p>Smithington</p>
                <p>West county</p>
                <p>123-456</p>
            </div>
          </div>

          <div className="flex m-10 items-center justify-center">
            <i className="fas fa-at text-gray-700 px-5"></i>
            <p>TKfurniture@tk.com</p>
          </div>

          <div className="flex m-10 items-center justify-center">
            <i className="fas fa-phone text-gray-700 px-5"></i>
            <p>080 1234 5678</p>
          </div>


      </div>











    </div>
  )
}

export default Aboutus
