import React from "react";
import { Sparkles, Loader2 } from "lucide-react";

const GenerateInput = ({ prompt, setPrompt, onGenerate, isLoading }) => {
  return (
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
        disabled={isLoading}
      />
      <button
        onClick={onGenerate}
        disabled={isLoading || !prompt.trim()}
        className="
          w-full sm:w-auto bg-primary-soft text-white
          px-4 py-2 rounded-full
          flex items-center justify-center
          hover:bg-primary-soft/30
          transition-colors
          focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={20} />
            Generating...
          </>
        ) : (
          <div className="flex flex-row justify-center items-center gap-2">
            Generate <Sparkles size={20} />
          </div>
        )}
      </button>
    </div>
  );
};

export default GenerateInput;
