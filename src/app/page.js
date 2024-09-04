import { ButtonPrimary } from "./components/Buttons";



export default function Home() {
  return (
    <>
      <section >

        <div className="bg-black text-white py-4 px-6 ">

          <div className=" md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-[2.8rem] leading-[2.5rem] font-[700] font-orbitron  sm:text-[2.7rem] md:text-[4rem] md:leading-[3.7rem]">Software Development Agency</h1>
              <p className="mt-10 font-inter md:text-[1.2rem]" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
              <div className="mt-10">
                <ButtonPrimary text={"Get In Touch"} />
              </div>
            </div>
            <div>
              other content
            </div>

          </div>

          <div className="mt-10 flex flex-col gap-4">
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
    </>
  );
}
