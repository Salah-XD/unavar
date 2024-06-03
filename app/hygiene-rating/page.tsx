import React from "react";
import FadeUpOnScroll from "@/components/subcomponents/FadeUpOnScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HygieneRating: React.FC = () => {
  return (
    <>
      <Navbar />
      <FadeUpOnScroll>
        <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a className="text-4xl font-bold text-white">
           Hygiene Rating
            </a>
            <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
            <a className="text-white text-lg font-semibold"></a>
          </div>
        </div>
      </FadeUpOnScroll>
      <FadeUpOnScroll>
        <div className="flex flex-col justify-center align-middle p-2 md:p-20">
          {/* Complaints and Appeal */}
          <div className="text-center">
            <p className="text-black font-bold text-4xl"></p>
          </div>

          {/* Complaints Section */}
          <div className="flex flex-col p-10">
            <p className="text-black font-bold text-3xl">Complaints</p>
            <p className="text-black font-sm text-wrap text-md p-3 text-xl">
              The Unavar Food Inspection and Certification Private Limited shall
              have a documented process to receive, evaluate and make decisions
              on complaints.
            </p>
            <p className="text-black font-sm text-wrap text-md p-3 text-xl">
              A description of the handling process for complaints shall be
              available to any interested party upon request.
            </p>
            <p className="text-black font-sm text-wrap text-md p-3 text-xl">
              Upon receipt of a complaint, the Unavar Food Inspection and
              Certification Private Limited shall confirm whether the complaint
              relates to Audit activities for which it is responsible and, if
              so, shall deal with it.
            </p>
            <p className="text-black font-sm text-wrap text-md p-3 text-xl">
              The Unavar Food Inspection and Certification Private Limited shall
              be responsible for all decisions at all levels of the handling
              process for Complaints.
            </p>
          </div>

          {/* Appeals Section */}
          <div className="flex flex-col p-10">
            <p className="text-black font-bold text-3xl">Appeals</p>
            <p className="text-black font-sm text-wrap text-md p-3 text-xl">
              Appeals against the decision of the HRAA to be first forwarded to
              the concern HRAA if unresolved to QCI and if not satisfied then
              the applicant may appeal to FSSAI. The timeline for the resolution
              of the appeals will be as under:
            </p>
            <p className="text-black font-sm text-wrap text-md p-3 text-xl">
              Any investigation and decisions on the appeals will not be
              discriminatory or partial.
            </p>
            <ol className="list-decimal ml-10 text-xl">
              <li>HRAA - 15 days after appeal is made</li>
              <li>QCI - 15 days after appeal is made</li>
              <li>FSSAI - 15 days after appeal is made</li>
            </ol>

            <p className="text-black font-sm text-wrap text-md p-3 text-xl">
              For complaints and appeal, write to: <br />
              +91 88388 70687 <br />
              admin@unavar.com
            </p>
          </div>
        </div>
      </FadeUpOnScroll>
      <Footer />
    </>
  );
};

export default HygieneRating;
