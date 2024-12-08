import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ onNext, onPrev, currentPage }) => {
  return (
    <div className="n flex items-center justify-center space-x-4 my-8">
      <button
        disabled={currentPage === 1}
        className={`
          flex items-center px-4 py-2 rounded-full
          text-neutral-dark hover:text-primary-soft
          disabled:text-neutral-light disabled:cursor-not-allowed
          transition-colors
        `}
        onClick={onPrev}
      >
        <ChevronLeft size={18} className="mr-2" />
        Prev
      </button>

      <div className="flex items-center space-x-2">
        {currentPage > 2 && (
          <div className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-dark hover:bg-neutral-light cursor-pointer">
            1
          </div>
        )}
        {currentPage > 1 && (
          <div className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-dark hover:bg-neutral-light cursor-pointer">
            {currentPage - 1}
          </div>
        )}
        <div className="w-8 h-8 bg-primary-soft text-white flex items-center justify-center rounded-full">
          {currentPage}
        </div>
        {currentPage < 100 && (
          <div className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-dark hover:bg-neutral-light cursor-pointer">
            {currentPage + 1}
          </div>
        )}
        {currentPage < 99 && (
          <div className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-dark hover:bg-neutral-light cursor-pointer">
            100
          </div>
        )}
      </div>

      <button
        disabled={currentPage === 100}
        className={`
          flex items-center px-4 py-2 rounded-full
          text-neutral-dark hover:text-primary-accent
          disabled:text-neutral-light disabled:cursor-not-allowed
          transition-colors
        `}
        onClick={onNext}
      >
        Next
        <ChevronRight size={18} className="ml-2" />
      </button>
    </div>
  );
};

export default Pagination;
