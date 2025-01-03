import React, { Suspense, lazy } from "react";
import "./splice.css";

// Lazy load the spline-viewer component
const SplineViewer = lazy(() => import('./SplineViewer'));

function SpliceElement() {
  return (
    <main>
      <div>
        <div className="spline-container splineContainer">
          <div className="darkmodeContainer"></div>
          <Suspense fallback={<div>Loading...</div>}>
            <SplineViewer />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

export default SpliceElement;