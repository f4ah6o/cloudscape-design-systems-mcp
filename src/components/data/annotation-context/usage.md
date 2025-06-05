## General guidelines

### Do

  * Annotation popovers can only be used in the context of a [hands-on tutorial](/patterns/general/onboarding/hands-on-tutorials/). 



### Don't

  * Don’t use annotation popovers for help content that relates to explaining general terms or concepts within the interface. Use the [help panel](/components/help-panel/?example=with-header%2C-content%2C-and-footer) instead. 
  * Don't launch a [modal](/components/modal/?example=default) from within an annotation popover.



## Features

### Annotation popover

The invisible annotation context component is responsible for rendering the visible step-by-step guidance of [Hands-on tutorials](/patterns/general/onboarding/hands-on-tutorials/). This guidance is given to users in the form of annotation popovers anchored to hotspot icons. 

  
Hotspot icons open and close annotation popovers. Each hotspot icon is rendered by the annotation context. The location of these icons within the interface is determined by a separate component, the [Hotspot](/components/hotspot/?example=around-an-element), with which the annotation context communicates.  


  * #### Title

Communicates the corresponding task that the annotation popover is providing information for. For example: _Task 1: Create a transcription job_

  * #### Content 

Provides contextual guidance for decision points in the flow.

**Info link** _**-**_**optional**

Use info links in annotation popovers to lead users to the corresponding help panel content. This content provides additional information about the recommended option and other available options. For more information, see [onboarding](/patterns/general/onboarding/). 

  * #### Steps

Shows the current step and the total number of steps in the sequence. For example: _Step 3/4_

  * #### Dismiss annotation button

The dismiss annotation button closes the annotation popover, but it doesn’t close the tutorial. When a user selects outside of the annotation popover, the popover remains open to allow users to cross-reference its information when completing actions in the service.

  * #### Next and previous buttons

The****_Next_**** button opens the next annotation popover in the sequence. The _Previous_**** button opens the previous annotation popover in the sequence. If a step requires users to submit a form or navigate to a new page, the _Next_**** button is inactive until the users completes those actions. For example, at the end of a create flow.

  * #### Size

The annotation popover always renders in the medium [popover](/components/popover/?example=medium) variant. 




### Dynamic content of the tutorial panel

The tutorial panel consists of dynamic and static content. The static content is provided by the tutorial panel. It’s the template that structures the panel's information. Follow the guidelines for [tutorial panel](/components/tutorial-panel/?example=first-tutorial-launched). 

  
Dynamic content is provided by the annotation context. Dynamic content fills the static template to provide guidance specific to a particular tutorial. Dynamic content is different across tutorials and consists of the title of the tutorial, tasks, and steps. The tutorial panel renders this text to make it visible to users.  


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

#### Annotation popover title

  * State the name of the active task.

  * Use the format: _Task [number]: [Name of task]_

    * For example: _Task 1: Create a bucket_




#### Annotation popover content

  * Keep text concise to minimize cognitive load.

  * Recommend a specific configuration and provide a brief reason for the recommendation.

  * Display key phrases or direct recommendations in bold to improve the scanability of the content.

    * For example: _Choose the_** _Standard-IA_** _storage class for rapid access to infrequently retrieved data._

  * Provide a choice criteria when a specific configuration can’t be recommended.

    * For example: _Choose the Region closest to your geographic location to reduce latency._

  * For steps that take place across services, provide high-level directions for navigating to and back from the external service.

    * For example:

      * To create a bucket:

        * _Go to_ __Amazon S3__ _[external link icon]_

        * _Create a bucket resource_

        *  _Return to this page. [Info link]_




#### Next and previous buttons

  * For the last step of the last task, instead of using _Next_ for the button label, use this text: _Finish_




#### Tutorial panel

  * Follow the guidelines for [tutorial panel](/components/tutorial-panel/?example=tutorial-list&tabId=api).




#### Tutorial panel title

  * The title of the tutorial panel should be consistent with the end objective that the user is trying to achieve.

  * Begin titles with an active verb.

    * For example:_ _

      * _Host a static website_

      *  _Catalog audio archives_




#### Tutorial panel tasks

  * Begin task titles with an active verb.

  * Use the format: _Task [task number]: [Task title]_

    * For example:_ _

      * _Task 1: Create a bucket_

      *  _Task 3: Transcribe audio_

  * The tutorial panel component provides the `task [task number]` portion of the string. 




#### Tutorial panel steps

  * Begin step titles with an active verb.

  * Use the format: _Step [step number]: [Step title]_

    * For example: 

      * _Step 4: Select a Region_

      *  _Step 2: Name your instance_

  * The tutorial panel component provides the `step [step number] `portion of the string.




__

## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.



