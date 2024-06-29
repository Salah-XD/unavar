
"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galleryData from "./subcomponents/Gallery.json"; 

const MyGallery = () => {
  // Function to fetch images and text from JSON data
  const fetchImages = () => {
    return galleryData.gallery.map((item) => ({
      original: item.img,
      thumbnail: item.img,
      description: item.text,
    }));
  };

  const images = fetchImages();

  return (
    <div className="my-5 flex flex-col items-center">
      <h2 className="text-4xl font-semibold text-[#000000] mb-5">Gallery</h2>
      <div className="w-3/4">
        <div className="text-center mb-5">
          Welcome to our gallery showcasing various events and inspections
          conducted by Unavar Food Inspection and Certification Private Limited.
        </div>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default MyGallery;
