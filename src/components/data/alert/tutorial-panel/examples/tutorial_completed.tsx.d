import * as React from "react";
import TutorialPanel from "@cloudscape-design/components/tutorial-panel";
export default () => {
  return (
    <TutorialPanel
      tutorials={[
        {
          title: "Transcribe audio",
          completed: true,
          description: (
            <>
              {" "}
              <Box
                variant="p"
                color="text-body-secondary"
                padding={{ top: "n" }}
              >
                {" "}
                In this tutorial you will learn how to:{" "}
              </Box>{" "}
              <ul>
                {" "}
                <li>
                  {" "}
                  <Box variant="span" color="text-body-secondary">
                    {" "}
                    Transcribe an audio file from Amazon S3 to text{" "}
                  </Box>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Box variant="span" color="text-body-secondary">
                    {" "}
                    View the transcribed text{" "}
                  </Box>{" "}
                </li>{" "}
              </ul>{" "}
            </>
          ),
          completedScreenDescription:
            "You now know how to transcribe text from audio with Amazon Transcribe.",
          prerequisitesAlert: null,
          learnMoreUrl:
            "https://aws.amazon.com/getting-started/hands-on/create-audio-transcript-transcribe/",
          tasks: [],
        },
      ]}
      downloadUrl="https://example.com/my-service/all-tutorials.pdf"
      i18nStrings={{
        labelsTaskStatus: {},
        loadingText: "Loading",
        tutorialListTitle: "Choose a tutorial",
        tutorialListDescription:
          "Use our walk-through tutorials to learn how to achieve your desired objectives within Amazon Transcribe.",
        tutorialListDownloadLinkText: "Download PDF version",
        tutorialCompletedText: "Tutorial completed",
        labelExitTutorial: "dismiss tutorial",
        learnMoreLinkText: "Learn more",
        startTutorialButtonText: "Start tutorial",
        restartTutorialButtonText: "Restart tutorial",
        completionScreenTitle: "Congratulations! You completed the tutorial.",
        feedbackLinkText: "Feedback",
        dismissTutorialButtonText: "Dismiss tutorial",
        taskTitle: (taskIndex, taskTitle) =>
          `Task ${taskIndex + 1}: ${taskTitle}`,
        stepTitle: (stepIndex, stepTitle) =>
          `Step ${stepIndex + 1}: ${stepTitle}`,
        labelTotalSteps: (totalStepCount) => `Total steps: ${totalStepCount}`,
        labelLearnMoreExternalIcon: "Opens in a new tab",
        labelTutorialListDownloadLink: "Download PDF version of this tutorial",
        labelLearnMoreLink: "Learn more about transcribe audio (opens new tab)",
      }}
    />
  );
};
