import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

interface testonialCardProps {
  img: string;
  name: string;
  role: string;
  desc: string;
}
const TestimonialCard = ({ img, name, role, desc }: testonialCardProps) => {
  return (
    <div className="bg-white p-6  shadow-[0_0_40px_#11111149] text-center w-[350px] h-[440px]">
      <div className="relative mx-auto w-[200px] h-[200px] rounded-full mb-6">
        <Image
          src={img}
          alt="img"
          className="rounded-full"
          width={300}
          height={300}
        />
        <span className="absolute top-9 left-9 flex items-center justify-center w-10 h-10 rounded-full bg-[#13a6b8] text-white">
          <FaQuoteRight />
        </span>
      </div>
      <div className="relative -top-4">
        <h4 className="text-lg font-semibold mb-1 text-grey-1">{name}</h4>
        <p className="text-primary-500 uppercase text-sm mb-4">{role}</p>
        <p className="text-grey-5">{desc}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
