import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Amazon Clone App",
    description: "A clone of Amazon app with some e-commerce functionality.",
    tech: ["React Native", "Api Integration", "Node.js"],
    // link: "https://yourprojectlink.com",
  },
  {
    title: "To-do App",
    description: "A simple to-do app with CRUD operations and categories.",
    tech: ["React Native", "MongoDB", "Express.js"],
    // link: "https://yourprojectlink.com",
  },
  {
    title: "Calculator App",
    description: "A simple calculator app with basic arithmetic operations.",
    tech: ["React Native"],
    // link: "https://yourprojectlink.com",
  },
  {
    title: "Weather App",
    description: "A real-time weather forecasting app using OpenWeather API.",
    tech: ["React Native", "API Integration"],
    // link: "https://yourprojectlink.com",
  },
];

const Projects = () => {
  return (
    <motion.div 
      className=" mx-auto p-8 bg-white rounded-2xl shadow-lg  "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">My Projects</h2>
      <p className="text-center text-gray-600 mt-2">
        Some of the projects I have built using modern technologies.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <motion.a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-gray-100 p-5 rounded-xl shadow-md transition hover:scale-105 hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
