import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUpOnScroll from "@/components/subcomponents/FadeUpOnScroll";

const page: React.FC = () => {
  const data = [
    {
      action: "Complaints received",
      responsibility: "Complaint Recipient/ Technical Admin",
      timeline: "NA",
      remarks: "Compliant can be received via e-mail or via phone calls.",
    },
    {
      action: "Information forwarded to the appropriate individual",
      responsibility: "Complaint Recipient/ Technical Admin",
      timeline: "Within 2 working days",
      remarks:
        "Information forwarded to the concerned department & (acknowledgement to client and assignment for action to the relevant personnel).",
    },
    {
      action: "Verify the validity of the complaint",
      responsibility: "Technical Manager / SME",
      timeline: "Within 2 working days",
      remarks:
        "Review the nature and content of the complaint and determine whether this is a valid complaint or not. If yes, proceed for step #5. If not, proceed for step #4",
    },
    {
      action: "Complaint invalid",
      responsibility: "Technical Manager / SME",
      timeline: "Within 2 working days",
      remarks:
        "If concluded as the complaint is not valid then inform complainant within 2 days. Update the CAR accordingly. Process ends.",
    },
    {
      action: "Log complaint",
      responsibility: "Technical Manager / SME",
      timeline: "Within 2 working days",
      remarks: "Open the CAR (Corrective Action Request form) AUDIT.REC.CAR.01",
    },
    {
      action: "Acknowledge receipt client’s notification",
      responsibility: "Technical Manager / SME/ Operations Head",
      timeline: "Within 2 days",
      remarks:
        "If concluded as valid acknowledge receipt of the complaint to the complainant and start investigation.",
    },
    {
      action: "Perform investigation",
      responsibility: "Technical Manager / SME/ Operations Head",
      timeline: "Within 7 working days",
      remarks:
        "Investigate or assign the task for investigation of complaint to a designated investigator who has not been previously involved with the subject of the complaint. Investigation may be off site or on site. Complaints received from Accreditation Bodies Sector Authority Organizations (Such as FSSAI) or clients’ may require an on-site investigation review visit (if required on site visit needs to be done). Report must be submitted in both the scenarios.",
    },
    {
      action: "Initiate a Corrective Action",
      responsibility: "Technical Manager / SME/ Operations Head",
      timeline: "Within 7 working days",
      remarks:
        "Resolve complaint through an investigation and validation process document root cause corrections and/or corrective actions to be taken in response to the complaint.",
    },
    {
      action: "Recommendation",
      responsibility: "Technical Manager / SME/ Operations Head",
      timeline: "Immediate after CA",
      remarks:
        "Document the recommendation in CAR & follow the CAPA Procedure. AUDIT.REC.CAR.01",
    },
    {
      action: "Review and approval",
      responsibility: "Executive Director",
      timeline: "within 15 working days of receipt of the complaint",
      remarks:
        "Review and approve results of the investigation. Inform the complainant of the results and the decision of the investigation.",
    },
    {
      action: "Assignment of actions and Implement actions",
      responsibility: "Technical Manager / SME/ Operations Head",
      timeline: "Within 1 day after approval",
      remarks:
        "Complete all actions as assigned attach evidence of implementation. Inform complainant of the completed actions. This can be done by e-mail or formal letter.",
    },
    {

     action: "Close complaint/Appeal in the log",
    responsibility: "Technical Manager / SME/ Operations Head",
    timeline: "Immediate after all steps completion",
    remarks: (
      <ul className="list-disc pl-5">
        <p>Verify that all the steps defined above have been properly completed including:</p>
        <li>that all issues identified by the complainant are addressed in the investigation,</li>
        <li>that root causes for all the issues are covered,</li>
        <li>the communication of the outcome to complainant which includes a statement they have the right to appeal.</li>
        <li>All evidence available as attachments</li>
        <li>The verification and closure of a complaint performed by a person different than the person who implemented actions.</li>
        <li>The decision to be communicated to the complainant shall be made by, or reviewed and approved by, individual(s) not previously involved in the subject of the complaint.</li>
      </ul>)
    },
  ];

  return (
    <>
      <Navbar />

      <FadeUpOnScroll>
        <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a className="text-4xl font-bold text-white">
              FSSAI Third Party Audit
            </a>
            <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
            <a className="text-white text-lg font-semibold"></a>
          </div>
        </div>
      </FadeUpOnScroll>
      <FadeUpOnScroll>
        <div className="container mx-auto p-4">
          <p className="text-black font-bold my-10 text-3xl">
            FSSAI THIRD PARTY AUDIT SCHEME
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">Action</th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Responsibility
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Timeline
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b border-gray-200 sm:w-1/4">
                      {row.action}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 sm:w-1/4">
                      {row.responsibility}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 sm:w-1/4">
                      {row.timeline}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 sm:w-1/4">
                      {row.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="list-disc pl-5  mt-10 text-xl">
            <li className="mt-10">
              All CAR and investigation process shall be monitored by Director.
              Monitoring shall be done on monthly basis for trend analysis. Upon
              receipt of a complaint and/or appeal, Unavar Inspection &
              Certification Pvt. Ltd. shall confirm whether the complaint
              relates to certification activities that it is responsible for
              and, if so, shall deal with it. If the complaint relates to a
              certified client, then examination of the complaint shall consider
              the effectiveness of the certified management system. If a valid
              complaint regarding a certified client is communicated to Unavar
              Inspection & Certification Pvt. Ltd. by certified client and/or by
              scheme owner, the certified client is notified at an appropriate
              time.
            </li>
            <li className="mt-10">
              A review of complaints is provided during management reviews. In
              the serious cases, the Director/Operation/Technical Manager is
              informed immediately. The people involved in the processing of the
              complaints/appeals must possess the necessary skills. They are
              therefore designated on the basis of the discussed issue. If it
              turns out that someone is too involved in the process, another
              person of the team or the Certification Committee is requested to
              take the necessary decisions. These cases are rare but in which
              cases fall into this situation: Appeal Process will be followed as
              per this procedure only.
            </li>
            <li className="mt-10">
              Submission, investigation, and decision on complaints and disputes
              shall not have any discriminatory actions against the complainant.
              Although Unavar Inspection & Certification Pvt. Ltd. is not
              responsible for the problem identified by the complainant, an
              action may sometimes be implemented e.g. computer problem on a
              Scheme owner software that prevents the client from accessing
              Information; Unavar Inspection & Certification Pvt. Ltd. intervene
              with support to solve the problem. If, however, Unavar Inspection
              & Certification Pvt. Ltd. cannot establish any action, a response
              will be made to the complainant to explain the situation.
            </li>
            <li className="mt-10">
              Any investigation and decisions on the appeals will not be
              discriminatory or partial.
            </li>
          </ul>
          <p className="text-black font-sm text-wrap text-md p-3 my-10 text-xl">
            For complaints and appeal, write to: <br />
            +91 88388 70687 <br />
            admin@unavar.com
          </p>
        </div>
      </FadeUpOnScroll>
      <Footer />
    </>
  );
};

export default page;
