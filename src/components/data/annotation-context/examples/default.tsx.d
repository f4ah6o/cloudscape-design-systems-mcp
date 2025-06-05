import * as React from "react";
import AnnotationContext from "@cloudscape-design/components/annotation-context";
import Form from "@cloudscape-design/components/form";
import Hotspot from "@cloudscape-design/components/hotspot";
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Checkbox from "@cloudscape-design/components/checkbox";
export default () => {
  return (
    <AnnotationContext
      currentTutorial={{
        tasks: [
          {
            title: "Create a bucket",
            steps: [
              {
                title: "Name the bucket",
                content: (
                  <>
                    {" "}
                    Create a bucket name. Bucket names can consist only of
                    lowercase letters, numbers, dots (.), and hyphens (-).{" "}
                    <Link variant="info">Info</Link>{" "}
                  </>
                ),
                hotspotId: "bucket-name",
              },
              {
                title: "Block all public access",
                content: (
                  <>
                    {" "}
                    Keep this checkbox selected to prevent unauthorized access
                    to your bucket. <Link variant="info">Info</Link>{" "}
                  </>
                ),
                hotspotId: "block-public-access-checkbox",
                warningAlert:
                  "Selecting a different value for this checkbox from the recommendation of the tutorial can result in your data being exposed to unauthorized access.",
              },
              {
                title: "Create bucket",
                content: "Submit the form to create the bucket.",
                hotspotId: "create-bucket-button",
              },
            ],
          },
        ],
      }}
      i18nStrings={{
        stepCounterText: (stepIndex, totalStepCount) =>
          "Step " + (stepIndex + 1) + "/" + totalStepCount,
        taskTitle: (taskIndex, taskTitle) =>
          "Task " + (taskIndex + 1) + ": " + taskTitle,
        labelHotspot: (openState, stepIndex, totalStepCount) =>
          openState
            ? "close annotation for step " +
              (stepIndex + 1) +
              " of " +
              totalStepCount
            : "open annotation for step " +
              (stepIndex + 1) +
              " of " +
              totalStepCount,
        nextButtonText: "Next",
        previousButtonText: "Previous",
        finishButtonText: "Finish",
        labelDismissAnnotation: "dismiss annotation",
      }}
    >
      {" "}
      <Form
        actions={
          <Hotspot side="right" hotspotId="create-bucket-button">
            {" "}
            <Button variant="primary"> Create bucket </Button>{" "}
          </Hotspot>
        }
      >
        {" "}
        <SpaceBetween direction="vertical" size="l">
          {" "}
          <FormField label="Bucket name">
            {" "}
            <Hotspot side="right" hotspotId="bucket-name">
              {" "}
              <Input />{" "}
            </Hotspot>{" "}
          </FormField>
          <Checkbox checked={true}>
            {" "}
            Block public access{" "}
            <Hotspot
              side="right"
              hotspotId="block-public-access-checkbox"
            />{" "}
          </Checkbox>{" "}
        </SpaceBetween>{" "}
      </Form>{" "}
    </AnnotationContext>
  );
};
