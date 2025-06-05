## General guidelines

### Do

  * Always use the filter functionality on the full collection of resources, not just on visible or loaded resources.
  * Use a property filter if users need to select multiple values for one property.
  * Use a property filter pattern if users need more than two properties to find a specific item. If only two are required, use the [collection select filter](/components/collection-select-filter/) instead.
  * After a user completes a filter action, display the number of results next to the search filter input.
  * When implementing a custom property form, consider using embeddable components for create flow, and dropdown-based components for token edit flow. For example, to support date properties we recommend using date input and calendar for create flow, and date picker for token edit flow.
  * Use date-only forms for properties requiring day precision, and date-time forms for those requiring time precision. It is recommended to keep all the days active in the calendar. Exclude `=` and `!=` operators for date-time properties.
  * If the property form requires more than one input field, annotate all fields with secondary labels (you can use form field description for this purpose). If the property requires only one input, the label can be omitted.
  * When possible, enable token groups by default to allow users to filter with more complex queries.
  * Use multi-select tokens for properties with discrete values or finite sets of numeric values. For example, _State = Active, Pending, Canceled_ or _Available storage = 512 GB, 1024 GB, 2048 GB._



### Don't

  * Don't use filtering if the majority of your users operate on small collections of resources (fewer than five resources).
  * Don’t use a property filter for collections with mostly user-generated lengthy strings. For example: Don’t use a property filter for collections of free-form user submitted feedback.
  * Don’t put more than one element in the custom control slot (an area before the search input).
  * Don't add an input label when implementing a single input in the form (such as a date input). This is to avoid duplicating labels. The form label (value label) is sufficient to describe the input content.
  * Don’t hide operations when token groups are enabled.



## Features

### Filtering

The property filter provides a variety of ways for users to filter the results in a collection.

  * #### Properties

A list of properties of the data set is displayed when the user triggers the search input field. Usually, properties refer to the column headers for a [table view](/patterns/resource-management/view/table-view/), and content labels for a [cards view](/patterns/resource-management/view/card-view/).

  * #### Values

The corresponding list of finite values is displayed when the user chooses one of the properties and an operator. Usually, values refer to the content of table cells in the [table view](/patterns/resource-management/view/table-view/), and card contents in the [cards view](/patterns/resource-management/view/card-view/).

  * #### Comparison operators

Determines the type of match between a provided property and value.  
  
There are several types of operators provided by the property filter:

    * **Equals (=):** Returns a collection set where the property and values are exact matches. This operator can be negated (!=), which will exclude all results that equal the provided value.

      * For example:__ Instance type = t2.micro __ will return only collection results which have the instance type “t2.micro”.

    * **Contains (:):** Defines a filter query where the results include the text provided (often called a _substring match_). This operator can be negated (!:), which will exclude all results that include the provided value.

      * For example: Instance type : t2 will return collection results which include “t2”, including “t2.micro”, “t2.large”, and so on.

    * **Greater than and lesser than ( > and <): **Returns a collection set where the collection results are higher or lower than the provided value. These operators can be joined with an equals operator, which returns a collection that has an exact match of the value and values above/below it.

      * For example:__ Launch date > 2020-01-01 __ returns a collection set where the launch date is more recent than the first day of 2020.

    * **Starts with (^):** Defines a query where the results start with the text provided.

      * For example: Path ^ s3://bucket01/ will return all collection items where the path starts with "s3://bucket01/".

Filtering properties require different operators depending on their type. For example, a numeric property might require operators [<,<=, >, >=, =, !=] and textual property operators [:, !:, =, !=,^]. Operators are always shown in the following order: [=, !=, :, !:, >=, <=, <, >, ^]. Don't use equals (=) and does not equal (!=) operators for date-time properties because an exact match for this type of query is rarely possible.

  * #### Free text

When the user submits free text, the collection view gets reduced to items that contain the provided text. If the user does not provide an operator with their free text, it will default to the _contains_  operator.

    * For example: The user types "Default", which returns collection items that contain the text provided in either the property, such as "**Default logging :** Enabled", and in the value, such as " **State :** Default"

