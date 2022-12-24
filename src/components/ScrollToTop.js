import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";

export default function ScrollToTop() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-1 justify-center lg:justify-end animate-bounce pt-6 lg:pt-0">
      <FiArrowUpCircle
        className="hover:text-gray-500 hover:cursor-pointer"
        size="3em"
        onClick={goToTop}
      />
    </div>
  );
}
