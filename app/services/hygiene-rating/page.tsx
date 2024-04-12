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
          <a className="text-4xl font-bold text-white">Hygiene Rating</a>
          <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
          <a className="text-white text-lg font-semibold"></a>
        </div>
      </div>
      {/* ------- */}
      <div className="flex flex-col justify-center align-middle p-2 md:p-20">
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-xl">
            ​What is Hygiene Rating and How its Useful?
          </p>
          <p className="text-black font-sm text-wrap text-md p-3">
            The FSSAI’s Hygiene Rating Scheme aims to boost food safety
            standards and empower consumers by:
          </p>
          <ul className="list-disc my-7 py-3">
            <li>
              <b>Encouraging Businesses: </b>By introducing transparent scoring,
              it motivates food businesses to prioritize hygiene and safety,
              leading to upgrades and stricter protocols.
            </li>
            <li>
              <b>Empowering Consumers:</b>The scheme enables consumers to make
              informed decisions about where to eat or buy food by providing
              easy access to hygiene ratings online.
            </li>
            <li>
              <b>Protecting Public Health:</b> Through promoting adherence to
              safety standards, it helps prevent foodborne illnesses,
              contributing to public health protection.
            </li>
            <li>
              <b>Facilitating Market Differentiation:</b>High hygiene ratings
              offer businesses a competitive edge, attracting consumers who
              prioritize quality and safety, thereby boosting loyalty and
              profitability.
            </li>
            <li>
              <b>Fostering Continuous Improvement:</b>Through regular
              evaluations and feedback, it encourages businesses to continuously
              enhance hygiene standards, promoting overall improvement across
              the food sector.
            </li>
            <li>
              <b>Building Trust:</b>By promoting transparency, it enhances
              consumer confidence, ensuring they can trust the hygiene practices
              of food establishments they patronize.
            </li>
          </ul>
        </div>
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-xl">WHO CAN APPLY?</p>
          <p className="text-black font-md text-wrap p-3">
            The Hygiene Rating Scheme administered by FSSAI is inclusive of
            various food businesses, such as:
          </p>
          <ul className="list-disc my-7 py-3">
            <li>
              <b>Food Service Establishments: </b>This encompasses a wide range
              of businesses serving food directly to customers, including
              hotels, restaurants, cafeterias, dhabas, food trucks, and catering
              services, which are pivotal in ensuring food safety.
            </li>
            <li>
              <b>Sweet Shops: </b>These establishments specialize in producing
              and selling traditional Indian sweets, desserts, and confectionery
              items, requiring strict adherence to hygiene standards to ensure
              product safety and quality.
            </li>
            <li>
              <b>Bakeries: </b>Participating bakeries produce and sell a variety
              of baked goods like bread, pastries, cakes, and cookies,
              emphasizing the importance of maintaining high hygiene standards
              due to the perishable nature of bakery products.
            </li>
            <li>
              <b>Meat Retail Stores: </b>This category includes businesses retailing meat, poultry, and seafood products such as butcher shops, meat markets, fishmongers, and poultry stores, where ensuring product hygiene and safety is paramount in preventing foodborne illnesses and building consumer trust.
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div>
          <Banner />
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default page;
