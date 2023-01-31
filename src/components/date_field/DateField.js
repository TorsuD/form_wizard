import { Form } from "antd";
import { DatePicker } from "@mantine/dates";
import React from "react";
import "../list_of_value/LOV.css";

function DateField({ label }) {
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
          <div className="lov__flexInput" style={{ width: "100%" }}>
            <div style={{ width: "20%" }}>
              <label>{label}</label>
            </div>
            <div style={{ width: "360px" , marginLeft: "16px"}}>
              <DatePicker size="xs" inputFormat="DD/MM/YYYY" placeholder="Formaat (Day / Month / Year)" />
            </div>
          </div>
        </Form.Item>
      </div>
    </div>
  );
}

export default DateField;
