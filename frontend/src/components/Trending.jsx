const Trending = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const trendingImages = [
    { id: 1, url: "/api/placeholder/300/300", prompt: "Futuristic cityscape" },
    { id: 2, url: "/api/placeholder/300/300", prompt: "Magical forest scene" },
    { id: 3, url: "/api/placeholder/300/300", prompt: "Abstract digital art" },
    { id: 4, url: "/api/placeholder/300/300", prompt: "Underwater world" },
  ];

  return (
    <section className="py-10 md:py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0 text-neutral-darkest">
            Trending Generations
          </h2>
          <div className="flex space-x-2 md:space-x-4 bg-white rounded-full p-1">
            <button
              onClick={() => setActiveTab("recent")}
              className={`
                flex items-center
                px-3 py-2 rounded-full
                text-xs md:text-sm
                transition-colors
                ${
                  activeTab === "recent"
                    ? "bg-primary-soft text-white"
                    : "text-neutral-dark hover:bg-neutral-light"
                }
              `}
            >
              <TrendingUp size={14} className="mr-1 md:mr-2" />
              Recent
            </button>
            <button
              onClick={() => setActiveTab("popular")}
              className={`
                flex items-center
                px-3 py-2 rounded-full
                text-xs md:text-sm
                transition-colors
                ${
                  activeTab === "popular"
                    ? "bg-primary-accent text-white"
                    : "text-neutral-dark hover:bg-neutral-light"
                }
              `}
            >
              <Star size={14} className="mr-1 md:mr-2" />
              Popular
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trendingImages.map((image) => (
            <div
              key={image.id}
              className="
                bg-white
                rounded-lg md:rounded-xl
                overflow-hidden
                shadow-sm
                hover:shadow-md
                transition-all
                group
              "
            >
              <img
                src={image.url}
                alt={image.prompt}
                className="
                  w-full h-32 md:h-48
                  object-cover
                  group-hover:scale-105
                  transition-transform
                "
              />
              <div className="p-2 md:p-4">
                <p className="text-xs md:text-sm text-neutral-dark truncate">
                  {image.prompt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Trending;
