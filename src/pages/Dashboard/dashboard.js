import React from "react";
import Navbar from "../../Components/navbar";
import Paichart from "../../pages/Paichart/paichart";
import "./dashboard.css";
import dashboardData from "../../dashboardData.json";


const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard">
        <div>
          <table className="dashboard-table">
            <thead>
              <div className="add">Ad insights</div>
              <tr>
                <th>Campings</th>
                <th>Clicks </th>
                <th>Cost</th>
                <th>Conversions</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.dashboard1.map((row) => (
                <tr key={row.id}>
                  <td>{row.Campings}</td>
                  <td>{row.Clicks}</td>
                  <td>{row.Cost}</td>
                  <td>{row.Conversions}</td>
                  <td>{row.Revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="paichart">
        <Paichart />
         </div>
      </div>
    </>
  );
};

export default Dashboard;
