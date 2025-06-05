## General guidelines

### Do

  * Use time input in forms, such as in [create flow]({get_link_resource: /patterns/resource-management/create/}) and [edit flow]({get_link_resource: /patterns/resource-management/edit/}). 
  * Always use placeholder text to show the required input format, and use constraint text to show any constraints.
  * Follow the guidelines for [disabled and read-only states]({get_link_resource: /patterns/general/disabled-and-read-only-states/}).



### Don't

  * Don't use a time input for fields that require relative timestamps, such as _in 30 mins_. Instead, use [input]({get_link_resource: /components/input/}) or [select]({get_link_resource: /components/select/}). 
  * Don't add logic for time formatting, rely instead on the default behavior for colon insertion and capped values for hours, minutes and seconds. 



## Features

  * #### Format

Specifies the granularity with which the time should be entered. For example: `hh:mm` for hours and minutes,  
or `hh:mm:ss` if the user should also enter seconds. Colons are populated automatically and are used to separate the units.

  * #### Constraint text \- optional

Use constraint text for time input constraints, such as accepted time format. You can use 12 or 24-hours format.  
By default the time input is set to 24-hours format. We recommend working with your localization team  
to format times tailored to the customer's region.

  * #### Placeholder

Use placeholder text to indicate the time format granularity. For example: `hh:mm` for hours and minutes,  
or `hh:mm:ss` if the user should also enter seconds.

Follow the guidelines for the [input]({get_link_resource: /components/input/}) component for other features.




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




### Component-specific guidelines

#### Label

  * Always include a label to specify what the absolute time value is for.

  * Use descriptive labels, such as the name of the resource or process.

    * For example:__ Maintenance window start time or API expiration.

  * Don't use _timestamp_ to label fields for time inputs.

  * Follow the writing guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage#writing-guidelines}).




#### Description

  * Avoid directive text that states the obvious, such as _Enter a time_.

  * Follow the writing guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage#writing-guidelines}).




#### Constraint text

  * Show the accepted time format. For uniformity, we recommend to use the 24-hour format.

    * For example:_Use 24-hour format._

  * Follow the writing guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage#writing-guidelines}).




#### Placeholder text

  * Show the accepted format using lowercase for times.

    * For example: _hh:mm:ss_

  * Follow the writing guidelines for [input]({get_link_resource: /components/input/?tabId=usage#writing-guidelines}).




#### Error text

  * Follow the general guidelines for [validation]({get_link_resource: /patterns/general/errors/validation/}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.



