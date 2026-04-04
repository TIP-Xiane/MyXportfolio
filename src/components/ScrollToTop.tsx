// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // avoid fighting hash-based intra-page navigation
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;