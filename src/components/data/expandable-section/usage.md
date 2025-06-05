## General guidelines

### Do

  * Use expandable sections so that the user can view one or more sections at a time. 
  * Include only secondary content in expandable sections.
  * Use expandable sections beneath relevant items in the interface to reduce page length. An example is advanced configurations in a form. All adjacent content will be pushed vertically down the page.
  * Expandable sections are collapse expandable sections by default.



### Don't

  * Don’t hide error messages or critical information under an expandable section.
  * Don’t nest expandable sections.
  * Don’t use expandable sections inside tables. Instead use [table with expandable rows](/components/table/?tabId=playground&example=with-expandable-rows).
  * Don’t use more than one action in a default expandable section header. If you need more, use a [inline icon button dropdown](/components/button-dropdown/?tabId=playground&example=inline-icon-button-dropdown).



## Features

  * #### Variants

    * **Default** : can be placed at the page level or inside the container. It also allows for additional optional elements in the header: description and actions.

    * **Footer** : intended for containers' footers within forms.

    * **Container** : has its own visual container. It's used within the context of other containers, such as [resource creation flows](/patterns/resource-management/create/). It also allows for additional optional elements in the header: description, counter, info link, and actions.

    * **Stacked** : optimized to be displayed adjacent to other stacked components.

  * #### Actions \- optional

Actions can be featured in the default and container variants.

    * **Default:** Use the [inline button](/components/button/?tabId=playground) and [inline button dropdown](/components/button-dropdown/?tabId=playground). For example, an action to remove a section.

    * **Container:** Follow the guidelines for [actions in the header](/components/header/).




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




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Don't provide unnecessary alternative text or roles. The caret icon is already part of the component.



