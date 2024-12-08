import { Sparkles, Image, Palette, Grid } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Landscapes",
      icon: <Palette size={20} />,
      color: "text-primary-soft",
    },
    {
      name: "Portraits",
      icon: <Image size={20} />,
      color: "text-primary-accent",
    },
    { name: "Abstract", icon: <Grid size={20} />, color: "text-accent-warm" },
    {
      name: "AI Generated",
      icon: <Sparkles size={20} />,
      color: "text-accent-cool",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-neutral-darkest">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
              className="
                flex flex-col items-center
                bg-white rounded-lg md:rounded-xl
                p-3 md:p-6
                shadow-sm hover:shadow-md
                transition-all
                group
              "
            >
              <div
                className={`
                mb-2 md:mb-4 p-2 md:p-4
                rounded-full
                bg-neutral-light
                group-hover:${category.color}
                transition-colors
              `}
              >
                {category.icon}
              </div>
              <span className="text-sm md:text-base font-semibold text-neutral-dark">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Categories;
