import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
//import ApiSlides from "./apifolder/ApiSlides";

const ApiSlides = [
  {
    src: "https://image.freepik.com/free-photo/happy-woman-shopping-with-shopping-bags_1150-20495.jpg",
    content: {
      h2: "Amazing Deals this Summer",
      p: "Upto 40% off",
    },
    background: " bg-[#c6e400]",
  },
  {
    src: "https://st3.depositphotos.com/7713882/17906/i/600/depositphotos_179068502-stock-photo-happy-woman-showing-good-big.jpg",
    active: true,
    content: {
      h2: "Bhai mein dosry number wala hn",
      p: "Upto 40% off",
    },
    background: " bg-[#ffd028]",
  },
];

const Slider = () => {
  const slideStyle = "slide flex items-center justify-center h-[100%]";

  //usestate
  console.log(ApiSlides);

  const [slides] = useState(ApiSlides);

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  //return
  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/*left ArrowDiv */}
      <div className="leftarrow rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer ">
        <IoMdArrowDropleft size={50} onClick={prevSlide} />
      </div>

      {/*Slide Div */}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
                slide.background
              }
              key={index}
            >
              <div className={slideStyle}>
                <div className="flex-1 flex justify-center items-center h-[100%]">
                  <img
                    className=" h-[100%] object-cover"
                    src={slide.src}
                    alt="man"
                  />
                </div>
                <div className="discription flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className=" text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}

      {/*right arrow div */}

      <div className="rightarrow  rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer ">
        <IoMdArrowDropright size={50} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
