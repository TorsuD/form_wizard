import React from "react";
import "./TitleHeader.css";
import "../individual/Individual.css";
import { Menu, Button, Text } from "@mantine/core";

import {
  FiActivity,
  FiChevronDown,
  FiEye,
  FiFeather,
  FiGift,
  FiMessageCircle,
  FiPieChart,
  FiSettings,
} from "react-icons/fi";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

function TitleHeader(props) {
  return (
    <div>
      <div
        className="titleHeader"
        style={{
          backgroundColor: props.headerColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>{props.title}</div>

        <Menu shadow="md" width={130}>
          <Menu.Target>
            <Button style={{ background: "transparent", color: "transparent" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3953/3953405.png"
                alt="color wheel"
                className="ind__colorWheel"
              />
              &nbsp;
              <FiChevronDown style={{ color: "white" }} />
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Themes</Menu.Label>
            <Menu.Item
              onClick={props.defaultColorTheme}
              icon={<FiPieChart size={14} color="#4b6ef5" />}
            >
              Default
            </Menu.Item>
            <Menu.Item
              onClick={props.themeColor1}
              icon={<FiMessageCircle size={14} color="rgb(66, 157, 232)" />}
            >
              Blue
            </Menu.Item>
            <Menu.Item
              onClick={props.themeColor2}
              icon={<FiGift size={14} color="#ed716d" />}
            >
              Red
            </Menu.Item>
            <Menu.Item
              onClick={props.themeColor3}
              icon={<FiFeather size={14} color="#995ead" />}
            >
              Purple
            </Menu.Item>
            <Menu.Item
              onClick={props.themeColor4}
              icon={<FiEye size={14} color="#edaf6d" />}
            >
              Orange
            </Menu.Item>
            <Menu.Item
              onClick={props.themeColor5}
              icon={<FiActivity size={14} color="#008000a7" />}
            >
              Green
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        {/* <img
          src="https://cdn-icons-png.flaticon.com/128/3953/3953405.png"
          alt="color wheel"
          className="ind__colorWheel"
        /> */}
      </div>
    </div>
  );
}

export default TitleHeader;
