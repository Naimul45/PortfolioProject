import React from "react";
import hireme from "../assets/images/hireMe.png";

const Hireme = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-white">
          Hire<span className="text-green-600"> Me</span>
        </h1>
        <p className="text-lg text-gray-400 mt-2">Do you have any work ?</p>
      </div>

      <div className="bg-gray-700 rounded-xl lg:w-[1000px] lg:min-h-[24rem]  mx-auto flex lg:flex-row flex-col-reverse relative p-10 mt-16 w-full">
        <div className="lg:w-[540px] h-[304px]  flex items-center">
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Do you want any work from me?
            </h1>
            <p className="text-base text-white my-5 text-justify leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              dolore adipisci quidem hic deserunt minus distinctio non voluptate
              eaque. Quas exercitationem minus voluptatum? Atque asperiores
              iusto incidunt perspiciatis tempora est!
            </p>
            <button className="btn-primary mt-2">Say Hello</button>
          </div>
        </div>

        <img
          src={hireme}
          alt=""
          className="lg:absolute lg:mb-0 mb-10 bottom-0  -right-3 lg:w-[435] lg:h-[512px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hireme;
