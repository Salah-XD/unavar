import React from 'react';
import Image from "next/image";

type Props = {}

const Maps = (props: Props) => {
  return (
    <div className="relative inset-0 overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/Maps.png)] bg-center filter backdrop-blur-3xl md:bg-contain md:bg-center md:p-40">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white sm:text-xl md:text-2xl lg:text-3xl">All Across India</a>
          <div className='flex text-white flex-col gap-5 p-[30px]'>
            <ul className='flex gap-8 justify-center text-xs sm:text-sm md:text-xs md:flex md:gap-6 lg:text-sm xl:text-xl list-disc'>
                <li className='text-white font-bold '>NEWDELHI</li>
                <li className='text-white font-bold'>MUMBAI</li>
                <li className='text-white font-bold'>BANGLORE</li>
                <li className='text-white font-bold'>CHENNAI</li>
                <li className='text-white font-bold'>HYDERABAD</li>
            </ul>
            <ul className='flex gap-8 justify-center text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xl list-disc'>
                <li className='text-white font-bold'>AHMEDABAD</li>
                <li className='text-white font-bold'>COCHIN</li>
                <li className='text-white font-bold'>KOLKATA</li>
                <li className='text-white font-bold'>INDORE</li>
            </ul>
            </div>
        </div>
        <div className="flex absolute justify-center gap-20 bg-white p-[40px] w-[50vw] rounded-md left-80 top-400">
          <div className='flex gap-3'>
            <Image src={"/images/icon_1.png"} alt='img' width={50} height={50} />
            <div className='flex flex-col text-left'>
              <a className='text-black font-bold text-lg'>825+</a>
              <p className='text-black font-normal'>xxx</p>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src={"/images/icon_2.png"} alt='img' width={50} height={50} />
            <div className='flex flex-col text-left'>
              <a className='text-black font-bold text-lg'>825+</a>
              <p className='text-black font-normal'>xxx</p>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src={"/images/icon_3.png"} alt='img' width={50} height={50} />
            <div className='flex flex-col text-left'>
              <a className='text-black font-bold text-lg'>825+</a>
              <p className='text-black font-normal'>xxx</p>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src={"/images/icon_4.png"} alt='img' width={50} height={50} />
            <div className='flex flex-col text-left'>
              <a className='text-black font-bold text-lg'>825+</a>
              <p className='text-black font-normal'>xxx</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Maps;