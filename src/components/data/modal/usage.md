## General guidelines

### Do

  * Use an action button to act on the entire contents of a modal. For example: _Save_ , _OK_ , _Done_ , _Canceled_. Use a [flash message]({get_link_resource: /components/flashbar/}) to confirm the result of committing modal data. 
  * Use a modal primarily to confirm or cancel a choice For example: _Delete instance_. 
  * Keep the text short and interactions to a minimum. Try to avoid scrolling content. 



### Don't

  * Avoid tabs, or expanded sections in modal which overload the interface. 
  * Never launch another modal from within a modal. 
  * Do not chain together a sequence of modals. Instead of using a sequence of modals with multiple steps over multiple pages, use the[ multipage create flow]({get_link_resource: /patterns/resource-management/create/multi-page-create/}).



## Features

  * #### Overlay

A modal will tint the outlying content areas to indicate that they are blocked from user interaction.

  * #### Header

Provides a short summary of the requested user action.

  * #### Content

The area for modal content. Common content types of a modal are:

    * [Alert]({get_link_resource: /components/alert/?tabId=playground}) and description to inform the consequences of the user actions, for example, in [delete]({get_link_resource: /patterns/resource-management/delete/}) pattern to provide details of a delete action and in [communicating unsaved changes]({get_link_resource: /patterns/general/unsaved-changes/}) to communicate unsaved changes.

    * [Input fields]({get_link_resource: /components/input/?tabId=playground}) and simple [selects]({get_link_resource: /components/select/?tabId=playground}) to create resource, for example, in [create resource flow]({get_link_resource: /patterns/resource-management/create/}).

    * [Simple table]({get_link_resource: /components/table/?tabId=playground&example=simple}) to present data, for example, in [S3 resource selector]({get_link_resource: /components/s3-resource-selector/?tabId=playground}) to list S3 buckets.

    * [Tiles ]({get_link_resource: /components/tiles/?tabId=playground})and description to facilitate comparison, for example, in [density settings]({get_link_resource: /patterns/general/density-settings/}) to compare content density modes and in [split panel]({get_link_resource: /components/split-panel/?tabId=api}) to compare display modes.

    * [Checkboxes]({get_link_resource: /components/checkbox/?tabId=playground}), [radio groups]({get_link_resource: /components/radio-group/?tabId=playground}), and [toggles]({get_link_resource: /components/toggle/?tabId=playground}) to change preference settings, for example, in [collection preferences]({get_link_resource: /components/collection-preferences/?tabId=playground}) for table and cards.

  * #### Dismiss button

Always allows the user to dismiss the modal. Dismissing via the _X_ icon is the same as canceling when more than one input or action is present in the dialog box.

  * #### Scrolling content area

A scrolling viewport for content that overflows the visible area.

  * #### Footer

An area at the bottom of the dialog box for actions, such as _Cancel, Create, Delete, or Save._

While form controls may be placed within the content area, actions that commit or cancel an operation should always be placed in the footer area.

  * #### Size

Sets the width of the modal. The default is **medium**. **Max** varies to fit the largest size. Other sizes (small/medium/large) are fixed width.




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

#### Header

  * Start with an active verb, where possible.

  * Don’t use terminal punctuation (period, colon, or similar).

    * For example: _Delete channel_




#### Description

  * Use one or two short sentences that describe the task. Use active voice instead of passive voice.

  * Keep text concise and to the point, because text can grow by as much as three times its size when it is translated into other languages.




#### Button

  * Don’t include _Yes_ for buttons that confirm an action

    * For example: in a modal that prompts users to confirm a system reboot, use _Reboot_

  * Follow the writing guidelines for [button]({get_link_resource: /components/button/?tabId=usage#writing-guidelines}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Roles and landmarks

  * The modal component comes with its own `role` attribute set to `alert` in order to announce it to screen readers. Don't add any additional roles yourself.




#### Alternative text

  * Provide alternative text for the X close icon according to the alternative text guidelines using `closeLabel` property.

    * For example: _Close_




#### Keyboard interaction

  * The default keyboard functionality is to focus the modal _Close_ button when the modal is opened.



