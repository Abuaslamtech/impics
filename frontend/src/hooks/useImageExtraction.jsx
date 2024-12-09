import { useState, useEffect } from "react";
import axios from "axios";

const accessKey = "Bpe7jTS9WHRy6H7EzCHeycdKQ2nXWiadkKYwDszJMXA";

const useImageExtraction = (initialQuery = "", initialPage = 1) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    fetchCurrentImages();
  }, [page, query]);

  const fetchCurrentImages = () => {
    setIsLoading(true);
    const apiUrl =
      query.trim() === ""
        ? `https://api.unsplash.com/photos?page=${page}&per_page=12`
        : `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=12`;

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      })
      .then((res) => {
        setImages(query.trim() === "" ? res.data : res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  const search = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return {
    images,
    isLoading,
    query,
    page,
    search,
    nextPage,
    prevPage,
  };
};

export default useImageExtraction;
