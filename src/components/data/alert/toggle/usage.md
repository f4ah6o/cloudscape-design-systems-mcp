## General guidelines

### Do

  * Use for an option that takes effect immediately, for example toggling versioning on an S3 bucket to enable or disable the storage of multiple versions of objects.
  * Use for options that turn a group of elements on or off, for example progressive disclosure of form elements.
  * Use when a description of the selected (on/activated/enabled) state is sufficient to understand the implications of the option. Use [tiles](/components/tiles/?tabId=playground) or a [radio group](/components/radio-group/?tabId=playground) if you need to explicitly describe both the on __ and off __ states, for example to describe cost or performance implications.
  * Follow the guidelines for [selection in forms](/patterns/general/selection/).



### Don't

  * Don’t change the label depending on the switch state. Use a [radio group ](/components/radio-group/?tabId=playground)instead, and display labels and description for both states.
  * Don't use a toggle for options that are activated at form submission, such as an acknowledgement of EULA or Terms and Conditions. In this case, use a [checkbox](/components/checkbox/).
  * Don’t use for options that require descriptions to understand the implications of both the on and off states. Use [radio group](/components/radio-group/?tabId=playground) or [tiles](/components/tiles/?tabId=playground) instead.
  * Don’t label a toggle as optional. When the user submits a form with a toggle, they make a binary choice for that option, either on or off.
  * Don’t use a toggle to turn groups of options on and off that contain other toggles. Instead, use [checkbox](/components/checkbox/), [radio group](/components/radio-group/?tabId=playground), or [tiles](/components/tiles/?tabId=playground) for the group of sub-elements.
  * Don’t hide the label for toggles in read-only state.



## Features

  * #### Label \- optional

A short description of the toggle.  


  * #### Description \- optional

A description can be used to define or provide additional context on the toggle.




### States

  * #### Disabled

Use the disabled state when users cannot interact with the toggle and to prevent users from modifying the value. 

  * #### Read-only

Use the read-only state when the toggle is not to be modified by the user but they still need to view it.




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

#### Labels

  * Follow the guidelines for [selection in forms](/patterns/general/selection/).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Provide a meaningful label for toggles through the `label` property.

  * The label should not change when the toggle state changes.

  * Follow the guidelines for associating multiple toggles with a single form field and to point to hint and error text, in the [API section](/components/toggle/?tabId=api).  




