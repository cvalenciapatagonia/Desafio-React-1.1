import React from "react";

function Footer(props) {
  return (
    <footer className="footer-container">
      <p>{props.description}</p>
    </footer>
  );
}

export default Footer;
