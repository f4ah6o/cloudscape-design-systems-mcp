## General guidelines

### Do

  * Implement both positions when using the component.
  * Allow users to change the default position to better fit their needs. 
  * Refer to the [split view](/patterns/resource-management/view/split-view/) pattern for additional design guidance on the application of split panel.
  * Hide the split panel on close when an additional trigger is not necessary, and the panel is opened from an on-page action. Common use cases for this are:
    * Adding or editing an element on the page, such as a widget or resource
    * Displaying supplemental content or details
    * Content similar to a [modal](/components/modal/), where keeping the context of the main page is important



### Don't

  * Don’t use the split panel for help content. Use the [help panel](/components/help-panel/) instead. 
  * Don't use the split panel to replace the [details page](/patterns/resource-management/details/). 



## Features

The split panel component and guidelines have two main use cases: to provide or compare contextual resource details in the [split view](/patterns/resource-management/view/split-view/), or to show supplementary information or feature access. In the case where the split panel hides on close, the split panel acts similarly to a modal, but it keeps the main page in view instead of overlaying it. Common use cases here are adding or editing an element on the page, viewing details, or other supplementary content where it is useful to have the main page context.

  * #### Types of panel

There are two types of split panels: **comparison** and **discreet**.

    * **Comparison:** Includes a global trigger and supports panel preferences, allowing users to control its placement. Use this for viewing and comparing resources in a table or card view.

    * **Discreet:** Triggered only by interactions within the page and always positioned on the right without panel preferences. Use this for actions like adding widgets in a configurable dashboard or opening a sub-creation panel within a single-page create.

  * #### Header

#### Comparison split panel

The split panel title shows the ID of the selected resource in case of single selection, or the number of selected resources in case of multi-selection. For example: _2 instances selected_

    * Split panel preferences

      * The split panel preferences allow users to choose the default position of the split panel: bottom or side. When users choose the gear icon button, a modal appears where users can select the preference.

    * Close button

      * Users can choose the close button to close the split panel.

**Collapse button**

The **angle-down**  icon button allows users to collapse the panel.   


#### Discreet split panel

Show the title for the panel. For example, within a configurable dashboard, a possible title could be _Add widget_

    * Split panel preferences

      * Don’t provide this functionality when using the discrete split panel.

    * Close button

      * Users can choose the close button to close the split panel.

  * #### Content area

Displays the content of the split panel. For example, details about a selected resource. For more content examples and guidelines, see [split view ](/patterns/resource-management/view/split-view/)pattern.  


  * #### Position

The split panel has two positions: bottom and side. The two positions address different user needs and have a different visual treatment:

    * **Bottom position** \- The split panel overlays the content below it. 

    * **Side position** \- The split panel behaves similarly to the help panel, shifting the page content as it expands. This maintains consistency with how other side panels are used in the system, and ensures that right-aligned action buttons in containers aren't covered by the panel.

Choose the default position that best accommodates the main page content and the content within the panel. For more guidance about which position to set as default on a split view, see [split view ](/patterns/resource-management/view/split-view/)pattern.

  * #### Resizing

With the resize handle, users can adjust the size of the split panel. The component sets the maximum and minimum size when resizing the panel and remembers the adjusted size when users close and reopen the panel.

  * #### App layout

Place the split panel in the `splitPanel` region of [app layout](/components/app-layout/).




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

#### Split panel title

  * When no selection is made in the resource collection, use the format: _0 [resource type] selected_

    * For example:_0 instances selected._

  * Use the resource ID of the selected resource for panel title when users make a selection.

  * When users select more than one resource, use the format: _[number] [resource type] selected_

    * For example:_2 instances selected._




#### Empty state text

  * Use the empty state text when no selection is made in the resource collection on the [split view](/patterns/resource-management/view/split-view/).

  * When users can only select one resource from the resource collection, use the format: _Select a [resource type] to see its details_

  * When users can select multiple resources, use the format: _Select a [resource type] to see its details_. Then describe what will show when multiple resources are selected.

    * For example: _Select an instance to see its details. Select multiple instances to compare._




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Provide alternative text for the expand button of the split panel.

    * For example:_Open resource details._

  * Provide alternative text for the X close icon of the split panel.

    * For example: _Close resource details._



