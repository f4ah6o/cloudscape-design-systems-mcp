## General guidelines

### Do

  * Include the item palette in the discreet split panel.



## Features

The item palette is placed within the [discreet split panel]({get_link_resource: /components/split-panel/?tabId=usage#features}) to provide the ability for users to add items to a [board layout]({get_link_resource: /components/board/}).

  * #### Content area

The content area houses palette items that can be added into the board layout. These provide users the details of the board item and the ability to drag it onto the board. Follow the guidelines for [board items]({get_link_resource: /components/board-item/}).




### States

  * #### Empty state

A palette's empty state occurs when there are no board items available. Include actions to trigger the creation or processes to make items available. For example, a button that allows users to create a board item.  
  
Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}).  


  * #### Error state

When a problem occurs fetching resources show an error alert.




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



