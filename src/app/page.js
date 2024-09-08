import { FaUsers as UserIcon } from "react-icons/fa";
import { FaEye as AgileIcon } from "react-icons/fa";
import { GiSteam as TeamIcon } from "react-icons/gi";
import { GiTeamIdea } from "react-icons/gi";
import { FaMobile } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import { ButtonPrimary } from "./components/Buttons";
import { ServiceCard } from "./components/Cards";


const serviceCardData = [{
  icon: GiTeamIdea,
  heading:"Dedicated Development Team",
  para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
},
{
  icon: FaMobile,
  heading:"Mobile App Development Team",
  para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
},
{
  icon: CgWebsite,
  heading:"Custom Software Development",
  para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
},
]


export default function Home() {
  return (
    <>
      <section >

        <div className="bg-black text-white py-12 px-6 ">

          <div className=" md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-[2.8rem] leading-[2.5rem] font-[700] font-orbitron  sm:text-[2.7rem] md:text-[4rem] md:leading-[3.7rem]">Software Development Agency</h1>
              <p className="mt-10 font-inter md:text-[1.2rem]" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
              <div className="mt-10">
                <ButtonPrimary text={"Get In Touch"} />
              </div>
            </div>
            {/* <div>
              other content
            </div> */}

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
              <p>Arround The World</p>
            </div>

          </div>

        </div>

      </section>


      <section>

        <div className="lg:flex ">

          <div className="flex flex-col gap-5 justify-center mt-10 px-10 md:justify-start md:items-start">
            <h2 className="text-center font-semibold text-gray-800 md:text-left">Why Choose Us?</h2>
            <h1 className="text-center text-3xl sm:4xl font-[700] text-gray-800 leading-8 font-orbitron md:text-left md:text-5xl">
              We Helps Startups In The Early Stages.
            </h1>
            <p className="text-center mt-5 md:text-left md:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex flex-col gap-6  justify-center items-center md:flex-row">
              <ButtonPrimary text={"Learn More"} />
              <ButtonPrimary text={"Contact Us"} />
            </div>
          </div>


          <div className="mt-10 flex flex-col justify-center items-center px-6 md:px-14 ">

            <div className="flex flex-col justify-center items-center md:flex-row">

              <div><UserIcon className="text-[4rem] text-bgButtonHover" /></div>
              <div className="mt-6 flex flex-col justify-center items-center md:justify-start md:items-start ml-5">
                <h1 className="text-[1.4rem] text-gray-800 font-[500] text-center leading-6 font-orbitron ">
                  Agile Based Desicion Making
                </h1>
                <p className="text-center mt-5 md:text-left md:mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>

            </div>

            <div className=" mt-10 flex flex-col justify-center items-center md:flex-row ">

              <div><AgileIcon className="text-[4rem] text-bgButtonHover" /></div>
              <div className="mt-6 flex flex-col justify-center items-center md:justify-start md:items-start ml-5">
                <h1 className="text-[1.4rem] text-gray-800 font-[500] text-center leading-6">
                  Agile Based Desicion Making
                </h1>
                <p className="text-center mt-5 md:text-left md:mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>

            </div>

            <div className="mt-10 flex flex-col justify-center items-center md:flex-row">
              <div><TeamIcon className="text-[4rem] text-bgButtonHover" /></div>
              <div className="mt-6 flex flex-col justify-center items-center md:justify-start md:items-start ml-5">
                <h1 className="text-[1.4rem] text-gray-800 font-[500] text-center leading-6">Team Augmentation</h1>
                <p className="text-center mt-5 md:text-left md:mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      <section>
        <div className="bg-[#181b20] text-white py-6 flex flex-col justify-center items-center px-8 gap-5 mt-5 md:mx-10 md:rounded-lg md:mt-10">
          <h2 className="font-semibold text-bgButton">our services</h2>
          <h1 className="text-[2rem] text-center leading-9 font-bold">Delivering The Right Solutions</h1>
          <div>
            <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>

          <div>
            {
              serviceCardData.map((card,index)=>(

                <ServiceCard key={index} icon={card.icon} heading={card.heading} para={card.para} />

              ))
            }
            
          </div>
        </div>
      </section>

      {/* <section>
        <div>
           <h1></h1>
        </div>
      </section> */}



    </>
  );
}
