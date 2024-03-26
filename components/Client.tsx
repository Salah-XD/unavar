import React from "react";
import Image from "next/image";
import ClientCard from "./subcomponents/ClientCard";

const img1 = "/images/Sapphire.png";
const img2 = "/images/Anjappar.jpg";
const img3 = "/images/HardCastle.png";
const img4 = "/images/Jubilant.png";
const img5 = "/images/Kitchen.jpg";
const img6 = "/images/Kitchen.jpg";
const img7 = "/images/Kitchen.jpg";

const Clients = () => {
  return (
    <div className=" bg-slate-50 py-20 my-10 mt-20 px-10">
      <div className="flex flex-col gap-3 justify-center text-center py-5">
        <h1 className="text-center text-4xl font-semibold">
          Our Major Clients
        </h1>
        <p className="text-[#0f7a87] text-2xl text-center mb-20 font-medium">
          Building trust through Quality assurance
        </p>
      </div>

      <div>
        <div className="flex flex-wrap justify-center gap-7">
          <ClientCard img={img1} />
          <ClientCard img={img2} />
          <ClientCard img={img3} />
          <ClientCard img={img4} />
          <ClientCard img={img5} />
          <ClientCard img={img6} />
          <ClientCard img={img7} />
        </div>
      </div>
    </div>
    // bg-[#d3faff] -Use for background
  );
};

export default Clients;
