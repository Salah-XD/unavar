"use client";
import React from 'react'
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import ClientCard from './subcomponents/ClientCard';
import "react-multi-carousel/lib/styles.css";


type Props = {}


const img1 = "/images/Sapphire.png";
const img2 = "/images/Anjappar.jpg";
const img3 = "/images/HardCastle.png";
const img4 = "/images/Jubilant.png";
const img5 = "/images/Kitchen.jpg";
const img6 = "/images/Kitchen.jpg";
const img7 = "/images/Kitchen.jpg";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


const Testclient = (props: Props) => {
  return (
    <div className="mt-[140px] md:m-10">
      <div className="bg-primary-500 text-center py-6 pt-20">
        <h1 className="text-center text-4xl font-semibold">Our Major Clients</h1>
        <p className="text-[#0f7a87] text-2xl text-center my-6 mb-10 font-medium">
          Building Trust Through Quality Assurance
        </p>
      </div>
      <center>
        <Carousel
          responsive={responsive}
          className="py-20 w-full"
          showDots={true}
          ssr={true}
          >
          <div>
            <ClientCard img={img1} />
          </div>
          <div>
            <ClientCard img={img2} />
          </div>
          <div>
            <ClientCard img={img3} />
          </div>
          <div>
            <ClientCard img={img4} />
          </div>
          <div>
            <ClientCard img={img5} />
          </div>
          <div>
            <ClientCard img={img6} />
          </div>
          <div>
            <ClientCard img={img7} />
          </div>
        </Carousel>
      </center>
    </div>
  )
}

export default Testclient