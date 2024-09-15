import { FaUsers as UserIcon } from "react-icons/fa";
import { FaEye as AgileIcon } from "react-icons/fa";
import { GiSteam as TeamIcon } from "react-icons/gi";
import { GiTeamIdea } from "react-icons/gi";
import { FaMobile } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import { ButtonPrimary } from "./components/Buttons";
import { ServiceCard } from "./components/Cards";
import Link from "next/link";

const serviceCardData = [
  {
    icon: GiTeamIdea,
    heading: "Dedicated Development Team",
    para: "Our dedicated development teams offer specialized expertise to meet your project needs, providing you with flexibility, scalability, and full control over the development process. Whether you're building a new platform or enhancing existing infrastructure, our team integrates seamlessly with yours to deliver quality solutions.",
  },
  {
    icon: FaMobile,
    heading: "Mobile App Development",
    para: "We design and develop mobile apps that provide seamless experiences on iOS and Android platforms. Our mobile app development team focuses on creating intuitive, user-friendly interfaces, ensuring high performance and scalability for your business needs.",
  },
  {
    icon: CgWebsite,
    heading: "Custom Software Development",
    para: "From idea to implementation, we build custom software tailored to your specific business requirements. Our solutions are scalable, secure, and designed to evolve with your company’s growth, helping you stay competitive in an ever-changing digital landscape.",
  },
];


export default function Home() {
  return (
    <>
      <section>
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Video Element */}
          <div className="absolute inset-0 w-full h-full">
            <video
              className="w-full h-full object-cover"
              controls={false}
              autoPlay
              loop
              muted
              src="https://res.cloudinary.com/dduiqwdtr/video/upload/v1725860341/c6onpx74oa0hklozpnus.mp4"
            ></video>
          </div>
          <div className="absolute inset-0 w-full h-full bg-black opacity-35 z-10"></div>

          {/* Text Element */}
          <div className="relative z-20 text-center px-4 py-6 lg:px-10 lg:py-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight lg:leading-snug max-w-6xl mx-auto">
              Software Development Agency
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-2xl text-white max-w-6xl mx-auto">
            &quot;Professional Web Design Without Breaking the Bank!&quot;
            </p>
            <div className="flex flex-col gap-6  justify-center items-center md:flex-row">
             <Link href="/AboutUs"> <ButtonPrimary text={"Learn More"} /></Link>
             <Link href="/ContactUs"> <ButtonPrimary text={"Contact Us"} /> </Link>
            </div>
          </div>
        </div>

        {/* <div className="mt-10 flex flex-col gap-4 md:flex-row md:gap-6">
          <div>
            <h2 className="text-blue-800">782K Customers</h2>
            <p>Loyality</p>
          </div>

          <div>
            <h2 className="text-blue-800">98% Satisfaction</h2>
            <p>Our Service</p>
          </div>

          <div>
            <h2 className="text-blue-800">4,862 Experts</h2>
            <p>Around The World</p>
          </div>
        </div> */}
      </section>

      <section>
        <div className="bg-[#181b20] text-white py-6 flex flex-col justify-center items-center px-8 gap-5 mt-5 md:mx-10 md:rounded-lg md:mt-10">
          <h2 className="font-semibold text-bgButton">our services</h2>
          <h1 className="text-[2rem] text-center leading-9 font-bold">Delivering The Right Solutions</h1>
          <div>
            <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>

    <div className="mt-10 flex flex-col justify-center items-center px-6 md:px-14">
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div>
          <UserIcon className="text-[4rem] text-bgButtonHover" />
        </div>
        <div className="mt-6 flex flex-col justify-center items-center md:justify-start md:items-start ml-5">
          <h1 className="text-[1.4rem] text-gray-800 font-[500] text-center leading-6 font-orbitron">
            Agile Based Decision Making
          </h1>
          <p className="text-center mt-5 md:text-left md:mt-2">
            We adopt an agile methodology that ensures your project remains flexible and responsive to market changes, allowing for continuous improvement and timely delivery.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center md:flex-row">
        <div>
          <AgileIcon className="text-[4rem] text-bgButtonHover" />
        </div>
        <div className="mt-6 flex flex-col justify-center items-center md:justify-start md:items-start ml-5">
          <h1 className="text-[1.4rem] text-gray-800 font-[500] text-center leading-6">
            Tailored Web Solutions
          </h1>
          <p className="text-center mt-5 md:text-left md:mt-2">
            Every startup is unique. We provide custom web solutions tailored to your business needs, ensuring that your online presence reflects your vision and goals.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center md:flex-row">
        <div>
          <TeamIcon className="text-[4rem] text-bgButtonHover" />
        </div>
        <div className="mt-6 flex flex-col justify-center items-center md:justify-start md:items-start ml-5">
          <h1 className="text-[1.4rem] text-gray-800 font-[500] text-center leading-6">
            Team Augmentation
          </h1>
          <p className="text-center mt-5 md:text-left md:mt-2">
            Need additional resources? Our team augmentation services provide expert support to complement your in-house team, helping you scale as your startup grows.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="bg-[#181b20] text-white py-6 flex flex-col justify-center items-center px-8 gap-5 mt-5 md:mx-10 md:rounded-lg md:mt-10">
    <h2 className="font-semibold">Our Services</h2>
    <h1 className="text-[2rem] text-center leading-9 font-bold text-pink-500">
      Delivering Tailored Solutions for Your Business
    </h1>
    <div>
      <p className="text-center mt-5">
        We offer a comprehensive range of services designed to help startups and established businesses thrive in the digital age. From innovative development teams to custom software and mobile app solutions, we provide reliable expertise that helps you scale your business effectively and efficiently.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {serviceCardData.map((card, index) => (
        <div key={index} className="p-6 bg-gray-800 rounded-lg text-white">
          <div className="flex justify-center mb-4">
            <card.icon className="text-4xl text-pink-500" />
          </div>
          <h3 className="text-center text-pink-500 text-xl font-semibold mb-2">
            {card.heading}
          </h3>
          <p className="text-center text-gray-300">
            {card.para}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
}
