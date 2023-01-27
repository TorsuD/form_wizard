import React from "react";
import "./DropdownLink.css";
import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

function DropdownLink({ title }) {
  const items = [
    {
      key: "1",
      label: <div>2nd menu item</div>,
    },

    {
      key: "2",
      label: <div>3rd menu item</div>,
    },

    {
      key: "3",
      label: <div>4th menu item</div>,
    },

    {
      key: "4",
      label: <div>5th menu item</div>,
    },
  ];

  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <div className="dropdownLink">
            {title}
            {/* <DownOutlined /> */}
          </div>
        </a>
      </Dropdown>
    </div>
  );
}

export default DropdownLink;
