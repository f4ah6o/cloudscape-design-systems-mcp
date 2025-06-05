## General guidelines

### Do

  * Every input field should have a label. Use the [form field](/components/form-field/) component for labeling your inputs. 
  * In general, the length of an input field should accommodate 1-40 characters. You can shorten the length of a specific field if users typically will use fewer characters than 40. 
  * If users will need to copy and paste long text strings, your input field doesn't need to accommodate the entire string; instead, show only enough to allow users to determine whether what they've entered is correct. 
  * Remember to provide space for extra characters when localized into other languages. 
  * When there is a character amount constraint, use constraint text in the [form field](/components/form-field/) component to provide this information to the user. 
  * Follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).



## Features

  * #### Type

The type of control. The default type is text. Inputs with the `number` type use the native element behavior, which might vary slightly across browsers.

  * #### Placeholder \- optional

A hint or an example that helps users make a decision. For example, _johndoe@business.com_ as an example for an `email` input.

  * #### Autocomplete

Specifies whether browsers should turn on autocomplete for this input. In some cases, it might be appropriate to turn off autocomplete, such as for security-sensitive fields.




### States

  * #### Disabled

Use the disabled state when users cannot interact with input and to prevent users from modifying the value.

  * #### Read-only

Use the read-only state when the input data is not to be modified by the user but they still need to view it.

  * #### Invalid

Shows that there is an error with an input that the user entered into the input field.

  * #### Warning

Indicates a condition regarding user-input in the field, which doesn't generate an error, but requires user attention.  





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

#### Placeholder text

  * You can include brief hint (placeholder) text inside an input field to indicate what the user should type into the field (that is, an example of the expected value of the input field such as _example.com_ for a Domain name field or _YYYY/MM/DD_ for a date field).

  * Leave the field blank if the label is self-explanatory. Not every field requires a hint.

    * For example, users don’t need a hint for a field that is labeled _First name_. 

  * Keep the placeholder brief, and avoid truncation (all of the text should be immediately visible in the field).

  * Use lowercase, sentence case, or title case, depending on the placeholder.

    * For example:

      * _example.com_

      *  _Default-Environment-1_

      *  _My S3 path_

  * Don’t use terminal punctuation.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Input

  * Labels should always be visible. Don’t use placeholders instead of labels, because  
clicking in the field makes the placeholder disappear.

  * When showing or hiding a password, manipulate it with its own control (checkbox). Each control field should serve only one purpose.

  * When using search input, provide alternative text with the `ariaLabel` or `ariaLabelledby` properties to indicate it is a search field. 



