import React from "react";
import "./index.css";

import values from "./data.json";

const Table = () => {
  const tableTopContainer = (
    <div className="tableTopContainer">
      <div className="tableTopineerContainer">
        <span className="tableTopText">Show </span>
        <input type="text" placeholder="10" className="tableTopinput1" />
        <span className="tableTopText">Entries</span>
      </div>
      <div className="tableTopineerContainer">
        <span className="tableTopText">Search:</span>
        <input type="text" className="tableTopinput2" />
      </div>
    </div>
  );

  const tableContainer = (
    <div>
      <table className="table table-hover fullTebale">
        <thead className="tableheadContainer">
          <tr>
            <th scope="col" className="headings">
              Name
            </th>
            <th scope="col" className="headings">
              Service Name
            </th>
            <th scope="col" className="headings">
              Date
            </th>
            <th scope="col" className="headings">
              Profit
            </th>
            <th scope="col" className="headings"></th>
          </tr>
        </thead>
        <tbody>
          {values.profit.map((each) => (
            <tr key={each.name} className="tds">
              <td>{each.name}</td>
              <td>{each.service_name}</td>
              <td>{each.date}</td>
              <td>{each.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const tableBottomContainer = (
    <div className="tableBottomContainer">
      <span className="tableBtmspanEl">Showing 1 to 10 of 57 entries</span>
      <div className="buttonsContainer">
        <button type="button" className="bottomBtns">
          Previous
        </button>
        <button type="button" className="bottomBtns activeBtn">
          1
        </button>
        <button type="button" className="bottomBtns">
          2
        </button>
        <button type="button" className="bottomBtns">
          3
        </button>
        <button type="button" className="bottomBtns">
          4
        </button>
        <button type="button" className="bottomBtns">
          5
        </button>
        <button type="button" className="bottomBtns">
          6
        </button>
        <button type="button" className="bottomBtns">
          Next
        </button>
      </div>
    </div>
  );
  return (
    <div className="totalTableContainer">
      {tableTopContainer}
      {tableContainer}
      {tableBottomContainer}
    </div>
  );
};

export default Table;
