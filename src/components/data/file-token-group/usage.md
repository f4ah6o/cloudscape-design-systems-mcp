## General guidelines

### Do

  * Use only when the [file upload]({get_link_resource: /components/file-upload/}) cannot be used. For example, with [prompt input]({get_link_resource: /components/prompt-input/}).
  * Use in combination with [file input]({get_link_resource: /components/file-input/}) and [file dropzone]({get_link_resource: /components/file-dropzone/}) to configure the file uploading experience for users.
  * By default, tokens stack vertically to allow for easy scanning. In layouts where more compact, horizontal tokens would be beneficial, use horizontal alignment. For example, in the prompt input.



## Features

  * #### File metadata

File metadata helps the user to validate and compare the files selected. Choose the most relevant file metadata to display, based on your use case. The types of metadata that can be displayed per file are:

    * Name (each file name). This should not include path information.

    * Size (expressed in bytes) - _optional_

      * For example, KB (kilobyte), MB (megabyte), GB (gigabyte).

    * Last modified date - _optional_

    * Image thumbnail - _optional_

  * #### Alignment

By default, tokens stack vertically to allow for easy scanning. In instances where compact tokens would be beneficial, horizontal stacking can be used instead.

  * #### Token truncation \- optional

By default, all file tokens are visible. If you expect the majority of users to upload a small number of files, you can choose to include token truncation. If you know how many files are typically uploaded, hide file tokens above that number. To toggle the visibility of the tokens, users can trigger the show/hide link, which shows or hides the tokens.




### States

  * #### Invalid

Shows that there is an error with a file that the user has uploaded.

  * #### Warning

Indicates a condition regarding a file, which doesn't generate an error, but requires user attention.

  * #### Loading

Shows a loading spinner when a file is in the process of being uploaded.




## Writing guidelines

### General writing guidelines

  * Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.

  * Use end punctuation, except in [headers]({get_link_resource: /components/header/?tabId=usage}) and [buttons]({get_link_resource: /components/button/?tabId=usage}). Don’t use exclamation points.

  * Use present-tense verbs and active voice.

  * Don't use _please_ , _thank you_ , ellipsis (_..._), ampersand (_&_), _e.g._ , _i.e._ , or _etc._ in writing.

  * Avoid directional language.

    * For example: use _previous_ not _above_ , use _following_ not _below_.

  * Use device-independent language.

    * For example: use _choose_ or _select_ not _click_.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




#### Alternative text

Specify alternative text for the remove icon in the tokens.

  * For example: _Remove file._

  * When there are multiple files, include the specific file index. For example: _Remove file 1._




####  Announcing files uploading

When uploading files, set the `loading` property per file token, and use the [live region]({get_link_resource: /components/live-region/}) component to announce the loading state. When uploading multiple files, use a single announcement message, for example: "Uploading 2 files".  

