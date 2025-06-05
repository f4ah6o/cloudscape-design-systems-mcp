## General guidelines

### Do

  * The component can be used as a ﬁlter on a collection of resources such as[ table](/components/table/) and [card](/components/cards/). See the demo for [table view with date range picker filter](/examples/react/table-date-filter.html).
  * When there is a default value of date and time range applied across a dataset, ensure that this value is represented in the date range picker as well. 
  * Activate both relative and absolute date-time range selection in the overlay if a user can use either selection mechanisms for the use case. Otherwise, activate only absolute or only relative date range selection as required.
  * For scenarios using absolute date-time range selection: always include the required input format in the constraint text, along with any other format constraints. Provide information about any other constraints in the placeholder text.
  * Use client side validation to prevent an inverted range submission (when an end date is before a start date).
  * When using relative range, set the pre-configured ranges based on the majority of the users’ most frequent choices. 
  * Follow the guidelines for [timestamps](/patterns/general/timestamps/) to decide which format to use.
  * Follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).



### Don't

  * If a use case does not require users to set a custom absolute or relative range, don't use the date range picker component. Instead, to provide pre-configured relative ranges only, use the [select](/components/select/?example=default) component.



## Features

### Ways to select a date and time range

Users can configure a date and time range in two different ways:

  * #### Absolute range

Users define the start and end of a date and time range. 

For example: Filter a set of resources created between July 7, 2020 and September 12, 2020. 

  * #### Relative range

Users specify a time range from the current point in time. 

For example: Filtering a data set to show resources updated in the last 5 minutes. 




### Trigger

Users can open or close the component overlay, and displays the selected date and time range in the component.  


  * #### Date and time format

