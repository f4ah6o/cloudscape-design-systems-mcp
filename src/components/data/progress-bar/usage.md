## General guidelines

### Do

  * Use a progress bar for operations longer than 10 seconds with a foreseeable point in time for completion. 
  * If the operation is contextual, place the progress bar in context of the element. If the operation is global or not related to a specific page element, place the progress bar in a [flash message](/components/flashbar/). 
  * Display the matching result state once the operation has completed. Follow the guidelines for [status indicator](/components/status-indicator/). 
  * In case of transient errors, display a button for the user to retry the operation by using the result button. 
  * When using the progress bar within a dismissible flash message, make sure that users understand the status of the operation even after the flash message has been dismissed. To do so, pair the operation with a contextual status indicator in, for example, a table cell or a [key-value pair](/components/key-value-pairs/). 
  * For operations on table items, use the progress bar in a flash message and place corresponding status indicators in the table cells. 
  * When the operation is successful and the page reloads, remove the status indicator. 



### Don't

  * Don't use a progress bar for indeterminate actions. Instead, use a different [feedback mechanism](/patterns/general/user-feedback/). 
  * Don't use a progress bar for operations that consist of separate manual steps. 
  * Don't use multiple progress bars to communicate the status of one operation. 
  * Don't display the success state before the progress bar has reached 100%. 



## Features

  * #### Label

Short description for the operation in progress.

  * #### Description \- optional

Use this field to give users more information about the operation. It can also show dynamic information. For example, it could be the name of the file that is currently being uploaded.

  * #### Bar

A visual element that displays the relative progress of the operation.

  * #### Percent completed

Displays the progress of the operation in percent.

  * #### Additional information \- optional

Use this field to give users additional information about the operation. 

For example: number of steps completed and remaining, time remaining, upload speed.

  * #### Result text

Short description of the outcome of the operation.

  * #### Result button  \- optional

A button for when the operation has finished. For example, this could be used for a _retry_ button for a failed operation.

If you place the progress bar in a [flash message](/components/flashbar/), use the action button of the flash message rather than the built-in result button functionality.




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

  * Use complete sentences with periods, where possible. If space is limited, you can use a sentence fragment without a period.

    * For example: 

      * _Uploading file 2 of 5 (305.5 KB/s)_

      * _About 5 minutes remaining_

      *  _Current rate 3MB/s_

      *  _Uploading file 2 of 5 (305.5 KB/s). About 5 minutes remaining._




#### Label

  * Use clear, concise, consistent wording to explain the operation in progress.

  * Don’t use terminal punctuation.

    * For example: 

      * _Creating a database_

      *  _Setting up a distribution_




#### Description

  * Follow the writing guidelines for [form field](/components/form-field/?tabId=usage#writing-guidelines).




#### Percent completed

  * Use a numeric value paired with the percent sign (%). Use the format:_[numeric value] %_




#### Error and success messages

  * Follow the writing guidelines for [error messages](/patterns/general/errors/error-messages/#writing-guidelines).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Label

  * A progress bar should always be accompanied with a label.




#### Bar

  * The maximum width of the component should be approximately 800px for  
optimal observability.




#### ARIA live regions

  * Result states by default sit in an `aria-live` region to notify screen readers about state changes.  




