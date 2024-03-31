import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-4 justify-around bg-[#13A6B8] p-6 py-14">
      <div className="text-white text-center text-2xl font-bold font-sans px-20 md:text-white">
        CONNECT WITH UNAVAR TODAY
      </div>
      <div className="px-20 text-center">
        <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-[#13A6B8] p-2 border border-white hover:border-transparent rounded">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
