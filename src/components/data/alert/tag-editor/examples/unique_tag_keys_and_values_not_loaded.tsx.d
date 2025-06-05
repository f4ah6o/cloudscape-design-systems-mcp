import * as React from "react";
import TagEditor from "@cloudscape-design/components/tag-editor";
export default () => {
  const [tags, setTags] = React.useState([
    { key: "some-existing-key-1", value: "some-value-1", existing: true },
    { key: "some-existing-key-2", value: "some-value-2", existing: true },
    { key: "", value: "", existing: false },
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
        Promise.resolve(
          Array(201)
            .fill(0)
            .map((e, t) => `key-${t}`),
        )
      }
      valuesRequest={() => Promise.reject()}
    />
  );
};
