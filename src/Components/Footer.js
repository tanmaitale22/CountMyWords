import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p className="footertitle">CountMyWords</p>
      <nav style={styles.nav}>
        <p className="footerpara">Have Feedback? mail us at tanmaitale@gmail.com</p>
      </nav>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    background: "#fff",
    color: "#000",
    position: "relative",
    bottom: "0",
    width: "100%",
  },
  nav: {
    marginTop: "5px",
  },
};

export default Footer;
