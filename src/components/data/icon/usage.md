## General guidelines

### Do

  * Use icons to visually support the communication of a concept or an action. 
  * Use icons to enhance usability, not for decoration.
  * Follow the guidelines for Cloudscape [iconography](/foundation/visual-foundation/iconography/). 
  * Icons should be accessible, and supported with alternative text. 



## Features

  * #### Size

Icons are available in small, normal, medium, big, or large size. Use the size that best fits the height of the accompanying text. Small icons are the same size as normal icons but they don't have padding so that they align with small text. For more information about supported font sizes and styles, see [typography](/foundation/visual-foundation/typography/).

  * #### Variants

Specify one of the following variants, depending on your icon’s meaning, context, and purpose:

    * **Normal** \- for default use cases

    * **Disabled** \- for use with a disabled control

    * **Error** -**** to convey a blocking error or state to the user

    * **Inverted** -**** for colored backgrounds as in the case of primary buttons or flash notifications

    * **Link** -**** for navigating the user to another page

    * **Subtle** -**** for lighter visual styling

    * **Success** -**** to convey accomplishment of an action

    * **Warning -** for alarm and warnings

  * #### Icon placement

Left-align icons that are used for information purposes in components, such as status indicators, flash, and buttons.

  * #### Custom icon

Provide a custom icon if the icon you want isn't available. The custom icon can be either an SVG or any other format (for example: PNG or JPEG). We recommend using SVGs whenever possible, so that the custom icon can inherit the stroke color from the icon variant and the visual mode (light or dark), and adjust to hover and disabled states. Read our guidelines on custom icons in the [iconography article](/foundation/visual-foundation/iconography/#custom-icons).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Do not provide unnecessary alternative text. If an icon is accompanied by text that describes it sufficiently, there is no need to add alternative text to the icon itself.

  * Provide alternative text with the `ariaLabel` property only if you are conveying information through the icon alone.

  * If an icon is included in an interactive element that has an aria-label, any accessible label applied to the icon will be ignored.



