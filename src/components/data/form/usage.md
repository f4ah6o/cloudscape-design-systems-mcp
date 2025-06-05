## General guidelines

### Do

  * Apply the recommended max content area width and default panel states by setting `contentType='form'` in the [app layout]({get_link_resource: /components/app-layout/}) component. 
  * When used within the app layout, `full-page` forms must be the first component in the `content` slot.
  * If there are [unsaved changes]({get_link_resource: /patterns/general/unsaved-changes/}) invoke a [modal]({get_link_resource: /components/modal/}) when exiting the form.
  * Apply standard form[ validation]({get_link_resource: /patterns/resource-management/create/single-page-create/}). Use form field (client-side) and/or page level (server-side) validation depending on your use cases. 
  * Refer to the[ single page create flow ]({get_link_resource: /patterns/resource-management/create/single-page-create/})for additional design guidance on the pattern. 



### Don't

  * Don't use the "full-page" `variant` inside of a [content layout]({get_link_resource: /components/content-layout/}) component. 



## Features

  * #### Form header

Use the h1 variant of the [header]({get_link_resource: /components/header/}) component in this area. The form header can include:

    * A title that clearly and concisely describes the purpose of the form.

    * An info link for page level [help content]({get_link_resource: /patterns/general/help-system/}) (optional).

    * A description detailing the the form’s purpose (optional).

  * #### Form content

Form content is organized into sections using [containers]({get_link_resource: /components/container/}). Each container has a [header]({get_link_resource: /components/header/?example=with-info-link-and-counter}) with a title and an optional description. [Info links]({get_link_resource: /components/link/?tabId=playground&example=info-link}) may also be included and appended to the container header.

  * #### Form actions

    * Use the primary button for the main action to submit the form. Buttons should be right aligned.

    * Use link styling for the action of exiting the form, typically _Cancel_.

    * In case of secondary submit actions, use secondary button styling, and include it in between the primary and exit actions.

    * Do not deactivate the buttons. All form actions should be active by default.

  * #### Form error text

Use a validation error message for server-side failures.

  * #### Form variants

There are two available types of forms. These are as follows:

    * **Full page (default)**

      * This variant occupies the full page and applies the high contrast header and content overlap automatically.

      * Use this variant if you are following the single-page [create]({get_link_resource: /patterns/resource-management/create/single-page-create/}) or [edit]({get_link_resource: /patterns/resource-management/edit/page-edit/}) patterns.

    * **Embedded**

      * This variant does not contain a high contrast header.

      * Use this variant if the form is used in another context other than a [create]({get_link_resource: /patterns/resource-management/create/single-page-create/}) or [edit]({get_link_resource: /patterns/resource-management/edit/page-edit/}) page, one that doesn’t occupy the full page.




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

  * Keep the content simple. Be concise and focus on the information required for users to complete a step. Dense textual instructions defeat the purpose of the flow.

  * Refer to different mechanisms, such as help panel triggers and description text, to provide any additional information, per section, or per field.

  * Use sentence case for _all_ text, including button labels. (Capitalize only the first word in a sentence or phrase as well as any proper nouns, such as service names.)




#### Form title

  * Use sentence case (not title case).

  * The heading should indicate the main purpose of the form or current step in a [wizard]({get_link_resource: /components/wizard/}).

  * Avoid articles (for example: _a, an, the_) to keep content short and actionable.

  * Include an [Info link]({get_link_resource: /components/link/}) as needed.

  * Don’t use ampersands.




#### Form description

  * Descriptions should have end punctuation, with the only exception being if a description ends with an external link icon, which should not have a period after it. 

  * Briefly summarize the purpose of the page and the main actions that users need to take on the page. 

  * Use active voice and present tense. 

  * The suggested length is about two lines.

    * For example:_Find and register an available domain, or transfer your existing domains to Route 53._




#### Form actions

  * Use action verbs that reflect the goal of the form. 

  * Follow the guidelines for [button]({get_link_resource: /components/button/}).




#### Form container header

  * Use sentence case (not title case).

  * The heading should indicate the contents of the section form.

  * Begin section headings with a noun.

  * Avoid articles (for example: _a, an, the_).




#### Form container descriptions

  * Briefly summarize the purpose of the section and the main action that users need to take. Use active voice and present tense.

    * For example: _Provide the code for your function. Use the editor if your code doesn’t require custom libraries. If you need custom libraries, you can upload your code and libraries as a .ZIP file._




#### Validation form error

  * Follow the guidelines for [error messages]({get_link_resource: /patterns/general/errors/error-messages/}).  





## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Forms

  * Ensure the forms are keyboard accessible.

  * Auto focus the first field by default. This allows users to tab through elements in the form in a logical way.

  * Focus should change as needed based on interaction.

  * Allow the user to easily access the form controls that need to be modified.

  * Allow resubmission and revalidation of the form information.

  * Focus the first field with an error message if the validation has failed.

  * The form doesn’t ship with the tag or role `form,`so make sure you set it.



