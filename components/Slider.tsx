"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Main from "./Main";
import { useMediaQuery } from "react-responsive";

type Props = {};

const Slider = (props: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="h-screen">
      <Main />
      <Carousel
        additionalTransfrom={0}
        arrows={!isMobile}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="w-[100vw] h-[100vh]">
          <Image
            src="/images/slider/img1.png"
            layout="fill"
            alt="slider1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-[100vw] h-[100vh]">
          <Image
            layout="fill"
            src="/images/slider/img2.png"
            alt="slider2"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-[100vw] h-[100vh]">
          <Image
            layout="fill"
            src="/images/slider/img3.png"
            alt="slider3"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
