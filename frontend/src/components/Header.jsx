// Header Component
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Search, Menu, X, Image, Sparkles, Grid } from "lucide-react";

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setIsMenuOpen(false)
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary-background shadow-elegant">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="ImPics Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold text-neutral-darkest tracking-tight">
              ImPics
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-grow mx-8 max-w-xl"
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search images, AI generations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 border border-neutral-light rounded-full focus:ring-2 focus:ring-primary-accent/50 focus:outline-none text-sm pl-10"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-dark opacity-50"
              size={20}
            />
          </div>
        </form>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            to="/discover"
            className="flex items-center text-neutral-dark hover:text-primary-soft transition-colors text-sm"
          >
            <Image className="mr-2" size={16} />
            Discover
          </Link>
          <Link
            to="/generate"
            className="flex items-center text-neutral-dark hover:text-primary-accent transition-colors text-sm"
          >
            <Sparkles className="mr-2" size={16} />
            Generate
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-60">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neutral-darkest focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary-background flex flex-col items-center justify-start pt-20 space-y-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute right-6 top-6 text-neutral-light bg-red-600 p-2 rounded focus:outline-none"
          >
            <X size={24} />
          </button>
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="w-10/12 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search images, AI generations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 border border-neutral-light rounded-full focus:ring-2 focus:ring-primary-accent/50 focus:outline-none text-sm pl-10"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-dark opacity-50"
                size={20}
              />
            </div>
          </form>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-baseline space-y-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center text-neutral-darkest hover:text-primary-soft transition-colors text-lg font-medium"
            >
              <Grid className="mr-3" size={20} />
              Home
            </Link>
            <Link
              to="/discover"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center text-neutral-darkest hover:text-primary-soft transition-colors text-lg font-medium"
            >
              <Image className="mr-3" size={20} />
              Discover
            </Link>
            <Link
              to="/generate"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center text-neutral-darkest hover:text-primary-accent transition-colors text-lg font-medium"
            >
              <Sparkles className="mr-3" size={20} />
              Generate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;