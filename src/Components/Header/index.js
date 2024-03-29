import React from "react";

import "./index.css";
const Header = () => {
  const headerview = (
    <div className="headerTopContainer">
      <img
        src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1711636147/R3JvdXBfMjE4Ml9pMWtqcms=/grid_landscape"
        alt="imageLogo"
      />

      <ul className="listitems">
        <li>Home</li>
        <li>About us</li>
        <li>Courses</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div>
        <button type="button" className="trybtn">
          Try for free
        </button>
      </div>
    </div>
  );

  const referenceDashBoard = (
    <div className="refFullContainer">
      <h1 className="refText">Referral Dashboard</h1>

      <div className="searchAndInputContainer">
        <div className="searchLogoAndsearchinput">
          <button className="searchlogo">
            <img
              className="seacrchlogo"
              alt="searchlogo"
              src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1711637850/bWFnbmlmaWVyXzFfbXdwN2lq/grid_landscape"
            />
          </button>
          <input
            type="search"
            placeholder="Search here..."
            className="searchinput"
          />
        </div>
        <button type="button" className="SearchBtn">
          Search
        </button>
      </div>

      <img
        alt="profileAvatar"
        src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1711638402/bWVudV9hcTZqYmg=/grid_landscape"
      />
    </div>
  );
  return (
    <div className="headerFullContainer">
      {headerview}
      {referenceDashBoard}
    </div>
  );
};

export default Header;
