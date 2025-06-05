## General guidelines

### Do

  * Use to immediately trigger binary, mutually exclusive actions like saving or favoriting.
  * Always use an icon. Use an outline icon for the not pressed state, and switch to filled icon for pressed state.
  * Maintain a consistent button label for all button states. For example: _Save_ for both the pressed label and not pressed label.



### Don't

  * Don’t use a toggle button for actions that affect system-wide settings, such as turning a group of elements on or off, or UI such as light mode or dark mode. Instead, use [toggle]({get_link_resource: /components/toggle/}).
  * Don’t use a toggle button to change the way a piece of content or data is formatted on the page. Instead use [segmented control]({get_link_resource: /components/segmented-control/}).
  * Don’t use for options that require descriptions to understand the implications of both the pressed and not pressed states. Use a [radio group]({get_link_resource: /components/radio-group/}) or [tiles]({get_link_resource: /components/tiles/}) instead.
  * Don't use a toggle button in a form. Follow [selection in forms]({get_link_resource: /patterns/general/selection/}) guidelines. 



## Features

  * #### Variant

There are two types of toggle buttons:  


    * **Normal toggle button:** The normal toggle button features an icon and an optional label. Use this when a standalone icon is not clear enough for users.

      * For example: a heart icon with label S _ave._

__

    * **Icon toggle button:** A toggle button that features an icon only with no button border. These buttons should be clear enough without text. If you feel like the icon can't clearly convey it's use without text, use the normal toggle button instead with a supporting label. 

      * For example: a toggle button for favoriting a menu item with the `star` and `star-filled` icon.

  * #### Icons

Icons are used to reinforce toggle button states by using both outline and filled versions.

    * For example: a toggle button that has been pressed could be represented by the `star-filled` icon, while a toggle button that has not been pressed could be represented by the `star` icon. Follow the [guidelines for iconography]({get_link_resource: /foundation/visual-foundation/iconography/}).

  * #### Disabled reason \- optional

You can use a tooltip with disabled toggle button to explain why the action is unavailable.




### States

  * #### Pressed

Use the pressed state to communicate that the button’s action is activated. Selecting a toggle button in its pressed state returns button to a not pressed state.

  * #### Not pressed

Use the not pressed state to communicate that the button’s action is not activated. Selecting a toggle button in its not pressed state turns toggle button to a pressed state.

  * #### Loading

When a toggle button is selected, a loading state may be used to inform users of a pending request. In this scenario, the loading state informs users about the pending request by swapping icon with spinner and disabling the toggle button until the request is complete.

  * #### Disabled

Use the disabled state to prevent the user from initiating an action, or when a user still needs to perform an action to activate an item.  
  
You can use a tooltip with disabled toggle button to explain why the action is unavailable.  





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

#### Label

  * Maintain a consistent button label for all button states.

    * For example: _Save_ for both the pressed label and not pressed label.

  * Follow writing guidelines for [button]({get_link_resource: /components/button/?tabId=usage#writing-guidelines}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Provide alternative text with the `ariaLabel`property if there is no button text or if you are conveying additional information through means other than text.

  * The accessible button name should be unique on the page whenever possible. For example a repeated favorite button should indicate what a user is favoriting. In cases where this is not possible, be sure that there is an additional mechanism for disambiguation, such as a named group.



