## General guidelines

### Do

  * Design your board item content so that the default is to show all content based on your user needs.
  * Treat a board item as an executive summary with only the most important information featured as an overview.
  * Ensure the user is not overwhelmed by information or functionality that could be better supported on a separate page or service.



### Don't

  * Don’t feature more than one action in the header. If you need more actions, place these in an [icon dropdown]({get_link_resource: /components/button-dropdown/?tabId=playground&example=icon-button-dropdown}).
  * Don’t introduce complex interactivity in your board items, such as complex filtering on a table or a graph. Instead, link to a page where users can carry out this action.
  * Don’t use expandable footers.



## Features

  * #### Types

There are two types of configuration with a board item. These can be configured to create the items that live within the [configurable dashboard layout]({get_link_resource: /patterns/general/service-dashboard/configurable-dashboard/}) and [item palette]({get_link_resource: /components/items-palette/}). 

**Dashboard item**  
This gives the user the ability to move a board item and to increase its size by using the re-size action. Follow the guidelines for [dashboard items]({get_link_resource: /patterns/general/service-dashboard/dashboard-items/}).  
  
**Palette item**  
When a board item is placed within an item palette the content should be kept to a minimum. Follow the guidelines for [configurable dashboard layout]({get_link_resource: /patterns/general/service-dashboard/configurable-dashboard/}).

  * #### Sizes

Board items can have different sizes depending on the content they need to represent.

**Dashboard items**

    * S - takes up 1 / 4 columns of board layout

    * M - takes up 2 / 4 columns of board layout

    * L - takes up 3 / 4 columns of board layout

    * XL - takes up 4 / 4 columns of board layout

Follow the guidelines for [dashboard items]({get_link_resource: /patterns/general/service-dashboard/dashboard-items/}) and [board]({get_link_resource: /patterns/general/service-dashboard/configurable-dashboard/}).

**Palette items**

Takes up the available width in the item palette. See [item palette]({get_link_resource: /components/items-palette/}) for more details.

  * #### Header

Use the header to display the title of the board item. Additionally, you can include information that applies to the entire content of the item, such as description, counter, or an info link.  
  
Use the h2 variant of the [header]({get_link_resource: /components/header/?example=container-header}) component for board items. 

When combining multiple content types into one board item where it requires additional titles, use the h3 variant of the header component.  
  


  * #### Actions \- optional

**Dashboard item**  
Add actions as a [button]({get_link_resource: /components/button/}) or icon [button dropdowns]({get_link_resource: /components/button-dropdown/?tabId=playground&example=icon-button-dropdown}) if users can perform actions on the underlying content. Feature one key action in the header and then place additional actions in the icon button dropdown.

    * [Normal button]({get_link_resource: /components/button/?tabId=playground&example=normal-button}) \- Use this for a key user action that applies to the underlying content.

    * [Icon button dropdown]({get_link_resource: /components/button-dropdown/?tabId=playground&example=icon-button-dropdown}) \- Sets of actions grouped together under one button. The icon button dropdown is fixed to the top right of the container.

    * **Preferences** \- Allows users to manage the display of the board item content for properties such as visible or hidden content sections. This action opens the [Preferences]({get_link_resource: /components/collection-preferences/}) modal. 

    * **Resize** \- Providing the user with the ability to change the size of the item to show and hide content.

    * **Drag -** Allows users to move a board item within the board.

**Palette item**  
Only include a drag action to allow users to add items to the board. Avoid additional actions and other elements to conserve space.

  * #### Filtering \- optional

**Dashboard item**  
Filtering allows users to find a specific resource. Supported filter types are [text filtering]({get_link_resource: /components/text-filter/}), [select]({get_link_resource: /components/select/?tabId=playground}) and [date]({get_link_resource: /components/date-picker/?tabId=playground}) or [date range picker]({get_link_resource: /components/date-range-picker/?tabId=playground}). For example, filtering all data within a board item content by a date range.

**Palette item**  
Do not include filtering.  


  * #### Content

**Dashboard item**  
The area for primary container content. Common content types of a container are:

    * [Tables]({get_link_resource: /components/table/?tabId=playground}) \- Display a collection of resources in a tabular format.

      * Board items introduce overflow to ensure table content remains accessible in responsive layouts.

    * [Key-value pairs]({get_link_resource: /components/key-value-pairs/}) \- Display key-value pairs that can, for example, describe a single resource’s configuration.

    * [Charts]({get_link_resource: /components/charts/}) \- Display data visualizations. These can be line, area, or pie charts.

      * To ensure charts adjust to their container, set the `fitHeight` property to `true`. You can use the `height` property to define the minimum allowed height in pixels.

    * Lists - Display a list of consecutive items displayed one below the other.

You can feature more than one type of content in a board item. For example, pairing a chart showing cost breakdown over time and a table showing resources and cost breakdown.   
  
**Palette item**  
Do not include any real content within an item featured in the palette. Instead provide:

    * Optional image. For example, a service icon.

    * Optional description giving an overview of what the widget contains and its benefits.

  * #### Footer \- optional

Use a footer for secondary content. For example, a view all link that takes the user to a new page with the complete resource list.

**Item palette  
** Place tags in the footer indicating what type of content is featured. For example, a table or line chart.  





### States

  * #### Empty state

An empty state occurs when users haven't created a resource, have deleted all resources, or a configuration is needed in order to display content. Include actions to trigger the population of data in the component. For example, a button that allows for cross-service navigation to set up alarms.  
  
Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}).  


  * #### Error state

State when a problem occurred fetching resources. Provide thorough explanations for errors, suggestions, and actions on how to remedy.  
  
Supported with an [alert ]({get_link_resource: /components/alert/})to notify the user in case of request timed-out or no access.

  * #### Loading state

The state when data is loading. Follow the guidelines for [loading and refresh]({get_link_resource: /patterns/general/loading-and-refreshing/}).




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

#### Board item header

  * Follow the writing guidelines for [header]({get_link_resource: /components/header/?tabId=usage#writing-guidelines}). 




#### Text filters

  * Follow the writing guidelines for [text filters]({get_link_resource: /components/text-filter/?tabId=usage#writing-guidelines}). 




#### Board item content

  * **Charts:** Follow the writing guidelines for [charts]({get_link_resource: /components/charts/}).

  * **Tables:** Follow the writing guidelines for [tables]({get_link_resource: /components/table/?tabId=usage#writing-guidelines}).




#### Custom messages

  * Use active voice wherever possible. Use passive voice only to avoid blaming users.

    * For example:

      * _View details_

      *  _Preferences_

      *  _Remove_

  * Follow the writing guidelines for [button]({get_link_resource: /components/button/?tabId=usage#writing-guidelines}).




#### Empty states

  * Follow the writing guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/#writing-guidelines}).




#### Zero results

  * Use concise and clear language for your custom message in cases of zero results resulting from the text filter. 

  * Follow the writing guidelines for [zero results]({get_link_resource: /patterns/general/empty-states/#writing-guidelines}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Provide alternative texts for drag and resize handles using `i18nStrings.dragHandleAriaLabel` and `i18nStrings.resizeHandleAriaLabel`.



