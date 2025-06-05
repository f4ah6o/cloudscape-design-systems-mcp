## General guidelines

### Do

  * If possible, pre-select a good default item from the list.
  * Order the items alphabetically when there are eight to 15 items in the list. 
  * Use groups if the options belong to different categories. Also consider using groups if there are more than 16 suggestions. 
  * Use additional metadata per option only if absolutely necessary. Adding extra information may impede decision-making if not necessary to the interaction. 
  * Use minus sign (-) for any empty values.
  * Use manual filtering, configured to support server-side asynchronous fetching of options, to improve loading times when there are 50 or more options to choose from. 
  * Follow the guidelines for [disabled and read-only states]({get_link_resource: /patterns/general/disabled-and-read-only-states/}).
  * Always include a visible label. In forms, use the [form field]({get_link_resource: /components/form-field/}). In filtering use cases such as the [collection select filter]({get_link_resource: /components/collection-select-filter/}), or when vertical space is limited, use an inline label.



## Features

  * #### Labels

Labels are a requirement for a11y compliance. There are two ways to display a label with a select input:  
  
**Form field label**  
When used in forms, wrap the select in a [form field]({get_link_resource: /components/form-field/}). This provides a label above the input along with a description and validation. For example, when setting permissions, a select dropdown allows users to choose role or policy.  
  
**Inline label**  
When used as a filter, use the `inlineLabelText` property to display a label inline. This helps to minimize the vertical space. For example, applying a region filter to a resource table allows users to limit the list of resources in a region.  
  
Follow the guidelines for the [collection select filter]({get_link_resource: /components/collection-select-filter/}).  





### General controls

  * #### Trigger variant \- optional

The trigger variant determines what information is visible for the selected item.

    * [Label]({get_link_resource: /components/select/?example=with-tags&tabId=playground}) \- default

      * Only the label of the selected item is visible in the control. 

    * [Option]({get_link_resource: /components/select/?example=with-features&tabId=playground})

      * All of the associated metadata for the selected item is visible in the control. 

  * #### Filtering \- optional

With the select feature, users can filter through the list of items by label or additional metadata. This is helpful for larger or more complex datasets. There are two exclusive ways to set up the filtering mechanism. The filtering can either be performed automatically by the component, or manually configured. If you want to activate server-side filtering, you need to manually configure filtering. 

    * Automatic filtering _-_ default

      * Use [automatic filtering]({get_link_resource: /components/select/?tabId=playground&example=with-auto-filtering}) when the list of options usually takes only one API call to be fetched completely. 

    * Manual filtering

      * Use [manual filtering]({get_link_resource: /components/select/?tabId=playground&example=default}) when the list of options is fetched asynchronously as the user scrolls or types.

  * #### Placeholder \- optional

Placeholder text is visible in the control when no items are selected. It indicates that the user needs to make at least one selection from the dropdown.




### Options list

  * #### Label

Each option needs a label as a unique identifier.

  * #### Additional metadata \- optional

Each option can have additional, filterable metadata to help the user's decision making. Only use this metadata if it's comparable across options. Examples include storage size, RAM, and operating costs.

    * The label tag is displayed on the right side to the label.

    * Descriptions can add extra information for a user to read and understand. They can also impede decision making if they’re not necessary to the interaction.

    * Icons are displayed on the left side of the label. View available icons in our [iconography]({get_link_resource: /foundation/visual-foundation/iconography/}) article.

    * Tags are used to display comparable metadata across options.

    * Filter tags are additional tags displayed only when matching the user's input.

  * #### Groups \- optional

Options can be grouped into sections if there are clear categories among them. There can only be one level of nesting.

  * #### Disabled reason \- optional

You can use a tooltip with a disabled option in the list to explain why this is unavailable.




### States

  * #### Loading

    * The state of fetching resources, when getting options based on the user's entered query.

    * More options are loaded as a user scrolls through the current list.

  * #### Error

    * An error state occurs when the control fails at fetching options (for example, if the API fails to load the next set of options in the list).

    * Provide a [recovery action]({get_link_resource: /components/select/?tabId=playground&example=error-state}) in the error state, as a recovery mechanism.

  * #### Finished

The finished state communicates to the user that they have reached the end of the dataset.

  * #### Zero results

The state when the user’s entered query does not match any of the options.

  * #### Empty

    * The state when there are no options to choose from. 

    * Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}). 

  * #### Disabled

You can apply a disabled state in one of two ways:

    1. On the entire select component, which will prevent the user from interacting with the dropdown entirely.

    2. On individual options in the list, which will let the user interact with the dropdown but prevent the user from selecting specific (disabled) items.

  * #### Read-only

Use the read-only state when the select data is not to be modified by the user but they still need to view it.




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

#### Labels

  * Names of options in a list should be concise, typically from one to three words.

  * Names of inputs are a short description of the corresponding control, follow the guidelines for [form field labels]({get_link_resource: /components/form-field/?tabId=usage}).




#### Descriptions

  * Use parallel sentence structure. 

    * For example: All descriptions in the list should start either with verbs or with nouns. Don’t mix the two.

  * Keep in mind that text can grow by as much as three times its length when it's translated into other languages.




#### Loading state

  * Use the format: _Loading [options type]_

  * Follow the guidelines for [loading states]({get_link_resource: /patterns/general/loading-and-refreshing/}).




#### Error state

  * Error message

    * Use the format: _Error fetching [options type]_

    * Follow the guidelines for [validation]({get_link_resource: /patterns/general/errors/validation/}) and [alerts and error messages]({get_link_resource: /components/alert/}). 

  * Recovery action

    * Use this text: _Retry_

    * Follow the writing guidelines for [buttons]({get_link_resource: /components/button/?example=primary-button&tabId=usage#writing-guidelines}).




#### Finished state

  * When the user reaches the end of filtered results, use the format: _End of "[filter text]" results_

    * For example:_End of "sg-5" results._

  * When the user reaches the end of all results in a non-filtered list, use this text: _End of results_




#### Zero results state

  * Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}).




#### Disabled reasons

  * Follow the guidelines for [short in-context disabled reasons]({get_link_resource: /patterns/general/disabled-and-read-only-states/#writing-guidelines}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * If you enable filtering, you also need to label the filtering input through `filteringAriaLabel`.

    * For example: _Filter options._

  * Set `renderHighlightedAriaLive` or `selectedAriaLabel` to label selected option for screen readers.

  * `selectedAriaLabel`: The value of this property will be appended to the end of the option announced by screen readers.

    * For example:__ selectedAriaLabel set to _selected_ would produce the message _option 1 selected_ for a selected option `{label: "option 1"}`

  * `renderHighlightedAriaLive` gives you full control over how screen readers are going to read out options. The returned string should contain all visible properties of the option and the information about its selected state.




#### Keyboard interaction

  * By default, the tab key focuses the component.

  * The enter key opens the list of options.

  * Use the keyboard arrows to highlight options and press the enter key to select.



