import React from "react";
import heroimg from "../assets/images/hero.png";
import { BsInstagram } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Hero = () => {
  return (
    <div
      className="flex  items-center py-10 min-h-screen lg:mx-[60px] lg:flex-row flex-col"
      id="home"
    >
      <div>
        <img
          src={heroimg}
          className="lg:w-[618px] lg:h-[604px]"
          alt="There is no img here"
        />
      </div>
      <div className="lg:ml-10 ">
        <h1 className="lg:text-6xl text-5xl text-teal-500 font-semibold">
          Hello!
        </h1>
        <br />
        <h2 className="text-5xl text-white font-semibold">I am Naimul Islum</h2>
        <br />
        <h3 className="text-3xl font-semibold text-emerald-600">
          Front-End-Developer
        </h3>
        <br />
        <button className="btn-primary font-semibold">Contact Me</button>
        <br />
        <br />
        <div className="flex gap-4">
          <BsInstagram className="text-3xl text-gray-400 hover:text-white hover:cursor-pointer" />
          <SiFacebook className="text-3xl text-gray-400 hover:text-white hover:cursor-pointer" />
          <AiFillLinkedin className="text-3xl text-gray-400 hover:text-white hover:cursor-pointer" />
          <BsTwitter className="text-3xl text-gray-400 hover:text-white hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
