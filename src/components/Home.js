import React from 'react'
import Home6 from '../images/Various/home6.jpg'
import Home5 from '../images/Various/home5.jpg'
import Home4 from '../images/Various/home4.jpg'
import Home2 from '../images/Various/home2.jpg'
import Home8 from '../images/Various/home8.jpg'
import Home9 from '../images/Various/home9.jpg'

const Home = () => {
  return (
    <div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div><img alt="Homeimage1" src={Home2} className="object-cover w-full h-full"></img></div>
        <div><img alt="Homeimage2" src={Home8} className="hidden md:block object-cover w-full h-full" ></img></div>
        <div><img alt="Homeimage3" src={Home9} className="hidden lg:block object-cover w-full h-full"></img></div>
      </div>

      <div className="my-24 w-10/12 mx-auto border-b
      md:w-11/12
      lg:w-8/12
      ">

        <div className="flex flex-col border-b pb-20
        md:flex-row md:my-24
        ">
          <img className="md:w-5/12 object-cover" src={Home6}/>
          <p className="text-justify my-10 mx-auto self-center
          md:w-6/12 
          "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit nulla urna, quis condimentum risus consequat eget. Sed non imperdiet nisi. Proin tincidunt dictum nunc sit amet eleifend. Maecenas tempor congue ex non ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam facilisis eros a mauris venenatis finibus. Vivamus a nulla vel odio sodales finibus. Vivamus feugiat faucibus magna, at feugiat turpis egestas ac. Praesent auctor, magna a feugiat pharetra, magna ligula dictum lacus, eget luctus nulla orci pretium velit. Aenean vestibulum fermentum mauris vitae posuere. Mauris lacinia orci id magna maximus, vitae faucibus turpis molestie. Nullam quis tempor arcu, et porttitor ligula.</p>
        </div>

        <div className="flex flex-col border-b pb-20
        md:flex-row-reverse md:my-24
        ">
          <img className="md:w-5/12 object-cover" src={Home5}/>
          <p className="text-justify my-10 mx-auto self-center
          md:w-6/12 
          "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit nulla urna, quis condimentum risus consequat eget. Sed non imperdiet nisi. Proin tincidunt dictum nunc sit amet eleifend. Maecenas tempor congue ex non ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam facilisis eros a mauris venenatis finibus. Vivamus a nulla vel odio sodales finibus. Vivamus feugiat faucibus magna, at feugiat turpis egestas ac. Praesent auctor, magna a feugiat pharetra, magna ligula dictum lacus, eget luctus nulla orci pretium velit. Aenean vestibulum fermentum mauris vitae posuere. Mauris lacinia orci id magna maximus, vitae faucibus turpis molestie. Nullam quis tempor arcu, et porttitor ligula.</p>
        </div>

        <div className="flex flex-col
        md:flex-row md:my-24
        ">
          <img className="md:w-5/12 object-cover" src={Home4}/>
          <p className="text-justify my-10 mx-auto self-center
          md:w-6/12 
          "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit nulla urna, quis condimentum risus consequat eget. Sed non imperdiet nisi. Proin tincidunt dictum nunc sit amet eleifend. Maecenas tempor congue ex non ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam facilisis eros a mauris venenatis finibus. Vivamus a nulla vel odio sodales finibus. Vivamus feugiat faucibus magna, at feugiat turpis egestas ac. Praesent auctor, magna a feugiat pharetra, magna ligula dictum lacus, eget luctus nulla orci pretium velit. Aenean vestibulum fermentum mauris vitae posuere. Mauris lacinia orci id magna maximus, vitae faucibus turpis molestie. Nullam quis tempor arcu, et porttitor ligula.</p>
        </div>

      </div>

    </div>
  )
}

export default Home
