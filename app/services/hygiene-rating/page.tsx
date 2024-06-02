"use client";

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
        <div className="flex flex-col p-10 text-xl">
          <p className="text-black font-bold text-3xl">
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
              <b>Facilitating Market Differentiation:</b>hygiene ratings offer
              businesses a competitive edge, attracting consumers who prioritize
              quality and safety, thereby boosting loyalty and profitability.
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
        <div className="flex flex-col p-10 text-xl">
          <p className="text-black font-bold text-3xl">WHO CAN APPLY?</p>
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
              <b>Meat Retail Stores: </b>This category includes businesses
              retailing meat, poultry, and seafood products such as butcher
              shops, meat markets, and poultry stores, where ensuring product
              hygiene and safety is paramount in preventing foodborne illnesses
              and building consumer trust.
            </li>
          </ul>
          <h1 className="text-4xl text-center font-bold my-5">
            Fee&apos;s Structure
          </h1>
          <p className="text-black font-md text-wrap p-3">
            Unavar Food Inspection and Certification Private Limited -HRAA is
            committed to fair and equitable fee structures for all organizations
            seeking certification. Now, Unavar Food Inspection and Certification
            Private Limited -HRAA implements a transparent and
            non-discriminatory fee system, charging clients based on a per
            Man-day basis. This fee structure is determined by calculating the
            number of Food Handlers present in the Food Business Operator (FBO)
            premises. Each Man-day is assessed according to the number of Food
            Handlers, ensuring an accurate representation of the resources and
            effort required for inspection and certification. This approach
            promotes fairness and consistency across all clients, aligning with
            our commitment to excellence in food safety standards.
          </p>
          <table className="table-auto border-collapse border border-black my-4">
            <thead>
              <tr>
                <th className="border border-black">S.No</th>
                <th className="border border-black"> Food Handlers</th>
                <th className="border border-black">Man Days</th>
                <th className="border border-black">Cost</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border border-black">1</td>
                <td className="border border-black">0-50</td>
                <td className="border border-black">0.5</td>
                <td className="border border-black">4000</td>
              </tr>
              <tr>
                <td className="border border-black">2</td>
                <td className="border border-black">50-100</td>
                <td className="border border-black">1</td>
                <td className="border border-black">8000</td>
              </tr>
              <tr>
                <td className="border border-black">3</td>
                <td className="border border-black">100+</td>
                <td className="border border-black">1.5</td>
                <td className="border border-black">12000</td>
              </tr>
            </tbody>
          </table>
          <span className="font-bold text-center">
            (*18% tax applicable as in state)
          </span>
          <h1 className="text-2xl font-bold my-3 mt-6">Note</h1>
          <p className="text-black font-md text-wrap p-3">
            The term &quot;Total Number of staff&quot; encompasses all personnel
            within the establishment, including managers, chefs, assistant
            chefs, waiters, maids, and others. This figure provides insight into
            the scale of operations within the premises, which directly
            influences the duration of the audit process. In cases where the
            hygiene rating audit is deemed unsatisfactory, a subsequent audit
            can only be scheduled after a minimum of three months from the date
            of the previous audit.
          </p>
          <p className="text-black font-md text-wrap p-3">
            Food Business Operators (FBOs) are required to register on the HR
            portal and select the HR agency for conducting audits.
          </p>
          <p className="text-black font-md text-wrap p-3">
            Payment terms stipulate 100% advance payment, with GST charged
            additionally if applicable. Furthermore, expenses related to auditor
            travel, lodging, and food will be billed separately.
          </p>
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
