import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.png";
import javascript from "../../public/javascript.png";
import java from "../../public/java.png";

function Skill() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: java,
      name: "Java",
    },
  ];

  return (
    <div
      name="Skill"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="text-sm md:text-base mb-6">
          Here you can see my skills. One of the fascinations of the computer
          world is the momentary changes of technologies, but I try to update
          my knowledge every day and experience new technologies.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 rounded-lg w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[200px] md:h-[200px] shadow-md p-2 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[60px] sm:w-[80px] md:w-[150px]" alt={name} />
              <div className="mt-2 text-sm md:text-base">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
