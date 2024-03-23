import React from "react";
import TestimonialCard from "./subcomponents/TestimonialCard";

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className="my-10 px-10">
      <div className="bg-primary-500 text-center py-6">
        <h1 className="text-center text-4xl font-semibold">Testimonials </h1>
        <p className="text-white text-lg">What our clients say about us</p>
      </div>
      <div className="flex justify-center gap-9 flex-wrap">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
