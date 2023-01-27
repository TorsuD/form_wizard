import React from "react";
import { Form } from "antd";
import "../list_of_value/LOV.css";
import { Select } from "@mantine/core";

function SelectField({ label }) {
  return (
    <div>
      <div>
        <Form.Item
          //   label={label}
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <div className="lov__flexInput" style={{ flex: 1 }}>
            <div style={{ flex: 0.5 }}>
              <label>{label}</label>
            </div>
            <div style={{ display: "flex", flex: 0.5 }}>
              <Select
                placeholder="Pick one"
                data={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
              />
            </div>
          </div>
        </Form.Item>
      </div>
    </div>
  );
}

export default SelectField;
