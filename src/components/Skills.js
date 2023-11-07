import React from "react";
import { AiFillHtml5 } from "react-icons/ai";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "Expect",
      count: 90,
    },
    {
      logo: "logo-nodejs",
      level: "Beginner",
      count: 40,
    },
    {
      logo: "logo-react",
      level: "intermediate",
      count: 80,
    },
  ];
  return (
    <div className="py-10  bg-sky-950">
      <div className="py-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-white">
            My<span className="text-green-600"> Skills</span>
          </h1>
          <p className="text-lg text-gray-400 mt-2">My knowledge</p>
        </div>

        <div className="flex justify-center items-center mt-10 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 border-green-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 rounded-xl p-10 text-white hover:text-cyan-600"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}% , #ddd ${skill.count}% )`,
                }}
                className="w-32 h-32 flex justify-center items-center rounded-full"
              >
                <div className="w-28 h-28 flex justify-center items-center rounded-full text-6xl bg-gray-900">
                  <AiFillHtml5 />
                </div>
              </div>
              <p className="text-xl mt-3 flex justify-center">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
