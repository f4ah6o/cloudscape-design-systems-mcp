## General guidelines

### Do

  * Set the help panel closed by default, except if a [tutorial]({get_link_resource: /components/tutorial-panel/}) panel is implemented.
  * Persist the user preference for panel open or closed when users navigate across pages that have help content.
  * Always use info links to open the help panel. Follow the guidelines for [help system]({get_link_resource: /patterns/general/help-system/}).
  * The _Info_ link can be used multiple times within a page. The information in the corresponding help panel that opens when interacting with the _Info_ link should match the header or label topic directly next to the _Info_ link. 



### Don't

  * Don’t invoke the help panel from a modal.
  * Don’t use more than one `<h2>` per panel.
  * Don't display resource-specific meta data, forms, or tools in the help panel.
  * Don’t use the help panel for providing step-by-step guidance on how to complete a task, instead use the [hands-on tutorials]({get_link_resource: /patterns/general/onboarding/hands-on-tutorials/}) instead. Follow the guidelines for [onboarding]({get_link_resource: /patterns/general/onboarding/}). 



## Features

  * #### Header

The help panel header must match the topic header of the _Info_ link. The header is the only <h2> in the help panel.

  * #### Help content area

    * Supported content types for the main content area include the following: paragraphs, links, heading levels: 3, 4, and 5, unordered and ordered lists, code, preformatted text, description lists, dividers, line breaks, bold text, and italic text. For the full list of accepted HTML elements, see the [API documentation]({get_link_resource: /components/help-panel/?tabId=api}).

    * Links to related external documentation can be embedded in the main content area, as well as placed in the _Learn more_ footer. 

### Section headers

Use the supported heading sizes starting from H3 to organize content into groups.

### Dividers

Use dividers to separate sections that are fundamentally not related to each other. Use dividers sparingly. It’s typical for the divider between the content area and learn more footer to be the only divider in a panel.

  * #### Learn more footer

The footer is the last section in the panel that contains a list of additional links to relevant help topics. Typically these links should lead to external documentation.

    * The header for the _Learn more_ footer should display an external [icon]({get_link_resource: /components/icon/}) at the end.

    * The _Learn more_ footer should provide 1-3 links to additional relevant or related documentation for users who have more questions or need further explanations of the corresponding help panel topics. 

Follow the guidelines for [help system]({get_link_resource: /patterns/general/help-system/}).

  * #### App layout

Place help panel in the `tools` region of [app layout]({get_link_resource: /components/app-layout/}) to get properties such as default panel width and dismiss control functionality.




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

#### Header

  * The help panel title should match the header or label of the corresponding page, section, or element directly next to the _Info_ link.




#### Section headers

  * Keep section headers clear and concise.

  * Don’t write long section headers that are overloaded with specific or important information.




#### Help panel content

  * Keep the content succinct. Users should be able to quickly scan content without scrolling.

  * The ideal help panel topic length is 150 words. Minimum words per help panel topic are approximately 40. We recommend no more than about 300 words per help topic.

  * To keep text concise, rely on page element context as much as possible for the placement of info links and associated help panel content.

  * Follow UX guidelines and writing guidelines for help panel content in [help system.]({get_link_resource: /patterns/general/help-system/})




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.



