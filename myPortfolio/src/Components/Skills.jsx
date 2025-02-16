import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase,FaGit, FaGithub, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiRedux ,SiC } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "React Native", icon: <FaReact className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//   { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
//   { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "SQL Databases", icon: <FaDatabase className="text-gray-600" /> },
  { name: "Git", icon: <FaGit className="text-orange-500" /> },
{ name: "GitHub", icon: <FaGithub className="text-black" /> },
{ name: "C", icon: <SiC className="text-blue-600" /> },
{ name: "Java", icon: <FaJava className="text-red-600" /> },

];

const Skills = () => {
  return (
    <motion.div 
      className=" mx-auto p-8 bg-white rounded-2xl shadow-lg "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">My Skills</h2>
      <p className="text-center text-gray-600 mt-2">
        Technologies I work with to build web & mobile applications
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-md transition hover:scale-105 hover:bg-gray-200"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="mt-2 text-gray-700 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
