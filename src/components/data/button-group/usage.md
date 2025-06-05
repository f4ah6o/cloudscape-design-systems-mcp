## General guidelines

### Do

  * Display buttons for frequently performed actions as standalone items in the button group. Move other actions to the overflow menu.
  * Group related actions within the button group. This helps users distinguish between actions that are related to each other and standalone. 
  * Use button group component in the [generative AI chat bubbles]({get_link_resource: /patterns/genai/generative-AI-chat/}). 



### Don't

  * Avoid adding arbitrary information in the action popovers. Use them to display success and error states only.
  * Avoid placing actions that require feedback via a popover in the overflow menu. Instead display these in the visible button group. For example, copy to clipboard action should be visible and not placed in the overflow menu.



## Features

  * #### Icon buttons

Display [icon buttons]({get_link_resource: /components/button/?tabId=playground&example=icon-button}) to enable users to perform specific actions. The icons used for buttons should be easy to understand without visible labels. 

  * #### Toggle buttons

Display [toggle buttons]({get_link_resource: /components/toggle-button/?tabId=usage#writing-guidelines}) to immediately trigger binary, mutually exclusive actions and persist the action performed. For example, use a toggle button for thumbs up and down feedback actions.

  * #### Overflow menu

Display additional actions in an [icon button dropdown]({get_link_resource: /components/button-dropdown/?tabId=playground&example=icon-button-dropdown}). Actions in the dropdown do not support feedback via a popover. 

  * #### Tooltip

Display the label associated with the action of a visible icon button in the tooltip.

  * #### Popover \- optional

Display feedback associated with the action performed by the user in a popover using [status indicators]({get_link_resource: /components/status-indicator/}). For example, successfully copied content to the clipboard. 

  * #### Grouped buttons \- optional

Within the button group component, buttons for actions that are related to each other can be grouped. These groups are displayed with dividers to distinguish them from other actions.

  * #### Disabled reason \- optional

You can use a tooltip with disabled icon buttons, toggle buttons or icon button dropdown to explain why the action is unavailable.




### States

  * #### Disabled

Display a button in [disabled state ]({get_link_resource: /patterns/general/disabled-and-read-only-states/})to prevent users from being able to act on it.

  * #### Loading

Display the button in loading state to inform users that the action is in-progress. 




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

#### Button labels 

Follow the writing guidelines for [buttons]({get_link_resource: /components/button/?tabId=usage#writing-guidelines}). 

#### Popover

Follow the writing guidelines for [popover]({get_link_resource: /components/popover/?tabId=usage#writing-guidelines}). 

#### Toggle button

Follow the writing guidelines for [toggle button.]({get_link_resource: /components/toggle-button/?tabId=usage#writing-guidelines})  


## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * Provide `text` for every button, group, and dropdown in the button group to ensure all elements have an accessible name.