When the user selects a property and submits free text for the value, the collection view gets reduced to items that use the selected property which had text containing the provided text.

    * For example:__ The user selects a "Region" property from the list, the contains operator (":"), and types "us-east". All the items matching "**Region :** us-east" (such as "us-east-1a" and "us-east-2") will remain on the collection view.

The property filter generally allows you to specify a property name, operator, and value as plain text. However, this might not work for complex custom properties. For example, specifying the date range value as plain text has no effect. Instead, the user is expected to use the dedicated input fields.

    * For example: Instead of typing "createdAt in 2020-01-01T00:00:00+2:00 — 2021-01-01T00:00:00+2:00", the user can use the calendar to select edge dates.   


By default all operators support free text values. When needed, you can use the `freeTextFiltering` property to specify a subset of operators to support it.

  * #### Custom properties

The property filter allows users to query with custom properties, such as date or time, using calendar, date input and time input components. 

  * #### Custom groups

A group of additional options can be added below the Properties and Values in the dropdown.

    * For example: Filtering by tags. Typically, the property is the tag key and the value is the tag value. These additional properties and values are grouped under a _Tags_ group.

  * #### Custom value indicator

A line of text that is visible in the first row within the dropdown above the suggestions and the loading or error indicator. It allows users to use the exact value that they entered. For example: _Use [value entered]_

  * #### Loading suggestions

There are two ways of loading property and value suggestions. Your team needs to decide either to have the full list of suggestions available on the client side (static), or to fetch the suggestions asynchronously from the server.

    * Static suggestions - default

      * Use this when the full list of suggestions only takes one API call to be fetched.

    * Asynchronously fetched suggestions

      * Use this when multiple API calls need to be made to fetch all the suggestions, such as when the list is very long or contains many similar entries. Suggestions are displayed after the user types or scrolls.

  * #### Highlight

As the user types, the characters matching the query are highlighted in properties, operators, and values.

  * #### Search input states

The property filter uses the [autosuggest](/components/autosuggest/) for the search input. Refer to the [autosuggest usage guidance](/components/autosuggest/?tabId=usage) for more information on property filter input states, such as error, loading, async loading.




### Tokens

Tokens represent each filter facet that is filtering the collection.

  * #### Filtering tokens

The user can apply a set of filters. Once a user applies a filter, a filtering token appears below the search input and the collection shows the results of the filter. The user can apply the following set of filters using the property filter:

    * User selects a property, an operator, and selects value from the list. The token renders, for example:___**Engine =**__Aurora_ , _or_ _**State =**__Stopping, Stopped._

    * User selects a property, an operator, and types free text as a value. The token renders, for example:___**Region :**__us-east_.

    * User types free text. The token renders, for example:_Default_.

Filtering tokens can be individually edited and removed, and all tokens can be removed using the **Clear filters** button.

Tokens default to containing a single value per property, but can also be multi-select. **Multi-select tokens** allow users to select multiple values when filtering by that property. See [development guidelines](/components/property-filter/?tabId=api) for how to implement this feature.

  * #### Token join operator

When a user has multiple search filtering tokens, they are joined by an operator that defines how the overall search works. There are two join operators:

    * **And** -**** Returns a collection set which matches _all_ of the search token.

    * **Or** -**** Returns a collection set which matches _any_ of the search tokens.

  * #### Token editing

Once a token has been added, it can be edited by clicking on the token text. This opens a[ popover](/components/popover/), where the property, operator, and value can be changed.

  * #### Token visibility and placement

By default, all tokens are visible and shown below the trigger. Token visibility and placement can be customized in three ways:

    * **Inline tokens** \- Tokens are placed inside the trigger instead of below it. Token metadata is hidden, and some tokens may be cut off. Use in high density interfaces.

    * **Hide all tokens** -**** No tokens are shown.**** Use in high density interfaces, when tokens are shown elsewhere on the page or when they are not critical for task completion.

    * **Hide some tokens** -**** Tokens up to a set number are shown. A show/hide link toggles visibility of the rest of the tokens. Use when most users will have a small number of tokens, but some users will have many tokens. If you know how many tokens are typically shown, hide tokens above that number.

      * For example: If 90% of users only select 2 tokens, then hide all tokens above 2.

  * #### Token groups

