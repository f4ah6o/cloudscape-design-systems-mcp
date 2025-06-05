## General guidelines

### Do

  * Use this component to show a sequence of tasks while troubleshooting or loading.



### Don't

  * Don’t use this component for navigation between steps. For example, wizard step navigation. 



## Features

  * #### Status

The status of a step conveyed via corresponding [status indicator]({get_link_resource: /components/status-indicator/}).

  * #### Header

A brief summary of the step to provide more context to users. It can be used to display the name of a task being performed, a [popover]({get_link_resource: /components/popover/}) that contains the step details, and a [link]({get_link_resource: /components/link/}) to a resource as needed. 

  * #### Details \- optional

A slot to display additional information corresponding to the step. For example, a description or list of sub-tasks being performed, a [link]({get_link_resource: /components/link/}) to navigate to a resource, or a [button]({get_link_resource: /components/button/}) to let users perform an action on that step. 




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

#### Status indicator

  * Follow the writing guidelines for [status indicator]({get_link_resource: /components/status-indicator/?tabId=usage#writing-guidelines}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### ARIA live regions

  * Status updates are not automatically announced to assistive technology. For situations where the steps’ status change dynamically, the Steps component should be wrapped with live regions.

    * For example: `<span aria-live="polite"><Steps steps={steps}/></span>`




#### Alternative text

  * Provide a label for the Steps component using the `ariaLabelledBy` property.

    * `<p id="stepsLabelId">Cloudformation deployment</p> <Steps ariaLabelledBy={"stepsLabelId"} steps={steps} />`

  * Provide a description for the Steps component using the `ariaDescribedby` property.

    * `<p id="stepsDescriptionId">Cloudformation deployment will affect the following resources...</p> <Steps ariaDescribedby={"stepsDescriptionId"} steps={steps} />`

  * Provide alternative text for the status icon using the `statusIconAriaLabel` property.

    * `<Steps steps={[status: "error", header: "Terminated process", statusIconAriaLabel="Error"]}/>`



