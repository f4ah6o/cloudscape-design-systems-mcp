import * as React from "react";
import Wizard from "@cloudscape-design/components/wizard";
export default () => {
  const [activeStepIndex, setActiveStepIndex] = React.useState(1);
  return (
    <Wizard
      i18nStrings={{
        stepNumberLabel: (stepNumber) => `Step ${stepNumber}`,
        collapsedStepsLabel: (stepNumber, stepsCount) =>
          `Step ${stepNumber} of ${stepsCount}`,
        skipToButtonLabel: (step, stepNumber) => `Skip to ${step.title}`,
        navigationAriaLabel: "Steps",
        cancelButton: "Cancel",
        previousButton: "Previous",
        nextButton: "Next",
        optional: "optional",
      }}
      onNavigate={({ detail }) => setActiveStepIndex(detail.requestedStepIndex)}
      activeStepIndex={activeStepIndex}
      submitButtonText="Launch instance"
      steps={[
        {
          title: "Choose instance type",
          content: (
            <Container
              header={<Header variant="h2"> Form container header </Header>}
            >
              {" "}
              <SpaceBetween direction="vertical" size="l">
                {" "}
                <FormField label="First field">
                  {" "}
                  <Input />{" "}
                </FormField>{" "}
                <FormField label="Second field">
                  {" "}
                  <Input />{" "}
                </FormField>{" "}
              </SpaceBetween>{" "}
            </Container>
          ),
        },
        {
          title: "Review and launch",
          content: (
            <SpaceBetween size="xs">
              {" "}
              <Header
                variant="h3"
                actions={
                  <Button onClick={() => setActiveStepIndex(0)}> Edit </Button>
                }
              >
                {" "}
                Step 1: Instance type{" "}
              </Header>{" "}
              <Container
                header={<Header variant="h2"> Container title </Header>}
              >
                {" "}
                <KeyValuePairs
                  columns={2}
                  items={[
                    { label: "First field", value: "Value" },
                    { label: "Second Field", value: "Value" },
                  ]}
                />{" "}
              </Container>{" "}
            </SpaceBetween>
          ),
        },
      ]}
    />
  );
};
