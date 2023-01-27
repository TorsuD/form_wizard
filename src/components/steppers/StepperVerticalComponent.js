import { useState } from "react";
import { Stepper, Button, Group, Flex } from "@mantine/core";
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

function StepperVerticalComponent() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className="stepper">
      <div>
        <Stepper
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
            <Individual />
          </Stepper.Step>
          <Stepper.Step
            icon={<FiMail />}
            label="Account Details"
            description="Verify email"
          >
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Step
            icon={<FiCheck />}
            label="Account Mandate"
            description="Get full access"
          >
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Step
            icon={<FiDollarSign />}
            label="EBanking/Customer Risk Analysis"
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

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </div>
    </div>
  );
}

export default StepperVerticalComponent;
