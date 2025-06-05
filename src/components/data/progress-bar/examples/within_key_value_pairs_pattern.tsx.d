import * as React from "react";
import ProgressBar from "@cloudscape-design/components/progress-bar";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Link from "@cloudscape-design/components/link";
export default () => {
  return (
    <Container header={<Header variant="h2">Header</Header>}>
      {" "}
      <KeyValuePairs
        columns={2}
        items={[
          { label: "Label for key", value: "Value" },
          {
            label: "Progress bar label",
            id: "progress-bar-id",
            value: (
              <ProgressBar
                ariaLabelledby="progress-bar-id"
                value={36}
                variant="key-value"
                additionalInfo="Additional information"
                description="Progress bar description"
              />
            ),
          },
          {
            label: "Label for key",
            value: (
              <StatusIndicator> Value for positive status </StatusIndicator>
            ),
          },
          {
            label: "Label for key",
            value: (
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                external={true}
                variant="primary"
                ariaLabel="Label for key"
              >
                {" "}
                Value with external link{" "}
              </Link>
            ),
          },
        ]}
      />{" "}
    </Container>
  );
};
