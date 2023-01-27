import { Form, Input } from "antd";
import React, { useState } from "react";
import { FiFilePlus } from "react-icons/fi";
import { Popover, Button, Autocomplete } from "@mantine/core";
import "./LOV.css";

function LOV({ label, LOVData, title, message }) {
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

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
          <div className="lov__flexInput" style={{ flex: 1 }}>
            <div style={{ flex: 0.5 }}>
              <label>{label}</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", flex: 0.5 }}>
              <Input className="lov__code" />
              <Popover
                width={300}
                trapFocus
                position="bottom"
                withArrow
                shadow="md"
              >
                <Popover.Target>
                  <Button size="xs" radius="sm" className="lov__button">
                    <FiFilePlus size={15} />
                  </Button>
                </Popover.Target>
                <Popover.Dropdown
                  sx={(theme) => ({
                    background:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[7]
                        : theme.white,
                  })}
                >
                  <Autocomplete
                    label={title}
                    placeholder="Pick one"
                    data={LOVData}
                  />
                </Popover.Dropdown>
              </Popover>
              <Input
                disabled
                variant="filled"
                style={{ backgroundColor: "#d9dadb" }}
              />
            </div>
          </div>
        </Form.Item>
      </div>
    </div>
  );
}

export default LOV;
