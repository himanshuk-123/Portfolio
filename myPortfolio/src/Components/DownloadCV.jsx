import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadCV = () => {
  return (
    <a
      href="/cv.pdf"  // Path to the CV file in the public folder
      download="Himanshu_Resume.pdf" // The downloaded file name
      className="mt-6 block mx-auto text-center bg-blue-600 px-6 py-2 
                 rounded-lg font-semibold shadow-lg text-white 
                 hover:bg-blue-700 transition w-52"
    >
      <FaDownload className="inline mr-2" /> Download CV
    </a>
  );
};

export default DownloadCV;
