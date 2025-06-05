## General guidelines

### Do

  * Use only when the [file upload](/components/file-upload/) can’t be used, such as with [prompt input](/components/prompt-input/).
  * Use in combination with [file input](/components/file-input/) and [file token group](/components/file-token-group/) to configure the file uploading experience for users.



### Don't

  * Don’t put anything inside the file dropzone other than description text or a [file input](/components/file-input/).



## Features

  * #### Visibility

By default, the file dropzone is always visible. Hide the dropzone until a file is being dragged into the browser when file upload is a secondary action, or when space is limited, such as in the [prompt input](/components/prompt-input/). See [development guidelines](/components/file-dropzone/?tabId=api#development-guidelines) for more details on how to toggle visibility.

Note that in the file upload component, the file dropzone is invisible until a file is being dragged. 




## Writing guidelines

### General writing guidelines

  * Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.

  * Use end punctuation, except in [headers](/components/header/?tabId=usage) and [buttons](/components/button/?tabId=usage). Don’t use exclamation points.

  * Use present-tense verbs and active voice.

  * Don't use _please_ , _thank you_ , ellipsis (_..._), ampersand (_&_), _e.g._ , _i.e._ , or _etc._ in writing.

  * Avoid directional language.

    * For example: use _previous_ not _above_ , use _following_ not _below_.

  * Use device-independent language.

    * For example: use _choose_ or _select_ not _click_.




### Component-specific guidelines

#### Text

  * Use action verbs that reflect the goal of the drop. Don’t change the text on file drag.

  * Use this text: _Drop file here_ (single) _or Drop files here_ (multiple)




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.



