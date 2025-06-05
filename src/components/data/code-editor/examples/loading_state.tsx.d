import * as React from "react";
import CodeEditor from "@cloudscape-design/components/code-editor";
export default () => {
  const [preferences, setPreferences] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  return (
    <CodeEditor
      preferences={preferences}
      onPreferencesChange={(e) => setPreferences(e.detail)}
      loading={loading}
      themes={{ light: ["cloud_editor"], dark: ["cloud_editor_dark"] }}
    />
  );
};
