import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Banner from "@/components/subcomponents/banner";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)] sm:p-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white">
            FSSAI Third Party Audit
          </a>
          <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
          <a className="text-white text-lg font-semibold"></a>
        </div>
      </div>
      {/* ------- */}
      <div className="flex flex-col justify-center align-middle p-2 md:p-20">
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-3xl">
            FSSAI Third Party Audit is Mandatory for which industries ?
          </p>
          <p className="text-black font-sm text-wrap text-md p-3 text-xl">
            The Food Business Operators (FBOs) who hold a central license Should
            Mandatorily undergo Third Party Audit (TPA) Once in Year, as they
            have to upload this Audit report while Filing Annual Reports and
            During Renewal of License . Also this FSSAI Third Party Audit has
            been Mandatory by FSSAI from August 2019 for all Central Licensed
            Food Business operators falling under High Risk categories of Food.
            This audit assesses the compliance of the food business as per the
            FSSAI Schedule IV Requirements , ensuring that food safety and
            quality requirements are met.
          </p>
        </div>
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-3xl">
            Which FBO fall under High Risk Food Categories ?
          </p>
          <p className="text-black font-sm text-wrap text-md p-3 text-xl">
            {" "}
            The following are the High Risk Food Categories :
          </p>

          <ul className="list-disc  ml-4 text-xl">
            <li>Dairy Product and Analogues.</li>
            <li>Meat and Meat Industry Including Poultry.</li>
            <li>Fish and Fish Products.</li>
            <li>Egg and Egg Products.</li>
            <li>Food Stuffs intended for Nutritional Purposes.</li>
            <li>Catering / Prepared Foods/ Hotels/ Restaurants.</li>
          </ul>
        </div>

        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-3xl">
            Is this audit applicable for FBO falling under state license
            category ?
          </p>
          <p className="text-black font-sm text-wrap text-md p-3 text-xl">
            These Audits are applicable for State License Holders as well but as
            on date it is done on Voluntary Basis and has not yet been made
            mandatory.
          </p>
        </div>

        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-3xl">
            Who Can conduct this FSSAI third Party Audit ?
          </p>
          <p className="text-black font-sm text-wrap text-md p-3 text-xl">
            This Audit Can be done only by FSSAI Recognized Third Party Audit
            Agencies and list of recognized agencies is available in the
            Following Link -
            <a
              href="https://fssai.gov.in/cms/third-party-audit.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://fssai.gov.in/cms/third-party-audit.php
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-3xl">
            How is the Audit fees Calculated ?
          </p>
          <p className="text-black font-md text-wrap p-3 text-xl">
            Audit Fees is calculated on the basis of Man Days applicable for
            audit and Audit Man Day is calculated as below:
          </p>

          <div className="container mx-auto mt-8 text-left overflow-x-auto">
            <h1 className="text-xl font-bold mb-4">Manufacturing</h1>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Food Handlers</th>
                  <th className="border px-4 py-2">
                    No. of Production Lines/Product Group in FBO/No. of HACCP
                    Studies
                  </th>
                  <th className="border px-4 py-2">On Site Man-days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 text-center">0-50</td>
                  <td className="border px-4 py-2 text-center">1</td>
                  <td className="border px-4 py-2 text-center">4</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">51-100</td>
                  <td className="border px-4 py-2 text-center">1-2</td>
                  <td className="border px-4 py-2 text-center">0.5</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">101-300</td>
                  <td className="border px-4 py-2 text-center">4</td>
                  <td className="border px-4 py-2 text-center">1</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">301-600</td>
                  <td className="border px-4 py-2 text-center">6</td>
                  <td className="border px-4 py-2 text-center">1.5</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">601-1000</td>
                  <td className="border px-4 py-2 text-center">8</td>
                  <td className="border px-4 py-2 text-center">2.5</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">&gt;1000</td>
                  <td className="border px-4 py-2 text-center">10+</td>
                  <td className="border px-4 py-2 text-center">3</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="container mx-auto mt-8 text-left">
            <h1 className="text-xl font-bold mb-4">Catering/QSR/Restaurant</h1>
            <table className="">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Food Handlers</th>

                  <th className="border px-4 py-2">On Site Man-days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 text-center">0-25</td>
                  <td className="border px-4 py-2 text-center">0.5</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">26-50</td>
                  <td className="border px-4 py-2 text-center">1</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">51-100</td>
                  <td className="border px-4 py-2 text-center">1.5</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">101-300</td>
                  <td className="border px-4 py-2 text-center">2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="container mx-auto mt-8 text-left">
            <h1 className="text-xl font-bold mb-4">
              Food Retail/Warehouse/Storage
            </h1>
            <table className="">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Area(Sq.ft)</th>

                  <th className="border px-4 py-2">On Site Man-days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 text-center">&lt;15,000</td>
                  <td className="border px-4 py-2 text-center">0</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">15,001-5000</td>
                  <td className="border px-4 py-2 text-center">1</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">&gt;50,000</td>
                  <td className="border px-4 py-2 text-center">1.5</td>
                </tr>
              </tbody>
            </table>
          </div>
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
