import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GenerateInput from "../components/GenerateInput";
import GeneratedImageDisplay from "../components/GeneratedImageDisplay";

const Generate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");

  const generateImage = async () => {
    if (!prompt.trim()) return;

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
    } catch (err) {
      console.error(err);
      // Optional: Add error handling toast or message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary-background">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-elegant mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-darkest mb-4">
              Generate AI Image
            </h2>
            <GenerateInput
              prompt={prompt}
              setPrompt={setPrompt}
              onGenerate={generateImage}
              isLoading={isLoading}
            />
          </div>

          {image && (
            <div className="flex justify-center">
              <GeneratedImageDisplay image={image} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Generate;
