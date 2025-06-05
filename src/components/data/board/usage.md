## General guidelines

### Don't

  * Don’t place the board into a side or split panel. Instead, place this in the content region of the [app layout]({get_link_resource: /components/app-layout/}). This should only be featured as the primary element on a page.
  * Don’t place static content in the board layout content area. Instead, use [board items]({get_link_resource: /components/board-item/?tabId=playground}) and follow the guidelines for [configurable dashboards]({get_link_resource: /patterns/general/service-dashboard/configurable-dashboard/}) if you are creating a configurable dashboard



## Features

  * #### Layout

The board layout provides three key types of functionality.  
  
**Grid**  
The layout uses a fluid 4 column grid that allows you to create views where elements can span across 4 columns of the available horizontal space. Columns have a variable width, while space between them (known as the gutter) remains fixed. Use columns and rows to place your content, and create a clear hierarchy that users can browse through.   
  
**Responsiveness**  
The 4 column grid responds to become a 1 column grid on smaller breakpoint with content spanning 100% of the available width.  
  
**Drag-and-drop**  
The drag-and-drop feature provides the ability for users to move, change the size, and add board items to the board layout. For more information, [see drag-and-drop]({get_link_resource: /patterns/general/drag-and-drop/}).

  
Follow the guidelines for [configurable dashboard]({get_link_resource: /patterns/general/service-dashboard/configurable-dashboard/}) for details on how to build a configurable dashboard.  


  * #### Content

The content area is where [board items]({get_link_resource: /patterns/general/service-dashboard/configurable-dashboard/}) are featured. The board items hosts different content types such as tables, charts, and lists.

Follow the guidelines for [configurable items]({get_link_resource: /patterns/general/service-dashboard/dashboard-items/}) for details on types of content to feature in a dashboard.  





### States

  * #### Empty state

An empty state occurs when users have deleted all board items, or a configuration is needed in order to display items. Include actions to trigger the population of items in the component. For example: a button that allows new dashboard items to be added.  
  
Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Set all of `liveAnnouncement*` values in `i18nStrings` object to provide texts for announcing reorder and resize interactions. Board item movements will be announced using values from this property.

  * Provide `i18nStrings.navigationAriaLabel` and `i18nStrings.navigationItemAriaLabel` to annotate keyboard navigation helper elements.



