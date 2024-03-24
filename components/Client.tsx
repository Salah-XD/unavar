import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="h-[100vh] bg-white py-10">
      <div className="p-0 bg-slate-50 m-0 h-[90vh]">
        <div className="flex flex-col gap-3 justify-center text-center py-5">
          <h1 className="text-center text-4xl font-semibold">
            Our Major Clients
          </h1>
          <p className="text-[#0f7a87] text-2xl text-center my-6 font-medium">
            Building trust through Quality assurance
          </p>
        </div>
        <div className="flex flex-col gap-3 flex-wrap">
          <div className="flex py-2 justify-center gap-10">
            <div className="bg-white  w-[15vw] h-[30vh] flex justify-center align-middle rounded-2xl shadow-lg">
              <Image
                alt="img"
                src="/images/Sapphire.png"
                width={200}
                height={50}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle">
              <Image
                alt="img"
                src="/images/Anjappar.jpg"
                width={200}
                height={50}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle">
              <Image
                alt="img"
                src="/images/HardCastle.png"
                width={200}
                height={50}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle">
              <Image
                alt="img"
                src="/images/Jubilant.png"
                width={200}
                height={50}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="flex py-3 justify-center gap-10 flex-wrap">
            <div className="bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle">
              <Image
                alt="img"
                src="/images/Kitchen.jpg"
                width={200}
                height={100}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle">
              <Image
                alt="img"
                src="/images/Kitchen.jpg"
                width={200}
                height={100}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle">
              <Image
                alt="img"
                src="/images/Kitchen.jpg"
                width={200}
                height={100}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // bg-[#d3faff] -Use for background
  );
};

export default Clients;
