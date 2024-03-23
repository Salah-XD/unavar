import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left py-90">
      <div className="flex items-center justify-center bg-[#13a6b8]  border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between ">
        <div className="mr-12 hidden lg:block">
          <span className="text-white font-semibold p-[30px]">CONNECT WITH UNAVAR TODAY</span>
        </div> 
        <div className="flex justify-center ">
            <button className="bg-transparent border border-white text-white font-bold py-2 px-6  rounded-lg outline-white hover:bg-white hover:text-cyan-400 hoever:outline-offset-2">
                Contact Us
            </button>
        </div>
      </div>
      <div className="flex gap-7 justify-center p-[30px] bg-white h-[25vh]">
        <div className="w-[30vw] h-[30vh]">
          <div className="flex justify-center p-[10px] gap-5">
            <Image
              src= "/images/loc.png"
              width={30}
              height={30}
            />
            <a className="text-black font-extrabold text-center text-[20px]">Address</a>
          </div>
          <div className=" text-center indent-16 text-wrap">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div className="w-[30vw] h-[30vh]">
            <div className="flex justify-center p-[10px] gap-5">
            <Image
              src= "/images/wp.png"
              width={30}
              height={30}
            />
            <a className="text-black font-extrabold text-[20px]">Whatsapp</a>
          </div>
          <div className="text-center indent-16 text-wrap">
            <p>9876365726</p>
          </div>
        </div>
        <div className="w-[30vw] h-[30vh]">
        <div className="flex justify-center p-[10px] gap-5">
            <Image
              src= "/images/mail.png"
              width={30}
              height={30}
            />
            <a className="text-black font-extrabold text-[20px]">Email</a>
          </div>
          <div className="text-center indent-16 text-wrap">
            <p>abc@gmail.com</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-around gap-10 h-[60vh] bg-white p-[40px]">
        <div className="w-[70vw] h-[40vh]">
          <div className="flex flex-col gap-5">
            <div className="left flex items-center gap-5">
              <Image
                src= "/images/logo.png"
                width={50}
                height={50}
              />  
              <p className='font-bold text-black'>UNAVAR FOOD INSPECTION & <br /> CERTIFICATION PRIVATE LIMITED</p>
            </div>
            <div className="flex flex-col gap-9">
              <p className="text-pretty">UNAVAR.Your Trusted Partner in Food Safety Solutions,
                  with a commitment to excellence,UNAVAR offers 
                  comprehensive services spanning inspection,
                  certification and consultation. 
              </p>
              <button className="w-[12vw] h-[7vh] bg-transparent border border-lime-500 text-lime-500 font-light py-2 px-6 rounded-lg">
                Know more
              </button>
            </div>
          </div>
        </div>
        <div className="w-[40vw] h-[40vh]">
          <div className="flex flex-col gap-8">
            <div className="text-black font-bold">Main Navigations</div>
            <div className="flex flex-col gap-7 ">
              <a className="text-black font-regular hover:cursor-pointer">Home</a>
              <a className="text-black font-regular hover:cursor-pointer">About us</a>
              <a className="text-black font-regular hover:cursor-pointer">Services</a>
              <a className="text-black font-regular hover:cursor-pointer">Industry</a>
              <a className="text-black font-regular hover:cursor-pointer">Clients</a>
              <a className="text-black font-regular hover:cursor-pointer">Blogs</a>
            </div>
          </div>
        </div>
        <div className="w-[40vw] h-[40vh]">
          <div className="flex flex-col">
            <div className="text-black font-bold">Useful links</div>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5X2Kk8BWmqo?si=Hp199dfToy6D4jH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer