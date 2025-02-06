'use client'

import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled down, hide it when at the top
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", checkScrollPosition);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="backToTop"
      onClick={scrollToTop}
      className={`back-to-top ${showButton ? "show" : ""}`}
      aria-label="Back to top"
    >
      &#8593;
    </button>
  );
};

export default BackToTop;