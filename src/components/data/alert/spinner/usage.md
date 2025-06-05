## General guidelines

### Do

  * Use a spinner instead of a progress bar when the length of the operation is unknown. 
  * Use a spinner when the operation is short (under 10 seconds); use a progress bar or non-blocking notification for longer operations. 
  * If the operation occurs after the user takes action with a button, embed the spinner within the [button](/components/button/). 



## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * You can provide alternative text to communicate loading status by adding a hidden [live region component](/components/live-region/).

    * For example:  
`<LiveRegion hidden={true}>Loading table content.</LiveRegion>`



