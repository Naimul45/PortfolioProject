import React from "react";
import aboutimg from "../assets/images/about.png";
import imgpdf from "../assets/Code_a_program.pdf";

const About = () => {
  return (
    <div className="py-8 min-h-screen " id="about">
      <div>
        <h1 className="text-center text-4xl font-semibold text-white">
          About <span className="text-green-600">Me</span>
        </h1>
        <h6 className="text-lg font-base text-center text-gray-400 mt-1">
          My Introduction
        </h6>
      </div>

      <div className="flex lg:flex-row flex-col-reverse mx-[100px] items-center">
        <div className="lg:w-[664px] w-[264px] lg:mx-0 mx-auto">
          <p className="text-base text-white text-justify leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            provident optio, doloremque animi asperiores doloribus ad sunt
            maiores iste sapiente dolores eius.maiores iste sapiente dolores
            eius.maiores iste sapiente dolores eius.iste sapiente dolores eius.
          </p>
          <div className="flex mt-10">
            <div>
              <h1 className="text-4xl text-white text-center font-bold">
                01<span className="text-green-600">+</span>
              </h1>
              <p className="text-lg text-white">Years experience</p>
            </div>
            <div className="ml-8">
              <h1 className="text-4xl text-white text-center font-bold">
                04<span className="text-green-600">+</span>
              </h1>
              <p className="text-lg text-white">Completed Projects</p>
            </div>
            <div className="ml-8">
              <h1 className="text-4xl text-white text-center font-bold">
                00<span className="text-green-600">+</span>
              </h1>
              <p className="text-lg text-white">Companies Work</p>
            </div>
          </div>

          <a href={imgpdf} download className="mt-10">
            <button className="btn-primary mt-10">Download CV</button>
          </a>
        </div>
        <div className="lg:w-96 w-[256px] h-full lg:ml-16 lg:mx-0 mx-auto relative aboutImg">
          <img
            src={aboutimg}
            alt=""
            className="lg:w-full h-full bg-cyan-600 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
