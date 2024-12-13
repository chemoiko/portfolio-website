"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Django Student Management System",
    description: "A  Student Management System built with Django, bootstrap and PostgreSQL. Features include user authentication, and role based authentication. It provides an interface for administrators, teachers, and students.",
    image: "/images/projects/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/Django-student-management-system",
    previewUrl: "https://django-student-management-system-uwvs.onrender.com",
  },
  {
    id: 2,
    title: "Nextjs Carhub Application",
    description: "A car marketplace application using Next.js that allows users to select vehicle manufacturers, brands, and fuel types. The application integrates with an API to retrieve real-time data, providing users with an intuitive experience for browsing and filtering vehicles.",
    image: "/images/projects/car.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/Car-Showcase-Next.js",
    previewUrl: "https://car-showcase-next-js-iota.vercel.app/",
  },
  {
    id: 3,
    title: "Marketing Manager App with Django & Next.js ",
    description: "A platform that enables users to create and view marketing campaigns. Built with Next.js for frontend and Django backend for the backend",
    image: "/images/projects/market.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/cm-frontend",
    previewUrl: "https://marketing-manager-frontend-87d3b0f06369.herokuapp.com/",
  },
  {
    id: 4,
    title: "React movie website ",
    description: "A  dynamic, user-friendly website built with React, designed for exploring movies to learn core concepts of React. Leveraging the power of an external movie database API (e.g., TMDB API).You can search for and favourite movies that you like",
    image: "/images/projects/movie.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/React-movie-website",
    previewUrl: "https://moviewebsite-phi.vercel.app",
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
    title: "Django E-commerce Application",
    description: " This is designed for managing product listings, shopping carts, customer authentication, and payment processing",
    image: "/images/projects/ecomm.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chemoiko/Django-Ecommerce-Website",
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
