import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Banner from "@/components/subcomponents/banner";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white">Third Party Auditing</a>
          <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
          <a className="text-white text-lg font-semibold"></a>
        </div>
      </div>
      {/* ------- */}
      <div className="flex flex-col justify-center align-middle p-2 md:p-20">
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-3xl">
            Who all are eligible for TPA
          </p>
          <p className="text-black font-sm text-wrap text-md p-3 text-xl">
            The Food Business Operators (FBOs) who hold a central license are
            eligible to undergo Third Party Audit (TPA). In the context of food
            safety regulations, TPA refers to an audit conducted by an external,
            independent organization or body that is recognized by relevant
            authorities. This audit assesses the compliance of the food business
            with applicable standards and regulations, ensuring that food safety
            and quality requirements are met.
          </p>
        </div>
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-3xl">
            The following are eligible for Third-Party Audits (TPA):
          </p>
          <ul className="list-disc my-8 ml-4 text-xl">
            <li>General Manufacturers</li>
            <li>Central catering services</li>
            <li>Holders of central and state licenses for prepared foods</li>
            <li>Manufacturers of high-risk products:</li>
            <div className="ml-5">
              <li className="indent">Milk and dairy products</li>
              <li className="indent">Meat and poultry products</li>
              <li className="indent">Fish and seafood products</li>
              <li className="indent">Ghee and oil</li>
            </div>
          </ul>
        </div>

        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-3xl">
            On What Basis Man - Days were Calculated?
          </p>
          <p className="text-black font-md text-wrap p-3 text-xl">
            The provided breakdown suggests different man-day allocations based
            on the number of food handlers:
          </p>
          <p className="text-black font-md text-wrap p-3 text-2xl">
            0 - 50 food handlers: 0.5 man-day
          </p>
          <p className="text-black font-md text-wrap p-3 text-2xl">
            50 - 100 food handlers: 1 man-day
          </p>
          <p className="text-black font-md text-wrap p-3 text-2xl">
            More than 100 food handlers: 1.5 man-days
          </p>
        </div>
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-3xl">
            What is TPA and how it is useful?
          </p>
          <p className="text-black font-md text-wrap p-3 text-xl">
            TPA, or Third Party Audit, is an evaluation process carried out by
            an independent organization or body that is officially recognized
            for its competence and authority in assessing compliance with
            relevant standards and regulations. These recognized bodies
            typically have accreditation from regulatory agencies or industry
            associations. The purpose of TPA is to provide an impartial
            assessment of a food business&APOSs compliance with food safety and
            quality standards, offering assurance to consumers and regulatory
            authorities alike.
          </p>
          <div className="flex justify-center my-10 flex-wrap">
            <Image
              src="/images/tpa/First .jpg"
              width={500}
              height={300}
              alt="tpa"
            />
            <Image
              src="/images/tpa/Second Image.jpg"
              width={500}
              height={300}
              alt="tpa"
            />
          </div>
        </div>
      </div>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default page;
