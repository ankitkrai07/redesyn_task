import React from "react";
import { FaTh, FaStore, FaClipboardList } from "react-icons/fa";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tab-item active">
        <FaTh className="tab-icon" />
      </div>
      <div className="tab-item">
        <FaStore className="tab-icon" />
      </div>
      <div className="tab-item">
        <FaClipboardList className="tab-icon" />
      </div>
    </div>
  );
};

export default Tabs;