For more complex queries that require combining both AND and OR operators, the property filter has token groups. Token groups allow users to group together two or more tokens, so that it’s possible to filter by more complex queries. For example, `Status = Critical OR (Status = High AND Created at < 07-07-2023)`.

Token groups can be created by making updates to an existing token, first selecting the token text, then selecting _Add new filter_. This creates a filter group with the edited token, so that you can add new filters directly to that group.. To add an existing filter to a group, select an existing filter in the _Add new filter_ button dropdown. You can also delete filters entirely, or remove filters from a group in the overflow menu of each filter within the edit popover. See this behavior in action in the [property filter demo](/examples/react/table-property-filter.html).




### Additional features

  * #### Custom control \- optional

The property filter provides an area before the search input, where a custom control element can be added. 

    * For example, showing a [select](/components/select/?tabId=playground) for quick access to saved filter sets in the [saved filter sets](/patterns/general/filter-patterns/saved-filter-sets/) pattern.

  * #### Custom filter actions \- optional

The property filter allows to provide a custom filter actions control that replaces the standard _Clear filters_ button. Make sure to still provide a mechanism to clear all filters when using this.

    * For example, showing a [button dropdown](/components/button-dropdown/) with main action to display additional filter actions for the [saved filter sets](/patterns/general/filter-patterns/saved-filter-sets/) pattern.

  * #### Constraint text \- optional

Constraint text explains the requirements and constraints of the property filter control. Constraint text is optional, and should only be used if it adds additional value. For example, when the number of properties allowed by the search API is limited.




### Collection view states

  * #### Displaying results

The collection of resources is filtered as soon as the user enters a property filter. Only resources that match the conditions of the filters are displayed.

  * #### Loading state

The state of the collection of resources, either [table](/components/table/?example=loading-state) or [cards](/components/cards/?example=loading-state), while the filtered dataset is being loaded. Follow the guidelines for [loading state](/patterns/general/loading-and-refreshing/) for collections.

  * #### Zero results state

The state of the collection of resources, either [table](/components/table/?example=no-match-state) or [cards](/components/cards/?example=no-match-state), after a user applies a filter that does not return any items in the collection. Follow the guidelines for [empty states](/patterns/general/empty-states/).




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

  * The content in the placeholder text should be supplementary. The placeholder text should not be used to communicate important filter parameters. 

  * Don’t use terminal punctuation.




#### Visible label

  * If there are specific parameters a user can filter by that need to be communicated to ensure they can proceed with their task, mention them in an adjoining visible label. 

  * Since visible labels tend to impact content density, use them only when necessary. 




#### Filtering token

  * The name of the property will always come first before the value name. The property and value are separated with a colon (:).

  * The free text typed will always be rendered in between quotes ("").




#### Constraint text

  * Keep constraint text brief. Two lines is the limit.

  * Use regular text, not italics or boldface.

  * Number of properties constraints:

    * If there are constraints on the number of properties that users can add, describe them under the search input field. Use the format: _You can add up to [number] filters._

    * For example:

      * _You can add up to 3 filters._




#### Results counter

  * Follow the writing guidelines for [text filter](/components/text-filter/?tabId=usage#writing-guidelines).




#### Loading state

  * Follow the writing guidelines for [loading state](/patterns/general/loading-and-refreshing/#writing-guidelines/).




#### No match state

  * Follow the guidelines for [empty states](/patterns/general/empty-states/).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Specify a label for the text filter input through `filteringAriaLabel`.

    * For example: _Filter options._




#### Keyboard interaction

  * By default, the tab key focuses the component.

  * After typing, the enter key submits the free text only if free text filtering is enabled.

  * Use the keyboard arrows to highlight options and press the enter key to select.



