"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import ClientCard from "@/components/subcomponents/ClientCard";
import "react-multi-carousel/lib/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUpOnScroll from "@/components/subcomponents/FadeUpOnScroll";

type Props = {};

// Sections array with name and count of images
const sections = [
  { id: 1, name: "Hygiene Rating", count: 18 },
  { id: 2, name: "Eat Right Campus", count: 12 },
  { id: 3, name: "Eat Right Place of Worship", count: 9 },
  { id: 4, name: "Eat Right Station", count: 6 },
  { id: 5, name: "Clean Street Food Hub and Vegetable Market", count: 6 },
];

// Function to generate image paths
const generateImagePaths = (
  sections: { id: number; name: string; count: number }[]
) => {
  return sections.map((section) => {
    const sectionPaths: string[] = [];
    for (let image = 1; image <= section.count; image++) {
      sectionPaths.push(`/images/mc/${section.name}/${image}.webp`);
    }
    return sectionPaths;
  });
};

// Generate paths based on sections
const sectionImages = generateImagePaths(sections);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const CarouselSection = ({ images, label }: { images: string[], label: string }) => (
  <div className="mt-[140px] my-10 md:m-10 carousel-section style={{ marginTop: '20px' }">
    <center>
      <h2 className="text-2xl font-bold mb-4">{label}</h2>
      <Carousel
        arrows={false}
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {images.map((img, index) => (
          <ClientCard key={index} img={img} />
        ))}
      </Carousel>
    </center>
  </div>
);


const Testclient = (props: Props) => {
  return (
    <div>
      <Navbar />
      <FadeUpOnScroll>
        <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a className="text-4xl font-bold text-white">Major Certification</a>
            <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
            <a className="text-white text-lg font-semibold"></a>
          </div>
        </div>
      </FadeUpOnScroll>
      <FadeUpOnScroll>
        {sections.map((section, index) => (
          <CarouselSection
            key={index}
            images={sectionImages[index]}
            label={section.name}
          />
        ))}
      </FadeUpOnScroll>
      <Footer />
    </div>
  );
};

export default Testclient;
