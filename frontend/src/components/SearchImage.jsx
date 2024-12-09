import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import {
  Mountain,
  User,
  PaletteIcon,
  BrainCircuit,
  Leaf,
  Building2,
  Dog,
  Utensils,
  Plane,
  Shirt,
  Cpu,
  Trophy,
  Briefcase,
  Music,
  HeartPulse,
  Palette,
  Beer,
  Compass,
  LayoutGrid,
  X,
} from "lucide-react";

const SearchImage = ({
  onSearch,
  placeholder = "Search images...",
  className = "",
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  const categories = [
    {
      name: "Landscapes",
      icon: Mountain,
      color: "text-green-800 hover:text-green-900",
    },
    {
      name: "Portraits",
      icon: User,
      color: "text-pink-800 hover:text-pink-900",
    },
    {
      name: "Abstract",
      icon: PaletteIcon,
      color: "text-purple-800 hover:text-purple-900",
    },
    {
      name: "AI-Generated",
      icon: BrainCircuit,
      color: "text-blue-800 hover:text-blue-900",
    },
    {
      name: "Nature",
      icon: Leaf,
      color: "text-emerald-800 hover:text-emerald-900",
    },
    {
      name: "Architecture",
      icon: Building2,
      color: "text-gray-800 hover:text-gray-900",
    },
    {
      name: "Animals",
      icon: Dog,
      color: "text-orange-800 hover:text-orange-900",
    },
    {
      name: "Food",
      icon: Utensils,
      color: "text-yellow-800 hover:text-yellow-900",
    },
    {
      name: "Travel",
      icon: Plane,
      color: "text-sky-800 hover:text-sky-900",
    },
    {
      name: "Fashion",
      icon: Shirt,
      color: "text-rose-800 hover:text-rose-900",
    },
    {
      name: "Technology",
      icon: Cpu,
      color: "text-indigo-800 hover:text-indigo-900",
    },
    {
      name: "Sports",
      icon: Trophy,
      color: "text-red-800 hover:text-red-900",
    },
    {
      name: "Business",
      icon: Briefcase,
      color: "text-slate-800 hover:text-slate-900",
    },
    {
      name: "Music",
      icon: Music,
      color: "text-violet-800 hover:text-violet-900",
    },
    {
      name: "Health",
      icon: HeartPulse,
      color: "text-teal-800 hover:text-teal-900",
    },
    {
      name: "Art",
      icon: Palette,
      color: "text-fuchsia-800 hover:text-fuchsia-900",
    },
    {
      name: "Nightlife",
      icon: Beer,
      color: "text-cyan-800 hover:text-cyan-900",
    },
    {
      name: "Adventure",
      icon: Compass,
      color: "text-amber-800 hover:text-amber-900",
    },
  ];

  const handleCategoryToggle = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  const handleCategorySelect = (category) => {
    const formattedCategory = category.replaceAll(" ", "-").toLowerCase();
    navigate(`/category/${formattedCategory}`);
    setIsCategoriesVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-2 w-full"
      >
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full
              py-3 md:py-2
              px-4
              pl-10
              text-sm
              border
              border-neutral-light
              rounded-full
              focus:ring-2
              focus:ring-primary-accent/50
              focus:outline-none
            "
          />
          <Search
            className="
              absolute
              left-3
              top-1/2
              transform
              -translate-y-1/2
              text-neutral-dark
              opacity-50
            "
            size={20}
          />
        </div>
        <div
          className="
            flex
            justify-center
            items-center
            shadow-elegant
            p-2
            rounded-full
            cursor-pointer
            hover:bg-gray-100
            transition-colors
          "
          onClick={handleCategoryToggle}
        >
          {isCategoriesVisible ? <X size={20} /> : <LayoutGrid size={20} />}
        </div>
      </form>

      {isCategoriesVisible && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/50
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setIsCategoriesVisible(false)}
        >
          <div
            className="
              bg-white
              shadow-lg
              rounded-lg
              p-4
              w-full
              max-w-md
              max-h-[80vh]
              overflow-y-auto
              relative
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="
                absolute
                top-2
                right-2
                p-2
                rounded-full
                hover:bg-gray-100
              "
              onClick={() => setIsCategoriesVisible(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Select Category
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {categories.map(({ name, icon: Icon, color }, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleCategorySelect(name)}
                  className={`
      py-3
      px-2
      rounded-lg
      text-sm
      flex
      flex-col
      items-center
      justify-center
      transition-colors
      space-y-2
        bg-gray-100
                    hover:bg-gray-200
      ${color}
    `}
                >
                  <Icon size={24} />
                  <span className="text-xs text-center">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchImage;
