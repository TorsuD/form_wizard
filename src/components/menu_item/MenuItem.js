import React from "react";
import "./MenuItem.css";
import "../../dashboard/Overview.css";
import { Dropdown, Space } from "antd";
import {
  FiBarChart,
  FiChevronDown,
  FiPieChart,
  FiFeather,
  FiMenu,
  FiStar,
  FiUmbrella,
} from "react-icons/fi";

function MenuItem({ icon, title }) {
  const items = [
    {
      key: "1",
      label: <a>1st menu item</a>,
      icon: <FiPieChart color={"red"} />,
    },
    {
      key: "2",
      label: <a>2nd menu item</a>,
      icon: <FiFeather color={"purple"} />,
    },
    {
      key: "3",
      label: <a>Third item</a>,
      icon: <FiMenu color={"orange"} />,
    },
    {
      key: "4",
      label: <a>Fouth item</a>,
      icon: <FiStar color={"green"} />,
    },
    {
      key: "5",
      label: <a>Fifth item</a>,
      icon: <FiUmbrella color={"yellow"} />,
    },
    {
      key: "6",
      label: <a>Sixth item</a>,
      icon: <FiBarChart color={"brown"} />,
    },
  ];
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
      >
        <div>
          <Space>
            <a className="menuItem">
              <div className="overview__menuIcon">{icon}</div>
              <div className="overview__menuName">{title}</div>
              <FiChevronDown />
            </a>
          </Space>
        </div>
      </Dropdown>
    </div>
  );
}

export default MenuItem;
