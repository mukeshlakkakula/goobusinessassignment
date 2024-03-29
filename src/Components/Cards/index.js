import React from "react";
import data from "./index.json";
import CardDetails from "../CardDetails";
import "./index.css";
const Cards = () => {
  const dataval = data.cardDetails;
  console.log(dataval);
  const cardView = dataval.map((each) => (
    <CardDetails key={each.top_num} each={each} />
  ));

  const referalContainer = (
    <div className="referalContainer">
      <div>
        <p className="referalp1">Service </p>
        <p className="referalP2">some service</p>
      </div>
      <div>
        <p className="referalp1">Your Referrals</p>
        <p className="referalP2">0+ 0</p>
      </div>
      <div>
        <p className="referalp1">Active Referrals</p>
        <p className="referalP2">0+ 0</p>
      </div>
      <div>
        <p className="referalp1">Total Ref. Earnings</p>
        <p className="referalP2">$0.00</p>
      </div>
    </div>
  );

  const ref3Container = (
    <div className="ref3">
      <div className="ref3inner">
        <h1 className="refh4">Refer Friends And Earn More !!</h1>
      </div>
    </div>
  );

  const referalLinkContainer = (
    <div className="referalLinkContainer">
      <div>
        <p className="reflinkPara">Your Referral Link</p>
        <div>
          <input
            className="inputReferal1"
            type="text"
            placeholder="https://gobusiness.com/?refferal=ABCXYZ"
          />
          <button type="button" className="copyBtn">
            <img
              src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1711682748/U3ltYm9sX3JiNXlnaQ==/grid_landscape"
              alt="copy"
            />
            Copy
          </button>
        </div>
      </div>
      <div>
        <p className="reflinkPara">Your Referral Code</p>
        <div>
          <input type="text" placeholder="ABCXYZ" className="inputReferal2" />
          <button type="button" className="copyBtn">
            <img
              src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1711682748/U3ltYm9sX3JiNXlnaQ==/grid_landscape"
              alt="copy"
            />
            Copy
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="cardsOuterContainer">
      <div className="cardsFullContainer">
        {cardView}
        <div>{referalContainer}</div>
        {ref3Container}
        {referalLinkContainer}
      </div>
    </div>
  );
};

export default Cards;
