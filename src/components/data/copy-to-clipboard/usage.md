## General guidelines

### Do

  * Use copy to clipboard to give users a consistent mechanism for quickly copying values or text data.



## Features

  * #### Variants

    * **Button:**

      * If users need to copy a large or formatted block of content, for example a snippet of code, the content is paired with a corresponding copy action button. 

    * **Inline:**

      * Enable users to quickly copy a string of text.

        * For example: Copy a long URL within a table or an Amazon Resource Name (ARN) within a list of [key-value pairs](/components/key-value-pairs/) (see live example in the [details page demo](/examples/react/details.html)).

    * **Icon:** When creating a collection of contextual and persistent triggers that enable users to perform a series of actions including copying to clipboard, use the icon variant.

  * #### Copy confirmation

A popover with a status indicator and text string confirms the success of the action, or communicates if an error occurs. 




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

#### Button label

  * For the [normal button](/components/button/?example=normal-button) used for copying a block of content, use this text: _Copy_




#### Popover

  * Provide a precise name to the content intended for copying.

    * For example: _Sample code copied_

  * For success text, use the format: _[Name of the content] copied_

    * For example:_Secret ARN copied_

  * For error text, use the format: _[Name of the content] failed to copy_

    * For example:_ARN failed to copy_




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.



