import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope,  } from "react-icons/fa";
import himanshu from "../assets/himanshu.jpg";
import DownloadCV from "./DownloadCV";

const Profile = () => {
  return (
    <motion.div 
      className="mt-20 mx-auto p-8 bg-white rounded-2xl shadow-lg  flex flex-col md:flex-row items-center md:items-start"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Column - Profile Picture */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src={himanshu} 
          alt="Himanshu Kasoudhan" 
          className="w-80 h-120 rounded-2xl border-4 border-gray-300 shadow-lg"
        />
      </motion.div>

      {/* Right Column - Details */}
      <div className="w-full md:w-1/2 p-6 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800">Himanshu Kasoudhan</h1>
        <p className="text-lg text-gray-600 mt-2">
          🚀 Mobile App Developer |  Full Stack Developer
        </p>

        {/* About Me */} 
        <motion.p 
          className="mt-4 text-gray-700 text-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I’m a <span className="font-bold">passionate developer</span> focused on building high-performance mobile apps and scalable web solutions. Currently, I’m working on a <span className="font-bold">University Resource Sharing Platform</span> I’m actively seeking <span className="font-bold">internship and job opportunities</span> where I can contribute my expertise in <span className="font-bold">React Native, JavaScript, and web development</span> while continuing to learn and grow. My goal is to develop impactful solutions that enhance user experience and efficiency.  

Let’s connect and build something great together! 🚀 </motion.p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <motion.a href="https://linkedin.com/in/himanshu-kasoudhan-538a93290" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 text-2xl hover:text-blue-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a href="https://github.com/himanshuk-123" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 text-2xl hover:text-black transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          
          <motion.a href="mailto:2023bcamafshimanshu14272@poornima.edu.in"
            className="text-gray-600 text-2xl hover:text-red-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Resume Download Button */}
        <DownloadCV/>
      </div>
    </motion.div>
  );
};

export default Profile;
