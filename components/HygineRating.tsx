import React from "react";

const HygieneRating: React.FC = () => {
  return (
    <div className="flex flex-col justify-center align-middle p-2 md:p-20">
      {/* Complaints and Appeal */}
      <div className="text-center">
        <p className="text-black font-bold text-4xl">Complaints and Appeal</p>
      </div>

      {/* Complaints Section */}
      <div className="flex flex-col p-10">
        <p className="text-black font-bold text-3xl">Complaints</p>
        <p className="text-black font-sm text-wrap text-md p-3 text-xl">
          The Unavar Food Inspection and Certification Private Limited shall
          have a documented process to receive, evaluate and make decisions on
          complaints.
        </p>
        <p className="text-black font-sm text-wrap text-md p-3 text-xl">
          A description of the handling process for complaints shall be
          available to any interested party upon request.
        </p>
        <p className="text-black font-sm text-wrap text-md p-3 text-xl">
          Upon receipt of a complaint, the Unavar Food Inspection and
          Certification Private Limited shall confirm whether the complaint
          relates to Audit activities for which it is responsible and, if so,
          shall deal with it.
        </p>
        <p className="text-black font-sm text-wrap text-md p-3 text-xl">
          The Unavar Food Inspection and Certification Private Limited shall be
          responsible for all decisions at all levels of the handling process
          for Complaints.
        </p>
      </div>

      {/* Appeals Section */}
      <div className="flex flex-col p-10">
        <p className="text-black font-bold text-3xl">Appeals</p>
        <p className="text-black font-sm text-wrap text-md p-3 text-xl">
          Appeals against the decision of the HRAA to be first forwarded to the
          concern HRAA if unresolved to QCI and if not satisfied then the
          applicant may appeal to FSSAI. The timeline for the resolution of the
          appeals will be as under:
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
  );
};

export default HygieneRating;
