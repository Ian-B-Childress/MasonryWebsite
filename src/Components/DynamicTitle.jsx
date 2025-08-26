import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Melvin Masonry | Home";
        break;
      case "/projects":
        document.title = "Melvin Masonry | Services";
        break;
      case "/gallery":
        document.title = "Melvin Masonry | Gallery";
        break;
      case "/contact":
        document.title = "Melvin Masonry | Contact";
        break;

      case "/privacy-policy":
        document.title = "Melvin Masonry | Privacy Policy";
        break;
      case "/terms-of-service":
        document.title = "Melvin Masonry | Terms Of Service";
        break;
      default:
        document.title = "404 Not Found";
        break;
    }
  }, [location.pathname]);
  return null;
}
