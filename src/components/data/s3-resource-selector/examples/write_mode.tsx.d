import * as React from "react";
import S3ResourceSelector from "@cloudscape-design/components/s3-resource-selector";
export default () => {
  const [resource, setResource] = React.useState({ uri: "" });
  return (
    <S3ResourceSelector
      onChange={({ detail }) => setResource(detail.resource)}
      resource={resource}
      objectsIsItemDisabled={(item) => !item.IsFolder}
      fetchBuckets={() =>
        Promise.resolve([
          {
            Name: "bucket-fugiat",
            CreationDate: "December 27, 2019, 22:16:38 (UTC+01:00)",
            Region: "Middle East (Bahrain) me-south-1",
          },
          {
            Name: "bucket-ut",
            CreationDate: "July 06, 2019, 12:41:19 (UTC+02:00)",
            Region: "US East (N. Virginia) us-east-1",
          },
          {
            Name: "bucket-veniam",
            CreationDate: "June 13, 2019, 18:32:38 (UTC+02:00)",
            Region: "US East (N. Virginia) us-east-1",
          },
        ])
      }
      fetchObjects={() =>
        Promise.resolve([
          { Key: "archive-2019", IsFolder: true },
          { Key: "archive-2020", IsFolder: true },
          {
            Key: "black-hole-5ns.zip",
            LastModified: "August 03, 2019, 19:26:58 (UTC+02:00)",
            Size: 66477663816,
            IsFolder: false,
          },
          {
            Key: "electron-8h.zip",
            LastModified: "November 06, 2019, 14:00:40 (UTC+01:00)",
            Size: 96909820974,
            IsFolder: false,
          },
          {
            Key: "galaxy-11s.zip",
            LastModified: "September 01, 2019, 14:55:50 (UTC+02:00)",
            Size: 71745423926,
            IsFolder: false,
          },
        ])
      }
      fetchVersions={() =>
        Promise.resolve([
          {
            VersionId: "f2ef887e-af4c-4003-ad16-153d1419c024",
            LastModified: "April 30, 2019, 05:21:44 (UTC+02:00)",
            Size: 29013625564809,
          },
          {
            VersionId: "82e5f938-fe82-4977-a39a-44a549e630c1",
            LastModified: "April 10, 2019, 21:21:10 (UTC+02:00)",
            Size: 25016305995260,
          },
          {
            VersionId: "88327c30-24d0-42d2-a72d-051d9d44a106",
            LastModified: "January 27, 2020, 14:39:58 (UTC+01:00)",
            Size: 33295634938053,
          },
        ])
      }
      selectableItemsTypes={["buckets", "objects"]}
    />
  );
};
