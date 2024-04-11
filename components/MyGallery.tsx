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

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const MyGallery = () => {
  return (
    <div className="mt-10">
      {" "}
      <h2 className="my-10 text-4xl text-center font-semibold leading-[1.5] text-[#000000]">
        Gallery{" "}
      </h2>
      <ImageGallery items={images} />{" "}
    </div>
  );
};

export default MyGallery;
