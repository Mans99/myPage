import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./cards"


export default class Function extends Component{
   render() { const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        rows: 5,
        slidesPerRow: 4
      };

  return (
    <div class="w-full h-100 bg-secondary lg:max-w-[800px] md:m-2"> 
        <h2>Multiple Rows</h2>
        <Slider {...settings}>
            <Card/>
        </Slider>
    </div>
  )
}
}
