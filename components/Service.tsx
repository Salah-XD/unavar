import ServiceCard from "./subcomponents/ServiceCard";
import AuditCard from "./subcomponents/AuditCard";
import Link from "next/link";
import HygieneCard from "./subcomponents/HygieneCard";

const Service = () => {
  return (
    <div className="my-10 mt-14p px-10">
      {/* <h1 className="text-center text-4xl font-semibold">WHAT DO WE OFFER?</h1> */}
      {/* <p className="text-[#0f7a87] text-2xl text-center my-6 mb-10 font-medium">
        Delivering comprehensive solutions for food safety,
        <br /> certification, and quality assurance
      </p> */}
      <h1 className="text-center text-5xl font-semibold mt-4 font-roboto-slab">
        Inspection Services we Offer{" "}
      </h1>
      <div className="flex flex-wrap justify-center my-7 py-9 gap-7">
        <AuditCard
          head="Third Party Auditing"
          image="/images/tpa.png"
          btn="view more"
        />
      </div>
      <h1 className="text-center text-5xl font-semibold font-roboto-slab">
        Certification Services we Offer{" "}
      </h1>
      <div className="flex flex-wrap justify-center my-7 py-9 gap-7">
        <HygieneCard
          head="Hygiene Rating"
          desc="We ensure that your food products meet safety and quality"
          image="/images/hygiene.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/hygiene-cer.png"
          path="/services"
        />

        <ServiceCard
          head="Eat Right Station"
          desc="We ensure that your food products meet safety and quality"
          image="/images/eatright.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-station-cer.png"
          path="/services"
        />
        <ServiceCard
          head="Eat Right Fruits and Vegetables Market"
          desc="We ensure that your food products meet safety and quality"
          image="/images/eatright-veg.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-vegmarket.png"
          path="/services"
        />
        <ServiceCard
          head="Eat Right Street Food Hub"
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
        <ServiceCard
          head="Eat Right Place of Worship
          "
          desc="We ensure that your food products meet safety and quality"
          image="/images/eatright-worship.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-worship-cer.png"
          path="/services"
        />
      </div>
    </div>
  );
};

export default Service;
