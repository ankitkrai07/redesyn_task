import React from "react";
import { FaHome, FaStore, FaBookmark, FaUser } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <FaHome className="footer-icon" />
      </div>
      <div className="footer-item">
        <FaStore className="footer-icon" />
      </div>
      <div className="footer-item">
        <FaBookmark className="footer-icon" />
      </div>
      <div className="footer-item">
        <FaUser className="footer-icon" />
      </div>
    </div>
  );
};

export default Footer;
