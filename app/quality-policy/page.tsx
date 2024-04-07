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
          <a className="text-4xl font-bold text-white">QUALITY POLICY</a>
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
          <p className="text-black font-regular text-wrap text-lg p-3">
          We at UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED is committed to provide Hygiene Rating Certification in Impartial independent and value added manner for the client and meeting the requirements of accreditation body. We shall provide the certification services through competent personnel and improve their competency by training and timely evaluation. UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED strives towards objectives and believes in continual improvement in the certification activities through reviewing and strong feedback systems from clients, auditors certification staff and other stake holders.
          <br></br><br></br>
          UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED ensures that its services are available to all its clients and these services are not based under financial or any other consideration. UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED ensures that all its procedures/guidelines operate in a non-discriminatory manner.
          <br></br><br></br>
          UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED ensures that impartiality policy and confidentiality policy is communicated from Top management till all staffs, stakeholders and clients. Also the auditors are well informed that there is no special renumeration for the number of audits conducted which may influence the results of Audits.
          </p>
        </div>
        <div className="p-10">
          <a className="text-black text-xl font-bold">OBJECTIVES:</a>
          <ol className="list-decimal px-8 py-4 font-normal text-md">
            <li>To reach an annual target of 5000, New Hygiene Rating Audit</li>
            <li>Competency level of the auditor to be achieved by increasing 20% from the current scoring through regular training.</li>
          </ol>
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
