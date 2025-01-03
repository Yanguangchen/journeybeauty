import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

function SplineElement() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate defer by loading the scene after the component mounts
    setIsLoaded(true);
  }, []);

  return (
    <>
      <main>
        {isLoaded && (
          <spline-viewer
            loading-anim-type="spinner-big-dark"
            url="https://prod.spline.design/Co8ycXF6i3tyyqgM/scene.splinecode"
          ></spline-viewer>
        )}
      </main>
    </>
  );
}

export default SplineElement;
