## General guidelines

### Do

  * Limit nesting to a maximum of three levels. For example, h2, h3, h4.
  * Ensure the anchor link text corresponds with the heading text that the link directs to. For example, _General guidelines_ is the title of the text of both the anchor link and the content section.
  * Pair the anchor navigation component with a heading to increase the understandability of the list of links.
  * Provide the anchor navigation as visible element on the page or provide an access point to it. For example, include it within an expandable section on mobile views.



### Don't

  * Don’t use anchor navigation to represent the information architecture of your service. Use [side navigation]({get_link_resource: /components/side-navigation/?tabId=playground}) instead.
  * Don’t use anchor navigation to represent a list of filters for page content. 



## Features

  * #### Anchor links

A list of anchor links that represents the page headings (h2, h3, h4). Anchor links enable quick navigation to the corresponding content section. You have full control over the definition of the headings and sub-headings.  


You can add a scroll motion to the content area, however be mindful of users with cognitive disabilities and respect their operating system settings.

  * #### Active state indicator

A visual indicator that enhances the active state of the selected link.

  * #### Content status label \- optional

Include _New_ or _Updated_ labels next to the corresponding anchor link to highlight newly created or recently modified content. Define the timeline for the label permanence based on the frequency of releases and updates for your service. Consider 30 days as maximum time to expose the labels.




### Additional configurations

  * #### Headings

The combination of anchor navigation and heading is intended to look similar on both desktop and mobile devices, for a cohesive user experience across different platforms. 

    * **Desktop:** You can pair the anchor navigation component with a heading, for example, _On this page_ , to provide context for the list of links that follow.

    * **Mobile:** You can include the anchor navigation within an [expandable section]({get_link_resource: /components/expandable-section/?tabId=playground}). Stack it as the first element of the content area, and collapse the expandable section by default. 

  * #### Motion

You can add a scroll motion to the content area, however be mindful of users with cognitive disabilities and respect their operating system settings.




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

#### Heading

  * When pairing the anchor navigation with a heading, use this text: _On this page_




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Provide a meaningful label for the anchor navigation through the `ariaLabelledby` property.



