// import { Gallery } from "next-gallery";

// const images = [
//   { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
//   { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
//   { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 9 / 16 },
//   { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
//   { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 9 / 16 },
//   { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
//   { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
//   { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
// ];
// const widths = [500, 1000, 1600];
// const ratios = [2.2, 4, 6, 8];

// export default function MyGallery() {
//   return (
//     <div className="mt-10">
//       <h2 className="my-10 text-4xl text-center font-semibold leading-[1.5] text-[#000000]">
//         Gallery
//       </h2>
//       <Gallery {...{ images, widths, ratios }} />
//     </div>
//   );
// }

"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const MyGallery = () => {
  // Function to fetch image URLs from the public folder
  const fetchImages = () => {
    const images = [];
    for (let i = 1; i <= 15; i++) {
      images.push({
        original: `/images/gallery/img (${i}).jpeg`,
        thumbnail: `/images/gallery/img (${i}).jpeg`,
      });
    }
    return images;
  };

  const images = fetchImages();

  return (
    <div className="my-5 flex flex-col items-center">
      <h2 className="text-4xl font-semibold text-[#000000] mb-5">Gallery</h2>
      <div className="w-3/4">
        {" "}
        {/* Adjust the width as per your requirement */}
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default MyGallery;
