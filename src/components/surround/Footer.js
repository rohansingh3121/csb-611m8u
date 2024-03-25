import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      Created & managed by <a href={"#"}>Rohan Singh</a>
    </footer>
  );
};

export default Footer;
