import { Form, Input } from "antd";
import React, { useState } from "react";
import "./Individual.css";
import { Button } from "@mantine/core";
import LOV from "../list_of_value/LOV";
import InputField from "../input_field/InputField";
import DateField from "../date_field/DateField";
import SelectField from "../select_field/SelectField";
import TitleHeader from "../title_header/TitleHeader";

function Individual(props) {
  return (
    <div
      className="individual__container"
      style={{
        backgroundImage: props.backgroundImage,
      }}
    >
      {/* Header */}

      {/* <TitleHeader
        title="Account Categorization Information"
        headerColor={props.headerColor}
      /> */}
      {/* <Form> */}
      {/*First Card*/}
      <div className="ind__flex">
        {/*First Column*/}
        <div className="ind__firstColumn">
          <InputField
            label={"First Name"}
            placeholder="Please enter your first name"
          />
          <LOV
            label="City"
            LOVData={["001-Accra", "002-Rokel", "003-Paris"]}
            value={"LOV.label"}
            title={"City"}
            buttonColor={props.buttonColor}
            LOVplaceholder={"City"}
            labelWidth={"22%"}
          />
          <LOV
            label="Annual Account"
            LOVData={["001-Account A", "002-Account B", "003-Account C"]}
            title={"Annual Account"}
            buttonColor={props.buttonColor}
            LOVplaceholder={"Annual Account"}
            labelWidth={"22%"}
          />
          <LOV
            label="Country Code"
            LOVData={["233-GHA", "234-SL", "255-KNY"]}
            title={"Country Code"}
            buttonColor={props.buttonColor}
            LOVplaceholder={"Country Code"}
            labelWidth={"22%"}
          />
          <InputField
            label={"Surname"}
            placeholder="Please enter your surname"
          />
          <InputField
            label={"Street Name"}
            placeholder="Please enter the street name"
          />
          <InputField
            label={"Position Held"}
            placeholder="Please enter your position held"
          />
        </div>

        {/*Second Column*/}
        <div className="ind__secondColumn">
          <InputField
            label={"Middle Name"}
            placeholder="Please enter your middle name"
          />
          <InputField
            label={"Occupation"}
            placeholder="Please enter your occupation"
          />
          <InputField
            label={"House Number"}
            placeholder="Please enter your house number"
          />
          <LOV
            label="Primary Mobile"
            LOVData={["001-Mobile", "002-Home", "003-Phone"]}
            title={"Primary Mobile"}
            buttonColor={props.buttonColor}
            LOVplaceholder={"Primary Mobile"}
            labelWidth={"22%"}
          />
          <InputField label={"Email"} placeholder="Please enter your email" />
          <DateField label={"Date of Birth"} />
          <LOV
            label={"Gender"}
            LOVData={["001-Mobile", "002-Home", "003-Phone"]}
            title={"Primary Mobile"}
            buttonColor={props.buttonColor}
            LOVplaceholder={"Gender"}
            labelWidth={"22%"}
          />
          <InputField
            label={"Location / GPRS"}
            placeholder="Please enter your location or GPRS"
          />
        </div>
      </div>

      {/*Second Card*/}
      <div className="ind__flex">
        {/*First Column*/}
        <div className="ind__firstColumn">
          <InputField
            label={"ID Number"}
            placeholder="Please enter ID Number"
          />
          <LOV
            label="ID Type"
            LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
            title={"ID Type"}
            buttonColor={props.buttonColor}
            LOVplaceholder={"ID Type"}
            labelWidth={"22%"}
          />
          <LOV
            label="ID Expiry"
            LOVData={[
              "001-Next Month",
              "002-Next Two Months",
              "003-Next Three Months",
            ]}
            title={"ID Expiry"}
            buttonColor={props.buttonColor}
            LOVplaceholder={"ID Expiry"}
            labelWidth={"22%"}
          />
          <LOV
            label="Nature of Business"
            LOVData={["001-Corporate", "002-Personal", "003-Private"]}
            title={"Nature of Business"}
            buttonColor={props.buttonColor}
            LOVplaceholder={"Nature of Business"}
            labelWidth={"22%"}
          />
        </div>

        {/*Second Column*/}
        <div className="ind__secondColumn">
          <InputField
            label={"Issuing Place"}
            placeholder="Please enter Issuing place"
          />
          <InputField
            label={"Issuing Auth"}
            placeholder="Please enter Issue auth"
          />
          <DateField
            label={"Issuing Date"}
            placeholder="Please enter your issuing date"
          />
          <InputField label={"KRA Pin"} placeholder="Please enter KRA Pin" />
        </div>
      </div>
      {/* </Form> */}

      <div className="ind__buttonSection">
        <div>
          <Button radius="10px" color={"dark"} className="ind__checkBtn">
            CHECK FOR PEPS
          </Button>
          <Button radius="10px" color={"dark"} className="ind__checkBtn">
            CHECK FOR BLACKLISTED
          </Button>
          <Button
            radius="10px"
            color={props.nextColor}
            className="ind__checkBtn"
          >
            CHECK FOR DUPLICATES
          </Button>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
        >
          <div style={{ marginRight: "10px" }}>
            <label>Blacklist Code</label>
          </div>

          <div>
            <Input style={{ width: "250px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Individual;
