The Hotspot component provides both the annotation popover and the hotspot affordance. There is no separate component for the annotation popover.

## General guidelines

### Do

  * Use hotspots only in the context of a [hands-on tutorial](/patterns/general/onboarding/hands-on-tutorials/).



### Don't

  * Avoid placing hotspots next to inactive elements. Placing hotspots with inactive elements can cause confusion, because inactive elements aren’t interactive. 
  * Don't place hotspots in [modals](/components/modal/?example=default).



## Features

  * #### Hotspot icon 

Hotspot icons are visual affordances that open and close annotation popovers. After a tutorial is launched, the [annotation context](/components/annotation-context/?example=default) automatically renders hotspot icons for any hotspots that belong to that tutorial. When the tutorial is dismissed, the icons disappear.

  * #### Side

Specify where the hotspot should be placed in relation to a page element. The hotspot can be placed either to the top-right or top-left of the page content or element that it refers to. 

  * #### Direction

Specify the direction that the associated annotation popover should open in. To learn more about the features of annotation popovers, follow the guidelines for [annotation context. ](/components/annotation-context/?example=default)




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.



