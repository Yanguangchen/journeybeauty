import React from "react";
import "./splice.css";

function SpliceElement() {
  return (
    <main>
      <div>
        <div className="spline-container splineContainer">
          <div className="darkmodeContainer"></div>
          <spline-viewer
            loading-anim-type="spinner-big-dark"
            url="https://prod.spline.design/Co8ycXF6i3tyyqgM/scene.splinecode"
          ></spline-viewer>
        </div>
      </div>
    </main>
  );
}

export default SpliceElement;
