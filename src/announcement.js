function Announcement() {
    const textStyles = {
      color: "white",
      textAlign: "center",
      fontSize: "130%",
    };
    const containerWrapper = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      background: "#D50000",
      position: "sticky",  // Make the component sticky
      top: 0,  // Stick to the top of the viewport
      zIndex: 999,  // Ensure it stays above other content but below the navbar
      overflow: "hidden",  // Hide any overflowing content
    };
  
    const aStyle = {
      color: "white",
      width: "100%",
      textDecoration: "none",
    };
  
    return (
      <div style={containerWrapper}>
        <a
          style={aStyle}
        >
          <h1 className="carmart-wrapper" style={textStyles}>Visit our sgcarmart Shop</h1>
        </a>
      </div>
    );
  }
  
  export default Announcement;