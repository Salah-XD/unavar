import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white">Our Policies</a>
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
          <p className="text-black font-bold text-xl">1.Quality Policy</p>
          <p className="text-black font-sm text-wrap text-md p-3">
            At UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED, we are
            committed to providing Hygiene Rating Certification in an impartial,
            independent, and value-added manner to our clients while meeting the
            requirements of accreditation bodies. We ensure certification
            services are delivered by competent personnel and continually
            enhance their competency through training and evaluations. Our
            commitment to continual improvement involves reviewing certification
            activities and gathering strong feedback from clients, auditors,
            certification staff, and other stakeholders. We guarantee
            accessibility to our services for all clients, free from financial
            or any other bias, and operate all procedures and guidelines in a
            non-discriminatory manner. Upholding policies of impartiality and
            confidentiality, we ensure communication of these policies from top
            management to all staff, stakeholders, and clients. Additionally,
            our auditors are informed that there is no special remuneration tied
            to the number of audits conducted, mitigating any potential
            influence on audit results.
          </p>
        </div>
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-xl">2.Impartiality Policy</p>
          <p className="text-black font-md text-wrap p-3">
            At UNAVAR FOOD INSPECTION AND CERTIFICATION PRIVATE LIMITED, we
            uphold impartiality in our certification and inspection activities,
            ensuring fairness among all Food Business Operators (FBOs).
            Certification is not restricted by financial or other limiting
            conditions, and the company takes full responsibility for
            maintaining impartiality and preventing external pressures from
            compromising this. Disclosure of reports and documentation is
            limited to involved FBOs and relevant authorities for compliance
            reporting or conflict resolution. Internal procedures are in place
            to ensure objectivity and manage conflicts of interest, adhering to
            strict corporate integrity standards. Personnel are not influenced
            by financial or commercial pressures and actively address situations
            that may affect impartiality. Ongoing identification of threats to
            impartiality is conducted, including self-interest, self-review,
            familiarity, intimidation, and financial threats. UNAVAR&LSQUO;s
            management system is equipped with necessary safeguards to enforce
            these policies. The company&LSQUO;s certification services do not
            interfere with client&LSQUO;s trade or audit quality, irrespective
            of business volume. Additionally, UNAVAR refrains from engaging in
            activities such as product certification, supply, or catering sector
            training to mitigate risks to impartiality. A certification and
            inspection scheme committee ensures balanced representation of
            stakeholders in developing certification and inspection schemes.
          </p>
        </div>
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-xl">
            3.Confidentiality Policy
          </p>
          <p className="text-black font-md text-wrap p-3">
            Employees and personnel of UNAVAR FOOD INSPECTION AND CERTIFICATION
            PRIVATE LIMITED are bound by strict confidentiality obligations
            regarding information obtained during their employment or
            engagement. This policy outlines their duties to maintain
            confidentiality and refrain from disclosing information except for
            lawful purposes. All staff members must handle information received
            or accessible to them with utmost confidentiality and utilize it
            only for authorized purposes in compliance with the law. UNAVAR FOOD
            INSPECTION AND CERTIFICATION PRIVATE LIMITED, including its
            certification and inspection body team, employees, and contractors,
            commits to safeguarding all information obtained during audit or
            certification activities or any other dealings with organizations.
            Such information shall not be disclosed to third parties without
            express permission, except when legally mandated or when safety
            concerns arise. Records are securely maintained and accessible only
            to authorized personnel, with contractors limited to accessing
            information relevant to their audit activities. Information may be
            disclosed to organizations with a legitimate right to access it,
            including Accreditation Bodies, ensuring compliance with legal
            requirements and safeguarding confidentiality.
          </p>
        </div>
        <div className="flex flex-col p-10">
          <p className="text-black font-bold text-xl">4.THIRD PARTY AUDIT</p>
          <p className="text-black font-md text-wrap p-3">
            Who all are eligible for TPA? The Food Business Operators (FBOs) who
            hold a central license and operate a manufacturing unit are eligible
            to undergo Third Party Audit (TPA). In the context of food safety
            regulations, TPA refers to an audit conducted by an external,
            independent organization or body that is recognized by relevant
            authorities. This audit assesses the compliance of the food business
            with applicable standards and regulations, ensuring that food safety
            and quality requirements are met. On What Basis Man - Days were
            Calculated? Man-days refer to the number of days worked by an
            individual. In the context of food handling, man-days are calculated
            based on the number of food handlers employed by a food business.
            The provided breakdown suggests different man- day allocations based
            on the number of food handlers: 0 - 50 food handlers: 0.5 man-day 50
            - 100 food handlers: 1 man-day More than 100 food handlers: 1.5
            man-days This calculation is likely used for determining the
            resources required for food safety management, including training,
            supervision, and monitoring of food handling practices. What is TPA
            and how it is useful? TPA, or Third Party Audit, is an evaluation
            process carried out by an independent organization or body that is
            officially recognized for its competence and authority in assessing
            compliance with relevant standards and regulations. These recognized
            bodies typically have accreditation from regulatory agencies or
            industry associations. The purpose of TPA is to provide an impartial
            assessment of a food business&LSQUO;s compliance with food safety
            and quality standards, offering assurance to consumers and
            regulatory authorities alike
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
