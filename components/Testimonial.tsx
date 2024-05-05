"use client";

import React from "react";
import TestimonialCard from "./subcomponents/TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className="mt-[280px] md:mt-[190px]">
      <div className="bg-primary-500 text-center py-6 pt-20">
        <h1 className="text-center text-5xl font-semibold font-roboto-slab">
          Testimonials{" "}
        </h1>
        {/* <p className="text-[#0f7a87] text-2xl text-center my-6 mb-10 font-medium">
          What our clients say about us
        </p> */}
      </div>
      <center>
        <Carousel
          infinite={true}
          responsive={responsive}
          className="py-20 w-full"
          showDots={true}
          ssr={true}
        >
          <div>
            <TestimonialCard
              img="/images/testimonials/arul.webp"
              name="Govardhana Giri"
              desc="Audit conducted by Unavar Food Inspection has been invaluable for our Annadhana
            Koodam at the temple. The insights and recommendations provided have significantly
            enhanced our food safety protocols, ensuring the well-being of all those having our sacred
            meals. The audit process was very smooth. Auditor explained how important it is to maintain
            food safety standards in our annadhana koodam and gave suggestions on where to improve.
            Sufficient time was given to make corrective actions in our temple. Overall, the audit was
            good and we gained a lot of knowledge"
              role="Temple office incharge"
              place="Arulmigu Balasubramaniya Swamy Temple , Somasipadi , Thiruvannamalai."
            />
          </div>
          <div>
            <TestimonialCard
              img="/images/testimonials/cheyyar.webp"
              name="Pandiyan"
              desc="We just wanted to thank all of your team members of Unavar Food Inspection and
              Certification Private Limited for Initiating Eat Right Campus Certification at our hospital.
              Your team members supported and gave a lot of ideas and suggestions to maintain the
              kitchen and surrounding area to keep clean and good. All areas were checked thoroughly to
              ensure food safety is practiced. Documents were verified by auditor. It was very useful to us
              and we learned how to maintain the canteen area , provision and also personal hygiene .
              Thank you, team Unavar for the Eat right campus audit."
              role="Chief Medical Officer"
              place="CHEYYAR GOVERMENT HOSPITAL, Thiruvannamalai."
            />
          </div>
          <div>
            <TestimonialCard
              img="/images/testimonials/dairy.webp"
              name="Dr. Sundara Pandiyan"
              desc="First of all, I would like to thank Unavar Food Inspection team for their
              approach and attitude in conducting the audit. Food handlers working in kitchen,
              hostel premise, chefs everyone got the awareness on how to maintain
              themselves and the area they are working clean and hygiene that way we create
              a better environment and healthy food for the students. Lots of improvements
              and feedback were given by the auditor during their pre audit in our
              campus which helped us a lot. Auditor was very good in explaining things in
              way everyone could relate and understand. Thank you"
              role="Assistant Professor"
              place="College of Food and Dairy Technology, Thiruvallur"
            />
          </div>
          <div>
            <TestimonialCard
              img="/images/testimonials/christ.webp"
              name="Prithivi Kumar A R  "
              desc="I'm grateful for Unavar's exceptional effort in the 'Eat Right Campus' audit, providing invaluable support and insights. The dedication shown was commendable, aligning with our goal of promoting safety, health, and sustainable food practices. We're eager to implement the certification process campus-wide and collaborate further for improvement. Let's schedule a meeting to discuss strategies. Thank you for conducting the audit, and I look forward to future collaboration."
              role="Assistant Professor | Department of Hotel Management"
              place="CHRIST (Deemed to be University)"
            />
          </div>
        </Carousel>
      </center>
    </div>
  );
};

export default Testimonial;
