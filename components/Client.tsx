"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import ClientCard from "./subcomponents/ClientCard";
import "react-multi-carousel/lib/styles.css";

type Props = {};

const imgPaths = [
  "/images/our-clients/Sapphire.png",
  "/images/our-clients/Anjappar.jpg",
  "/images/our-clients/HardCastle.png",
  "/images/our-clients/Jubilant.png",
  "/images/our-clients/Kitchen.jpg",
  "/images/our-clients/A2B-Logo-PDF-1.png",
  "/images/our-clients/ACCORD HOTELS.jpeg",
  "/images/our-clients/aroma Bakery Coimbatore.jpeg",
  "/images/our-clients/Ashok-Leyland-Logo.png",
  "/images/our-clients/CHRIST UNIVERSITY.png",
  "/images/our-clients/FORTUNE PANDIYAN HOTELS.png",
  "/images/our-clients/IDHAYAM OILS.jpeg",
  "/images/our-clients/grt.png",
  "/images/our-clients/KR BAKES.png",
  "/images/our-clients/Kumar Mess.png",
  "/images/our-clients/madurai meenakshi mission hospital.png",
  "/images/our-clients/Murugan Idly.png",
  "/images/our-clients/PERAMBUR SRINIVASA.png",
  "/images/our-clients/RADDISSON BLU .jpeg",
  "/images/our-clients/RKG LOGO.jpeg",
  "/images/our-clients/SAHARA HOSPITALITY MUMBAI.png",
  "/images/our-clients/the park chennai.jpeg",
  "/images/our-clients/Tuyaa-Chennai-logo.png",
];

const responsive = {
  superLargeDesktop: {
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
    <div className="mt-[140px] my-10 md:m-10">
      <div className="bg-primary-500 text-center py-6 pt-20">
        <h1 className="text-center text-5xl font-semibold font-roboto-slab">
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
          {imgPaths.map((img, index) => (
            <ClientCard key={index} img={img} />
          ))}
        </Carousel>
      </center>
    </div>
  );
};

export default Testclient;
