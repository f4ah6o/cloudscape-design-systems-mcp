## General guidelines

### Do

  * For guidelines about how to structure the service’s global functionality, see [top navigation]({get_link_resource: /patterns/general/service-navigation/top-navigation/}) pattern.
  * For a dropdown menu with no button text, specify the menu title inside the dropdown menu.
  * Place important actions, such as _Sign out_ , only within your navigation.
  * Use categories to separate sets of links that are unrelated to each other.
  * To conserve space, use the dropdown menu to group related and associated links.
  * Use icons without labels if they’re easily recognized. For example: Commonly used icons such as search, notifications, settings, and profile.



### Don't

  * Don't use more than four controls in the utility navigation. To conserve space on the top navigation bar, use dropdown menus to group associated links and menus.
  * Don’t use a dropdown menu for one link or action. Instead, use a button.
  * Don't deactivate links or actions that can't be performed by users. Instead, don't display them in the top navigation. This helps free up limited space.



## Features

### Structure

  * #### Service identity

The service identity tells the user which service they're using. Always link it to the homepage of your particular service, so users can learn more about it.

  
If you are pairing a logo with a service name, the service name is removed on smaller screens to conserve space. Follow the guidelines for [responsive design.]({get_link_resource: /foundation/core-principles/responsive-design/})

  * #### Global search \- optional

    * [Search input]({get_link_resource: /components/input/?example=disabled-search&props=N4IgLgngDgpiBcIDOMCGAnAxgCxAGhABMBLJVAIwBsZCEAzVSlAqS1TGbAe0sJnQQgAymiy4AvkA})**–** Users can search for global items and resources.

    * [Autosuggest]({get_link_resource: /components/autosuggest/?example=with-suggestions})**–** A list of suggestions that users can choose from.

When space is reduced, the input is hidden until the user reveals it by using the search icon.

  * #### Controls \- optional

To set up the [utility navigation area]({get_link_resource: /patterns/general/service-navigation/top-navigation/#building-blocks/}) in the top navigation component, you can add additional control types. These control types can be linked using:  


    * [Link buttons]({get_link_resource: /components/button/?example=link-button}) \- This control uses button text alone or with a supporting icon. When you pair an icon with button text, you can hide the button text to conserve space if the icon is globally recognizable. 

      * For example: Removing the user profile button text when it’s supported with the user profile icon.

    * [External link buttons]({get_link_resource: /components/button/?example=external-link-button}) \- This control links to associated content outside the service, such as help documentation.

    * [Icon buttons]({get_link_resource: /components/button/?example=icon-button}) \- This control links to external pages. Only use icon buttons if they’re clear to the user without accompanying text. If the icon isn’t clear to the user, use a link button with adjoining button text. 

      * For example: The notification icon can be used to link to a notification page. 

    * [Badge]({get_link_resource: /components/button/?tabId=playground}) \- Use to indicate a global state change on the icon, such as a badge to signify new messages.

    * [Dropdown]({get_link_resource: /components/button-dropdown/?tabId=playground}) menu - Sets of menu items grouped together under one button. Both icon buttons and link buttons can have dropdown menu items.

      * Label**:** Used to describe its content type. Keep it concise, for example: _Settings_

      * Description**:** Used to provide more details related to the button label. For example, for the user name: _user id_ or _email address_

      * Link to internal or external pages: Organize links with more frequently used links at the top of the list. For information about creating a user menu, see the [top navigation]({get_link_resource: /patterns/general/service-navigation/top-navigation/}) pattern.

      * Dividers**:** Provide the ability to organize the menu by separating sets of links that aren’t related to each other.

      * Categories: Categorize sets of related links together.**** The category title works as a separator, so it can’t be selected. Nest categories to only one level, not multiple levels.

  * #### Overflow menu \- optional

Provides access to functionality that is made available to the user where there is a space constraint. Users open this menu from a link button with this text: _More_

  
When space is reduced, controls are moved into the overflow menu in the order they appear in the navigation. Prevent controls that are frequently accessed or require monitoring from moving into the overflow menu. For example: Preventing notifications from moving into the overflow menu so it’s visible on all screen sizes.




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

#### Overflow menu

  * For the overflow menu link button, use this text: _More_

  * Use the same label and link text when items are moved into the menu.




#### Dropdown menu

  * For button text, indicate the purpose of the menu set.

    * For example: _Notifications_




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * If providing both `identity.title` and `identity.logo`, use the same text for `identity.logo.alt` as for `identity.title`.

  * Provide alternative text via the `ariaLabel` property if there is no button text (icon variant), or if you are conveying additional information through means other than text (for example, color).



