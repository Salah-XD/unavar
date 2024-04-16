import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
interface HygieneCardProps {
  head: string;
  desc: string;
  image: string;
  btn: string;
  pimg: string;
  path: string;
}

const HygieneCard = ({
  head,
  desc,
  image,
  btn,
  pimg,
  path,
}: HygieneCardProps) => {
  return (
    <div className="group relative w-[350px] h-[410px] p-6 shadow-[0_0_30px_#11111149] rounded-3xl">
      <Link href="/services/hygiene-rating" className="cursor">
        <Image
          className="relative my-5 bg-[#0f7a87] rounded-xl pt-1"
          src={image}
          width={400}
          height={400}
          alt="icon"
        />
        <p className="text-2xl font-semibold">{head}</p>
      </Link>
      <Popover>
        <PopoverTrigger>
          <p className="text-lg no-underline text-white hover:no-underline bg-[#0f7a87] p-2 px-3 mt-3 rounded-lg">
            {btn}
          </p>
        </PopoverTrigger>
        <PopoverContent align="start" sideOffset={10} className="p-5 bg-white">
          <p className="text-lg text-[#0f7a87]">{desc}</p>
          <Image src={pimg} width={1000} height={1000} alt="img" />
          {/* <Link href={path}>
            <p className="text-lg no-underline text-white hover:no-underline bg-[#0f7a87] p-2 px-3 mt-3 rounded-lg w-fit">
              View More
            </p>    
          </Link> */}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HygieneCard;
