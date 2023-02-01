import React, { useState } from "react";
import DashCard from "../components/cards/CardComponent";
import "./Overview.css";
import {
  FiFeather,
  FiSettings,
  FiHome,
  FiSearch,
  FiHelpCircle,
  FiCheckCircle,
  FiDivideCircle,
  FiPieChart,
  FiMessageCircle,
  FiGift,
  FiEye,
  FiActivity,
  FiUser,
  FiCommand,
  FiSmile,
} from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdCopyAll } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { Input, RingProgress, Menu, Button, Text } from "@mantine/core";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import MenuItem from "../components/menu_item/MenuItem";
import CardComponent from "../components/cards/CardComponent";

//data
const themes = {
  // default color
  defaultColorTheme: {
    backgroundColor: "#fff",
    backgroundImage: ``,
    headerColor: "#845ef6",
    buttonColor: "#845ef6",
    nextColor: "violet",
    searchColor: "#7351d6",
  },

  // blue
  theme1: {
    backgroundColor: "rgb(66, 157, 232)",
    backgroundImage: `url("http://localhost:3000/assets/blue.png")`,
    headerColor: "rgb(66, 157, 232)",
    buttonColor: "rgb(66, 157, 232)",
    nextColor: "cyan",
    searchColor: "#3a8ccf",
  },

  // orange
  theme4: {
    backgroundColor: "#faddca",
    backgroundImage: `url("http://localhost:3000/assets/orange.jpg")`,
    headerColor: "#edaf6d",
    buttonColor: "#edaf6d",
    nextColor: "orange",
    searchColor: "#d19b60",
  },

  // grape or violet
  theme3: {
    backgroundColor: "#f2dcfa",
    backgroundImage: `url("http://localhost:3000/assets/purpr.webp")`,
    headerColor: "#995ead",
    buttonColor: "#c895f5",
    nextColor: "grape",
    searchColor: "#7c4a8c",
  },

  // red
  theme2: {
    backgroundColor: "#facfcf",
    backgroundImage: `url("http://localhost:3000/assets/pink-mini.jpg")`,
    headerColor: "#ed716d",
    buttonColor: "#ed716d",
    nextColor: "red",
    searchColor: "#bd5a57",
  },
  // green
  theme5: {
    backgroundColor: "#b1fcb2",
    backgroundImage: `url("http://localhost:3000/assets/leaf.jpeg")`,
    headerColor: "#f5a742",
    buttonColor: "#4eb550",
    nextColor: "green",
    searchColor: "#cc7c4e",
  },
};

