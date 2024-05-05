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
import FadeUpOnScroll from "@/components/subcomponents/FadeUpOnScroll";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FadeUpOnScroll>
        <Slider />
      </FadeUpOnScroll>
      <FadeUpOnScroll delay={200}>
        <Qci />
      </FadeUpOnScroll>
      <FadeUpOnScroll delay={400}>
        <Service />
      </FadeUpOnScroll>
      <FadeUpOnScroll>
        <Maps />
      </FadeUpOnScroll>
      <FadeUpOnScroll>
        <Testimonial />
      </FadeUpOnScroll>
      {/* <FadeUpOnScroll>
        <MyGallery />
      </FadeUpOnScroll> */}
      <FadeUpOnScroll>
        <Clients />
      </FadeUpOnScroll>
      {/* <FadeUpOnScroll>
        
      </FadeUpOnScroll> */}
      <FadeUpOnScroll>
        <Addbanner />
      </FadeUpOnScroll>
      <FadeUpOnScroll>
        <Footer />
      </FadeUpOnScroll>
    </div>
  );
}
