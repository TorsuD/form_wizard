import { Form, Input } from "antd";
import React from "react";
import "../list_of_value/LOV.css";

function InputField({ label, placeholder }) {
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
          <div
            className="lov__flexInput"
            style={{
              width: "100%",
            }}
          >
            <div style={{ width: "20%" }}>
              <label>{label}</label>
            </div>
            <div style={{ display: "flex", flex: 0.8, marginLeft:"16px" }}>
              <Input placeholder={placeholder} />
            </div>
          </div>
        </Form.Item>
      </div>
    </div>
  );
}

export default InputField;
