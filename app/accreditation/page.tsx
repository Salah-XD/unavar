import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUpOnScroll from "@/components/subcomponents/FadeUpOnScroll";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Navbar />
      <FadeUpOnScroll>
        <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a className="text-4xl font-bold text-white">Accreditation</a>
            <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
            <a className="text-white text-lg font-semibold"></a>
          </div>
        </div>
      </FadeUpOnScroll>
      <FadeUpOnScroll>
        <div className="flex flex-col items-center">
          <div className="my-10">
            <img
              src="/images/certificates/Accrediation Letter.webp"
              alt="Accreditation Certificate"
              className="max-w-full md:max-w-2xl mx-auto p-4 border border-gray-300"
            />
          </div>
        </div>
      </FadeUpOnScroll>

      <Footer />
    </>
  );
};

export default Page;
