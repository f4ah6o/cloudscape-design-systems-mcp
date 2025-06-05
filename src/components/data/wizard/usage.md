## General guidelines

### Do

  * Apply the recommended max content area width and default panel states by setting `contentType='wizard'` in the [app layout](/components/app-layout/) component. 
  * When used within the app layout, the wizard must be the first component in the `content` slot.
  * Trigger a [modal](/components/modal/) upon exiting the wizard if there are [unsaved changes](/patterns/general/unsaved-changes/) in the flow. 
  * Match each navigation step title with the corresponding form header title. 
  * If a step is optional, next to the step number label and form header title, include: _\- optional_
  * Apply standard form[ validation](/patterns/resource-management/create/multi-page-create/#key-ux-concepts); use form field (client-side) or page-level (server-side) validation depending on your use cases. 
  * Display the choices on the review page in the same order they were presented in the previous steps. 
  * Refer to the [multipage create ](/patterns/resource-management/create/multi-page-create/)pattern for additional design guidance. 



### Don't

  * Don't use more than seven steps in a wizard flow.
  * Avoid having interactions on the review page, such as inline editing or editing modals. Edits should be made in the pages preceding the review page. 
  * Don't use the wizard inside of a [content layout](/components/content-layout/) component. 



## Features

### Navigation pane

The navigation pane is the numbered list of steps that serve as navigation, as well as an overall outline of the user's progress through a [multipage create ](/patterns/resource-management/create/multi-page-create/)pattern.   


Upon initial load of the wizard, steps must be visited in chronological order to help guide the user through a complex flow or series of interrelated tasks. 

On smaller screen sizes, the navigation pane is hidden and replaced with a single summary label above the form header. For example: _Step 1 of 4_. See this behavior in action on our [demo page](/examples/react/wizard.html).

  * #### Step number label

Small text displayed above the step title in the navigation pane to indicate the number of each step. For optional steps, next to the label, include: _\- optional_

For example: 

    * _Step 1_

    *  _Step 2 - optional_

  * #### Step title

    * Action-oriented text, displayed in the navigation pane, which summarizes what the user needs to do in the step. This should always match the form header title.

      * For example:_Select engine type_ or _Configure additional settings_

    * In the navigation, each step title can be in one of the following mutually exclusive states:

      * Disabled: A disabled step title means the step has not been visited by the user yet. Disabled steps are not interactive nor active. By default, all steps beyond the first step are disabled, and become active and/or interactive as a user progresses through the flow. 

      * Active: The active step is the step that the user is currently on. There can only be one active step at any point in time. An active step title is not disabled nor interactive, it is an indication of where the user is in the overall flow.

      * Interactive: A step title becomes interactive once it has been visited by the user. Interactive steps are rendered as links, and can be visited in any order.




### Form

The form is the page area adjacent to the navigation pane; the content is updated based on the user's active step. 

  * #### Form header

The area at the top of the form that displays the title of the step. Optionally, the header can also include an optional tag or a page level info link.

    * Step title: The title of the page that indicates what the user is doing in the current step. It should always match the corresponding step title listed in the navigation pane.

      * For example: _Select engine type_

    * Optional tag: If the step is optional, next to the title, include: _\- optional_

      * For example:_Configure additional settings - optional_

    * Info link: If you are using the [help panel](/components/help-panel/), add an info link for page level [help content](/patterns/general/help-system/).

  * #### Form description \- optional

Page-level description text that briefly summarizes the purpose of the step and the main actions that users need to take.

  * #### Form content

The main content area of the page where the [form containers](/components/container/), [form fields](/components/form-field/), and form controls such as [inputs](/components/input/) and [radio buttons](/components/radio-group/), are displayed. 

We recommend you make the last page of the wizard a review page that summarizes the choices made in previous steps. A review page ensures users can review their information and quickly go back to any step for edits. Follow the guidelines for [multipage create](/patterns/resource-management/create/multi-page-create/) pattern and see the [demo page](/examples/react/wizard.html) for examples.

  * #### Validation error message (server side) \- optional

Text that is rendered inside a page-level [alert](/components/alert/?example=non-dismissible-error) above the form's action buttons. This should be used for overall form submission errors such as recoverable, server-side validation failures.

  * #### Form action buttons

A standard set of actions on each page, displayed below the form content area. These can include any of the following types of buttons: 

    * **Cancel**

      * Ensures a user can exit the flow. A user should be able to exit the flow at any time. If a user has [unsaved changes](/patterns/general/unsaved-changes/) in the form and attempts to exit before completing the flow, you must prompt them with a modal asking them to confirm that they want to exit the flow. If there is no user input, you may terminate the wizard without a prompt. 

    * **Previous**

      * Ensures the user can move backward and return to the previous step.

    * **Next** or **Submit**

      * Ensures the user can move forward to the next step or submit the form.

      * This button can be rendered in a loading state if the page needs time to load, for example if content is being fetched or validated.

Buttons displayed for each step:

    * First step: _Cancel_**** and _Next_**** buttons.

    * Intermediate steps**:** _Cancel,_ _Previous,_ and _Next_**** buttons.

    * Last step: _Cancel,_ _Previous,_ and _Submit_ buttons. 

Optional form action buttons:  
  
There are two optional form action buttons that allow for further customization of the wizard. These buttons are hidden by default.

    * **Skip to step N  **or**  Skip to end**

      * Ensures the user can skip past any optional steps to the next required step. If there are no remaining required steps, it skips to the final step (_Review and Submit_).

      * The button label is configurable. We recommend using _Skip to step N_  or _Skip to end  _when used for the final step in the wizard.

      * If possible, group all required steps together at the beginning of the wizard. Then, a _Skip to end_ button can appear on the last required step.

      * When a user moves to another step using either the navigation panel or the action buttons, validate the relevant data.

    * **Custom Action**

      * Ensures the user can perform additional actions that affect the entire form. If there are multiple actions available, the button should become a single drop-down containing each action.




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

#### Step number label

  * Use the format: _Step [number]_

  * If a step is optional, next to the label, include: _\- optional_

  * Example step number labels in a navigation pane:

    * _Step 1_

    *  _Step 2 - optional_

    *  _Step 3_

  * For the navigation summary label displayed on narrow viewports, use the format: _Step [current step number] of [total step count]_

    * For example:_Step 2 of 3_




#### Step title and form header title

  * Use the same title in both the navigation pane and page header.

  * Begin the title with an active verb.

    * For example:__

      * _Select engine type_

      *  _Configure additional settings_

      *  _Provide contact details_

  * For the review page, use the text: _Review and [active verb]_

    * For example:_Review and create_

  * Follow the writing guidelines for [form](/components/form/).




#### Form header

  * If a step is optional, next to the form header, include: _\- optional_

    * For example: _Configure additional settings - optional_




#### Form description

  * Follow the writing guidelines for [form](/components/form/?tabId=usage#writing-guidelines).




#### Form error message (server-side)

  * Follow the guidelines for [validation](/patterns/general/errors/validation/).




#### Form action buttons

  * For the button that allows the user to exit the form, use this text: _Cancel_

  * For the button that allows the user to return to the previous step, use this text: _Previous_

  * For the button that allows the user to move to the next step, use this text: _Next_

  * For the button that allows the user to submit the form, use the format: _[Active verb][resource type]_

    * For example: _Create distribution_

  * Follow the writing guidelines for [button](/components/button/?tabId=usage#writing-guidelines) and [form](/components/form/?tabId=usage#writing-guidelines).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Form guidelines

  * Follow the accessibility guidelines for [forms](/components/form/?tabId=usage#accessibility-guidelines).



