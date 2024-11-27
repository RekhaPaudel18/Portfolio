import React from "react";
import java from "../../public/java.png";
import php from "../../public/php.png";
import javascript from "../../public/javascript.png";

function Project() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
    },
    {
      id: 2,
      logo: php,
      name: "PHP",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
  ];
  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Project</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] p-2 rounded-full border-2"
                alt={name}
              />
              <div className="text-center">
                <div className="font-bold text-lg sm:text-xl mt-2">{name}</div>
                <p className="text-gray-700 text-sm sm:text-base px-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="mt-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
