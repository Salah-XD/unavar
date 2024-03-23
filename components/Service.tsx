import ServiceCard from "./subcomponents/ServiceCard"
const Service = () => {
  return (
    <div className="my-10 px-10">
        <h1 className="text-center text-4xl font-semibold">WHAT DO WE OFFER?</h1>
        <p className="text-[#0f7a87] text-2xl text-center my-6 font-medium">Delivering comprehensive solutions for food safety,<br /> certification, and quality assurance</p>
        <div className="flex flex-wrap justify-center my-7 py-9 gap-7">
            <ServiceCard
              head="Hygiene Rating"
              desc="We ensure that your food products meet safety and qquality"      
             />
            <ServiceCard
              head="Hygiene Rating"
              desc="We ensure that your food products meet safety and qquality"      
             />
            <ServiceCard
              head="Hygiene Rating"
              desc="We ensure that your food products meet safety and qquality"      
             />
            <ServiceCard
              head="Hygiene Rating"
              desc="We ensure that your food products meet safety and qquality"      
             />
            <ServiceCard
              head="Hygiene Rating"
              desc="We ensure that your food products meet safety and qquality"      
             />
            <ServiceCard
              head="Hygiene Rating"
              desc="We ensure that your food products meet safety and qquality"      
             />
            <ServiceCard
              head="Hygiene Rating"
              desc="We ensure that your food products meet safety and qquality"      
             />
        </div>

    </div>
  )
}

export default Service