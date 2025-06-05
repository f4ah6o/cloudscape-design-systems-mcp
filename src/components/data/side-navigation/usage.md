## General guidelines

### Do

  * Avoid linking outside of your service from the side navigation. If you need to do that, add the flag _external_ to navigation links.
  * Sparingly use dividers to separate sets of links that are fundamentally not related to each other. 
  * Follow the guidelines for [service navigation]({get_link_resource: /patterns/general/service-navigation/}) on how to structure your navigation information architecture and map it to breadcrumbs.
  * Use _New_ labels in the side navigation to mark new pages. See the guidance for [announcing new features]({get_link_resource: /patterns/general/announcing-new-features/}). 
  * If needing to place both a badge, such as a notifications badge, and a _New_ label next to the same navigational link, place the _New_ label to the right of the badge.
  * Use SVG format for logos.



### Don't

  * Avoid sections with only two links.
  * Avoid using sections and expandable link groups together in the same menu. 
  * Don’t use badges with section headers or for labeling links with static messages. For example: _Preview, New,_ or _Beta._
  * Aside from status badges and the external link icon, don’t use glyphs and icons within the menu.



## Features

  * #### Header

The service or console name is displayed at the top of the navigation panel, so the user can see which console they’re using. 

  * #### Items control \- optional

The side navigation provides an area below the header and above the items, where a custom item control can be added.   
For example, adding a [select]({get_link_resource: /components/select/}) or [segmented control]({get_link_resource: /components/segmented-control/}) to let users toggle the content of the side navigation.

  * #### Link structure

The first link listed in the side navigation, below the header, should correspond with the default landing page for a returning user of the service. Often, this may be a dashboard or a resource list. This differs with the landing page for either a first-time user or when resources don’t exist within the service. In such cases, the landing page should be the service homepage.

  * #### Sections

Sets of links can be grouped together under a single header. The header itself is not a link to a page but provides the ability to expand and collapse the section.

  * #### Section groups

Set of items that are conceptually related to each other, and can be displayed under a single heading to provide further organization. You can nest sections, links, link groups and expandable link groups within a section group depending on your information architecture needs.

  * #### Expandable link groups

Link groups support nested page information architectures. Set the group of child links as hidden by default until either a user has navigated to a page within the link group, including the parent, or has explicitly expanded the group into view.

  * #### Link groups

Only to be used when the information for an existing resource must be split between multiple detail pages. This link grouping should only appear after an existing resource is selected by the user.

  * #### Dividers

Dividers provides the ability to organize the side panel by separating major sets of links that are fundamentally not related to each other.

  * #### Badges

Use badges in the navigation to flag actionable areas. For example, you can use them for notifications.

  * #### New labels

Place New labels next to newly launched pages in the service, and keep them for 30 days. Follow the guidelines for [announcing new features]({get_link_resource: /patterns/general/announcing-new-features/}).

  * #### App layout

Place the side navigation in the `navigation` region of [app layout]({get_link_resource: /components/app-layout/}).




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

  * Use sentence case (not title case).

  * Use nouns representing objects or features, don't use verbs.

  * Keep link names and section headers as short as possible while maintaining clarity, and avoid jargon or abbreviations the user may not know.

  * Avoid articles (_a, an, the_) in headings to keep content short and actionable.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Roles and landmarks

  * Side navigation does not come with its own `navigation` role, because this is already provided by an enclosing [app layout component]({get_link_resource: /components/app-layout/}).

  * If you wish to use side navigation outside of app layout, make sure that you wrap it inside a properly labelled `<nav>` block.  




