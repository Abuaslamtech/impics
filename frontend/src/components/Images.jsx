import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import SkeletonCard from "./SkeletonCard";

const Images = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(images) && images.length !== 0) {
      setIsLoading(false);
    }
  }, [images]);

  return (
    <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : images.map((image) => <ImageCard key={image.id} image={image} />)}
    </div>
  );
};

export default Images;
