## General guidelines

### Do

  * Use tabs for organizing discrete blocks of information.
  * Use two to seven tabs in a tab view. This practice maintains uncluttered UI and reduces cognitive load for users. 
  * Disable the icon button or icon button dropdown in the action slot if the tab is disabled.
  * When providing dismissible tabs and the user closes all tabs, provide a clear and informative empty state with next steps.
  * Follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).
  * Follow the guidelines for [announcing new features](/patterns/general/announcing-new-features/) to communicate if the tab is new, and follow the guidelines for [announcing beta and preview features](/patterns/general/announcing-beta-preview-features/) to communicate if the tab is in beta or preview.
  * Use [badge](/components/badge/) after the tab label to display critical, actionable information, such as counts of unread messages or notifications.



### Don't

  * Don't nest tabs.
  * Don't use tabs as steps, service navigation, or in-page anchor navigation.
  * Don't use tabs as navigation in edit and create flows. Instead use the multi-page creation flow to feature the steps to complete a flow.
  * Don't use vertical tabs.
  * Don't use icons in tab labels as decoration.
  * Don’t use normal, primary or icon buttons for actions in tabs. 
  * Don’t include info links as actions in tabs, instead add these within the content of the tab.



## Features

  * #### Variant

    * **Default:** designed to live directly on the page background and allow users to switch between discrete blocks of information in the same view.

    * **Container:** used to switch between blocks of information inside one container.

    * **Stacked** : optimized to be displayed adjacent to other stacked components.

  * #### State

A set of tabs can have only one active tab, the selected one. The remaining tabs in the set are inactive, or not selected by default. We strongly recommend making the first tab active by default.

  * #### Header actions \- optional

Add a single [button](/components/button/) or [button dropdown](/components/button-dropdown/) to enable actions on the entire set of tabs. For example, creating a new tab.

  * #### Tab actions \- optional

Add actions as [inline icon buttons](/components/button/?tabId=playground&example=inline-icon-button) or [inline icon button dropdowns](/components/button-dropdown/?tabId=playground&example=inline-icon-button-dropdown) if users can perform actions on the tab. For example, dismissing a tab.  
  
**Number and order of actions**

    * There are two actions options next to a tab label.

      * First action can contain one inline icon button, or when more than two actions are required use icon button dropdown to collapse additional actions into a list.

      * Second action is reserved for the dismiss action and is always the last item.

  * #### Disabled reason \- optional

You can use a tooltip with disabled tab to explain why the tab is unavailable. 




### States

  * #### Default

A set of tabs can have only one active tab, the selected one. The remaining tabs in the set are inactive, or not selected by default. We strongly recommend making the first tab active by default.

  * #### Disabled

We don't recommend disabling tabs. If your content is coming soon, or if it's simply not available to your users, hide the tab instead of making it disabled. However, if you must disable a tab (such as when a user lacks permission), use the disabled property. 




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

#### Tab label

  * Ensure that the labels show a clear relationship between tab views.

  * Use labels that indicate the main purpose of the associated tab.

  * Avoid generic labels, such as _General_ or _Advanced_.

  * Don’t use terminal punctuation.

  * Limit each tab label to a maximum of two words.

  * Try to keep each tab label roughly the same length.

  * Use parallel structure. Either use all nouns, or all verbs.




#### Tab content

  * Ensure that the tab's content is similar or related to the other tabs.

  * Don’t force users to navigate back and forth to compare data; keep such content in the same tab view.

  * Avoid linking between tabs.




#### Disabled reasons

  * Follow the guidelines for [short in-context disabled reasons](/patterns/general/disabled-and-read-only-states/#writing-guidelines).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Keyboard interaction

  * The default keyboard functionality is to focus on the first tab. Use the left and right keyboard arrows to shift focus from one tab to another and automatically display its associated tab panel.

    * We support using the home and end keys to travel to the first and last elements within the tab list respectively.

    * We support using the page up and page down keys to scroll backwards and forwards respectively.

  * When the focus is on a tab, using the tab key will move the focus to the associated tab panel.




#### Alternative text

  * Make sure to assign a label to the tabs component. If there is a visible element that you can reference by ID, use the `ariaLabelledby` property. Alternatively, you can use the `ariaLabel` property to assign a label directly.

  * Make sure to use the dismissLabel to pass an aria-label attribute for dismissible tabs.

  * Make sure to use the aria-label attribute for the icon button or icon button dropdown if an action is being passed into the tab.



