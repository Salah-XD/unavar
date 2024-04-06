
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Banner from "@/components/subcomponents/banner";
import Addbanner from "@/components/Addbanner";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/web.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white">About Us</a>
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
          <p>
            Unavar Food Inspection and Certification Private Limited is an certification body which is formed to ensure the Food Business operators in India get Certified under different schemes of Food safety standards authority of India ( FSSAI) , standards of International Organization for Standardization ( ISO) and other Global Standards.
            Unavar Food Inspection and Certification Private Limited&LSQUO;s vision is to make FBO&LSQUO;s undergo different certifications in any part of the country in ease manner to ensure the meet the requirements of National and Global Food Safety standards and provide safe and wholesome food to the consumers.
            Unavar Food Inspection and Certification Private Limited aims to be connected with the society and Food business operators through young, talented and passionate professional who are trained and made competent to deliver knowledge about food safety to the industry. Unavar Food Inspection and Certification Private Limited provides certification to food business operators which ensures the consumers the following Safe Food is prepared and served Meets the requirements of National food safety standards or Global Standards Rating of the FBO according to the practices they follow
          </p>
        </div>
      </div>
      <footer>
        <div>
          <Banner />
          <Addbanner />
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default About;
