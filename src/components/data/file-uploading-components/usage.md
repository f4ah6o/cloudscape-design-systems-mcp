## Related components

### [File dropzone]({get_link_resource: /components/file-dropzone/})

An area that allows users to drag and drop files.

### [File input]({get_link_resource: /components/file-input/})

A trigger that allows users to select one or more files to upload.

### [File token group]({get_link_resource: /components/file-token-group/})

A collection of uploaded files displayed as tokens.

### [File upload]({get_link_resource: /components/file-upload/})

File upload is a form element. Users can use it to select one or multiple local files to upload. The files can then be uploaded upon form submission or processed further in the browser.

## How the components work together

File uploading consists of four components: one parent component and three sub-components. These components can be configured together to create a full file upload experience.  
  
The [file upload]({get_link_resource: /components/file-upload/}) is a pre-built combination of a [file input]({get_link_resource: /components/file-input/}), [file token group]({get_link_resource: /components/file-token-group/}), and [file dropzone]({get_link_resource: /components/file-dropzone/}). The file input is the trigger that allows the user to select files to upload. The file token group is the set of uploaded files displayed as tokens. The file dropzone is an area where a user can drag and drop files in order for them to be uploaded.  
  
The file upload component covers standard use cases for file uploading, including in forms and create flows, and, in most cases, is the only component you need. For other use cases, you may need more flexible layouts for uploading files. Examples of this include placing the file tokens in a separate area from the file input, showing file data in a table instead of tokens, or showing the file dropzone even before a file is being dragged. In these cases, you can use the three sub-components in different combinations to create unique layouts.  
  
For an example of all three file uploading components working together, see the [prompt input]({get_link_resource: /components/prompt-input/}).

![](/__images/yvlrib0vb3vb/7GVPnZW99YPjxRxwAZpMyV/51d124b7a74dba1b1e94d265f55320d1/file_uploading_light.png)![](/__images/yvlrib0vb3vb/7vGt4FyZ8NsagtBqs4lmkd/b5cd79afddea24adfd69b48cacdf679f/file_uploading_dark.png)

A

B

C
