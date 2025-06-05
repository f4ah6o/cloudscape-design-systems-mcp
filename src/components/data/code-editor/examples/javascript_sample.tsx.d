import * as React from "react";
import CodeEditor from "@cloudscape-design/components/code-editor";
export default () => {
  const [preferences, setPreferences] = React.useState(undefined);
  const [loading, setLoading] = React.useState(false);
  return (
    <CodeEditor
      language="javascript"
      value="const pi = 3.14;"
      preferences={preferences}
      onPreferencesChange={(e) => setPreferences(e.detail)}
      loading={loading}
      themes={{ light: ["cloud_editor"], dark: ["cloud_editor_dark"] }}
    />
  );
};
