## General guidelines

### Do

  * Use constraint text to indicate the file constraints upfront.
  * Use last modified date and image thumbnail file metadata sparingly. Use those types of metadata if they are key to compare and distinguish between files.
  * Use single file upload or multiple files upload appropriate to your use case.



## Features

  * #### Single file upload

Use to limit the selection to a single file for upload from the user's local drive. The file is displayed as a token and can be removed.

  * #### Multiple files upload

Use to allow the selection of multiple files for upload from the user's local drive. The files are displayed as tokens and can be removed individually.

  * #### Label

Use the label to describe the file type or its purpose. Follow the guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage}). For example: _User data_

  * #### Description \- optional

Use the description to state what the action will do in the context for the form. Follow the guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage}). For example: _The files selected will be uploaded to this S3 bucket._

  * #### Hint text \- optional

Include all constraints that the file must match in the hint text, such as size or file type. Make sure to specify and implement validation for which file types are acceptable. Activate or deactivate non-compliant files in the folder window. Follow the guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage}).

  * #### Drag and drop

Allow users to drag and drop to upload single or multiple files.

  * #### File metadata

File metadata helps the user to validate and compare the files selected. Choose the most relevant file metadata to display, based on your use case. The types of metadata that can be displayed per file are:

    * Name - each file name. This should not include path information.

    * Size - expressed in bytes. For example, KB (kilobyte), MB (megabyte), GB (gigabyte).

    * Last modified date

    * Image thumbnail

  * #### Token

Tokens display file metadata and allow for individual removal. Tokens stack vertically, aligned with each other, to allow for easy scanning.

  * #### Token truncation \- optional

By default, all file tokens are visible. When most users will upload a small number of files, but some users will upload many files, you can choose to include token truncation. If you know how many files are typically uploaded, hide file tokens above that number, so most users will see all file tokens. To toggle the visibility of the tokens, users can trigger the show/hide link, which shows or hides them.

  * #### Validation

There are two types of validation for the file upload component, which are frequently used together:

    * **File specific validation messages**

      * Show inline file error and warning messages that are related to individual file tokens.

        * For example: _The file size exceeds the limit. Accepted file size is 250 KB max._

    * **Form level validation messages**

      * Show form level errors and warning messages that do not specifically relate to individual file tokens.

        * For example: _The combined file size can not exceed 200 MB._

After selection, the upload of the files is completed only when the user submits the form that contains the file upload component. For detailed information about how to communicate [error]({get_link_resource: /patterns/general/errors/error-messages/}) and success messages after the form submission, see [create flow]({get_link_resource: /patterns/resource-management/create/}) or [edit flow]({get_link_resource: /patterns/resource-management/edit/}).




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




### Component-specific guidelines

#### Labels

  * For example: _User data._

  * Follow the writing guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage#writing-guidelines}).




#### Descriptions

  * For example: _The files selected will be uploaded to this S3 bucket._

  * Follow the writing guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage#writing-guidelines}).




#### Hint text

  * A line of text explaining the requirements of the files.

    * For example:_The file must be .jpg or .png. 500 KB max file size._

  * Follow the writing guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage#writing-guidelines}).




#### Button

  * Use action verbs that reflect the goal of the selection. 

  * Use the format: _Choose file[s]_




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Specify alternative text for the remove icon in the tokens.

    * For example:_Remove file._

    * Or when there are multiple files include the specific file index. For example: _Remove file 1._



