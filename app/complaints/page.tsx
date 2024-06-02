"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HygineRating from "@/components/HygineRating";
import FadeUpOnScroll from "@/components/subcomponents/FadeUpOnScroll";

type Props = {};

const Page = (props: Props) => {
  const [activeTab, setActiveTab] = useState("hygiene");

  const renderContent = () => {
    switch (activeTab) {
      case "hygiene":
        return <HygineRating/>;
      case "audit":
        return <div>FSSAI Third Party Audit Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <FadeUpOnScroll>
        <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a className="text-4xl font-bold text-white">Complaints</a>
            <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
            <a className="text-white text-lg font-semibold"></a>
          </div>
        </div>
      </FadeUpOnScroll>
      <div className="container mx-auto my-8 flex-grow">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 ${
              activeTab === "hygiene" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => setActiveTab("hygiene")}
          >
            Hygiene Rating 
          </button>
          <button
            className={`px-4 py-2 mx-2 ${
              activeTab === "audit" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => setActiveTab("audit")}
          >
            FSSAI Third Party Audit 
          </button>
        </div>
        <div className="p-4 ">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
