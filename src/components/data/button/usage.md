## General guidelines

### Do

  * Use buttons for actions. Use links when taking the user to a different page. 
  * A button can be primary, secondary, or tertiary, depending on its importance in the hierarchy of decision-making. 
  * Use the attention-grabbing primary button to communicate the most recommended action on the page. 
  * Primary buttons are like[ The Highlander ](https://en.wikipedia.org/wiki/Highlander_\(film\)), there can be only one. Use only one primary button per page. 
  * Follow the guidelines for [disabled and read-only states]({get_link_resource: /patterns/general/disabled-and-read-only-states/}).



### Don't

  * Don't hide buttons. Deactivate buttons when an action cannot be taken in a certain context. For example: deactivate a delete button when no resource has been selected, because a user must first select which resource to delete.
  * Don't deactivate submit buttons in forms with multiple fields. Instead, use[ validation]({get_link_resource: /patterns/general/errors/validation/}). Users choose the _Submit_ button, which invokes [validation]({get_link_resource: /patterns/general/errors/validation/}). When multiple fields are present, it's not always clear to the user what they need to do to activate the button. 
  * Don't use icons for decoration. Only use icons in addition to text when the text for the action is ambiguous or unusual. 



## Features

  * #### Variant

There are six types of buttons:

    * **Primary** – The [primary button]({get_link_resource: /components/button/?tabId=playground&example=primary-button}) is used to call out the most common action that users will take on the page (only one per page).

      * For example: _Create_ (for a table), or _Submit_ (for a form)

    * **Normal** – [Normal buttons]({get_link_resource: /components/button/?tabId=playground&example=normal-button}) are the default button type. You can use normal buttons for most secondary actions on the page. 

      * For example, on a resource detail page: _Edit_ or _Modify_

    * **Link** – [Link buttons]({get_link_resource: /components/button/?tabId=playground&example=link-button}) are equivalent to tertiary actions.

      * For example, in a modal: _Cancel_

    * **Inline link** \- Inline link buttons are a link button that is placed in-context to resources in table rows. Use this so as not to impact the height of the table row where data density is important.

      * For example: A download button placed in table cells within the actions column in a table.

    * **Icon** – An [icon button]({get_link_resource: /components/button/?tabId=playground&example=icon-button}) is an [action icon]({get_link_resource: /foundation/visual-foundation/iconography/#action-icons}) that is displayed as a standalone trigger for an element or action. Icon buttons should be clear enough without text. If you feel like the icon can’t speak for itself, do not use a standalone icon button.

      * For example: The settings icon used to show preferences on a table.

    * **Inline icon** – An [inline icon button]({get_link_resource: /components/button/}) is an icon button that is placed inline next to text or used when space is limited.

      * For example: The copy icon used to [copy one line of text]({get_link_resource: /components/copy-to-clipboard/}).

      * For example: A download icon placed in table cells within the actions column in a table.

Buttons can also be used for actions in a [header]({get_link_resource: /components/header/}) component.

  * #### Icons

While text should be the default label on a button, there are two ways to use icons with buttons:

    * Icons inside primary, normal, or link button variants

      * If the text on a button is not clear enough, you can also include an icon in the button to support the concept. When using icons in addition to text, place the icon before the text (except for [external]({get_link_resource: /components/button/?tabId=playground&example=external-link-button}) icons, which should always appear after the accompanying link or text).

        * For example: Git actions such as pull-request, merge, or fork could use icons to help users visualize and recognize the terms.

      * When using icons to describe common actions that are grouped with other elements, such as within a [header]({get_link_resource: /components/header/}) component or attached to a [form field]({get_link_resource: /components/form-field/?example=select-with-refresh}) component, place the icon inside a normal button.   
For very common actions that are clear to the user, text can be omitted as long as you provide alternative text describing the button's purpose. 

        * For example: [refresh on a table]({get_link_resource: /patterns/general/loading-and-refreshing/}).

    * Icons as standalone actions

      * Standalone actions, such as table preferences, should use the [icon button]({get_link_resource: /components/button/?example=icon-button}) type. These should only be used for actions that are clear without text; do not add accompanying text.

  * #### Full width buttons \- optional

A button that takes up the full width of its container that can be used in situations where the container has restricted width (for example, a sign-in form or on small viewports). Full width buttons can be primary, normal, or link buttons.

  * #### Disabled reason \- optional

You can use a tooltip with disabled primary button, normal button or icon button to explain why the action is unavailable. 




### States

  * #### Disabled

Use the disabled state to prevent the user from initiating an action, as well as when a user still needs to perform an action to activate an item. Include a spinner in the disabled state when an action is being initiated.




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

  * Use one or two words for the label. Use additional words only when you must add clarity:

  * An action verb

    * For example: _Start, Continue, Open, Create_

  * An action verb plus a proper noun, including brand names (use proper nouns sparingly and only when they provide additional clarity)

    * For example: _Launch EC2 instance_

  * An action verb plus a feature or resource name

    * For example:_Create identity source, Create permission set_

  * When additional clarity is required, be concise. Try to use a section header, page title, or other content to provide context so that the button does not need additional words.

    * For example: _View dashboard_ if there’s only one dashboard on the page, instead of _View Storage Lens dashboard_ because the page already describes Storage Lens.

  * Don’t include _Yes_ for buttons that confirm an action.

    * For example: In a modal that prompts users to confirm a system reboot, use this label: _Reboot_

  * Don’t use terminal punctuation (period, exclamation point, question mark, colon) for button labels.

  * Don’t use articles (a, an, the) in button labels.

    * For example: _Migrate server_ instead of _Migrate a server_




#### Disabled reasons

  * Follow the guidelines for [short in-context disabled reasons]({get_link_resource: /patterns/general/disabled-and-read-only-states/#writing-guidelines}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Provide alternative text with the `ariaLabel` property if there is no button text or if you are conveying additional information through means other than text.

  * The accessible button name should be unique on the page whenever possible, for example a repeated delete button should indicate what it deletes. In cases where this is not possible, be sure that there is an additional mechanism for disambiguation such as a named group.

  * When using an icon in a button, if the text label of the button describes the icon sufficiently, there is no need to add alternative text to the icon itself.

    * An external link icons represent the idea of "opens in a new window", that should be applied to the icon as alt text.

    * A button with a copy icon next to the word _Copy_ would not need the icon to be labeled because it is redundant.

  * Remember: `ariaLabel` will override any text inside of the button, including any string passed to iconAlt. Be sure to include information about the icon in your ariaLabel if the icon is providing additional information from the text label.

    * For an external link button that requires an ariaLabel include _opens in a new window_ text in the `ariaLabel` prop.




#### Additional ARIA Properties

  * If a button controls the expansion and collapse of another element, use the `ariaExpanded` prop to convey the controlled element's current state.




#### Keyboard interaction

  * By default, the tab key focuses the component.

  * The enter key performs the action.



