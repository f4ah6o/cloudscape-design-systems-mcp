## General guidelines

### Do

  * Use autosuggest if the user can input any value in the field to proceed. If the user must select one option from a list in order to proceed, use [select](/components/select/). 
  * Every input field should have a label. Use the [form field](/components/form-field/) for labeling your inputs. 
  * Use groups if the suggestions belong to different categories. Also consider using groups if there are more than 16 suggestions. 
  * Follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).



### Don't

  * Don't use descriptions if they’re not necessary to the interaction. The extra information the user has to read and understand can sometimes impede decision making.



## Features

  * #### Input

A regular text input field in which users can input text in a single-line control. A list of suggestions is displayed when a user types a character or focuses on it when it's empty.

  * #### Placeholder

An example input that helps the user understand what should be queried. Placeholder text disappears as soon as the user starts typing, and reappears once the text is cleared. For example:_Specify an origin domain name._

  * #### Suggestions

A suggestion is composed of a single value or optionally a value, label, label tag, description, icon, tags, and meta filter tags. 

    * When a user enters text in the input field, the component displays a list of suggestions that match the text. Make sure that the value text is self-explanatory.

    * Suggestions are displayed in the dropdown when the input gets triggered. When text is entered, the component displays a list of suggestions matching the text.

    * Order the suggestions based on the closest matching query and the relevance regarding your use case. If that's not possible, rely on alphanumeric ordering.

  * #### Custom value indicator

A line of text that is visible in the first row within the dropdown above the suggestions and the loading or error indicator. It allows users to use the exact value that they entered. For example: _Use [value entered]_

  * #### Loading suggestions

There are two ways of loading suggestions. You can decide either to have the full list of suggestions available on the client side (static), or to fetch the suggestions asynchronously from the server.

    * [Static suggestions](/components/autosuggest/) \- default

      * Use this when the full list of suggestions takes only one API call to be fetched.

    * [Asynchronously fetched suggestions](/components/autosuggest/?tabId=api#code-examples)

      * Use this when multiple API calls need to be made to fetch all the suggestions, such as when the list is very long or contains many similar entries.  
Suggestions are displayed after the user types or scrolls.

  * #### Suggestion metadata \- optional

Each suggestion can have additional filterable metadata to help the user's decision making. Only use this metadata if it's comparable across suggestions. For example: storage size, RAM, or cost.

    * The label tag is displayed on the right side to the label.

    * Descriptions can add extra information for a user to read and understand. They can also impede decision making if they’re not necessary to the interaction.

    * Icons are placed on the left side of the suggestion. View available icons in [Iconography](/foundation/visual-foundation/iconography/).

    * Tags are used to display comparable metadata across suggestions.

    * Meta filter tags are additional tags displayed only when matching the user's input.




### States

  * #### Disabled

Use the disabled state when users cannot interact with input and to prevent users from modifying the value. 

  * #### Read-only

Use the read-only state when the input data is not to be modified by the user but they still need to view it.

  * #### Loading

    * Use the loading state when getting suggestions based on the user's entered query.

    * When some suggestions are already shown, the loading indicator is displayed at the end of the list.

  * #### Empty

    * Use the empty state when there are no suggestions to display.

    * Follow the guidelines for [empty states](/patterns/general/empty-states/).

  * #### Error

    * Use the error state when an error occurred while getting suggestions based on the user's entered query.

    * When some suggestions are already shown, the error indicator will be displayed below the list.

    * Provide a _Retry_ link button in the error state as a recovery mechanism.

  * #### Finished

The finished state communicates to the user that they have reached the end of the dataset when the list of suggestions is asynchronously fetched from the server.




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

#### Placeholder

  * Follow the writing guidelines for [placeholder text](/components/input/?tabId=usage#writing-guidelines).




#### Description

  * Use parallel form. All descriptions in the list should start with either verbs or nouns, and don’t mix the two.

  * Keep in mind that text can grow by as much as three times its length when it is translated into other languages.




#### Custom value indicator

  * Use the text: _Use "[value entered]"_

    * For example: _Use "prod"_




#### Loading state

  * Use the format: _Loading [suggestions type]_

  * Be consistent with the noun used for the suggestions type. Use the same as in the control header.




#### Empty state

  * Follow the writing guidelines for [empty states](/patterns/general/empty-states/#writing-guidelines).




#### Error state

  * For error message use the format: _Error fetching [suggestion type]_

  * Follow the guidelines for [validation](/patterns/general/errors/validation/) and [alert](/components/alert/).

  * For recovery action use this text: _Retry_

  * Follow the writing guidelines for [button](/components/button/?tabId=usage#writing-guidelines).




#### Finished state

  * When the user reaches the end of filtered results, use the format: _End of "[filter text]" results_

    * For example: _End of "sg-5" results_

  * When the user reaches the end of all results in a non-filtered list, use this text: _End of results_




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * All controls should have a label for screen readers to read on focus.

  * Do not initiate any page refreshes when loading suggestions or updating the text input.

  * If custom icons for options are used, make sure to provide an alternative text for screen readers to read on focus.

  * For additional accessibility guidelines, follow the [select](/components/select/) component guidelines.



