import * as React from "react";
import ToggleButton from "@cloudscape-design/components/toggle-button";
export default () => {
  const [pressed, setPressed] = React.useState(false);
  return (
    <ToggleButton
      onChange={({ detail }) => setPressed(detail.pressed)}
      pressed={pressed}
      ariaLabel="Favorite"
      iconName="star"
      pressedIconName="star-filled"
    />
  );
};
