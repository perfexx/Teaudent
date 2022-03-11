import React from "react";
import "./widgetLg.css";
import image from "../../img/avatar.png";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Users</th>
          <th className="widgetLgTh">Dates</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={image} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Manouchehr Salehi</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={image} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Manouchehr Salehi</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={image} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Manouchehr Salehi</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
