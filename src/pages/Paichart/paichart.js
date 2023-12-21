import React, { useState } from "react";
import dashboardData from "../../dashboardData.json";
import "./paichart.css";
import Pie from "../../pages/Paichart/pie";

export default function Paichart() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleTable = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      {isHidden ? (
        <div className="container">
          <Pie />
        </div>
      ) : (
        <table className="dashboard-table">
          <thead>
            <div className="add">Ad insights</div>
            <tr>
              <th>Groups</th>
              <th>Clicks</th>
              <th>Cost</th>
              <th>Conversions</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.dashboard2.map((row) => (
              <tr key={row.id}>
                <td>{row.Groups}</td>
                <td>{row.Clicks}</td>
                <td>{row.Cost}</td>
                <td>{row.Conversions}</td>
                <td>{row.Revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="toggle-switch-container">
        <div
          className={`toggle-switch ${isHidden ? "off" : "on"}`}
          onClick={toggleTable}
        >
          <div className="toggle-slider"></div>
        </div>
      </div>
    </div>
  );
}
