import React from "react";
import Image from "next/image";

interface AboutCardProps {
  img: string;
  desc: string;
  name: string;
  role: string;
}

const Aboutcard = ({ img, desc, name, role }: AboutCardProps) => {
  return (
    <div>
      <div className="mx-auto rounded-lg shadow max-w-sm p-10 bg-gray-200 text-gray-700 leading-snug flex flex-col justify-between h-[400px]">
        <div>
          <div className="mx-auto w-full  border-gray-300 my-2"></div>
          <div className="flex items-center">
            <div>
              <Image
                src={img}
                alt="img"
                className="rounded-full"
                width={70}
                height={70}
              />
            </div>
            <div className="ml-2">
              <div className="font-bold">{name}</div>
              <div className="text-sm text-gray-600 mt-1">
                <a className=" whitespace-pre-line" href="">
                  {role}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-1 text-sm pt-2 border-t-4  m border-gray-300">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Aboutcard;
