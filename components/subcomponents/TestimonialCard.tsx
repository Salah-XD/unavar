import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="bg-white p-6  shadow-[0_0_40px_#11111149] text-center w-[350px] h-[440px]">
      <div className="relative mx-auto w-[200px] h-[200px] rounded-full mb-6">
        <Image
          src="/images/merlin.png"
          alt="img"
          className="rounded-full shadow-lg"
          width={200}
          height={200}
        />
        <span className="absolute top-9 left-9 flex items-center justify-center w-10 h-10 rounded-full bg-[#13a6b8] text-white">
          <FaQuoteRight />
        </span>
      </div>
      <div className="relative -top-4">
        <h4 className="text-lg font-semibold mb-1 text-grey-1">merlin</h4>
        <p className="text-primary-500 uppercase text-sm mb-4"></p>
        <p className="text-grey-5">
          Working with UNAVAR has been a game-changer for our food business.
          Their expertise in food safety and certification has helped us
          navigate complex regulations. Highly recommended!
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
