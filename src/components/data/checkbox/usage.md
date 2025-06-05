## General guidelines

### Do

  * Use checkboxes to allow users to select any number of options; including zero, one, or several. 
  * Each checkbox is independent of all other checkboxes in a group, and checking one box doesn’t uncheck the others. 
  * Only use the indeterminate state on the parent checkbox of a nested group or table when at least one nested item is selected.
  * If only one option can be selected from a group (mutually exclusive selection), use a [radio group](/components/radio-group/). 
  * If the group of non-mutually exclusive options is higher than seven, use [multiselect](/components/multiselect/).
  * Use for options that turn a group of elements on or off, for example progressive disclosure of form elements. If the group of sub-elements contains other checkboxes, use [toggle](/components/toggle/), a [radio group](/components/radio-group/), or [tiles](/components/tiles/).
  * Use where a description of the selected (on/activated/enabled) state is sufficient to understand the implications of the option. Use [tiles](/components/tiles/) or a [radio group](/components/radio-group/) if you need to explicitly describe both the _on_  and _off_  states, for example to describe cost or performance implications.
  * When providing a default selection state, consider what the recommended or most likely choice for a user should be.
  * Follow the guidelines for [selection in forms](/patterns/general/selection/).
  * Follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).



### Don't

  * Don’t use for options that require descriptions to understand the implications of both the _on_  and _off_  states. Use a [radio group](/components/radio-group/) or [tiles](/components/tiles/) instead.
  * Don’t use for options that take immediate effect, for example to switch between light and dark mode. Use a [toggle](/components/toggle/) instead. 
  * Don’t label a checkbox as optional. When the user submits a form with a checkbox, they make a binary choice for that option.



## Features

  * #### Single checkbox

Checkboxes can be used alone, and are used to set a value to _true_ or _false_. The checkbox label copy should be a statement that the check mark makes true, and the absence of a check mark makes false. Use it only if the meaning of the binary choice is obvious.

    * **Checked** means that the state described by the checkbox text applies, or that the item has been selected.

    * **Unchecked** means that the state described by the checkbox text does not apply, or that the item is not selected.

  * #### Checkbox group

Use a group of checkboxes for selecting none, one, or multiple values that are not mutually exclusive. Checkbox groups must have a group label for context and clarity. List the group options in a logical order, such as alphabetical, numerical, time-based, or some other clear system; this can include nesting items.

    * **Checked** means that the state described by the checkbox text applies, or that all of the nested items are selected.

    * **Unchecked** means that the state described by the checkbox text does not apply, or that none of the nested items are selected.

    * **Indeterminate** state means that some of the nested items are selected. This state only applies to the parent checkbox in a list or table. Selecting the checkbox when it is in this state will select all items in a list or table. This state is purely a visual indicator to show partial selection of nested items. The actual value of the checkbox is still false.




### States

  * #### Disabled

Use the disabled state when the value needs to be excluded from a set, or cannot be modified.

  * #### Read-only

Use the read-only state when the checkbox data is not to be modified by the user but they still need to view it.




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

  * Limit a checkbox label to a single line.

  * Do not use ending punctuation for checkbox labels.

  * Be explicit about the action that will follow if the user selects the checkbox.

  * Use positive wording where possible. 

    * For example: use _Turn on sync_ instead of _Turn off sync_

  * Avoid negations such as _don’t send alarm notifications._ It confuses users because they have to select a checkbox in order for something not to happen.

  * In the rare case where you need users to select a checkbox to agree to the terms of service, use the first person.

    * For example: I agree to the terms of service. 

    * See a full example of a [terms and conditions form field](/components/form-field/?tabId=playground&example=terms-and-conditions).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Labels and descriptions

  * Make sure that checkboxes have meaningful labels. Add a description if necessary to provide a broader description of the checkbox.

  * Checkbox labels and descriptions are part of the clickable/focusable area of the control, so they should not contain interactive content (for example, links). Place links at the [form field](/components/form-field/) level instead.

  * Use the [form field component](/components/form-field/) to group multiple checkboxes under a single label.



