import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Banner from "@/components/subcomponents/banner";
import ServiceCard from "@/components/subcomponents/ServiceCard";
import AuditCard from "@/components/subcomponents/AuditCard";
import HygieneCard from "@/components/subcomponents/HygieneCard";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white">Our Services</a>
          <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
          <a className="text-white text-lg font-semibold"></a>
        </div>
      </div>
      {/* ------- */}
      <h1 className="text-center text-4xl font-semibold mt-4">
        Services we Offer{" "}
      </h1>
      <div className="flex flex-wrap justify-center my-7 py-9 gap-7">
        <AuditCard
          head="Third Party Auditing"
          image="/images/tpa.png"
          btn="view more"
        />
      </div>
      <h1 className="text-center text-4xl font-semibold">
        Certifications we Offer{" "}
      </h1>
      <div className="flex flex-wrap justify-center my-7 py-9 gap-7">
        <HygieneCard
          head="Hygiene Rating"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/hygiene.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/hygiene-cer.png"
          path="/services"
        />

        <ServiceCard
          head="Eat Right Station"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-station-cer.png"
          path="/services"
        />
        <ServiceCard
          head="Eat Right Fruit and Vegetable Market"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright-veg.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-vegmarket.png"
          path="/services"
        />
        <ServiceCard
          head="Eat Right Hub"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright-hub.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-hub-cer.png"
          path="/services"
        />
        <ServiceCard
          head="Eat Right Campus"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright-campus.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-campus-cer.png"
          path="/services"
        />
        <ServiceCard
          head="Eat Right Worship Place"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright-worship.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-worship-cer.png"
          path="/services"
        />
      </div>
      <footer>
        <div>
          <Banner />
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default page;
