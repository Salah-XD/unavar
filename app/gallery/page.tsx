import React from "react";
import MyGallery from "@/components/MyGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Addbanner from "@/components/Addbanner";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="mb-20">
        <MyGallery />
      </div>

     
        <Addbanner/>
        <Footer />
      </div>
   
  );
};

export default Page;
