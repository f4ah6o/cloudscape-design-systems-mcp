## General guidelines

### Do

  * If possible, pre-select a good default item from the list.
  * Order the items alphabetically unless you need to order the items based on priority. 
  * Use groups if the options belong to different categories. Also consider using groups if there are more than 16 suggestions. 
  * Use additional metadata per option only if absolutely necessary. Adding extra information may impede decision-making if not necessary to the interaction. 
  * Use hyphen (-) for any empty values.
  * Use manual filtering, configured to support server-side asynchronous fetching of options, to improve loading times when there are 50 or more options to choose from.
  * If possible, try to avoid mixing groups and non grouped options.
  * Follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).
  * Use select all to improve efficiency when users are likely to choose all options.



### Don't

  * Don’t use inline tokens if token metadata or dismiss buttons are critical to the user.
  * Don’t hide tokens when they are necessary for task completion.



## Features

### General controls

  * #### Filtering \- optional

With this feature, the user can filter through a list of items by label or additional metadata. This is helpful for larger or more complex datasets. There are two exclusive ways to set up the filtering mechanism. The filtering can either be performed automatically by the component, or manually configured. If you want to turn on server-side filtering, you need to manually configure filtering.

    * Automatic filtering _-_ default

      * Use [automatic filtering](/components/multiselect/?example=with-auto-filtering) when the list of options typically takes only one API call to be fetched completely.

    * Manual filtering

      * Use [manual filtering](/components/multiselect/?example=default&tabId=api#code-examples) when the list of options is fetched asynchronously as the user scrolls or types.

Note that when an Option Group is matched in automatic filtering, all of its nested Options are returned.

  * #### Placeholder \- optional

A placeholder is text that is visible in the control when no items are selected. It indicates that the user needs to make at least one selection from the dropdown.




### Options list

  * #### Label

Each option needs a label as a unique identifier.

  * #### Additional metadata \- optional

Each option can have additional filterable metadata to help the user's decision making. Use them scarcely and only if they are comparable across options. For example: storage size, RAM, cost, etc.

    * Label tag is displayed on the right side to the label.

    * Descriptions can add extra information for a user to read and understand and can impede decision making if they’re not necessary to the interaction.

    * Icons are displayed on the left side of the label. View available Cloudscape icons in [iconography](/foundation/visual-foundation/iconography/).

    * Tags are used to display comparable metadata across options.

    * Filter tags are additional tags displayed only when matching the user's input.

  * #### Groups \- optional

Options can be grouped into sections if there are clear categories among them. Only one level of nesting is allowed. Option groups can also be selected. When a user selects an option group, all of the enabled and visible options within the group will be selected. If filtering is used, only the active, visible subset of the options will be selected.

  * #### Disabled reason \- optional

You can use a tooltip with a disabled option in the list to explain why this is unavailable.

  * #### Select all \- optional

With this feature, users can select all available items within a list. Disabled items are not selected. Users can choose between selecting and deselecting all items. If additional items are loaded after selection, or there are items that are disabled, the select all option shows an indeterminate state inside the checkbox.  





### States

  * #### Loading

    * The state of fetching resources, when getting options based on the user's entered query.

    * More options are loaded as a user scrolls through the current list.

  * #### Error

    * An error state occurs when the control fails at fetching options (for example, if the API fails to load the   
next set of options in the list).

    * Provide a [recovery action](/components/select/?example=error) in the error state, as a recovery mechanism. 

  * #### Finished

The finished state communicates to the user that they have reached the end of the dataset.

  * #### Zero results

The state when the user’s entered query does not match any of the options.

  * #### Empty

    * The state when there are no options to choose from. 

    * Follow the guidelines for [empty states](/patterns/general/empty-states/).

  * #### Disabled

You can apply an inactive state in one of two ways:

    * On the entire select component, which prevents the user from interacting with the dropdown entirely.

    * On individual options in the list, so the user can interact with the dropdown but can't select specific (inactive) items.

  * #### Read-only

Use the read-only state when the multiselect is not to be modified by the user but they still need to view it.




### Tokens

Tokens are displayed when users make a selection in the dropdown.

  * #### Token visibility and placement

By default, all tokens are visible and shown below the trigger. Token visibility and placement can be customized in three ways:

    * **Inline tokens** \- Tokens are placed inside the trigger instead of below it. Token metadata is hidden, and some tokens may be cut off. Use in high density interfaces.

    * **Hide all tokens** -**** No tokens are shown.**** Use in high density interfaces, when tokens are shown elsewhere on the page or when they are not critical for task completion.

    * **Hide some tokens** -**** Tokens up to a set number are shown. A show/hide link toggles visibility of the rest of the tokens. Use when most users will have a small number of tokens, but some users will have many tokens. If you know how many tokens are typically shown, hide tokens above that number.

      * For example: If 90% of users only select 2 tokens, then hide all tokens above 2.




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

  * Names of options in a list should be concise, typically from 1 to 3 words.




#### Descriptions

  * Use parallel sentence structure. 

    * For example: all descriptions in the list should start either with verbs or with nouns. Don’t mix the two.

  * Keep in mind that text can grow by as much as three times its length when it is translated into other languages.




#### Loading state

  * Use the format: _Loading [options type]_

  * Follow the guidelines for [loading states](/patterns/general/loading-and-refreshing/).




#### Error state

  * Error message

    * Use the format: _Error fetching [options type]_

    * Follow the guidelines for [validation](/patterns/general/errors/validation/) and [alert](/components/alert/). 

  * Recovery action

    * Use this text: _Retry_

    * Follow the writing guidelines for [buttons](/components/button/?example=primary-button&tabId=usage#writing-guidelines).




#### Finished state

  * When the user reaches the end of filtered results, use the format: _End of "[filter text]" results_

    * For example: _End of "sg-5" results_

  * When the user reaches the end of all results in a non-filtered list, use the format: _End of results_




#### Zero results state

  * Follow the guidelines for [empty states](/patterns/general/empty-states/).




#### Token show/hide link

  * Use the format: _Show chosen [objects]_ and _Hide chosen [objects]_

    * For example: _Show chosen services_ and _Hide chosen services_

  * When hiding some tokens, use the format: _Show more chosen [objects]_ and _Show fewer chosen [objects]_

    * For example: _Show more chosen services_ and _Show fewer chosen services_




#### Disabled reasons

  * Follow the guidelines for [short in-context disabled reasons](/patterns/general/disabled-and-read-only-states/#writing-guidelines). 




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Specify alternative text for the deselection button of the tokens through the `deselectAriaLabel` property.

    * For example: _Remove option._

  * Additionally, when enabling filtering, label the filtering input through `filteringAriaLabel`.

  * Set `renderHighlightedAriaLive` or `selectedAriaLabel` to label selected options for screen readers.

  * `selectedAriaLabel`: The value of this property will be appended to the end of the option announced by screen readers.

    * For example: `selectedAriaLabel `set to _selected_ would produce the message _option 1 selected_ for a selected option `{label: "option 1"}`

  * `renderHighlightedAriaLive` gives you full control over how screen readers are going to read out options. The returned string should contain all visible properties of the option and the information about its selected state.

  * `ariaLabel `in inline variant: For multiselects with inline tokens, include all visible tokens in the aria label. 

    * For example, if 4 tokens are selected and 2 are shown inline, the aria label should be: 

_Option 1, Option 2, and 2 more options selected_




### Keyboard interaction

  * By default, the tab key focuses the component.

  * The enter key opens the list of options.

  * Use the keyboard arrows to highlight options and press the enter key to select.  




