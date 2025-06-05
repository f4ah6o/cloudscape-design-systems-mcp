## General guidelines

### Do

  * Use the text filter to provide basic filtering in a collection. The most common use cases are [table]({get_link_resource: /components/table/}) and [card]({get_link_resource: /components/cards/}) collections.
  * Always use the filter functionality on the full collection of resources, not just on visible or loaded resources.
  * After a user completes a filter action, display the number of results next to the filter input.



### Don't

  * Don't use a filter if most of your users have a small collection of resources (fewer than five resources).
  * Don't use a text filter for collections that have a large set of values; use the [property filter]({get_link_resource: /components/property-filter/}) instead.
  * Don't use a text filter in combination with the [property filter]({get_link_resource: /components/property-filter/}) pattern. Use only the property filter.



## Features

  * #### Clear filter

Removes the filter that is applied to a collection of resources by removing typed characters or by clearing the field. This action sets the collection view back to the default.

  * #### Results counter

    * The results counter displays the number of resources that match the specified filter values.

      * For example:_28 matches_

    * The results count number will only show when text has been added to the input.




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

  * Don’t use terminal punctuation.




#### Results counter

  * Don’t use terminal punctuation.

  * If there are no matches, use this text: _0 matches_

  * If there are matches, use the format: _[number of results] matches_

    * For example: _28 matches_

  * If the total number of results is unknown, include an indication that there may be more results than the number listed.

    * For example:_25+ matches_




#### Loading state

  * Follow the writing guidelines for [loading state]({get_link_resource: /patterns/general/loading-and-refreshing/#writing-guidelines/}).




#### No match state

  * Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Provide alternative text for the filtering input through the `filteringAriaLabel` property according to the alternative text guidelines. The label should be a combination of a verb that describes filtering in the user's locale and the name of the resource exactly as displayed in the header of the table or cards collection. 

  * Make sure that you use the same labeling convention throughout your application to promote discoverability.

    * For example:_Find resources_  




