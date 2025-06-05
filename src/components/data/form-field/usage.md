## General guidelines

### Do

  * Provide a label for every form control.
  * Use[ error text]({get_link_resource: /patterns/general/errors/error-messages/}) for server-side validation.
  * Indicate optional form fields by adding _optional_ on the label. Mandatory fields don't need to be marked. 
  * Always use the same icon for form field validation. Don't switch icons based on the status of the error message. 



### Don't

Use error validation for non-blocking messages. Use warning validation instead.


## Features

  * #### Label

A form field label is a short description of the corresponding control. Labels are displayed above the control or the form field description, if any exist.

When a label is supported with an [info link]({get_link_resource: /components/link/?tabId=usage}) a divider separates the two elements. 

  * #### Description \- optional

A form field description is a broader explanation of the label.

    * Use the description only if your label needs an additional explanation.

    * Don’t include any images or formatted text.

    * Ensure links in the description use the [primary link]({get_link_resource: /components/link/?tabId=playground&example=primary-link}) variant.

  * #### Form control

A form control is any control that allows users to input data.

  * #### Error text

An error text is an explanation for a validation error that is displayed below the form field. It's utilized for notifying users about issues such as missing required fields, incorrect value formatting, and unacknowledged confirmation fields. Refer to [validation guidelines]({get_link_resource: /patterns/general/errors/validation/}) for further details on its usage in forms.

  * #### Warning text

A warning is an explanation for a validation warning that is displayed below the form field. It's employed when certain conditions are present that don’t result in errors, but are occurrences users should be mindful of. For example: _The name has empty (space) characters._ Refer to [validation guidelines]({get_link_resource: /patterns/general/errors/validation/}) for further details on its usage in forms.

  * #### Constraint text \- optional

A constraint text is a line of text explaining the requirements and constraints of the form control. Constraint text is displayed below validation. 

    * Constraint text is optional and should only be used if it adds additional value.

    * When there is a character amount constraint, provide this information to the user and actively count the characters.

  * #### Stretch

By default the form field will take up 66% of its container width. Enabling the stretch property will set the width of the form field to 100%. This can be done for fields where a full-width layout is more appropriate, such as when using multi column layout.




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

#### Form field label

  * Use sentence case (not title case).

  * Use clear, concise, consistent labels to guide the user across the form.

  * Keep the content short and actionable.

  * Use a maximum of three words.

  * Don't use articles (_a_ , _an_ , _the_).

  * Don’t use terminal punctuation.




#### Form field description

  * Use sentence case (not title case).

  * Although descriptions for fields are optional, they typically are useful because they help users understand what type of information to enter in the field.

  * Place descriptions _above_ the related fields, not below. (However, place any constraints, such as alphanumeric restrictions, _below_ the fields.)

  * Keep descriptions brief, and use active voice.

  * Descriptions should have end punctuation, with the only exception being if a description ends with an external link icon, which should not have a period after it. 

  * Avoid directive text that states the obvious, such as _Enter a description_.




#### Error text

  * Follow the guidelines for [error messages]({get_link_resource: /patterns/general/errors/error-messages/}).

  * **Required field:**

    * Use the format: _[label descriptor] [label type] is required._

      * For example: 

        * _Alarm name is required._

        * _Template URL is required._

        * _Expiration date is required._

        * _Custom engine version description is required._

  * **Format not valid:**

    * Use the format: _Enter a valid [label descriptor] [label type]._

      * For example: 

        * _Enter a valid email address._

        * _Enter a valid subnet group name._

        * _Enter a valid phone number._

        * _Enter a valid KMS key ARN._

  * **Doesn’t match:**

    * Using one short sentence, indicate what doesn't match.

      * For example: _The security code doesn’t match._

    * If additional context is necessary, follow the first sentence with clearly defined next steps. 

      * For example: _The security code doesn’t match. Refresh the code and try again._

  * **Character requirements:**

    * Use the constraint text area to include any character count requirements needed to validate a form field, rather than using validation error messaging. When triggered, the corresponding validation error should let the user know which constraint text requirements are unmet.

      * For example:

        * _The name has characters that aren’t valid: #_

        * _The name has too many characters. Character count: 120/50_

        *  _The name has too few characters. Character count: 1/50_




#### Constraint text

  * Keep constraint text brief. Two lines is the limit.

  * Use regular text, not italics or boldface.

  * **Value constraints:**

    * If there are constraints on the value that users enter into an input field, describe them under the field. Use the format: _[label descriptor] [label type] must be X to Y characters._ or _[label descriptor] [label type] must be X to Y characters, and must/can't [constraints]._

      * For example: 

        * _Category name must be 1 to 100 characters._

        * _Category name must be 1 to 100 characters, and must start with a letter._

        * _Category name must be 1 to 100 characters, and can’t start with a hyphen (-)._

    * When sharing valid characters, use the format: _periods (.)_ instead of _(periods) “.”_ and use the format: _Valid characters are [valid character list]._

      * For example: _Valid characters are a-z, A-Z, 0-9, and periods (.)._

  * **Valid formats:**

    * If there is a valid format users must provide (for example, an email address or phone number), share an example within the constraint text rather than (or in addition to) inside placeholder text, which is not accessible. Use the format: _[Enter a valid] [label descriptor] [label type] [example]_

      * For example: _Enter a valid email address. For example: name@email.com_

  * **Character count:**

    * For a counter that actively counts characters, use this text: _Character count: 0/max_

      * For example: _Character count: 0/100_




#### Placeholder text

  * Follow the writing guidelines for [placeholder text]({get_link_resource: /components/input/?tabId=usage#writing-guidelines}). 




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * All form fields must have explicit labels.

  * All fields should be accessible with keyboard. Don’t change the tab order in the form.

  * All fields should point to the shared label, description, constraint and error text using  
the appropriate aria properties to be accessible for assistive technology.




#### Info links

  * Info links (that is, `<Link variant="info">`) within a FormField automatically have the field label appended to their accessible name. If this doesn't sufficiently describe the purpose of the link, provide additional context via an `ariaLabel`.



