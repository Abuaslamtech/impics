import { useState } from "react";
import Header from "../components/Header";
import SkeletonCard from "../components/SkeletonCard";
import { FaDownload, FaSpinner } from "react-icons/fa";
import axios from "axios";
import Footer from "../components/Footer";

const Generate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("A cat");
  const [image, setImage] = useState("");

  const generateImage = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("https://impics.onrender.com/generate", {
        prompt,
      });

      // Convert base64 to Blob
      const byteCharacters = atob(res.data.image);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/png" });

      // Create object URL
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-background">
      <Header />
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-elegant mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-neutral-darkest mb-4">
            Generate AI Image
          </h2>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="
                w-full sm:flex-1 py-2 px-4 border border-neutral-light
                rounded-full focus:ring-2 focus:ring-primary-accent/50
                focus:outline-none text-sm
              "
              placeholder="Enter a prompt to generate an image"
            />
            <button
              onClick={generateImage}
              className="
                w-full sm:w-auto bg-primary-soft text-white
                px-4 py-2 rounded-full
                flex items-center justify-center
                hover:bg-primary-soft/90
                transition-colors
                focus:outline-none
              "
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  Generate
                  <FaSpinner className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>

        {image && (
          <div className="flex justify-center items-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-elegant group">
              <div className="relative pt-[56.25%]">
                <img
                  src={image}
                  alt="Generated"
                  className="absolute top-0 left-0 w-full h-full object-cover
                    group-hover:scale-105 transition-transform duration-300"
                />
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
                  "
                >
                  <FaDownload className="mr-2" />
                  Download
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Generate;
