"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { skillsIcons } from "../icons/icons";

// const Skills = () => {
//   return (
//     <div 
//         className='
//             h-[40vh]
//             w-full
//             border-[1px]
//             border-white
//             border-solid

//         '
//     >
//         skills
//     </div>
//   )
// }



export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      speed:2000,
      autoplaySpeed:2000,
      cssEase:"linear"
      
    };
    return (
      <div
      className='
        h-[40vh]
        w-full
        border-[1px]
        border-white
        border-solid
      '
      >
          <h2 className="text-white ml-5 mt-4 text-xl">Tech stacks</h2>
          <Slider {...settings}>

            {
              skillsIcons.map(({Icon, name, color}) => (
                <div key={name} className="
                  text-neutral-300
                  text-3xl 
                  flex 
                  flex-col 
                  justify-center 
                  mt-[12vh]"
                >
                  <Icon
                    className={color}
                    size={50}
                  />
                  <p className="font-semibold text-lg" >{name}</p>
                </div>
              ))
            }

            
          </Slider>
        </div>
    );
  }
}

{/* <div className="text-white text-3xl mt-[15vh]">
              <h3>1</h3>
            </div>
            <div className="text-white text-3xl">
              <h3>2</h3>
            </div>
            <div className="text-white text-3xl">
              <h3>3</h3>
            </div>
            <div className="text-white text-3xl">
              <h3>4</h3>
            </div>
            <div className="text-white text-3xl">
              <h3>5</h3>
            </div>
            <div className="text-white text-3xl">
              <h3>6</h3>
            </div> */}