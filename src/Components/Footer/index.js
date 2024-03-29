import React from "react";

import "./index.css";

const Footer = () => {
  const footerupperContainer = (
    <div className="footerUpperContainer">
      <div className="detailsContainer">
        <p className="footerupperPara">COMPANY</p>
        <span className="footerupperSpan">About</span>
        <span className="footerupperSpan">Premium</span>
        <span className="footerupperSpan">Blog</span>
        <span className="footerupperSpan">Referral Program</span>
      </div>
      <div className="detailsContainer">
        <p className="footerupperPara">Help and support</p>
        <span className="footerupperSpan">Contact Us</span>
        <span className="footerupperSpan">Knowledge Center</span>
        <span className="footerupperSpan">Premium Support</span>
      </div>
      <div className="detailsContainer">
        <p className="footerupperPara">Learning</p>
        <span className="footerupperSpan">Learn Hub</span>
        <span className="footerupperSpan">Tutorials</span>
        <span className="footerupperSpan">Communities</span>
      </div>
      <div className="detailsContainer">
        <p className="footerupperPara">RESOURCES</p>
        <span className="footerupperSpan">Third-Party Tools</span>
        <span className="footerupperSpan">Illustrations</span>
        <span className="footerupperSpan">Stock Photos</span>
      </div>
      <div className="detailsContainer">
        <p className="footerupperPara">LEGAL</p>
        <span className="footerupperSpan">Privacy Policy</span>
        <span className="footerupperSpan">Terms & Conditions</span>
        <span className="footerupperSpan">EULA</span>
      </div>
    </div>
  );

  const footerBottomContainer = (
    <div className="footerbottomContainer">
      <img
        className="logoImage"
        src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1711636147/R3JvdXBfMjE4Ml9pMWtqcms=/grid_landscape"
        alt="logo"
      />
      <span className="copyRightText">
        © 2024 Go Business, Inc. All rights reserved.
      </span>
      <div>
        <img
          src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1711691090/U29jaWFsX0xpbmtzX3drd3piYw==/grid_landscape"
          alt="socialmeadiaicons"
          className="socialmeadiaicons"
        />
      </div>
    </div>
  );
  return (
    <div className="footerFullContainer">
      {footerupperContainer}
      {footerBottomContainer}
    </div>
  );
};

export default Footer;
