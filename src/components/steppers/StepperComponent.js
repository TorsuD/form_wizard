import { useEffect, useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import "./StepperComponent.css";
import {
  FiCheck,
  FiDollarSign,
  FiMail,
  FiShield,
  FiUser,
  FiUserPlus,
} from "react-icons/fi";
import Individual from "../individual/Individual";
import AccountDetails from "../../screens/AccountDetails";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import AccountMandate from "../../screens/AccountMandate";
import TitleHeader from "../title_header/TitleHeader";

// data
const themes = {
  // default color
  defaultColorTheme: {
    backgroundColor: "#fff",
    backgroundImage: ``,
    headerColor: "#845ef6",
    buttonColor: "#845ef6",
    nextColor: "violet",
  },

  // blue
  theme1: {
    backgroundColor: "#bee5fa",
    backgroundImage: `url("http://localhost:3000/assets/blue.png")`,
    headerColor: "rgb(66, 157, 232)",
    buttonColor: "rgb(66, 157, 232)",
    nextColor: "cyan",
  },

  // orange
  theme4: {
    backgroundColor: "#faddca",
    backgroundImage: `url("http://localhost:3000/assets/orange.jpg")`,
    headerColor: "#edaf6d",
    buttonColor: "#edaf6d",
    nextColor: "orange",
  },

  // grape or violet
  theme3: {
    backgroundColor: "#f2dcfa",
    backgroundImage: `url("http://localhost:3000/assets/purpr.webp")`,
    headerColor: "#995ead",
    buttonColor: "#c895f5",
    nextColor: "grape",
  },

  // red
  theme2: {
    backgroundColor: "#facfcf",
    backgroundImage: `url("http://localhost:3000/assets/pink-mini.jpg")`,
    headerColor: "#ed716d",
    buttonColor: "#ed716d",
    nextColor: "red",
  },
  // green
  theme5: {
    backgroundColor: "#b1fcb2",
    backgroundImage: `url("http://localhost:3000/assets/leaf.jpeg")`,
    headerColor: "#008000a7",
    buttonColor: "#4eb550",
    nextColor: "green",
  },
};

function StepperComponent(props) {
  const [active, setActive] = useState(0);
  const [themeState, setThemeState] = useState(themes.defaultColorTheme);

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
  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div
      className="stepper"
      style={{
        backgroundColor: themeState.backgroundColor,
        paddingTop: "19px",
      }}
    >
      <div>
        <div className="stepper__container">
          {/*Individual Steppers*/}
          <Stepper
            size={13}
            color={themeState.headerColor}
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
            allowNextStepsSelect={false}
          >
            <Stepper.Step
              icon={<FiUser />}
              label="Individual"
              description="Create an account"
            >
              <TitleHeader
                title="Account Categorization Information"
                headerColor={themeState.headerColor}
                defaultColorTheme={defaultColorTheme}
                buttonColor={themeState.headerColor}
                themeColor1={themeColor1}
                themeColor2={themeColor2}
                themeColor3={themeColor3}
                themeColor4={themeColor4}
                themeColor5={themeColor5}
                blue="blue"
                defaultId="defaultID"
                nextColor={themeState.nextColor}
              />
              <Individual
                buttonColor={themeState.buttonColor}
                headerColor={themeState.headerColor}
                backgroundImage={themeState.backgroundImage}
                nextColor={themeState.nextColor}
              />
            </Stepper.Step>
            <Stepper.Step
              icon={<FiMail />}
              label="Account Details"
              description="Verify email"
            >
              <TitleHeader
                title="Account Categorization Information"
                headerColor={themeState.headerColor}
                defaultColorTheme={defaultColorTheme}
                buttonColor={themeState.headerColor}
                themeColor1={themeColor1}
                themeColor2={themeColor2}
                themeColor3={themeColor3}
                themeColor4={themeColor4}
              />
              <AccountDetails
                headerColor={themeState.headerColor}
                backgroundImage={themeState.backgroundImage}
                buttonColor={themeState.buttonColor}
              />
            </Stepper.Step>
            <Stepper.Step
              icon={<FiCheck />}
              label="Account Mandate"
              description="Get full access"
            >
              <TitleHeader
                title="Account Categorization Information"
                headerColor={themeState.headerColor}
                defaultColorTheme={defaultColorTheme}
                buttonColor={themeState.headerColor}
                themeColor1={themeColor1}
                themeColor2={themeColor2}
                themeColor3={themeColor3}
                themeColor4={themeColor4}
                themeColor5={themeColor5}
                blue="blue"
                defaultId="defaultID"
                nextColor={themeState.nextColor}
              />
              <AccountMandate
                buttonColor={themeState.buttonColor}
                headerColor={themeState.headerColor}
                backgroundImage={themeState.backgroundImage}
                nextColor={themeState.nextColor}
              />
            </Stepper.Step>
            <Stepper.Step
              icon={<FiDollarSign />}
              label="EBanking / Customer Risk Analysis"
              description="Get full access"
            >
              Step 3 content: Get full access
            </Stepper.Step>
            <Stepper.Step
              icon={<FiUserPlus />}
              label="Account Referees"
              description="Get full access"
            >
              Step 3 content: Get full access
            </Stepper.Step>
            <Stepper.Step
              icon={<FiShield />}
              label="Anti-Money Laundering"
              description="Get full access"
            >
              Step 3 content: Get full access
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </div>

        <Group position="right" mt="xl">
          <Button radius="10px" variant="default" onClick={prevStep}>
            Previous
          </Button>
          <Button radius="10px" color={themeState.nextColor} onClick={nextStep}>
            Next
          </Button>
        </Group>
      </div>
    </div>
  );
}

export default StepperComponent;
