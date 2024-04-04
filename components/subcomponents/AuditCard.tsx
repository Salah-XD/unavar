import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  head: string;
  image: string;
  btn: string;
}

const AuditCard = ({ head, image, btn }: ServiceCardProps) => {
  return (
    <div className="group relative w-[350px] h-[410px] p-6 shadow-[0_0_30px_#11111149] rounded-3xl">
      <Image
        className="relative my-5 bg-[#0f7a87] rounded-xl pt-1"
        src={image}
        width={400}
        height={400}
        alt="icon"
      />
      <p className="text-2xl font-semibold">{head}</p>
      <Link href="/services/third-party-auditing">
        <p className="text-lg no-underline text-white hover:no-underline bg-[#0f7a87] p-2 px-3 mt-3 rounded-lg w-fit">
          {btn}
        </p>
      </Link>
    </div>
  );
};

export default AuditCard;
