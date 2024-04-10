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
          <a className="text-4xl font-bold text-white">Impartiality Policy</a>
          <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            dolorem nobis fugiat mollitia, repellat eum necessitatibus
          </p>
          <a className="text-white text-lg font-semibold">
            Thank you for choosing UNAVAR.
          </a>
        </div>
      </div>
      {/* ------- */}
      <div className="flex flex-col justify-center align-middle p-2 md:p-20">
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-lg">SCOPE</p>
          <p className="text-black font-normal text-wrap text-md p-3">
            The policy provides a quality statement, quality objectives and the means by which quality and impartiality is developed and maintained within the Unavar Food Inspection and Certification Private Limited.
          </p>
        </div>
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-lg">OBJECTIVE</p>
          <a className="text-black font-bold text-md p-3">The aims and objectives of Unavar Food Inspection and Certification Provate Limites as stated:</a>
          <ol className="px-12 py-2 list-decimal">
            <li className="text-black">The services of the corporation are provided impartially.</li>
            <li className="text-black">Review and evaluation activities are based on an objective assessment of relevant factors, following a comprehensive protocol.</li>
          </ol>
        </div>
        <div className="flex flex-col p-10">
          <a className="text-black font-bold text-md p-3">Unavar Food Inspection and Certification Private Limited, and every member of its certification and inspection body team, employees, volunteers, and contractors commits to adhere to the following policies:</a>
          <p className="p-3 text-black">Unavar Food Inspection and Certification Private Limited shall act impartially, and its policies and procedures for certification of persons shall be fair among all FBOs.</p>
          <ol className="px-12 py-4 list-decimal">
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited shall not restrict certification on the grounds of undue financial or other limiting conditions.
            </li>
            <li className="text-black">
            Unavar Food Inspection and Certification Private Limited shall be responsible for the impartiality of its certification and inspection activities and shall not allow commercial, financial or other pressures to compromise impartiality.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited shall only disclose reports and documentations with the name of Unavar Food Inspection and Certification Private Limited to FBOs involved with the completion of the project and authorities having jurisdiction for the purpose of reporting compliance or in cases of conflicts or non-conformances.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited shall ensure, through internal procedures, the objectivity of the certification and inspection activities and manage potential conflict of interest according to the standards of the applicable projects.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited corporate policies and practices ensure that the highest standards of integrity are applied to all certification and inspection body activities.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited personnel will not be influenced by financial, commercial, or other pressures when conducting certification and inspection activities, and will take action to address any situation that would affect impartiality.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited shall identify threats to its impartiality on an ongoing basis. This includes threats that arise from its activities, its related bodies, its relationships, or the relationships of its personnel.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited shall retain all authority and responsibility for certification and inspection activities.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited management system has the necessary procedures, safeguards and tools to ensure that these policies are strictly upheld and enforced.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited audit service will not affect the trade associate with the clients and the quality of the audit will not be based on the trade associate with the clients.
            </li>
            <li className="text-black">
              If the clients provide more business in terms of audits this scenario will not influence the quality of the audit.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited will take up Hygiene Rating Certification for which we do not engage in design manufacture, supply installation or certify product or process.
            </li>
            <li className="text-black">
              Unavar Food Inspection and Certification Private Limited will take up Hygiene Rating Certification for which we do not engage in design manufacture, supply installation or certify product or process and also supply of any products or raw material testing, R&D, purchase, installation of any type of services ownership, use or maintenance of the equipment or services used in an FBO
            </li>
            <li className="text-black">
            Unavar Food Inspection and Certification Private employees will not conduct any FoSTaC - Catering sectors training to avoid any situation of Impartiality risk under self review category.
            </li>
          </ol>
        </div>
        <div className="flex flex-col p-10">
          <a className="text-black font-bold text-md p-2">Unavar Food Inspection and Certification Private Limited recognizes that threats to impartiality include the following:</a>
            <ul className="px-12 py-4 list-disc">
              <li><a className="text-black font-semibold">Self interest threats -- </a>threats that arise from a person or body acting in its own interest to benefit itself.</li>
              <li><a className="text-black font-semibold">Self review threats -- </a>threats arising from a  person reviewing the work that  they have conducted themselves.threats that arise from a person being familiar with or trusting of another person, e.g., an examiner or certification / inspection body personnel developing a relationship with a candidate that affects the ability to reach an objective judgment.</li>
              <li><a className="text-black font-semibold">Familarity threats -- </a>threats that arise from a person being familiar with or trusting of another person, e.g., an examiner or certification / inspection body personnel developing a relationship with a candidate that affects the ability to reach an objective judgment.</li>
              <li><a className="text-black font-semibold">Intimidation threats -- </a> threats that prevent a certification / inspection body or its personnel from acting objectively due to fear of a candidate or other interested party.</li>
              <li><a className="text-black font-semibold">Financial threats -- </a>the source of revenue for a certification / inspection body can be a threat to impartiality.</li>
            </ul>
          </div>
          <div className="px-12 py-4">
            <a className="text-black text-md">Unavar Food Inspection and Certification Private Limited has created certification and inspection scheme committee to ensure balanced involvement of interested parties that equitably represent responsible for the development of the certification and inspection scheme.</a>
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
