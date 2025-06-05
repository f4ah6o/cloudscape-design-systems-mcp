import * as React from "react";
import Pagination from "@cloudscape-design/components/pagination";
export default () => {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(1);
  return (
    <Pagination
      currentPageIndex={currentPageIndex}
      onChange={({ detail }) => setCurrentPageIndex(detail.currentPageIndex)}
      pagesCount={5}
    />
  );
};
