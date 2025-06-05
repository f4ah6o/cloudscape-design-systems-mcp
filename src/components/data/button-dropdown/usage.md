## General guidelines

### Do

  * Use a button dropdown to present 5-15 contextual actions that users can choose from to initiate one action.
  * Sort the actions set in a logical and hierarchical order. Start with the most relevant and frequently used actions at the top, and put destructive actions at the bottom. 
  * Since the primary variant points the way forward, use it only to start create flows. 
  * Since the primary variant points the way forward, use it only once on a page, with a maximum of 3 closely related actions. 
  * Use six or fewer actions in expandable child menus to prevent users from being overwhelmed.
  * If multiple button dropdowns are needed within a page, use the icon dropdown only if the actions are the same in each dropdown. Otherwise, use the normal dropdown variant with an appropriate button label instead.
  * Items that can be selected should be placed in separate categories from non-selectable items.
  * Only use items that can be selected for actions that take effect immediately, like turning on bold text styles.
  * When all actions are disabled due to the same reason, disable the button dropdown and show tooltip at parent level.
  * Follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).



### Don't

  * Don’t use the expandable mode with the primary button variant.
  * Don’t change the label of selectable items depending on the selected state.
  * Don’t use selectable items for options that require descriptions to understand the implications of both the _on_ and _off_ states.



## Features

  * #### Variant

There are four types of button dropdowns:

    * **Primary** – The [primary button dropdown](/components/button-dropdown/?example=primary-button-dropdown) calls out a set of closely related primary actions users can take on a page (only one primary button or button dropdown per page).

      * **Main action** – o _ptional:_ Use the main action property when you need to expose one primary action outside of the dropdown.

    * **Normal** – [Normal button dropdowns](/components/button-dropdown/?example=default) are the default button dropdown type. Use normal button dropdowns for the majority of dropdowns on a page.

      * **Main action**  – o _ptional:_  Use the main action property when you need to expose one action outside of the dropdown.

    * **Icon** \- [Icon button dropdowns](/components/button-dropdown/?example=icon-button-dropdown) are an alternative to the normal button dropdown. The intended use case is for instances where the normal variant can’t be used due to content density. 

      * For example: In dense dashboards, where the same actions are repeated across different cards, but the label either won’t fit on the cards or creates too much visual noise when repeated throughout the interface. 

    * **Inline icon** \- An [inline icon button dropdown](/components/button-dropdown/?tabId=playground&example=inline-icon-button-dropdown) is an icon button that is placed in-context to resources. Use this so as not to impact the height of the table row where data density is important.

      * For example: In cells within the actions column in a table.

  * #### Categories

Group sets of related actions into categories.  


The category title works as a separator.  


Nest categories to only one level, not multiple levels.

  * #### Modes

When a button dropdown has nested actions, it functions in one of the two modes:

    * **Flat** – In the [standard button dropdown](/components/button-dropdown/?tabId=playground&example=with-nested-options), all actions are visible in the main dropdown area.

    * **Expandable** – In the [expandable button dropdown](/components/button-dropdown/?tabId=playground&example=with-expandable-groups), all parent actions are visible in the main dropdown area. Child actions are visible in a fly-out menu on large viewports or in an expandable section on smaller viewports.

  * #### Item types

Button dropdown items can have two types: action or selectable. 

    * **Action** -**** These items initiate an action.

    * **Selectable** \- These items can be selected or deselected. When selected, they show that the value is turned on, and a check mark is displayed to the left of the label or icon if present.

  * #### Icons \- optional

Actions can contain optional icons, which are displayed on the left side of the label. Use them scarcely and only if they are comparable across actions. View available Cloudscape icons in [iconography](/foundation/visual-foundation/iconography/).

  * #### Disabled reason \- optional

You can use a tooltip with button dropdown item, primary button dropdown, normal button dropdown, or icon button dropdown at parent level to explain why it is unavailable.




### States

  * #### Disabled

Use the disabled state to prevent the user from initiating an action, and when a user still needs to perform a selection to activate an action in the item set. Include a spinner in the disabled state when an action is being initiated.




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

  * Follow the writing guidelines for [button](/components/button/?tabId=usage#writing-guidelines).




#### Button dropdown

  * For labels of button dropdown, indicate the purpose of the actions set.

    * For example: _Create stream_




#### Category heading

  * Summarize the content of the category items grouped below the category heading.




#### Selectable item label

  * Title the label so that the choice and it's opposite are clear

    * Example: _Show item descriptions_




#### Disabled reasons

  * Follow the guidelines for [short in-context disabled reasons](/patterns/general/disabled-and-read-only-states/#writing-guidelines).



