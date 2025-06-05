import * as React from "react";
import AnnotationContext from "@cloudscape-design/components/annotation-context";
import Hotspot from "@cloudscape-design/components/hotspot";
import Textarea from "@cloudscape-design/components/textarea";
export default () => {
  return (
    <AnnotationContext
      currentTutorial={{
        tasks: [
          {
            title: "Create access policy",
            steps: [
              {
                title: "Add permission for SNS to access ",
                content: (
                  <>
                    {" "}
                    Enter the following inline policy to allow read-only access
                    to the IAM console.{" "}
                    <pre>
                      {" "}
                      <code>{`{  "Version": "2012-10-17",  "Statement": {    "Effect": "Allow",    "Action": [      "iam:Get*",      "iam:List*",      "iam:Generate*"    ],    "Resource": "*"  }}`}</code>{" "}
                    </pre>{" "}
                  </>
                ),
                hotspotId: "inline-policy-input",
              },
              {
                title: "Create policy",
                content: "Submit the form to create the policuy.",
                hotspotId: "create-policy-button",
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
      <Hotspot hotspotId="inline-policy-input">
        {" "}
        <Textarea />{" "}
      </Hotspot>{" "}
    </AnnotationContext>
  );
};
