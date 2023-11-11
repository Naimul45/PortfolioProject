import React from "react";

const Navbar = () => {
  const navListItem = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  return (
    <nav className="h-[60px] fixed left-0 right-0">
      <div className="flex justify-between items-center h-[60px]">
        <div>
          <h3 className="text-white lg:text-3xl text-2xl  lg:mx-10 mx-6 font-semibold ">
            NA<span className="text-green-500">IM</span>UL
          </h3>
        </div>

        <div className="lg:flex bg-white h-full rounded-bl-full w-[657px] pl-[40px]  hidden">
          {navListItem?.map((navli) => (
            <ul className="px-6 h-full flex items-center hover:text-green-700 hover:cursor-pointer">
              <a href={navli.link}>
                <li className="text-lg">{navli.name}</li>
              </a>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
