## General guidelines

### Do

  * Use sliders to adjust values within a defined range, such as storage capacity.
  * When providing a label for the slider, wrap it in a [form field](/components/form-field/) component.
  * For sliders with large ranges, or where a precise numeric value is required, always include an input (for continuous sliders) or select (for stepped sliders) that also controls the slider value. This helps users choose an exact value and avoid unintended selection. See step 2 of the [wizard demo](/examples/react/wizard.html). 
  * In stepped sliders, ensure there is enough space between tick marks. Tick marks are a useful affordance for understanding value increments, but when placed too close together they create clutter and can cause unintended selection.
  * Add reference values when displaying intermediary values along the slider is helpful. For example, in a slider with values from 0 - 100, it may be helpful to add reference values at 25, 50, and 75.
  * For ordinal sliders (for example, sliders with ranges in a series like _None-Low-Medium-High_), every step should have a reference value.



### Don't

  * Don't use reference values to show information that is imperative for a user to make a selection, as they are not always visible on smaller viewports. Instead, use the description field of the form field or the [help system](/patterns/general/help-system/). Reference values are meant to show supplementary information only. The only exception to this is the ordinal-value based use case. For example, a stepped slider with the values _None, Low, Medium, High_.
  * Don’t use reference labels for small numeric sliders. For example, a slider from 1-5 with reference labels 2, 3, and 4 will clutter the interface.



## Features

  * #### Min and max

The min and max are the range of values that the slider can be moved between. They are shown at the beginning and the end of the slider. They are numeric by default, but can be formatted to other units or strings.

  * #### Steps \- optional

Steps are used to indicate the granularity of the value. When a slider is stepped, only values that match the step interval are valid. For example, if a user is only able to control the storage space of a data warehouse in increments of 10 GB, use a step value of 10.

  * #### Reference values \- optional

Reference values are supplemental labels shown below the slider. These should be used for helping the user choose a selection more quickly in sliders with large ranges or for ordinal sliders. For example, _25%, 50%, 75%_ or _None_ , _Low, Medium, High._ These values are numeric by default, but can be formatted to other units or strings.

  * #### Tooltip

The slider has a tooltip that shows the value on hover or focus. This guarantees that the user knows exactly what value they have selected at any point.




### States

  * #### Disabled

Use the disabled state when users cannot interact with the slider and to prevent users from modifying the value. 

  * #### Invalid

Shows that there is an error with a value that the user entered into the slider.

  * #### Read-only

Use the read-only state when the slider is not to be modified by the user but they still need to view it.




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

  * See [form field](/components/form-field/) for guidelines around label, description, and error text when placing the slider inside a form field.

  * Keep reference label content short. There is not adequate space in the slider for lengthy descriptions. Instead, use the description field of the form field or the [help system](/patterns/general/help-system/).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * The slider should have a clear and concise label that accurately describes its purpose.

  * If using a slider outside of a form field, always provide an `ariaLabel`. Inside a form field, the slider will automatically receive an `ariaLabelledby `unless specifically overridden.

  * Provide an `ariaDescription` when a slider has formatted reference values. For example, for a slider with reference values of _None, Low, Medium, High_ , provide the `ariaDescription` "From None to High".



