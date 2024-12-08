import { Zap, Rocket, Star } from "lucide-react";
const Features = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Fast AI Generation",
      description: "Create stunning images in seconds with powerful AI.",
    },
    {
      icon: <Star size={24} />,
      title: "High Quality",
      description: "Professional-grade images with incredible detail.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Unlimited Creativity",
      description: "Generate anything you can imagine.",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-neutral-darkest">
          Why ImPics?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center
                text-center
                p-4 md:p-6
                rounded-xl
                hover:bg-neutral-light
                transition-colors
                group
              "
            >
              <div
                className="
                mb-3 md:mb-4 p-3
                bg-primary-soft/10
                rounded-full
                text-primary-accent
                group-hover:bg-primary-soft/20
              "
              >
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-neutral-darkest">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
