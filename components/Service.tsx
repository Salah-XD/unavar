import ServiceCard from "./subcomponents/ServiceCard";
const Service = () => {
  return (
    <div className="my-10 px-10">
      <h1 className="text-center text-4xl font-semibold">WHAT DO WE OFFER?</h1>
      <p className="text-[#0f7a87] text-2xl text-center my-6 mb-10 font-medium">
        Delivering comprehensive solutions for food safety,
        <br /> certification, and quality assurance
      </p>
      <h1 className="text-center text-4xl font-semibold mt-4">
        Services we Offer{" "}
      </h1>
      <div className="flex flex-wrap justify-center my-7 py-9 gap-7">
        <ServiceCard
          head="Third Party Auditing"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/tpa.png"
          btn="Enquire Now"
          pimg="/images/certificates/hygiene-cer.png"
        />
      </div>
      <h1 className="text-center text-4xl font-semibold">
        Certifications we Offer{" "}
      </h1>
      <div className="flex flex-wrap justify-center my-7 py-9 gap-7">
        <ServiceCard
          head="Hygiene Rating"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/hygiene.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/hygiene-cer.png"
        />
        <ServiceCard
          head="Eat Right Station"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-station-cer.png"
        />
        <ServiceCard
          head="Eat Right Fruit and Vegetable Market"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright-veg.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-vegmarket.png"
        />
        <ServiceCard
          head="Eat Right Hub"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright-hub.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-hub-cer.png"
        />
        <ServiceCard
          head="Eat Right Campus"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright-campus.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-campus-cer.png"
        />
        <ServiceCard
          head="Eat Right Worship Place"
          desc="We ensure that your food products meet safety and qquality"
          image="/images/eatright-worship.png"
          btn="Sample Cerificate"
          pimg="/images/certificates/eatright-worship-cer.png"
        />
      </div>
    </div>
  );
};

export default Service;
