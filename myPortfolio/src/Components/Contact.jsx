import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log('Send Message button pressed');
      await axios.post('/hire',data );
      console.log(data);
      alert('Message sent successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      className="max-w-xl my-7 mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">Contact Me</h2>
      <p className="text-center text-gray-600 mt-2">
        Feel free to reach out for collaborations or inquiries.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.05 }}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}

        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.05 }}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
          })}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <motion.textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          whileFocus={{ scale: 1.05 }}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>

      <div className="flex justify-center gap-6 mt-6">
        <motion.a
          href="https://linkedin.com/in/himanshu-kasoudhan-538a93290"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-3xl hover:text-blue-500 transition"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/himanshuk-123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-3xl hover:text-black transition"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="mailto:2023bcamafshimanshu14272@poornima.edu.in"
          className="text-gray-600 text-3xl hover:text-red-500 transition"
          whileHover={{ scale: 1.2 }}
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="tel:+918468087211"
          className="text-gray-600 text-3xl hover:text-green-500 transition"
          whileHover={{ scale: 1.2 }}
        >
          <FaPhone />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