The absolute date range time interval is shown with two options: 

    * ISO format: ISO time intervals use the [ISO 8601 ](https://en.wikipedia.org/wiki/ISO_8601) format: _YYYY-MM-DDThh:mm:ss±hh:mmZ — YYYY-MM-DDThh:mm:ss±hh:mmZ._ For month range, use: _YYYY-MM — YYYY-MM._

      * In the ISO time interval, _T_ is used as a divider between the date and time and _Z_ is the zone designator for the zero UTC offset. 

      * For example: _2010-01-28T14:32:35+03:00 — 2010-01-31T12:27:18+03:00_

    * Human-readable format: it can vary according to the locale. In US English, it follows this pattern: _Month DD, YYYY, hh:mm:ss (UTC±h:mm) — Month DD, YYYY, hh:mm:ss (UTC±h:mm)._ For month range, use: _Month, YYYY — Month, YYYY._

      * For example: J _anuary 31, 2010, 14:32:00 (UTC+3:30) — January 31, 2012, 14:32:00 (UTC+3:30)_

The time offset represents the time difference relative to Coordinated Universal Time (UTC). Showing the time offset is optional.

The relative date range is shown as Last N units of time, where N is the range duration and units of time can be seconds, minutes, and so on. For example: _Last 5 minutes._

  * #### Placeholder text

When there is no date or time range applied to the component, use the placeholder text to suggest the actions a user can perform. 

For example, when the component is used as a filter on a collection of resources, use this text: _Filter by a date and time range_.




### Overlay

The overlay displays different controls so users can configure a date and time range. It’s opened by the component trigger.

  * #### Selection mechanism

A [segmented control](/components/segmented-control/?example=default) that allows users to toggle between selecting a date and time range using the absolute or the relative range.

  * #### Absolute range

**Day calendar**

Two visual grids showing dates from consecutive months where users can select the start and end date of their date range. The current month is displayed to the right by default. 

**Month calendar**

Two visual grids showing months from consecutive years where users can select the start and end month of their month range. The current year is displayed to the right by default. 

**Date states**

Each date in the grid can be in any of the following states:

    * **Selected:** The date that has been chosen by the user or provided as a default.

      * Start and end date: The two ends of the selected date range.

      * In-between dates: Dates within the selected date range.

    * **Disabled:** Dates that cannot be selected by the user. For more information about disabled dates, follow the guidelines for [date picker](/components/date-picker/?example=standard&tabId=usage).

    * **Disabled with reason:** You can use a tooltip with disabled dates to explain why they are unavailable.

    * **Today:** Today's date, set automatically by the component.

**Inputs**

Users can enter or modify the start and end date and the start and end time for the absolute date and time range in these inputs. When users select the start and end dates in the calendar, the selected values are automatically reflected in the date inputs. 

    * The component uses [time input](/components/time-input/?example=with-placeholder) for start and end time and [date picker](/components/date-picker/?example=standard&tabId=usage) input for start and end dates. 

    * Use form field labels to clearly communicate to users the purpose of each input. 

    * Use placeholder text to indicate the accepted date and time format. 

    * Use constraint text below input fields to inform users about any restrictions on the value of date or time that they can enter. 

    * To enable date range selection alone, use `dateOnly` property to hide time inputs from the overlay. 

In day calendar, the time inputs default to _00:00:00_ for start time and _23:59:59_ for end time. In month calendar, the selected range spans from the first day of the start month to the last day of the end month.

  * #### Relative range

**Pre-configured ranges**

Users can select commonly used relative ranges from a radio group, with an option to set a custom relative range. Provide the custom range option as the last one in the radio group. 

**Custom range**

Users can enter the range duration and select the unit of time such as seconds, minutes, and so on, to set a custom relative range. Use form field labels to inform users about the purpose of the respective input field and select.

  * #### Footer

A set of component level controls for users to perform the desired action on the selected date and time range are shown in the footer. 

    * **Clear and dismiss** \- optional: Remove the current value of date and time range set in the component and show data from all time. Don't use this button if the dataset does not allow users to see data from all time. 

      * For example, don't show this button when using the component on an event history table which can only show data for previous 90 days due to API constraints. 

    * **Cancel** : Disregard any changes made by the user.

    * **Apply** : Confirm the date and time range selection made by the user.




### Validation

Validate a selection after users apply a date and time range.

  * #### Client side errors

If the date and time range applied by users returns an error after client side validation occurs**,** show a contextual [alert](/components/alert/?example=info) above the overlay footer to display the error message. For example:

    * The selected date range is too large. Select a range smaller than 30 days.

    * The selected date range is incomplete. Select a start and end date for the date range.

  * #### Server side errors

If the date and time range applied by users returns an error after it is submitted to the server and server-side validation occurs, show the component trigger in error state with corresponding error message below it. 




### States

  * #### Disabled

Use the disabled state when users cannot interact with input and to prevent users from modifying the value. 

  * #### Read-only

Use the read-only state when the input data is not to be modified by the user but they still need to view it.




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

  * When the component is used as a form field, use a label to describe its purpose. 

    * For example:_Maintenance window_




#### Description

  * Use description text below the component label to inform users about the purpose of the selected range.

    * For example: _Provide the date and time range for service maintenance window. Users will be unable to access the service during this time._

  * Don't use the description to show constraints on date and time range. Use [constraint text](/components/form-field/?tabId=usage#features) instead. 

  * Avoid directive text that states the obvious, such as _Enter a date and time range_.

  * Follow the writing guidelines for [form field](/components/form-field/?tabId=usage#writing-guidelines).




#### Placeholder text

  * Use placeholder text to show the suggested user action in the trigger.

    * If the component is used as a filter, use this text: _Filter by a date and time range_

    * If the component is used as a form field, use this text: _Select a date and time range_




#### Segmented control

  * Use the text: Absolute range and Relative range for the respective segments. 

  * Follow writing guidelines for [segmented control](/components/segmented-control/?example=default&tabId=usage#writing-guidelines). 




#### Radio group label

  * Show a label for radio group in relative range. 

  * Use this text: _Choose a range_

  * Follow the writing guidelines for [form field](/components/form-field/?tabId=usage#writing-guidelines).




#### Radio group items

  * For labels of pre-configured ranges, use the format: _Last [duration] [unit of time]_

    * For example: _Last 5 minutes_

  * For the custom range option provided last in the radio group:

    * For the label, use this text: _Custom range_

    * Use description text below the label to provide more information about the custom range to users.

      * For example: _Set a custom range in the past_

  * Follow the writing guidelines for [radio group](/components/radio-group/?example=default&tabId=usage#writing-guidelines).




#### Custom range form field labels

  * Show labels for custom relative range form fields.

  * For the custom duration input field, use this text: _Duration_

  * For the select, use this text: _Unit of time_




#### Custom range input placeholder text

  * To suggest the immediate action users can take, use this text: _Enter duration_ in the duration input field.




#### Custom range select options

  * Show the accepted units of time in the select as options.

    * For example: _minutes_ , _days_ , _weeks_ , _months_

  * Use lowercase characters. 

  * Don’t use _(s)_ or _(es)_ at the end of a noun to signify both the singular and plural form of the noun.




#### Date and time input labels

  * Show labels for respective date and time inputs.

  * Use this text: 

    * _Start date_

    *  _Start time_

    *  _End date_

    *  _End time_




#### Date and time input placeholder text

  * Show the accepted date format using uppercase characters, in the appropriate language. 

    * For example: _YYYY/MM/DD  _in English for day range picker.

    * For example: _YYYY/MM_ in English for month range picker.

  * Show the accepted time format using lowercase characters, in the appropriate language.

    * For example: _hh:mm:ss_ in English.

  * Follow the writing guidelines for [placeholder text](/components/input/?tabId=usage#writing-guidelines).




#### Constraint text

  * Use constraint text below date and time inputs to inform users about the length of range accepted and the required time format whenever applicable.

    * For example: _Range must be between 6 – 30 days. Use 24-hour format._

  * Keep constraint text brief and up to two lines. 

  * Follow the writing guidelines for [form field](/components/form-field/?tabId=usage#writing-guidelines).




#### Error text

  * Use complete sentences and terminal punctuation for error text.

  * Follow the writing guidelines for [error messages](/patterns/general/errors/error-messages/#writing-guidelines).




#### Action buttons 

  * Use this text:

    * _Clear and dismiss_

    *  _Cancel_

    *  _Apply_

  * Follow the writing guidelines for [button](/components/button/).




#### Disabled reasons

  * Follow the guidelines for [short in-context disabled reasons](/patterns/general/disabled-and-read-only-states/#writing-guidelines).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * Follow the accessibility guidelines for [form field](/components/form-field/?tabId=usage#accessibility-guidelines).




#### Alternative text

  * Provide alternative text for the previous and next month buttons using nextMonthAriaLabel and previousMonthAriaLabel fields on the `i18nStrings` property.

    * For example: _Previous month and Next month._

  * Provide alternative text to be announced on the today's date in the calendar using todayAriaLabel field on the `i18nStrings` property.

    * For example: _Today._



