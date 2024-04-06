import Image from "next/image";
import Navbar from "@/components/Navbar";
import Qci from "@/components/Qci";
import Service from "@/components/Service";
import Clients from "@/components/Client";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Banner from "@/components/subcomponents/banner";
import { Slider } from "@/components/Slider";
import Maps from "@/components/Maps";
import Testnav from "@/components/Testnav";
import MyGallery from "@/components/MyGallery";

export default function Home() {
  return (
    <div>
      <Testnav />
      <Navbar />
      <Slider />
      <Qci />
      <Service />
      <Maps />
      <Testimonial />
      <MyGallery />
      <Clients />
      <Banner />
      <Footer />
    </div>
  );
}
