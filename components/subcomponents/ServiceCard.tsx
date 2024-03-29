import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ServiceCardProps {
  head: string;
  desc: string;
}

const ServiceCard = ({ head, desc }: ServiceCardProps) => {
  return (
    <div className="group relative w-[350px] h-[246px] p-6 shadow-[0_0_30px_#11111149] rounded-3xl">
      <Image
        className="relative my-5 bg-[#0f7a87] rounded-xl pt-1"
        src="/images/mynaui-leaves.svg"
        width={70}
        height={70}
        alt="icon"
      />
      <p className="text-2xl font-semibold">{head}</p>
      <Popover>
        <PopoverTrigger as="button" className="group-hover:underline">
          <p className="text-lg text-[#0f7a87] group-hover:text-[#0f7a87]">
            Know More
          </p>
        </PopoverTrigger>
        <PopoverContent align="start" sideOffset={10} className="p-5 bg-white">
          <p className="text-lg text-[#0f7a87]">{desc}</p>
          <Image src="/images/pic.png" width={400} height={400} alt="img" />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ServiceCard;
