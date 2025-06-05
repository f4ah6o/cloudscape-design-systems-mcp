## General guidelines

### Do

  * Always provide a label with the text area.
  * When there is a character amount constraint, use constraint text in the [form field](/components/form-field/) component to provide this information to the user. 
  * Provide a text input area large enough to accommodate the information. Avoid scrolling as much as possible. 
  * Follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).



## Features

  * #### Placeholder

A text area can have a placeholder (or hint text) that’s displayed in a ghosted color and disappears when the user has typed in the text area.




### States

  * #### Disabled

Use the disabled state when users cannot interact with input and to prevent users from modifying the value. 

  * #### Read-only

Use the read-only state when the input data is not to be modified by the user but they still need to view it.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Labels should always be visible. Don’t use placeholders instead of labels, because placeholders disappear when the user interacts with the field.



