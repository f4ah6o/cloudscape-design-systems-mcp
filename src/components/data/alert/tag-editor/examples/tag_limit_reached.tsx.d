import * as React from "react";
import TagEditor from "@cloudscape-design/components/tag-editor";
export default () => {
  const [tags, setTags] = React.useState([
    { key: "some-existing-key-1", value: "some-value-1", existing: true },
    { key: "some-custom-key-1", value: "some-value-1", existing: false },
    { key: "some-custom-key-2", value: "some-value-2", existing: false },
  ]);
  return (
    <TagEditor
      i18nStrings={{
        tagLimit: (availableTags, tagLimit) =>
          availableTags === tagLimit
            ? "You can add up to " + tagLimit + " tags."
            : availableTags === 1
              ? "You can add up to 1 more tag."
              : "You can add up to " + availableTags + " more tags.",
      }}
      tags={tags}
      onChange={({ detail }) => setTags(detail.tags)}
      keysRequest={() =>
        Promise.resolve([
          "some-existing-key-3",
          "some-existing-key-4",
          "some-existing-key-5",
        ])
      }
      valuesRequest={(key, value) =>
        key
          ? Promise.resolve(["value 1", "value-2", "value-3"])
          : Promise.reject()
      }
      tagLimit={3}
    />
  );
};
