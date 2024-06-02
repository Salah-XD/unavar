import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Addbanner from "@/components/Addbanner";
import FadeUpOnScroll from "@/components/subcomponents/FadeUpOnScroll";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <FadeUpOnScroll>
        <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a className="text-4xl font-bold text-white">Major Certificates</a>
            <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
            <a className="text-white text-lg font-semibold"></a>
          </div>
        </div>
      </FadeUpOnScroll>
{/*         */}

      <Addbanner />
      <Footer />
    </div>
  );
};

export default Page;
