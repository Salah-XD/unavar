"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import ClientCard from "./subcomponents/ClientCard";
import "react-multi-carousel/lib/styles.css";

type Props = {};

const img1 = "/images/Sapphire.png";
const img2 = "/images/Anjappar.jpg";
const img3 = "/images/HardCastle.png";
const img4 = "/images/Jubilant.png";
const img5 = "/images/Kitchen.jpg";
const img6 = "/images/Kitchen.jpg";    
const img7 = "/images/Kitchen.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testclient = (props: Props) => {
  return (
    <div className="mt-[140px] md:m-10">
      <div className="bg-primary-500 text-center py-6 pt-20">
        <h1 className="text-center text-4xl font-semibold">
          Our Major Clients
        </h1>
        <p className="text-[#0f7a87] text-2xl text-center my-6 mb-10 font-medium">
          Building Trust Through Quality Assurance
        </p>
      </div>
      <center>
        <Carousel
        arrows={false}
          additionalTransfrom={0}
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          <ClientCard img={img1} />
          <ClientCard img={img3} />
          <ClientCard img={img4} />
          <ClientCard img={img5} />
          <ClientCard img={img2} />
          <ClientCard img={img6} />
          <ClientCard img={img7} />
        </Carousel>
      </center>
    </div>
  );
};

export default Testclient;
