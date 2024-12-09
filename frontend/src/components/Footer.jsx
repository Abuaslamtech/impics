import React from "react";
import { MdMonochromePhotos } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-darkest text-neutral-light">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img src={logo} className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold">ImPics</h1>
              <p className="text-sm text-neutral-light/50">
                Unleash your creativity with AI-powered image generation.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="https://wa.me/+2347035974746"
              className="flex items-center space-x-2 hover:text-primary-soft transition-colors"
            >
              <IoLogoWhatsapp size={18} />
              <span>+2347035974746</span>
            </a>

            <a
              href="https://www.facebook.com/Abdullahiabuaslam"
              className="flex items-center space-x-2 hover:text-primary-soft transition-colors"
            >
              <BsFacebook size={18} />
              <span>Abdullahiabuaslam</span>
            </a>

            <a
              href="https://twitter.com/abdul_abuaslam"
              className="flex items-center space-x-2 hover:text-primary-accent transition-colors"
            >
              <AiFillTwitterCircle size={18} />
              <span>@abdul_abuaslam</span>
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-dark mt-8 pt-4 text-center text-sm">
          <div>
            Built by{" "}
            <a
              href="https://abuaslamtech.com"
              className="font-medium hover:text-primary-soft transition-colors"
            >
              Abuaslam Tech Lab (ATL)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
