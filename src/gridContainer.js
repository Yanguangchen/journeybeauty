import React from "react";
import './gridContainer.css';

function GridContainer() {
  const renderVideo = (src, isLazy = false) => (
    <div className="grid-container">
      <video
        src={src}
        className="grid-video"
        alt="Placeholder Video"
        muted
        autoPlay
        playsInline
        loop
        loading={isLazy ? "lazy" : undefined}
      />
    </div>
  );

  return (
    <div className="flex-wrapper">
      <div className="grid-wrapper">
        {renderVideo("Assets/GridAssets/Grid1.mp4")}
        {renderVideo("Assets/GridAssets/Grid2.mp4")}
      </div>
      <div className="grid-wrapper">
        {renderVideo("Assets/GridAssets/Grid3.mp4")}
        {renderVideo("Assets/GridAssets/Grid4.mp4")}
      </div>
    </div>
  );
}

export default GridContainer;