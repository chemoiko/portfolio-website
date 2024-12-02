"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Carhub Application",
    description: "A car marketplace application using Next.js that allows users to select vehicle manufacturers, brands, and fuel types. The application integrates with an API to retrieve real-time data, providing users with an intuitive experience for browsing and filtering vehicles.",
    image: "/images/projects/car.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/Car-Showcase-Next.js",
    previewUrl: "https://car-showcase-next-js-iota.vercel.app/",
  },
  {
    id: 2,
    title: "Marketing Manager App with Django & Next.js ",
    description: "A platform that enables users to create and view marketing campaigns. Built with Next.js for frontend and Django backend for the backend",
    image: "/images/projects/market.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/cm-frontend",
    previewUrl: "https://marketing-manager-frontend-87d3b0f06369.herokuapp.com/",
  },
  {
    id: 3,
    title: "Django E-commerce Application",
    description: " This is designed for managing product listings, shopping carts, customer authentication, and payment processing",
    image: "/images/projects/ecomm.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/Django-Ecommerce-Website",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Nextjs Portfolio Website",
    description: "A modern and responsive portfolio website built with Next.js 13, showcasing my professional journey and technical expertise.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/chemoiko/React-Django-To-Do-App",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Django Dog API",
    description: "This project provides a simple Django REST API for managing dogs and their breeds. The API allows users to create, retrieve, update, and delete records for dogs and breeds. ",
    image: "/images/projects/dogs.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/Dog-Api",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Django Blog App",
    description: "This application allows users to create, edit, delete, and view blog posts. The app is built using Django.",
    image: "/images/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/Django-Blog-App",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
