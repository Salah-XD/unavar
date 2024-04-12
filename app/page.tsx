import Image from "next/image";
import Navbar from "@/components/Navbar";
import Qci from "@/components/Qci";
import Service from "@/components/Service";
import Clients from "@/components/Client";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Banner from "@/components/subcomponents/banner";
import Addbanner from "@/components/Addbanner";
import Maps from "@/components/Maps";
import MyGallery from "@/components/MyGallery";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Qci />
      <Service />
      <Maps />
      <Testimonial />
      <MyGallery />
      <Clients />
      <Banner />
      <Addbanner />
      <Footer />
    </div>
  );
}
