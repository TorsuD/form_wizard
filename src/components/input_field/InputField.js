import { Form, Input } from "antd";
import React from "react";
import "../list_of_value/LOV.css";

function InputField({ label }) {
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
              <Input />
            </div>
          </div>
        </Form.Item>
      </div>
    </div>
  );
}

export default InputField;
