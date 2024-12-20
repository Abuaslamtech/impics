import Images from "../components/Images";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import SearchImage from "../components/SearchImage";
import useImageExtraction from "../hooks/useImageExtraction";

function Discover() {
  const { images, isLoading, page, search, nextPage, prevPage } =
    useImageExtraction();

  return (
    <div className="min-h-screen bg-primary-background">
      <Header onSearch={search} />
      <div className="md:hidden w-[80%] flex flex-col justify-center items-center m-auto mt-6">
        <SearchImage onSearch={search} className="w-[80%]" />
      </div>
      <div className="flex flex-col justify-center items-center py-2 md:py-12">
        <Pagination
          onSearch={search}
          onNext={nextPage}
          onPrev={prevPage}
          currentPage={page}
        />
        {images.length === 0 && !isLoading ? (
          <div className="text-center text-gray-500">No images found</div>
        ) : (
          <Images images={images} isLoading={isLoading} />
        )}
        <Pagination
          onSearch={search}
          onNext={nextPage}
          onPrev={prevPage}
          currentPage={page}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Discover;
