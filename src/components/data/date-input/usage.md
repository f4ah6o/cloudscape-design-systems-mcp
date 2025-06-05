## General guidelines

### Do

  * Prefer using [date picker]({get_link_resource: /components/date-picker/}), and only fall back to date input if absolutely needed.
  * Always include the required input format in the constraint text, along with any other format constraints. You should also include the format in the placeholder text.
  * Follow the guidelines for [disabled and read-only states]({get_link_resource: /patterns/general/disabled-and-read-only-states/}).



### Don't

  * Don't use a date input where a [date picker]({get_link_resource: /components/date-picker/}) can be used instead.
  * Don't use a date input for fields that require relative date periods, such as _in 3 days_. Instead, use [input]({get_link_resource: /components/input/}) or [select]({get_link_resource: /components/select/}).
  * Don't add logic for date formatting. Instead, rely on the default behavior for separator insertion and capped values for year, month, and day.



## Features

  * #### Date input

Users can input a date by either entering or pasting a date in the input field. You can also provide a value as a default. 

    * Forward slashes (/) are used to separate the year, month, and day. These populate automatically as the user enters a value.

    * Other delimiters such as hyphens (-), periods (.) and spaces ( ) are also accepted, but will be replaced by a forward slash (/).

    * The value in the input will appear in the format _YYYY/MM/DD_ , but the actual value will be sent in the format _YYYY-MM-DD_. 

Follow the guidelines for [input]({get_link_resource: /components/input/?tabId=usage}). 

  * #### Placeholder text

Use placeholder text to indicate the accepted date format.

    * For example: _YYYY/MM/DD_

Follow the guidelines for [input]({get_link_resource: /components/input/?tabId=usage}).  


  * #### Constraint text \- optional

Use constraint text for date input constraints. For example, an accepted date format, such as _YYYY/MM/DD_. We recommend working with your localization team to format times tailored to your users' region.

  * #### Validation \- optional

Error and warning messages can be displayed per input field, below the input field, or above any constraint text. Use standard form field [validation]({get_link_resource: /patterns/general/errors/validation/}).




### States

  * #### Disabled

Use the disabled state when users cannot interact with input and to prevent users from modifying the value. 

  * #### Read-only

Use the read-only state when the input data is not to be modified by the user but they still need to view it.




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



