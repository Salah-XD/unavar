import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/subcomponents/ServiceCard";
import Navbar from "@/components/Navbar";
import Banner from "@/components/subcomponents/banner";
import Footer from "@/components/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white"> Sectors We Serve</a>
          <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
          <a className="text-white text-lg font-semibold"></a>
        </div>
      </div>
      {/* ------- */}
      <div className="flex justify-center gap-10 my-10">
        <ServiceCard
          head="Eat Right Hub"
          desc="We ensure that your food products meet safety and quality"
          image="/images/eatright-hub.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-hub-cer.png"
          path="/services"
        />
        <ServiceCard
          head="Eat Right Campus"
          desc="We ensure that your food products meet safety and quality"
          image="/images/eatright-campus.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-campus-cer.png"
          path="/services"
        />
      </div>

      <Footer />
    </div>
  );
};

export default page;
