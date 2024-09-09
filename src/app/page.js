import { FaUsers as UserIcon } from "react-icons/fa";
import { FaEye as AgileIcon } from "react-icons/fa";
import { GiSteam as TeamIcon } from "react-icons/gi";
import { GiTeamIdea } from "react-icons/gi";
import { FaMobile } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";

import { ButtonPrimary } from "./components/Buttons";
import { ServiceCard } from "./components/Cards";

const serviceCardData = [
  {
    icon: GiTeamIdea,
    heading: "Dedicated Development Team",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: FaMobile,
    heading: "Mobile App Development Team",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: CgWebsite,
    heading: "Custom Software Development",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
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
              At SPEC Medical, we provide high-quality medical equipment
              designed to support healthcare professionals in delivering
              exceptional patient care. Discover our innovative solutions and
              elevate your medical practice.
            </p>
            <div className="mt-6">
              <Link href="/product">
                <ButtonPrimary
                  text="GET IN TOUCH"
                  className="text-white bg-black-800/30 backdrop-blur-3xl font-semibold text-lg"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:gap-6">
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
        </div>
      </section>

      <section>
        <div className="lg:flex">
          <div className="flex flex-col gap-5 justify-center mt-10 px-10 md:justify-start md:items-start">
            <h2 className="text-center font-semibold text-gray-800 md:text-left">
              Why Choose Us?
            </h2>
            <h1 className="text-center text-3xl sm:4xl font-[700] text-gray-800 leading-8 font-orbitron md:text-left md:text-5xl">
              We Help Startups In The Early Stages.
            </h1>
            <p className="text-center mt-5 md:text-left md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex flex-col gap-6 justify-center items-center md:flex-row">
              <ButtonPrimary text={"Learn More"} />
              <ButtonPrimary text={"Contact Us"} />
            </div>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center md:flex-row">
              <div>
                <AgileIcon className="text-[4rem] text-bgButtonHover" />
              </div>
              <div className="mt-6 flex flex-col justify-center items-center md:justify-start md:items-start ml-5">
                <h1 className="text-[1.4rem] text-gray-800 font-[500] text-center leading-6">
                  Agile Based Decision Making
                </h1>
                <p className="text-center mt-5 md:text-left md:mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#181b20] text-white py-6 flex flex-col justify-center items-center px-8 gap-5 mt-5 md:mx-10 md:rounded-lg md:mt-10">
          <h2 className="font-semibold">Our Services</h2>
          <h1 className="text-[2rem] text-center leading-9 font-bold">
            Delivering The Right Solutions
          </h1>
          <div>
            <p className="text-center mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div>
            {serviceCardData.map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                heading={card.heading}
                para={card.para}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
