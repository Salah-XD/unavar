import React from 'react'
import Image from "next/image";

type Props = {}

const Addbanner = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-7 justify-around p-[30px] bg-white">
          <div className="flex flex-col">
            <div className="flex justify-center p-[10px] gap-5">
              <Image alt="img" src="/images/loc.png" width={30} height={30} />
              <a className="text-black font-extrabold text-center text-[20px]">
                Address
              </a>
            </div>
            <div className=" text-center indent-16 text-wrap">
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center p-[10px] gap-5">
              <Image alt="img" src="/images/wp.png" width={30} height={30} />
              <a className="text-black font-extrabold text-[20px]">Whatsapp</a>
            </div>
            <div className="text-center indent-16 text-wrap">
              <p className="text-black">9876365726</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center p-[10px] gap-5">
              <Image alt="img" src="/images/mail.png" width={30} height={30} />
              <a className="text-black font-extrabold text-[20px]">Email</a>
            </div>
            <div className="text-center indent-16 text-wrap">
              <p className="text-black">abc@gmail.com</p>
            </div>
          </div>
        </div>
  )
}
export default Addbanner;