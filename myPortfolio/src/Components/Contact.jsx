import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Send a request to backend when website loads
    axios.get("http://192.168.112.184:5000/start")
      .then(response => console.log("✅ Backend started:", response.data))
      .catch(error => console.error("❌ Backend start error:", error));
  }, []);
  
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log('Send Message button pressed');
      console.log('Data being sent:', data);
      
      const response = await axios.post('https://hk-portfolio-zlvp.onrender.com/api/hire', data);
      
      console.log('Response from server:', response.data);
      alert('Message sent successfully');
      reset();
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
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
      <p className="text-center text-gray-600 mt-2">Feel free to reach out for collaborations or inquiries.</p>

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
          className={`w-full py-3 rounded-lg shadow-md transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          whileHover={!loading ? { scale: 1.05 } : {} }
          whileTap={!loading ? { scale: 0.95 } : {} }
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
