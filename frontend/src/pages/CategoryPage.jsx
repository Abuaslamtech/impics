import { useParams } from "react-router-dom";
import useImageExtraction from "../hooks/useImageExtraction";
import Header from "../components/Header";
import SearchImage from "../components/SearchImage";
import Pagination from "../components/Pagination";
import Images from "../components/Images";
import Footer from "../components/Footer";
import { useEffect, useMemo } from "react";

function CategoryPage() {
  const { images, isLoading, page, search, nextPage, prevPage } =
    useImageExtraction();
  const { categoryName } = useParams();

  // Memoized formatting to prevent unnecessary re-renders
  const formattedCategoryName = useMemo(
    () => categoryName.replaceAll(" ", "-").toLowerCase(),
    [categoryName]
  );

  // Memoized display name for consistent formatting
  const displayCategoryName = useMemo(
    () => categoryName.replaceAll("-", " "),
    [categoryName]
  );

  useEffect(() => {
    search(formattedCategoryName);
  }, []);

  return (
    <div className="min-h-screen bg-primary-background">
      <Header onSearch={search} />
      <div className="relative">
        <div className="w-[90%] flex flex-row justify-around items-center m-auto mt-6">
          <SearchImage onSearch={search} className="w-[80%] md:hidden" />
        </div>
      </div>
      <h1 className="text-center text-2xl font-semibold mt-4 text-neutral-dark/90 capitalize">
        Category: {displayCategoryName}
      </h1>
      <div className="flex flex-col justify-center items-center py-2 md:py-4">
        <Pagination
          onSearch={search}
          onNext={nextPage}
          onPrev={prevPage}
          currentPage={page}
        />
        {images.length === 0 && !isLoading ? (
          <div className="text-center text-gray-500">
            No images found in this category
          </div>
        ) : (
          <Images images={images} isLoading={isLoading} />
        )}
        {images.length > 0 && (
          <Pagination
            onSearch={search}
            onNext={nextPage}
            onPrev={prevPage}
            currentPage={page}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
export default CategoryPage;
