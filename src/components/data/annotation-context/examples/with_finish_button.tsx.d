import * as React from "react";
import AnnotationContext from "@cloudscape-design/components/annotation-context";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Hotspot from "@cloudscape-design/components/hotspot";
export default () => {
  return (
    <AnnotationContext
      currentTutorial={{
        tasks: [
          {
            title: "View transcription details",
            steps: [
              {
                title: "Navigate to details page",
                content: "Click on the resource name to see resource details.",
                hotspotId: "transcription-jobs-new-transcription-job-name",
              },
              {
                title: "See preview",
                content: "Preview your transcribed text.",
                hotspotId: "transcription-job-details-transcription-preview",
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
      <Container
        header={
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <Header description="Select download to save a local copy of the transcription.">
              {" "}
              Transcription preview{" "}
            </Header>{" "}
            <Hotspot
              hotspotId="transcription-job-details-transcription-preview"
              direction="right"
            />{" "}
          </div>
        }
      >
        {" "}
        machine learning is employed in a range of computing tasks where
        designing and programming explicit algorithms with good performance is
        difficult or infeasible Example Applications include email filtering
        detection of network intruders and computer vision Machine learning is
        closely related to computational statistics which also focuses on
        predictions making through the use of computer It has strong ties to
        mathematical optimization which delivers methods theory and application
        domains to the field{" "}
      </Container>{" "}
    </AnnotationContext>
  );
};
