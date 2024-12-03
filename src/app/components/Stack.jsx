"use client";
import React from "react";
import { 
  FaReact, 
  FaPhp, 
  FaNode,
  FaDocker 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiDjango, 
  SiFigma
} from 'react-icons/si';

const MyStack = () => {
  const stackIcons = [
    {
      icon: <FaReact className="text-[#61DAFB]" />,
      name: "React"
    },
    {
      icon: <SiNextdotjs className="text-white" />,
      name: "Next.js"
    },
    {
      icon: <SiDjango className="text-[#092E20]" />,
      name: "Django"
    },
    {
      icon: <FaPhp className="text-[#777BB4]" />,
      name: "PHP"
    },
    {
      icon: <FaDocker className="text-[#2496ED]" />,
      name: "Docker"
    },
    {
      icon: <SiFigma className="text-[#F24E1E]" />,
      name: "Figma"
    }
  ];

  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 sm:mt-20">
      <h2 className="text-4xl font-bold text-white mb-4 text-center lg:pt-6 sm:pt-7">My Skills</h2>
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16">
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {stackIcons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform hover:scale-110"
            >
              <div className="text-5xl mb-2">
                {tech.icon}
              </div>
              <p className="text-[#ADB7BE] text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyStack;
