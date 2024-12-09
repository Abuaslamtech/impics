import { useState, useEffect } from "react";
import axios from "axios";

const accessKey = "Bpe7jTS9WHRy6H7EzCHeycdKQ2nXWiadkKYwDszJMXA";

const useImageExtraction = (initialQuery = "", initialPage = 1) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);

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
        // Consistent handling of image results
        const fetchedImages = query.trim() === "" ? res.data : res.data.results;

        setImages(fetchedImages);

        // Set total pages for search results
        if (query.trim() !== "") {
          // Use Math.ceil to ensure we capture all pages
          const totalSearchPages = Math.ceil(res.data.total / 12);
          setTotalPages(totalSearchPages);
        } else {
          // For random images, set to a high number to allow continuous scrolling
          setTotalPages(100);
        }

        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching images:", err);
        setIsLoading(false);
        setImages([]);
        setTotalPages(0);
      });
  };
  console.log(totalPages);
  const search = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1); // Reset to the first page when a new search is initiated
  };

  const nextPage = () => {
    // Ensure next page works for both random and search results
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    // Ensure previous page doesn't go below 1
    setPage((prev) => Math.max(prev - 1, 1));
  };

  return {
    images,
    isLoading,
    query,
    page,
    totalPages,
    search,
    nextPage,
    prevPage,
  };
};

export default useImageExtraction;
