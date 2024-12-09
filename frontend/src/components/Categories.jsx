import { Palette, Camera, Paintbrush, Rocket, Zap, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Landscapes",
      icon: <Palette size={24} />,
      color: "text-green-600",
      bgColor: "bg-green-100",
      hoverBg: "group-hover:bg-green-200",
      description: "Capture nature's breathtaking beauty",
      totalImages: 1245,
    },
    {
      name: "Portraits",
      icon: <Camera size={24} />,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      hoverBg: "group-hover:bg-blue-200",
      description: "Intimate human expressions",
      totalImages: 987,
    },
    {
      name: "Nature",
      icon: <Leaf size={24} />,
      color: "text-green-600",
      bgColor: "bg-green-100",
      hoverBg: "group-hover:bg-green-200",
      description: "Imaginative & conceptual art",
      totalImages: 678,
    },
    {
      name: "AI Generated",
      icon: <Rocket size={24} />,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      hoverBg: "group-hover:bg-pink-200",
      description: "Cutting-edge algorithmic art",
      totalImages: 456,
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Explore Art Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
              className="
                flex flex-col items-center
                bg-white rounded-xl
                p-5 md:p-6
                shadow-md hover:shadow-xl
                transition-all duration-300
                group
                border border-neutral-100
                hover:scale-105
              "
            >
              <div
                className={`
                  mb-3 md:mb-4 p-3 md:p-4
                  rounded-full
                  ${category.bgColor}
                  ${category.hoverBg}
                  ${category.color}
                  transition-all duration-300
                  flex items-center justify-center
                `}
              >
                {category.icon}
              </div>
              <span className="text-base md:text-lg font-bold text-gray-800 mb-1">
                {category.name}
              </span>
              <p className="text-xs text-gray-500 text-center px-2 mb-2">
                {category.description}
              </p>
              <div className="text-xs text-gray-400 flex items-center">
                <Zap size={12} className="mr-1 text-yellow-500" />
                {category.totalImages} Images
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
