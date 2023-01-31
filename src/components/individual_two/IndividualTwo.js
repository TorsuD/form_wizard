import { Form } from "antd";
import React from "react";
import "./IndividualTwo.css";
import { Button } from "@mantine/core";
import LOV from "../list_of_value/LOV";
import InputField from "../input_field/InputField";
import DateField from "../date_field/DateField";
import SelectField from "../select_field/SelectField";

function IndividualTwo() {
  return (
    <div className="individual__container">
      <div className="ind__title">Account Categorization Information Two</div>
      <Form>
        <div className="ind__flex">
          <div className="ind__left">
            <LOV
              label="Nature of Business"
              LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
              title={"Nature of Business"}
            />
            <LOV
              label="Annual Account"
              LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
              title={"Annual Account"}
            />
            <InputField label={"Occupation"} />
            <InputField label={"Position Held"} />
            <InputField label={"Surname"} />
            <DateField label={"Date of Birth"} />
            <SelectField label={"Gender"} />
            <LOV
              label="Primary Mobile"
              LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
              title={"Primary Mobile"}
            />
            <InputField label={"KRA Pin"} />
            <InputField label={"Email"} />
          </div>

          <div className="indi__right">
            <LOV
              label="ID Type"
              LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
              title={"ID Type"}
            />
            <InputField label={"ID No."} />
            <InputField label={"Issuing Auth"} />
            <DateField label={"Issuing Date"} />
            <LOV
              label="ID Expiry"
              LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
              title={"ID Expiry"}
            />
            <InputField label={"Issuing Place"} />
            <InputField label={"Flat/Villa/House No."} />
            <InputField label={"Street Name"} />
            <InputField label={"Location/GPRS"} />
            <LOV
              label="City"
              LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
              title={"City"}
            />
            <LOV
              label="Country Code"
              LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
              title={"Country Code"}
            />
          </div>
        </div>
      </Form>

      <div className="ind__buttonSection">
        <Button radius="lg" color={"dark"} className="ind__checkBtn">
          CHECK FOR PEPS
        </Button>
        <Button radius="lg" color={"dark"} className="ind__checkBtn">
          CHECK FOR BLACKLISTED
        </Button>
        <Button radius="lg" color={"violet"} className="ind__checkBtn">
          CHECK FOR DUPLICATES
        </Button>
        <InputField label={"Blacklist Code"} />
      </div>
    </div>
  );
}

export default IndividualTwo;
