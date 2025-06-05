## General guidelines

### Do

  * Provide a clear and succinct message for the live announcement (1-2 sentences).
  * Consult the development and accessibility guidelines for the relevant component on when to use the live region alongside Cloudscape components.



### Don't

  * Don’t place interactive elements including links or buttons inside the live region component. Move focus to the interactive element instead.



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

  * Use clear and concise sentences (1-2 sentences).




## Accessibility guidelines

  * Don’t place interactive elements including links or buttons inside the live region component. Live announcements are made without any page context, so screen readers users wouldn't have details on how to locate interactive elements placed inside the live region.

  * Only place text or non-semantic elements (such as `div` or `span`) when using the `children` slot. Elements labelled using `aria-label`, `aria-labelledby`, or `alt` will not be included in the announcement message.



