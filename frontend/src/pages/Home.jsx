import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Image } from "lucide-react";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Footer from "../components/Footer";

// Responsive Home Page
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Responsive Hero Section */}
      <div
        className="
        bg-gradient-to-br
        from-primary-soft/10
        to-primary-accent/10
        py-12 md:py-24
      "
      >
        <div className="container mx-auto px-4 text-center">
          <h1
            className="
            text-3xl md:text-5xl
            font-bold
            text-neutral-darkest
            mb-4 md:mb-6
          "
          >
            Unleash Your Creativity
          </h1>
          <p
            className="
            text-base md:text-xl
            text-neutral-dark
            max-w-2xl
            mx-auto
            mb-6 md:mb-8
            px-4
          "
          >
            Transform ideas into stunning visuals with AI-powered image
            generation.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 px-4">
            <Link
              to="/discover"
              className="
                bg-primary-soft
                text-white
                px-4 py-2 md:px-6 md:py-3
                rounded-full
                hover:bg-primary-soft/90
                transition-colors
                flex items-center
                justify-center
              "
            >
              <Image className="mr-2" size={16} />
              Discover Images
            </Link>
            <Link
              to="/generate"
              className="
                bg-primary-accent
                text-white
                px-4 py-2 md:px-6 md:py-3
                rounded-full
                hover:bg-primary-accent/90
                transition-colors
                flex items-center
                justify-center
              "
            >
              <Sparkles className="mr-2" size={16} />
              Generate AI Art
            </Link>
          </div>
        </div>
      </div>
      <Categories />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
