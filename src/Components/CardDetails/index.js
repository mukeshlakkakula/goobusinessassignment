import React from "react";
import "./index.css";
const CardDetails = (props) => {
  const { each } = props;
  return (
    <div className="cardDetailsContainer">
      <img src={each.img} alt="images" className="cardimg" />
      <div className="cardParasContainer">
        <p className="p1">{each.top_num}</p>
        <p className="p2">{each.bottom_text}</p>
      </div>
    </div>
  );
};

export default CardDetails;
