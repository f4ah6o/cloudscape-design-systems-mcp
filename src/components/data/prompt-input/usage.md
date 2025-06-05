## General guidelines

### Do

  * Use prompt input component in the [generative AI chat](/patterns/genai/generative-AI-chat/).
  * To display information regarding [character count](/components/form-field/?tabId=playground&example=with-character-count) in the prompt input, use constraint text in the [form field](/components/form-field/) component.
  * Every prompt input without an action button should have a visible label. Use the [form field](/components/form-field/) for labelling your prompt inputs. Prompt inputs with action buttons don’t require labels. The action button serves as the label.
  * When the prompt input is in a disabled or read-only state, all content inside `secondaryActions` and `secondaryContent` should also be in that state.



### Don't

  * Don’t use prompt input with an action button as a replacement for [input](/components/input/) or [text area](/components/textarea/) in a form. This helps users avoid confusion regarding what is being submitted.



## Features

### Features

  * #### Input area

An input area that enables users to enter text. For example, type in a text prompt in a generative AI chat. 

  * #### Multiple lines \- optional

You can set a minimum and maximum number of rows for the input. By default, it displays one row as the minimum and three rows as the maximum. However, choose the minimum number of rows displayed based on the length of prompts entered in majority of use cases in your product. For example, if users typically enter longer prompts, display two rows by default.

  * #### Placeholder \- optional

A hint or suggested action that helps users enter a prompt. For example: _Ask a question_

  * #### Action button \- optional

An action button that allows users to execute the prompt in the input area. For example, a send icon button to let users send their text prompts as described in [generative AI chat](/patterns/genai/generative-AI-chat/).

  * #### Keyboard navigation

    * Users can press the Enter key to trigger the action.

    * Users can press the Shift + Enter keys to move to a new line. 

  * #### Secondary actions \- optional

Additional actions that are related to the prompt input. For example, uploading files, switching response contexts, or conversation settings. Recommended components for this slot are the [button group](/components/button-group/) or [icon button](/components/button/?tabId=playground&example=icon-button).

  * #### Secondary content \- optional

Secondary content related to the prompt. For example, file attachments or images.




### States

  * #### Disabled

Use the disabled state when users cannot interact with input and to prevent users from modifying the value.




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

#### Placeholder 

  * Follow the writing guidelines for [placeholder text](/patterns/genai/generative-AI-chat/) on generative AI chat pattern.




#### Constraint text

  * Follow the writing guidelines for [constraint text](/components/form-field/?tabId=usage#writing-guidelines).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * Set the `actionButtonAriaLabel` dependent on the icon type.

  * All controls should have a label for screen readers to read on focus.

  * The placeholder disappears when the user has typed in the input area. For important information that you want to persist on the page, use [constraint text](/components/form-field/?tabId=usage#features) instead.

  * When adding dismissable content to the `secondaryContent` slot, such as attachments, focus should return to the input if all elements are dismissed. Do this by calling the `focus()` function once all elements are dismissed. Similarly, if an attachment is added, focus should move to the dismiss button of that attachment.



