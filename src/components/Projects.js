import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import person_project from "../assets/images/project_person1.png";
const Projects = () => {
  const projects = [
    {
      image: project2,
      websiteName: "Job search Web app",
      githubLink: "",
      liveWebDemo: "",
    },
    {
      image: project3,
      websiteName: "Job search Web app",
      githubLink: "",
      liveWebDemo: "",
    },
    {
      image: project4,
      websiteName: "Job search Web app",
      githubLink: "",
      liveWebDemo: "",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-white">
          My <span className="text-green-600">Projects</span>
        </h1>
        <p className="mt-2 text-lg text-gray-400">My awesome works</p>
      </div>

      <div className="lg:mt-16 mt-8 flex lg:justify-center">
        <Slider {...settings} className="lg:w-[750px] h-[320px] w-[360px]">
          {projects?.map((project) => (
            <div className="lg:w-[750px] h-[320px] w-[360px] bg-gray-800 rounded-lg p-5 ">
              <div>
                <img src={project.image} alt="" className="w-full rounded-lg" />
              </div>
              <h2 className="text-xl font-base mt-3 text-white">
                {project.websiteName}
              </h2>

              <div className="flex gap-4 mt-3">
                <div className="bg-gray-900 text-sky-700 px-5 py-1 rounded-lg hover:cursor-pointer hover:bg-sky-800 hover:text-white">
                  Github
                </div>
                <div className="bg-gray-900 text-sky-700 px-5 py-1 rounded-lg hover:cursor-pointer hover:bg-sky-800 hover:text-white">
                  Live Demo
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <img
          src={person_project}
          alt=""
          className="w-[380px] h-[450px] mt-[-65px] ml-10 lg:block hidden"
        />
      </div>
    </div>
  );
};

export default Projects;
