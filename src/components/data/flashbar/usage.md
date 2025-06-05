## General guidelines

### Do

  * All flashbars should persist across relevant pages until the user dismisses them.
  * Most flashbar messages should have a dismiss control, except for use cases involving operations that need to persist in view. In this case, make sure your team plans a timeline to dismiss the message or include an action for users to stop the process. After the message is dismissed, the user can’t bring it back.
  * New flashbar messages should appear above existing ones. 
  * Stacked notifications will be shown in order of appearance, regardless of notification type. Use one stack for all notifications.
  * Flashbars on a page should either be all sticky or all non-sticky.
  * Minimize the number of flash messages displayed on a page at any given time, especially when sticky flashbar is active. Consider using stacked notifications if you can't reduce the number of messages to less than three.



### Don't

  * Don't auto-dismiss the message while the user remains on the same page view.
  * Don't show the message on pages where it's not relevant. For example, if the user navigates to a different page, a flashbar from the previous screen should be automatically dismissed from view.



## Features

  * #### Header \- optional

If there are next steps, dependencies, or clarifications needed for a flash message, then use a heading to communicate the primary action accomplished, plus an additional description to communicate these dependencies or actions.

All flash message types can use headings. However, if your message is one sentence, a heading is not required.

  * #### Description

The description area reminds the user of what they tried to do, and lets them know if it succeeded or failed.

When there is a significant amount of content that is not immediately critical, consider placing the content in an expandable section. This helps maintain focus on the most important information, and conserves space while still making additional details accessible.

  * #### Action button \- optional

The flash message may optionally provide a single [action button](/components/button/?example=normal-button). For example, if a resource has just been created, and the user wants to do further configuration of this resource or a related resource, an action button can take the user to the appropriate page to do this, or directly launch the operation.

  * #### Secondary action \- optional

A single secondary action may be provided using a text link. For example, this could be a View details link for a resource just created, or links to resources created as a result of a bulk action.

  * #### Types

Flash messages fall into five general types:

    * Information – A special circumstance or a service change has occurred or will occur.

    * [Error](/patterns/general/errors/error-messages/) – The current action can’t be completed.

    * Success – A user has completed an action.

    * Warning – A pending action has important consequences.

    * In progress - The current action is in progress.

  * #### Loading state \- optional

The state of the flashbar before the outcome of the operation has been displayed. For example, use flashbar in loading state before displaying the success flash message. You can also use it for operations with indeterminate duration.

  * #### Dismission \- optional

All notification types might be dismissed by the user by choosing the X icon on the right side of the flash message.

  * #### Stacked notifications \- optional

When there are multiple operations, or a single operation performed on a batch of resources, users may receive multiple messages. If the stacked notifications feature is not enabled, the flashbar notifications will display in a list. In order to avoid visual noise, we recommend enabling the stacked notifications feature. It displays incoming messages in a collapsed stack that can be expanded and re-collapsed at any point by clicking the notifications bar. 

The notifications will begin to stack when the second notification appears, and new notifications will automatically show up on top of the stack, regardless of notification type. The notifications bar displays how many notifications of each type, including error, alert, success, info, and in progress (counting both flashbars in loading state and in progress), represented by a corresponding type icon, are currently in the stack. Users can choose to expand the stack to see more details and perform actions related to the notifications. Users can also permanently dismiss individual notifications from the stack.

  * #### Sticky flashbar \- optional

The sticky flashbar feature allows for all flashbars to stay at the top of the page, irrespective of the user's scrolling position.

    * Activate this feature when the visibility of information is important for the user to perform the designated task.

    * This feature can only be activated in the `notifications` region of app layout.

    * This feature is automatically deactivated on mobile viewports, due to limited screen size on all viewports smaller than 769px.

  * #### App layout

Place the flashbar in the `notification` region of [app layout](/components/app-layout/).




## Writing guidelines

### General writing guidelines

  * Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.

  * Use end punctuation, except in [headers](/components/header/?tabId=usage) and [buttons](/components/button/?tabId=usage). Don’t use exclamation points.

  * Use present-tense verbs and active voice.

  * Don't use _please_ , _thank you_ , ellipsis (_..._), ampersand (_&_), _e.g._ , _i.e._ , or _etc._ in writing.

  * Avoid directional language.

    * For example: use _previous_ not _above_ , use _following_ not _below_.

  * Use device-independent language.

    * For example: use _choose_ or _select_ not _click_.




### Component-specific guidelines

#### Header - optional

  * Don’t include end punctuation in headers.

  * Headers share the key message from the flashbar, for example:

    * _Access point successfully created_

    *  _Failed to update instance id-4890f83e_




#### Description

  * Descriptions require end punctuation, with the only exception being if a description ends with an external link icon, which should not have a period after it. 

  * Descriptions should be concise at only 1-2 sentences.

  * Use present tense and active voice where possible.

  * Summarize the action taken, the disposition of the operation, and, if applicable, the resource involved. 

  * When you provide a specific resource name or ID in the description, it helps to link to the resource so that the user can further inspect the resource.

  * Answer the following questions for the user:

    * What did I try to do?

    * On what things did I do it on?

    * Did it work?

    * What should I do next? (if there are recommended next steps or resolutions)

  * Add links to any additional documentation users can read to learn more if needed.

  * Follow the writing guidelines for [error messages](/patterns/general/errors/error-messages/).




#### Button - optional

  * Action buttons should clearly describe the steps needed to resolve the error.

  * Use an action verb (Retry) or an action verb plus a noun (Restart instance). 

  * Action buttons should be 1-2 words.

  * Do not include end punctuation.

  * In instances where there is no clear action that the user can take, don’t include an action button, but instead add a link to learn more.




#### Loading

  * For loading message, follow the writing guidelines for [loading](/patterns/general/loading-and-refreshing/#writing-guidelines).




#### Stacked notifications

  * When using the stacked notifications feature, use _Notifications_ as the label for the notification bar.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### ARIA live regions

  * Flash messages added after the initial page load are not automatically announced to assistive technology. Use the `ariaRole` property on newly added flash items to announce them. Use `"status"` for status updates or informational content. Use `"alert"` for important messages that need the user's attention.

  * When using stacked notifications, the component automatically announces changes to the number of notifications using a live region.




#### Alternative text

  * Provide alternative text for the dismiss icon according to the alternative text guidelines using `dismissLabel` property.

    * For example: _Dismiss message_

  * Provide alternative text for the status icon using the `statusIconAriaLabel` property.

    * For example: _Error_

  * When using stacked notifications, provide additional alternative text using the `i18nStrings` property.



