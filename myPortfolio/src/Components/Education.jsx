import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Computer Application (BCA)",
    university: "Poornima University",
    year: "2023 - 2026",
    description: "Specialized in Computer Science & Engineering. Focused on software development, data structures, and algorithms.",
  },
  {
    id: 2,
    degree: "Senior Secondary (Class 12)",
    university: "City Montessori Inter College",
    year: "2021 - 2023",
    description: "Studied Science with Mathematics. Developed a strong foundation in programming and logical thinking.",
  },
  {
    id: 3,
    degree: "Secondary Education (Class 10)",
    university: "City Montessori Inter College",
    year: "2018 - 2020",
    description: "Completed schooling with a strong academic record in Mathematics and Science.",
  },
];

const Education = () => {
  return (
    <motion.div 
      className=" mx-auto p-8 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">Education</h2>
      <p className="text-center text-gray-600 mt-2">
        My academic background in computer science and technology.
      </p>

      <div className="mt-8 space-y-6">
        {educationData.map((edu) => (
          <motion.div 
            key={edu.id}
            className="relative bg-gray-50 p-6 border-l-4 border-blue-500 shadow-md rounded-lg hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
            <p className="text-gray-700 font-medium">{edu.university}</p>
            <p className="text-gray-500">{edu.year}</p>
            <p className="mt-2 text-gray-600">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
