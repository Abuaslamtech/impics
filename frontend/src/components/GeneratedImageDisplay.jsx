import React from "react";
import { FaDownload } from "react-icons/fa";

const GeneratedImageDisplay = ({ image }) => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="w-full md:w-1/2 bg-white rounded-2xl overflow-hidden shadow-elegant">
        <div className="w-full h-full ">
          <img src={image} alt="Generated" className=" w-full h-full" />
        </div>
        <div className="p-3 md:p-4 flex items-center justify-between">
          <a
            href={image}
            download="generated-image.png"
            className="
              w-full text-center bg-primary-soft text-white
              px-4 py-2 rounded-full
              flex items-center justify-center
              hover:bg-primary-soft/90
              transition-colors
              space-x-2
            "
          >
            <FaDownload />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeneratedImageDisplay;
