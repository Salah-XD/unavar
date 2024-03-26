import Image from "next/image";
import img4 from "../../public/images/Jubilant.png";

interface ClientCardProps {
  img: string;
}

const ClientCard = ({ img }: ClientCardProps) => {
  return (
    <div>
      <div className="bg-white h-[25vh] rounded-2xl shadow-lg flex flex-wrap justify-center align-middle">
        <Image
          alt="img"
          src={img}
          width={200}
          height={50}
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ClientCard;