function Overview() {
  const [themeState, setThemeState] = useState(themes.theme1);
  function defaultColorTheme() {
    setThemeState(themes.defaultColorTheme);
  }

  function themeColor1() {
    setThemeState(themes.theme1);
  }

  function themeColor2() {
    setThemeState(themes.theme2);
  }

  function themeColor3() {
    setThemeState(themes.theme3);
  }

  function themeColor4() {
    setThemeState(themes.theme4);
  }

  function themeColor5() {
    setThemeState(themes.theme5);
  }

  return (
    <div>
      <div
        className="overview__container"
        style={{
          backgroundImage: themeState.backgroundImage,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div
          className="overview__theme"
          style={{ backgroundColor: themeState.headerColor }}
        ></div>
        <div style={{ height: "100vh" }}></div>
        <div className="overview__body">
          {/*Top most Section*/}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
              marginBottom: "20px",
            }}
          >
            {/*Search Section*/}
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>
                {/* <img
                  src="http://localhost:3000/assets/usgl-small.png"
                  alt="usg icon"
                  className="ind__colorWheel"
                  style={{ marginTop: "-5px", marginRight: "3px" }}
                /> */}
                USGL
              </span>
              <div>
                <Input
                  icon={<FiSearch />}
                  size="xs"
                  variant="unstyled"
                  style={{
                    backgroundColor: `${themeState.searchColor}`,
                    marginLeft: "10px",
                    borderRadius: "10px",
                  }}
                  placeholder="Search..."
                />
              </div>
            </div>

            {/*Admin Section*/}
            <div className="overview__admin">
              {/*Flag*/}
              <div>
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/128/206/206626.png"
                  alt="usa flag"
                  className="ind__colorWheel"
                /> */}
              </div>

              {/*App Menu*/}
              <div>
                <AiOutlineAppstore size={24} />
              </div>

              {/*Copy Icon*/}
              <div id="fullscreenmode">
                <MdCopyAll size={24} />
              </div>

              {/*Notification Bell*/}
              <div>
                <FiBell size={24} />
              </div>

              {/*Admin Bubble*/}
              {/* <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt="profile"
                  className="ind__colorWheel"
                />
              </div> */}

              <div>
                <Menu shadow="md" width={130}>
                  <Menu.Target>
                    <div style={{}}>
                      <FiSettings
                        size={"22px"}
                        style={{ marginRight: "-13px" }}
                      />
                    </div>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>Themes</Menu.Label>
                    <Menu.Item
                      onClick={defaultColorTheme}
                      icon={<FiPieChart size={14} color="#4b6ef5" />}
                    >
                      Default
                    </Menu.Item>
                    <Menu.Item
                      onClick={themeColor1}
                      icon={
                        <FiMessageCircle size={14} color="rgb(66, 157, 232)" />
                      }
                    >
                      Blue
                    </Menu.Item>
                    <Menu.Item
                      onClick={themeColor2}
                      icon={<FiGift size={14} color="#ed716d" />}
                    >
                      Red
                    </Menu.Item>
                    <Menu.Item
                      onClick={themeColor3}
                      icon={<FiFeather size={14} color="#995ead" />}
                    >
                      Purple
                    </Menu.Item>
                    <Menu.Item
                      onClick={themeColor4}
                      icon={<FiEye size={14} color="#edaf6d" />}
                    >
                      Orange
                    </Menu.Item>
                    <Menu.Item
                      onClick={themeColor5}
                      icon={<FiActivity size={14} color="#008000a7" />}
                    >
                      Green
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
          </div>

          {/*The Overview Navigation*/}
          <div className="overview__nav">
            <div className="overview__menuItem">
              <div>
                <FiHome
                  style={{
                    marginBottom: "5px",
                    marginRight: "5px",
                  }}
                />
                Dashboard
              </div>
              <MenuItem title="Utilities" icon={<FiCommand />} />
              <MenuItem title="General Enquiry" icon={<FiHelpCircle />} />
              <MenuItem title="Central Aproval" icon={<FiCheckCircle />} />
              <MenuItem title="Calculations" icon={<FiCheckCircle />} />
              <MenuItem title="Users" icon={<FiCheckCircle />} />
              <MenuItem title="Help" icon={<FiHelpCircle />} />
            </div>
          </div>

          {/*Dashboard Text*/}
          <div
            style={{
              fontSize: "17px",
              marginTop: "14px",
              display: "flex",
              marginBottom: "-10px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>Dashboard</div>
            <div style={{ fontSize: "14px", color: "grey" }}>
              Union Systems Global / Dashboard
            </div>
          </div>
          <br />

          <div className="overview__cardContainer">
            <CardComponent
              money={43000}
              description="this is the description"
              icon={
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/128/7971/7971872.png"
                  }
                  className="ind__colorWheel"
                  alt="graph"
                />
              }
            />
            <CardComponent
              money={3000}
              description="this is the description"
              icon={
                <RingProgress
                  size={50}
                  sections={[
                    { value: 40, color: "cyan" },
                    { value: 15, color: "cyan" },
                    { value: 15, color: "cyan" },
                  ]}
                />
              }
            />
            <CardComponent
              money={13000}
              description="this is the description"
              icon={
                <RingProgress
                  size={50}
                  sections={[
                    { value: 40, color: "#68b5e8" },
                    { value: 15, color: "#68b5e8" },
                  ]}
                />
              }
            />
            <DashCard
              money={53000}
              description="this is the description"
              icon={
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/128/7971/7971872.png"
                  }
                  className="ind__colorWheel"
                  alt="graph"
                />
              }
            />
            {/* <DashCard />
            <DashCard />
            <DashCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
