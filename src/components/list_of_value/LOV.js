import { Form, Input } from "antd";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CgMenuBoxed } from "react-icons/cg";
import { Popover, Button, Select } from "@mantine/core";
import "./LOV.css";

function LOV({ label, LOVData, buttonColor, LOVplaceholder, labelWidth }) {
  const [searchValue, onSearchChange] = useState("");

  function handleFocus() {
    document.getElementById("slBox").focus();
  }

  return (
    <div>
      <div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <div className="lov__flexInput" style={{}}>
            <div style={{ width: labelWidth }}>
              <label>{label}</label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flex: 0.9,
              }}
            >
              <div id="popoverMenu" onClick={handleFocus}>
                <Button
                  id="btnCustom"
                  disabled
                  size="xs"
                  radius={"sm"}
                  className="lov__button"
                  style={{
                    backgroundColor: buttonColor,
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                  }}
                >
                  <CgMenuBoxed size={15} color={"white"} />
                </Button>
              </div>

              <Select
                placeholder={`Please select the ${LOVplaceholder}`}
                size="xs"
                shadow={"lg"}
                radius="xs"
                id="slBox"
                searchable
                searchValue={searchValue}
                onSearchChange={onSearchChange}
                nothingFound="No options"
                data={LOVData}
                className="lov__select"
              />
            </div>
          </div>
        </Form.Item>
      </div>
    </div>
  );
}

export default LOV;
