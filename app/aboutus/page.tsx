import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Banner from "@/components/subcomponents/banner";
import Aboutcard from "@/components/subcomponents/Aboutcard";
import Addbanner from "@/components/Addbanner";
import FadeUpOnScroll from "@/components/subcomponents/FadeUpOnScroll";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <Navbar />
      <FadeUpOnScroll>
        <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a className="text-4xl font-bold text-white">About Us</a>
            <p className="text-white text-l md:text-xl m-0 md:m-3 my-5 w-screen px-3"></p>
            <a className="text-white text-lg font-semibold"></a>
          </div>
        </div>
      </FadeUpOnScroll>
      {/* ------- */}
      <FadeUpOnScroll>
        <div className="flex flex-col justify-center align-middle p-2 md:p-20">
          <div className="flex flex-col p-10">
            <p className="text-center text-wrap">
              Unavar Food Inspection and Certification Pvt. Ltd. is a
              distinguished certification body supporting Indian Food Business
              Operators (FBOs) in obtaining certifications from FSSAI, ISO, and
              other global standards. Our tailored services ensure FBOs meet
              stringent quality standards, boosting consumer confidence and
              market competitiveness.Committed to excellence, we provide
              comprehensive assistance throughout the certification journey,
              empowering FBOs in the dynamic food industry.Unavar Food
              Inspection and Certification Private Limited provides
              certification to food business operators which ensures the
              consumers , that safe Food is prepared and served, which meets the
              requirements of National food safety standards and they are given
              Rating according to the practices they follow.Accredited by FSSAI
              and QCI as a Hygiene Rating Agency since December 2022.The
              organization employs over 12 full-time Hygiene Rating Auditors
              certified by FSSAI/QCI.The organization also employs over 6
              full-time Lead Auditors certified in ISO 22000:2018.
            </p>
          </div>
        </div>
      </FadeUpOnScroll>
      <div className=" justiy-center text-center flex flex-col p-5 flex-wrap text-wrap md:text-md lg:text-lg sm: text-sm xs:text-xs">
        <a className="font-bold text-4xl text-[#13A6B8] p-2 ">Our Team</a>
        {/* <a className="font-semibold  text-black p-2 md:text-md lg:text-2xl sm: text-sm xs:text-xs">
          Here&apos;s what others have to say about us.
        </a> */}
      </div>
      <FadeUpOnScroll>
        <div className=" flex flex-wrap justify-center gap-5 p-10">
          <Aboutcard
            img="/images/About/unknown.jpg"
            name="Vivekanand Chandrasekaran"
            desc="Experienced and known food safety expert in the
          field of catering and manufacturing with over 11
          years of industrial experience. post graduate in
          food safety quality management from srm
          university and graduation in packaging and
          printing engineer from mumbai university. fssai
          fostac trainer with over 300 trainings, fssai
          hygiene rating auditor with over 500 hygiene
          rating audits completed and lead auditor for iso
          22000: 2018
          "
            role={"EXECUTIVE DIRECTOR \nvivekanand@unavar.com"}
          />
          <Aboutcard
            img="/images/About/abt2.png"
            name="Kasthuri Selvam"
            desc="Food Process Engineering graduate from TNAU with 5 years of hands- on experience in oil processing, cereals processing, spices processing units. Known expert in label guidance and FSSAI licensing. Hygiene rating certified auditor with more than 300 audits completed for different sectors like catering, bakery and meat retail. Was part of getting the first BHOG for the state of tamil nadu. Certified ISO 22000 lead auditor"
            role={"HEAD - Operations\nkasthuri@unavar.com"}
          />
        </div>
      </FadeUpOnScroll>
      <FadeUpOnScroll>
        <div className=" flex flex-wrap justify-center gap-5 p-10">
          <Aboutcard
            img="/images/About/abt1.png"
            name="DEVA V"
            desc="Deva V, a certified ISO 22000:2018 Auditor, Hygiene Rating auditor
          and a certified Food analyst and Food microbiologist with a post
          graduate degree in Food and Nutrition Biotechnology. Have 3 years
          of experience in certification process as well as catering and FMCG
          industries with more than 200 consultation audits under the FSSAI
          initiatives and 100 consultation audits in ISO 22000:2018 standards
          and Hygiene monitoring documentation."
            role={"Business Development Manager\ndeva@unavar.com"}
          />

          <Aboutcard
            img="/images/About/abt3.png"
            name="Nandhini L"
            desc="A certified ISO 22000:2018 Lead Auditor and Hygiene Rating auditor
          with a post graduate degree in Food Safety and Quality Management.
          Astute person with an experience of working in regulation bodies in
          FSSAI southern Region as well as FMCG industry. Having 2 years of
          Auditing experience and more than 300 audits under the FSSAI ERI
          scheme."
            role={"Operations Manager\nnandhini@unavar.com"}
          />
          <Aboutcard
            img="/images/About/abt4.png"
            name="Preethi G"
            desc="A certified Hygiene Rating Auditor who successfully completed over
          200 audits under FSSAI hygiene rating scheme. Did graduation in
          food technology. Holds ISO 22000:2018 Lead Auditor certification.
          Had more than 3 years of experience in research and development,
          quality assurance and food safety. Skilled in developing product and
          process related specifications for dairy products. Worked in various
          food businesses including dairy and beverage sector."
            role={"Technical Manager- Training\npreethi@unavar.com"}
          />
          <Aboutcard
            img="/images/About/abt5.png"
            name="Sushmitha K"
            desc="Sushmitha K is a certified auditor for hygiene ratings with a
          background in Food Technology, holding a Bachelor's degree with
          three years of experience in the field. She has conducted over 300
          audits on food safety. Sushmitha is a dedicated, disciplined, and
          motivated professional with a strong understanding of food safety
          principles. She is capable of effectively contributing to the
          achievement of both current and future organizational goals."
            role={"Hygiene Rating Auditor\nsushmita@unavar.com"}
          />
        </div>
      </FadeUpOnScroll>
      <footer>
        <div>
          <Addbanner />
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default About;
