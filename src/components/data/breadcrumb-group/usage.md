## General guidelines

### Do

  * The first, or parent, breadcrumb must always start with the service navigation and return the user to the service homepage. 
  * Use breadcrumbs to reflect the information architecture of a service, not a historical trail. A page is always identified by one and the same breadcrumb. 



## Features

  * #### Navigation

Each breadcrumb item should be a link that takes the user to the page named by the breadcrumb item text. Exception: The breadcrumb item for the page the user is currently viewing should be inactive (not contain an active link). When space is limited in narrow viewports, breadcrumb items collapse into a [button dropdown](/components/button-dropdown/) and are displayed in ascending order. For more info see [service navigation](/patterns/general/service-navigation/).




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

  * Set the `ariaLabel` property to identify this landmark according to the alternative text guidelines.

    * For example: Breadcrumbs.

  * Breadcrumbs are silent by default, so don't add unnecessary alt text.




#### Roles and landmarks

  * Breadcrumb group comes with its own `nav` landmark.



