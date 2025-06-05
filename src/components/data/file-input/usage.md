## General guidelines

### Do

  * Use only when the file upload can’t be used. For example, in [prompt input]({get_link_resource: /components/prompt-input/}).
  * Use in combination with [file token group]({get_link_resource: /components/file-token-group/}) and [file dropzone]({get_link_resource: /components/file-dropzone/}) to build a custom file uploading experience for users.



### Don't

  * Don’t use without having a representation of the uploaded files, such as the file token group or table with file data, in close proximity.
  * Don’t use without a file dropzone.



## Features

  * #### Variants

There are two types of file inputs:

    * **Button** \- Button file inputs have text and should be used in most cases.

      * For example, inside a file dropzone: _Choose files_

    * **Icon** \- Icon file inputs do not have accompanying text. Use when space does not allow for a button file input.

      * For example, in the secondary actions slot of a [prompt input]({get_link_resource: /components/prompt-input/})

  * #### Single file upload

Use to limit the selection to a single file for upload. Any additional file will replace the existing file.

  * #### Multiple files upload

Use to allow the selection of multiple files for upload. Additional files will be added to existing files.




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

#### Button

  * Use action verbs that reflect the goal of the selection.

  * Use this text: _Choose file_(single) or _Choose files_ (multiple)




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * By default, the file input’s text will be used as the aria label. If you are using the icon variant and the component does not have visible text, define a separate aria label.



