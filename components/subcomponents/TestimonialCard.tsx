import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="bg-[#00B2A9] rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center mb-4">
        <Image
          src="/images/merlin.png"
          alt="Merlin"
          width={80}
          height={80}
          className="rounded-full"
        />
        <h2 className="text-white text-xl font-bold ml-4">Merlin</h2>
        </div>
      <p className="text-white text-lg leading-relaxed mb-4">
        Working with UNAVAR has been a game-changer for our in Food safety and certification for our restaurant. Their expertise in the field is unmatched and they are highly recommended!
      </p>
    </div>
  );
};

export default Testimonial;