## General guidelines

### Do

  * Always implement a tutorial panel with an accompanying help panel. Follow the guidelines for [help system](/patterns/general/help-system/).
  * Display the tutorial panel as open by default whenever a new tutorial is introduced. After a user closes the panel, it should stay closed. Make sure to store your users' preferences. 
  * When a tutorial is launched, keep the tutorial panel open through all relevant pages as users move through the workflow.
  * When first introducing the tutorial panel, add a _-new_ label to the tab header and display it for 30 days. For more information, see [announcing new features](/patterns/general/announcing-new-features/).



### Don't

  * Don’t dismiss a tutorial when users close the panel. Only dismiss a tutorial when the Dismiss tutorial button is initiated. 
  * Don’t dismiss a tutorial when users open the help panel. Users should be able to move between the help panel and the tutorials panel when a tutorial is launched. 



## Features

### Placement

  * #### App layout

Place the tutorial panel in the `tools` region of the [app layout](/components/app-layout/). 

**Collapse button**

The _angle-right_  icon button allows users to collapse the panel. Collapsing the panel doesn't dismiss the tutorial.




### States

The content, function, and structure of the tutorial panel differs between the three states mentioned below. 

  * #### Tutorial list

This is the first state that users see. It displays a list of all existing tutorials within the service. Users see this state when no tutorial is launched.

  * #### Tutorial launched 

In the tutorial launched state, users see a list of tasks and their underlying steps that users must complete in order to complete the tutorial. This state provides a way to dismiss the tutorial and remove hotspot icons from the interface.

  * #### Tutorial completed

After the user completes the tutorial, this state displays a congratulatory message and provides a link to give feedback about the tutorial.




### Controls

  * #### Exit tutorial button

    * When the tutorial has been launched or completed, the _Exit tutorial_****[button](/components/button/?example=icon-button) returns users to the tutorials list state. 

    * Choosing the _Exit tutorial_ button dismisses any active tutorial. 




### Tutorial list content

In the tutorial list state, all the content is static. Because the tutorial isn’t launched, all of the content in this view is provided by the tutorial panel itself and not the [annotation context](/components/annotation-context/?example=default). The role of the annotation context is to provide information to the tutorial panels that’s specific to a launched tutorial.

  * #### Title

For a tutorial title, use action-oriented text that calls on users to engage with a tutorial.

  * #### Description

Summarize how the tutorial can help users learn a service.

  * #### Download button

Use a Download button to provide a text equivalent for non-interactive tutorials. When the information is laid out in a text format, it reduces the number of interactions needed to retrieve guidance. This makes the content more accessible for users who are using assistive technology and for accommodating for personal preferences. 

  * #### Expandable tutorial card

    * **Angle up and Angle down icon** -**** Expands or collapses a tutorial card.

    * **Card header** -**** States the objective of the tutorial.

    * **Card description** -**** Gives a brief overview of the tasks needed to complete the learning objective of the tutorial. 

    * ****[**External link**](/components/link/?example=external-link) _**-**_**optional**

      * Provide an external link to any external help content or pricing related documentation, if available. 

    * ****[**Prerequisites alert**](/components/alert/?example=info)**-**_****_**optional**

      * An info alert is used to communicate prerequisites for for tutorials that can't be launched until the prerequisites are complete. Not all tutorials have prerequisites. 

        * For example, a prerequisite to start a tutorial about how to visualize analytics for a given resource would have a preexisting resource in the service. 

Provide an external link to documentation related to completing the prerequisite. 

__

  * #### Learn more external link

A learn more [external link](/components/link/?example=external-link) leads users to more information about the particular flow by opening the associated help documentation page in a new tab. 

  * #### Start tutorial button 

    * A tutorial is launched from the _Start tutorial_ [button](/components/button/?example=normal-button). 

    * If the corresponding tutorial can’t be launched yet because of pending prerequisites, show the _Start tutorial_ button in an inactive state, along with an info alert in the tutorial card. 




### Tutorial launched content

In the launched state, the tutorial panel consists of static and dynamic content. The tutorial panel determines the structure of the presented information and provides the portions of the strings that are static. The static content is like a template provided by the tutorial panel. Static content is the same across all tutorials. 

  * For example:_Task 1:, Step 2:._




The [annotation context](/components/annotation-context/?example=default) provides the dynamic content to the tutorial panel. Dynamic content changes across tutorials because it's specific to the user's goal. Dynamic content consists of the title of the tutorial, tasks, and steps. 

  * For example:_Host a static website, Catalog audio archives._




The tutorial panel renders this text to make it visible to users.﻿ 

  * #### Title

The title states the main objective that users will achieve by completing the tutorial. 

  * #### Tasks

For tasks, do the following: 

    * List out the number of steps needed to complete the task.

    * Show the names and statuses of tasks in a launched tutorial. 

  * #### Steps

List out the steps required to complete a task. 

  * #### Dismiss tutorial button

The _Dismiss tutorial_ button dismisses the tutorial. It removes the hotspots and annotation popovers from the page and brings users back to the [tutorials list](/components/tutorial-panel/?example=tutorial-list&tabId=playground). 




### Tutorial completed content

The [annotation context](/components/annotation-context/?example=default) injects the title and completed screen description text into the tutorial panel. The tutorial panel then renders this text. 

  * #### Title

The title states the main objective that users achieved by completing the tutorial.

  * #### Completed page description 

After a tutorial is completed, the description summarizes what the user learned from the tutorial and what objectives the user achieved.

  * #### Completion page title 

A congratulatory message communicating the completion of the tutorial. 

  * #### Feedback link

The feedback link opens a feedback mechanism so that users can provide insights about the helpfulness of the tutorial after they’ve completed it.




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

  * Follow the guidelines for [annotation context](/components/annotation-context/?example=default).




#### Title

  * **Tutorial list title:**

    * If there are multiple tutorials in the list, use this text: _Choose a tutorial_

    * If there is only one tutorial in the list, use this text: _Start a tutorial_

  * **Tutorial launched title:**

    * Follow the guidelines for [annotation context](/components/annotation-context/?example=default).

  * **Tutorial completion page title:**

    * For the default success message, use this text: _Congratulations! You completed the tutorial._

    * You can change the default to whatever fits your use case best.




#### Buttons

  * **Tutorial list download button:**

    * Use this text: _Download PDF version_

  * **Tutorial dismiss button:**

    * Use this text: _Dismiss tutorial_




#### Expandable tutorial card

  * **Card title:**

    * The card title**** should be consistent with the end objective that the user is trying to achieve.

    * Begin titles with an active verb.

      * For example:__

        * _Host a static website_

        *  _Catalog audio archives_

  * **Card description:**

    * Keep the content clear and concise.

    * In a bulleted list, summarize what the user learned from the tutorial. 

  * **Start tutorial button:**

    * Use this text: _Start tutorial_




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.



