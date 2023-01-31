import React from "react";
import LOV from "../components/list_of_value/LOV";
import "./AccountDetails.css";
import "../components/individual/Individual.css";
import { Form } from "antd";
import SelectField from "../components/select_field/SelectField";

function AccountDetails(props) {
  // let acd be an alias for Account Details
  return (
    <div>
      <div
        className="individual__container"
        style={{
          backgroundImage: props.backgroundImage,
        }}
      >
        <Form>
          <div className="ind__flex">
            <div className="ind__firstColumn">
              <LOV
                label="Product Group"
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Product Group"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />

              <LOV
                label="Product Sub Group"
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Product Sub Group"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />

              <LOV
                label="Currency"
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Currency"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />
              <LOV
                label={"FX Category"}
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Customer Segment"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />
              <LOV
                label="Customer Segment"
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Customer Segment"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />
            </div>

            <div className="ind__secondColumn">
              <LOV
                label="Sub Customer Segment"
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Sub Customer Segment"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />
              <LOV
                label="Document Required Type"
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Document Required Type"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />
              <LOV
                label="Introductory Source"
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Introductory Source"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />
              <LOV
                label="Sector"
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Sector"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />
              <LOV
                label="Sub Sector"
                LOVData={["001-Pent", "002-Diaspora", "003-Brunei"]}
                title={"Sub Sector"}
                buttonColor={props.buttonColor}
                labelWidth={"30%"}
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AccountDetails;
