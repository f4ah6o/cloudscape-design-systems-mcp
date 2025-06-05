## General guidelines

### Do

  * Use alerts to convey different levels of severity and urgency within the context of actions.
  * When there are multiples of each sub-type, show all of a sub-type in order of urgency, before the next sub-type is displayed. For example, show all error alerts before displaying the first warning.



### Don't

  * Avoid using multiple alert types on the same page. In rare cases when you need to do this, stack the alerts ordered by the urgency with which the user needs to pay attention: error, warning, information, and then success.



## Features

  * #### Dismissible / Non-dismissible

When the alert is dismissible by the user, include a _Close_ button in the alert. No other action is necessary.




### Structure

  * #### Icon

An alert is always accompanied by its respective icon, with the following automatic styling:

    * The type and color of the icon are determined by the type of alert that is used.

    * The size of the icon is determined by the content placed inside the alert. If an alert contains both a header and content, use a a large icon. If an alert contains just a header or content, a normal icon is used.

  * #### Header

Include a header in the alert when you want to catch the user’s attention or if the overall message can be understood with one sentence. Use the content area to provide details.

  * #### Content

Use the content area to provide details about the alert. If more information about the topic is needed, use `primary` variant of inline [normal links]({get_link_resource: /components/link/?tabId=playground&example=primary-link}) or Learn more [external links]({get_link_resource: /components/link/?example=external-link}) to relevant documentation.

When there is a significant amount of content that is not immediately critical, consider placing the content in an expandable section. This helps maintain focus on the most important information, and conserves space while still making additional details accessible.

  * #### Action button

If an alert requires an action from the user, display it in form of an action button.




### Types

  * #### Error

Use for [errors messages]({get_link_resource: /patterns/general/errors/error-messages/}), malfunctions, unsuccessful actions, and critical issues.

  * #### Warning

Use when conditions are present that don’t cause errors, but are occurrences that the user should be aware of.

  * #### Information

Provides alert information to users in context. Be judicious when using this alert so you don’t overuse it to replace regular content.

  * #### Success

Use to display static success messages about completion and success.




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

#### Header - optional

  * Don’t include end punctuation in headers.

  * Headers share the key message from the alert, for example:

    * _Your instances could not be stopped_

    *  _Failed to delete instance id-4890f83e_

    *  _Versioning is not enabled_

    *  _API failure_




#### Description

  * Descriptions require end punctuation, with the only exception being if a description ends with an external link icon, which should not have a period after it. 

  * Descriptions should be concise at only 1-2 sentences.

  * Use present tense and active voice where possible.

  * For an urgent alert, include a user action. What does the user need to do?

  * Add links to any additional documentation users can read to learn more if needed.

  * Follow the writing guidelines for [error messages]({get_link_resource: /patterns/general/errors/error-messages/}).




#### Button - optional

  * Action buttons should clearly describe the steps needed to resolve the error.

  * Use an action verb (Retry) or an action verb plus a noun (Restart instance). 

  * Action buttons should be 1-2 words.

  * Do not include end punctuation.

  * In instances where there is no clear action that the user can take, don’t include an action button, but instead add a link to learn more.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Keyboard focus

  * When an urgent alert is dynamically added to the page, ensure its content receives immediate attention by calling the `focus` method on the component.




#### Alternative text

  * To provide alternative text for the close icon according to the alternative text guidelines, use the dismissAriaLabel property. For example: Dismiss alert.



