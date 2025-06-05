## General guidelines

### Do

  * If the label isn't sufficiently describable in a single line, provide the user with assistance with an info link that opens the help panel with more information.
  * Use hyphen (-) for any empty values.
  * Place a title above groupings of similar key-value pairs to help the user understand the relationship of the group of pairs.
  * Values may contain icons. Acceptable icons are status indicators and the external link icon. Status indicators are left-aligned, and external link icons are to the right of the end of the text.



### Don't

  * Don't collapse data using ellipses (...) or other characters; always show the full string for both label and value.
  * Don't use key-value pairs to display read-only controls in forms. Instead, follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).



## Features

  * #### Layout

The layout is based on our [column layout](/components/column-layout/?tabId=playground), and can have between one and four columns. The types of layout are:  


    * **Default layout:** Key-value pairs are displayed without any additional visual grouping.

    * **Group layout:** Multiple key-value pairs can be visually grouped within columns.

    * **Combined layout:** Both default and group layouts can be utilized within the same area, providing flexibility in data presentation.

  * #### Label

A descriptor used for the key-value pair property (label) that identifies the corresponding value.

  * #### Value

The value of key-value pairs can be any elements, but recommended patterns include:  


    * Text string or number: For example, the distribution ID.

    * [Status indicator](/components/status-indicator/): For example, to show the status of a task, failed or successful.

    * [Link](/components/link/?tabId=playground&example=primary-link): For example, linking to a resource to view more details.

    * Copy to clipboard: For example, copying a ARN. Use [inline copy to clipboard](/components/copy-to-clipboard/?tabId=playground&example=inline-variant) variant to enable users to quickly copy a string of text.

    * [Progress bar](/components/progress-bar/?tabId=playground&example=within-key%2Fvalue-pairs-pattern): When using a progress bar to inform users of an operation within a value, ensure only one label is used, either on the key-value pairs or on the progress bar component.

  * #### Info link \- optional

Next to the label, an additional [info link](/components/link/?tabId=playground&example=info-link) can be displayed to provide further information. Follow the guidelines for [info link](/components/link/?tabId=playground&example=info-link).




### States

  * #### Loading

The state of the value while the data is being loaded before being displayed. Follow the guidelines for [spinner](/components/spinner/?tabId=usage).

  * #### Empty

The state of the component when there is no value to display. Use hyphen (-) for any empty values. 




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

#### Label

  * Keep labels concise, at most 1-3 words.




#### Titles

  * Place a title above groupings of similar key-value pairs to help the user understand the relationship of the group of pairs.

  * Follow the writing guidelines for [header](/components/header/?tabId=usage#writing-guidelines).




#### Links

  * Follow the writing guidelines for [link](/components/link/?tabId=usage#writing-guidelines).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Icons

  * Follow the accessibility guidelines for [icon](/components/icon/?tabId=usage#accessibility-guidelines).




#### Links

  * Follow the accessibility guidelines for [link](/components/link/?tabId=usage#accessibility-guidelines).



