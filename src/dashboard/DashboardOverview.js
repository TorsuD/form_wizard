import React from "react";
import "./DashboardOverview.css";

function DashboardOverview() {
  // let do = dashboard overview
  return (
    <div>
      <div className="do__container">
        <div className="do__themes" style={{ backgroundColor: "#8252fa" }}>
        </div>
        <div className="do__body">
          <div>
            <div>Name</div>
            <div>Search</div>
          </div>

          <div style={{ display: "flex" }}>
            <div>Flag</div>
            <div>MENU</div>
            <div>Copy</div>
            <div>Notification Mantine</div>
            <div>Profile Mantine</div>
            <div>Settings </div>
          </div>
          <div>
            <div>Name</div>
            <div>Search</div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
