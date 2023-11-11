import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="lg:text-4xl text-3xl font-semibold text-white">
          Contact
        </h1>
        <p className="mt-2 text-lg text-gray-400">Get in touch</p>
      </div>

      <div>
        <form
          action=""
          className=" bg-sky-950 p-6 lg:w-[1040px] mx-auto rounded-lg  mt-10"
        >
          <div className="flex lg:flex-row flex-col">
            <div>
              <input
                type="text"
                name=""
                id=""
                className="lg:w-[655px] w-full h-[48px] rounded-lg bg-gray-900 text-white px-[15px] lg:text-lg text-base"
                placeholder="Your Name"
              />
              <br />
              <br />
              <input
                type="email"
                name=""
                id=""
                className="lg:w-[655px] w-full h-[48px] rounded-lg bg-gray-900 text-white lg:text-lg text-base px-[15px]"
                placeholder="Your Email Address"
              />
              <br />
              <br />
              <textarea
                name=""
                id=""
                className="lg:w-[655px] w-full lg:h-[264px] rounded-lg bg-gray-900 text-white lg:text-lg text-base px-[15px] py-[15px]"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="pl-5">
              <div className="flex items-center">
                <div className="lg:w-[56px] w-[40px] lg:h-[56px] h-[40px] rounded-full bg-sky-700  flex justify-center items-center">
                  <AiOutlineMail className="lg:w-[30px] w-[30px]  lg:h-[30px] h-[20px] text-white" />
                </div>
                <h4 className="text-lg text-white ml-4">
                  naimulnadim0@gmail.com
                </h4>
              </div>
              <div className="flex items-center mt-4">
                <div className="lg:w-[56px] w-[40px] lg:h-[56px] h-[40px] rounded-full bg-sky-700  flex justify-center items-center">
                  <BsWhatsapp className="lg:w-[30px] w-[30px] lg:h-[30px] h-[20px]  text-white" />
                </div>
                <h4 className="text-lg text-white ml-4">123 456 789</h4>
              </div>
              <div className="flex items-center mt-4">
                <div className="lg:w-[56px] w-[40px] lg:h-[56px] h-[40px] rounded-full bg-sky-700  flex justify-center items-center">
                  <GrLocation className="lg:w-[30px] w-[30px] lg:h-[30px] h-[20px] text-white" />
                </div>
                <h4 className="text-lg text-white ml-4">demo location</h4>
              </div>
            </div>
          </div>

          <button className="btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
