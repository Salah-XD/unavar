import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

type Props = {};

const Addbanner = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-7 justify-around p-[30px] bg-[#0cc0ee]">
      <div className="flex flex-col">
        <div className="flex justify-center p-[10px] gap-5">
          <IoLocationSharp className="text-white" size={30} />
          <a className="text-white font-extrabold text-center text-[20px]">
            Address
          </a>
        </div>
        <div className=" text-center text-wrap">
          <p className="text-white">
            Unavar Food Inspection and Certification Private Limited, <br />{" "}
            Flat no. F1, First Floor, Door No :519, MM Illam, MKN Road, <br />{" "}
            Adambakkam Village, Alandur, Chennai - 600016{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center p-[10px] gap-5">
          <FaWhatsapp className="text-white" size={30} />
          <a className="text-white font-extrabold text-[20px]">Call/WhatsApp</a>
        </div>
        <div className="text-center text-wrap">
          <p className="text-white">+91 8838870687</p>
          <p className="text-white">+91 95781 48099</p>
          <p className="text-white">+91 95783 44358</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center p-[10px] gap-5">
          <MdOutlineEmail className="text-white" size={30} />
          <a className="text-white font-extrabold text-[20px]">Email</a>
        </div>
        <div className="text-center text-wrap">
          <p className="text-white">admin@unavar.com</p>
        </div>
      </div>
    </div>
  );
};
export default Addbanner;
