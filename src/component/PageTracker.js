import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}

export default PageTracker;
