import React from "react";
import logo from "./utils/logo1.png";
import logo2 from "./utils/logo2.png";
import Page1Content from "./page1Content";
import "./pageLayout.css";

const UnifiedPage = ({
  date = "January 5, 2025",
  name = "John Doe",
  address = "123 Main St, Springfield",
}) => {
  return (
    <div className="page-layout">
      <div className="page-layout-inner-container">
        {/* Header */}
        <div className="header">
          <img src={logo} alt="Company Logo" className="header-logo" />
          <div className="header-text-container">
            <p>{date}</p>
            <p className="bold">{name}</p>
            <p>{address}</p>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <Page1Content />
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="footer-text">© 2025 Your Company. All rights reserved.</p>
          <img src={logo2} alt="Company Logo" className="footer-logo" />
        </div>
      </div>
    </div>
  );
};

export default UnifiedPage;
