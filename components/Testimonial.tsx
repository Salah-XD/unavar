import React from "react";
import TestimonialCard from "./subcomponents/TestimonialCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className="my-10 px-10">
      <div className="bg-primary-500 text-center py-6">
        <h1 className="text-center text-4xl font-semibold">Testimonials </h1>
        <p className="text-white text-lg">What our clients say about us</p>
      </div>
      <div className="flex justify-center gap-9 flex-wrap">
        <Carousel className="w-80vw ">
          <CarouselContent>
            <CarouselItem className=" basis-1/4 pl-[10rem]">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className=" basis-1/4 pl-[10rem]">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className=" basis-1/4 pl-[10rem]">
              <TestimonialCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
