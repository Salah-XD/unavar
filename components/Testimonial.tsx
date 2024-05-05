"use client";

import React from "react";
import TestimonialCard from "./subcomponents/TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className="mt-[280px] md:mt-[190px]">
      <div className="bg-primary-500 text-center py-6 pt-20">
        <h1 className="text-center text-5xl font-semibold font-roboto-slab">
          Testimonials{" "}
        </h1>
        {/* <p className="text-[#0f7a87] text-2xl text-center my-6 mb-10 font-medium">
          What our clients say about us
        </p> */}
      </div>
      <center>
        <Carousel
          infinite={true}
          responsive={responsive}
          className="py-20 w-full"
          showDots={true}
          ssr={true}
        >
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </Carousel>
      </center>
    </div>
  );
};

export default Testimonial;
