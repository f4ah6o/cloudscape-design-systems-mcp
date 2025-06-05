## General guidelines

### Do

  * Persist the user preference for drawer open or closed when users navigate across pages.
  * For drawers that are opened from an on-page action and need an empty state as a default state, display an empty state in the drawer. Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}).
  * For more information on the use of drawer, help panel, and split panel, see [secondary panels]({get_link_resource: /patterns/general/secondary-panels/}).



### Don't

  * Don’t put critical content in a drawer. Content in a drawer should be supplemental and not required for a user to complete their task.
  * Don’t trigger a drawer from a modal.
  * Don't put help content or tutorial content in a drawer, instead use [help panel]({get_link_resource: /components/help-panel/}) or [tutorial panel]({get_link_resource: /components/tutorial-panel/}).
  * Don’t use a drawer for resource selection, instead use a [split panel]({get_link_resource: /components/split-panel/}).
  * Don't overwhelm users with information. Be selective on the content of the drawer and keep it concise to minimize cognitive load.



## Features

  * #### Header

The header area should contain a title that explains the content of the drawer in a concise manner. This should be the only `<h2>` in the drawer.

  * #### Content

Drawer content is a space for supplementary features or assistance in task completion. Unlike the help panel content, drawer content can be interactive and may include inputs, expandable sections, and other dynamic components. Common content types in a drawer are:

    * Inputs and text areas for feedback or queries

    * Key-value pairs for summaries

    * Links and buttons for sharing content

    * Expandable sections for progressive disclosure or simplifying the interface

  * #### App layout

Place a drawer in the `drawers` region of [app layout]({get_link_resource: /components/app-layout/}) to get properties such as default drawer width and dismiss control functionality.




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




#### Component-specific guidelines

  * Keep the content succinct. Users should be able to quickly scan content without scrolling. Content that's in a drawer should never include critical information.

  * To keep content concise, rely on page element context as much as possible.

  * Follow the writing guidelines for any child component in the content area.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and ARIA regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.

  * [More accessibility guidelines]({get_link_resource: /foundation/core-principles/accessibility/})



