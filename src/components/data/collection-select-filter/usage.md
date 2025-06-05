## Preview

![Collection select filter desktop image](/__images/yvlrib0vb3vb/3rHKQTD4b3Q06I6oFUIeAJ/9fcc13e50c8a18979f0bb6767cacaff1/automated--example--table-select-filter-external-light-desktop--component.png.png)![Collection select filter desktop image](/__images/yvlrib0vb3vb/3DcCeJKzs2N3Hjlo1xK0Ef/ea25400b9ef542b6277261ce09f22d41/automated--example--table-select-filter-external-dark-desktop--component.png.png)

![Collection select filter mobile image](/__images/yvlrib0vb3vb/1kD0faPpNBJoFmRhf0Jwmn/592b171e9de9c7fa147eb3358b168ca5/automated--example--table-select-filter-external-light-mobile--component.png.png)![Collection select filter mobile image](/__images/yvlrib0vb3vb/4d0zcNV2BerC3i3SumvEVS/44b4f7ab2698f57f28f14ab00cf4f3d2/automated--example--table-select-filter-external-dark-mobile--component.png.png)

## Features

  * #### Properties

Display the most pertinent properties that users need to find a resource in a collection of resources. Most commonly, those properties refer to the column headers for [table view]({get_link_resource: /patterns/resource-management/view/table-view/}) and content labels for a [cards view]({get_link_resource: /patterns/resource-management/view/card-view/}).  
  
We don't recommend using more than two collection select filters. Used in combination, the two filters behave as an And operator.  


  * #### Values

    * Using the [select filter]({get_link_resource: /components/select/}), list all finite values that correspond to the property.

      * For example: **Property: Status** ; Values: Error, Loading, Pending, Stopped, and Success.

    * Use Any {property} as the default pre-selected option. It takes into account any values that correspond to that property. The collection isn't filtered and displays all items.

    * Follow the guidelines for the [select]({get_link_resource: /components/select/}) component.




### Collection view

  * #### Displaying results

The collection is filtered as soon as the user selects a value from a select filter or enters text into the accompanying [text filter]({get_link_resource: /components/text-filter/}). Only resources that match the conditions of the values are displayed. For example: _Engine_  set to _Aurora_ and _Status_  set to _available_ will show the available resources that are running the Aurora engine _._  


  * #### Loading state

The state of the collection of resources, such as [table]({get_link_resource: /components/table/?example=loading-state}) or [cards]({get_link_resource: /components/cards/?example=loading-state}), while the filtered dataset is being loaded. Follow the guidelines for [loading state]({get_link_resource: /patterns/general/loading-and-refreshing/}) for collections.

  * #### No match state

The state of the collection of resources, such as [table]({get_link_resource: /components/table/?example=no-match-state}) or [cards]({get_link_resource: /components/cards/?example=no-match-state}), after a user applies a filter that does not return any results. In other words, the state when there are no resources that match the filters applied. Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}).




## General guidelines

### Do

  * Always use the filter functionality on the full collection of resources, not just on visible or loaded resources.
  * Always display the number of matched resources. In table and card views, the count is shown next to the title in the table header.
  * Use a select ﬁlter for commonly used properties and values.
  * Always provide a visible label for every select filter to improve accessibility. Labels are optional for open text filters when a search icon is included in the control.
  * After a user completes a filter action, display the number of results next to the select filters.
  * Use a select filter if users need a maximum of two properties to find a specific item. If more than two are required, use a property filter instead.
  * If a select filter has two properties, the operator is always _and_. If you need more operators to combine properties, use a property filter instead.



### Don't

  * Don't use ﬁltering if the majority of your users operate on small collections of resources (fewer than ﬁve resources).
  * Don’t use a select ﬁlter for collections that have a very large set of values.
  * Don’t use a select ﬁlter if users need to select multiple values that correspond to one property. Use a property filter instead.
  * Don’t change the control for the selection mechanism. Always use a [select]({get_link_resource: /components/select/}) component.
  * Don’t change table column headers after a user has completed a filter action.



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

#### Placeholder text

  * Follow the writing guidelines for [placeholder text]({get_link_resource: /components/input/?tabId=usage#writing-guidelines}).

  * Don’t use terminal punctuation.




#### Label

  * Follow the writing guidelines for [select]({get_link_resource: /components/select/?tabId=usage#writing-guidelines}).




#### Select

  * Follow the writing guidelines for [select]({get_link_resource: /components/select/?tabId=usage#writing-guidelines}).




#### Results counter

  * Follow the writing guidelines for [table resource counter]({get_link_resource: /components/table/?example=common-table&tabId=usage#features}).




#### Loading state

  * Follow the writing guidelines for [loading and refreshing]({get_link_resource: /patterns/general/loading-and-refreshing/#writing-guidelines/}).




#### No match state

  * Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/#writing-guidelines/}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Follow the accessibility guidelines for [select]({get_link_resource: /components/select/?tabId=usage#accessibility-guidelines}).




#### Label

  * Provide a visible label using `inlineLabelText` property for filter controls to specify the parameter the dataset is filtered by. 

    * For example: _Filter engine_ , or _Filter class_.  
  




