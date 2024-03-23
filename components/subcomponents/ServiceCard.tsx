import Image from "next/image"

const ServiceCard = ({head,desc}) => {
  return (
    <div className="group relative w-[350px] h-[246px] p-6 shadow-[0_0_30px_#11111149] rounded-3xl">
      <Image className="relative my-5 bg-[#0f7a87] rounded-xl pt-1" src='/images/mynaui-leaves.svg' width={70} height={70} alt="icon"/>
      <p className="text-2xl font-semibold">{head}</p>
      <div className="absolute flex flex-col gap-3 justify-center items-center text-center  bg-[#13a6b8] w-[350px] h-[246px] rounded-3xl left-[0] -bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-medium w-[200px]">{desc}</p>
        <a href="" className="text-[#13a6b8] bg-white font-semibold text-xl p-2 px-4 rounded-lg">Know More</a>
      </div>
      
    </div>
  )
}

export default ServiceCard