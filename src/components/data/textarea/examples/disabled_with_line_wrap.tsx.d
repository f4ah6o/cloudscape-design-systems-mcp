import * as React from "react";
import Textarea from "@cloudscape-design/components/textarea";
export default () => {
  const [value, setValue] = React.useState(
    "Long value, enough to line wrap and have scroll bars.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Donec venenatis magna lacus. Sed augue ante, egestas a ultrices condimentum, fringilla in erat. Proin dictum lacus quis metus volutpat viverra. Fusce aliquet leo ut risus venenatis, malesuada pulvinar magna bibendum. Integer pellentesque magna nisl, eget suscipit eros ultrices nec. Proin neque mi, porttitor quis lacinia ut, feugiat nec nulla. Proin sed facilisis leo, quis pharetra massa. Nam congue laoreet eros, eu feugiat metus posuere eget. Quisque accumsan diam a arcu condimentum, ac congue nulla laoreet. Aliquam tempor ligula eu consectetur vehicula. Donec hendrerit purus ligula, ut vulputate enim consectetur eget.",
  );
  return (
    <Textarea
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      disabled
      rows={2}
    />
  );
};
