import React from 'react';
import { Carousel } from "react-responsive-carousel";
import tech1 from "../assets/chip_circuit_processor_140251_1920x1080.jpg";
import tech2 from "../assets/laptop_keyboard_glow_170138_1920x1080.jpg";
import tech3 from "../assets/code_text_colorful_140555_1920x1080.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={2000} showThumbs={false} showIndicators={false}>

        <div >
          <img src={tech1} alt="img1" />
          <p>Technology</p>
        </div>


        <div>
          <img src={tech2} alt="img1" />

          <p>NewTech</p>
        </div>

        <div>
          <img src={tech3} alt="img1" />

          <p>Coding</p>
        </div>



      </Carousel>
    </div>
  )
}

export default Services
