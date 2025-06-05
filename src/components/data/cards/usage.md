## General guidelines

### Do

  * Use icons in cards only to show status. Avoid using other icons in cards where possible.
  * Ensure data symmetry. For example, the order of the key-value pairs after the unique identifier and status should match the order of the inputs in the create flow.
  * Only use filtering and pagination if there are more than five cards in the collection.
  * Use - (hyphen) for any empty values.
  * Consider using sticky header in your card collection if users need to take an action on resource(s) upon selection.
  * Use a sticky header only in card views and table views.
  * Always show the total number of resources next to the cards collection title.
  * Use [header](/components/header/?tabId=playground) component to display additional information, such as resource counter, info link, action buttons, or description text.
  * Only use selection if the user can take action on the items in the collection.
  * Disabled items should not be selected. A user should always be able to deselect an item.
  * Always provide information on why inactive items are unselectable. For example: show the status of an item as _Pending._
  * Reset item selection across pagination, sorting, filtering, and page size changes to prevent users from performing actions on items they may not know are selected.
  * Store all the card preferences when the user leaves the page and restore them when the user comes back to the same page.
  * Always include the number of selected items in the header resource counter.
  * When used within the [app layout](/components/app-layout/), `full-page` cards must be the first component in the `content` slot.
  * Cards are dedicated to resource collection only. Use the [container](/components/container/) component with media to present a card-like container with an image.
  * Use the [primary link](/components/link/?tabId=playground&example=primary-link) variant instead of the [secondary link](/components/link/?tabId=playground) variant in cards to help users distinguish links from other surrounding text content.
  * Make sure that the cards per row property includes a single column breakpoint for mobile viewports.



### Don't

  * Don't use a card within a container.
  * Don’t use sticky header in cards without actions in the [header](/components/header/).
  * Don’t use sticky header for continuous scrolling. We strongly recommend using[ pagination](/components/pagination/?tabId=playground) to give users an easy and consistent access to all items without scroll.
  * Don't show the number of selected items if nothing has been selected. For example, 0/150 should never be displayed.
  * Don’t use full card selection when there are interactive elements within a card.



## Features

  * #### Variants

There are two types of cards available:

    * **Default**

      * The default variant renders the cards header within a container. 

    * **Full page**

      * This variant takes up the full page. Use for presenting and managing cards on a standalone page. We also suggest enabling the sticky header and using the "awsui-h1-sticky" `variant` of the [header](/components/header/?example=page-header&tabId=api) with this variant, so the title reduces its size on scroll. For further context, see the [card view demo](/examples/react/cards.html) and the [card view](/patterns/resource-management/view/card-view/) pattern.

  * #### Header

The header is an area to place descriptive content and actions applicable to the entire resources collection. These can include a title, resource counter, and action stripe.

    * **Collection title**

      * The collection title is a short noun phrase describing the contents of the collection.

      * Use the h1 variant of the[ header](/components/header/?example=page-header) component to display the title of full page collection in card view.

        * For example: When used as a [full page card view](/examples/react/cards.html).

      * Use the h2 variant of the [header](/components/header/?example=with-info-link-and-counter) component in the container header of the default cards variant.

    * **Resource counter**

      * The resource counter is a number next to the title that shows the total number of resources in a collection, in parentheses. 

        * For example: _(150)_

      * If the total number of items is unknown, include a plus sign (+) after the known number, indicating that more resources exist.

      * If the table is in loading state, don't display the resource counter.

      * The number of selected items are listed before number of total items, using a forward slash (/) to separate the two values. Use the format: ([number of selected items]/[number of total items])

        * For example: _(1/150)_

      * The counter slot in the header component is designed to provide counter functionality in this component.

  * #### Sticky header \- optional

A sticky header keeps the collection header and features at the top of the page when a user scrolls down the page. Enabling this property lets users perform actions in context, such as using the action stripe, selecting items, filtering, and using pagination. Use the [awsui-h1-sticky](/components/header/?example=with-info-link-and-counter&tabId=api) header variant when the full page cards header is set to sticky. The title size is then automatically reduced on scroll to conserve space. 

If users need to take an action on resources upon selection, consider using a sticky header in your card collection.

Sticky header is not supported on mobile viewport sizes.  


  * #### Features

Features are additional attributes that can be added to support more complex collections, such as those with many resources. Features include:

    * **Filtering:** Filtering allows users to find a specific resource, or a subset of resources, using one of three [filtering mechanisms](/patterns/general/filter-patterns/): [text filtering](/components/text-filter/), [collection select filter](/components/collection-select-filter/), or [property filter](/components/property-filter/).

    * **Pagination:** [Pagination](/components/pagination/) allows users to paginate through a collection.

    * **Preferences:** [Preferences](/components/collection-preferences/?tabId=playground&example=cards-preferences) allow users to manage the display of the cards for properties like visible sections and page size.

  * #### Cards per row

Use this property to specify the number of cards per row for any interval of container width. You can set the maximum number of cards in each row for very wide screens. The maximum number of cards per row is 20.

  * #### Selection types \- optional

    * **None** \- default

      * Prevents users from selecting any items from the collection.

    * **Multi**

      * Allows multiple items to be selected at a time, by using checkboxes in each card item.

      * Includes the ability for users to select groups of items by using `shift + click` or `shift + space` to select items between ranges.

      * Use for collections that support bulk actions.

    * **Single**

      * Allows a single item to be selected, by using a radio button in each card item.

      * Use for collections that don't support bulk actions.

    * **Full card selection**

      * Enables the entire card to be selectable when there are no interactive elements within a card. This makes the selection easier by increasing the selection target area. Full card selection can be used with Multi or Single card selection.

  * #### Disabled items \- optional

The selection on any item can be inactive. When an item is inactive, a user won't be able to select it.




### States

  * #### Loading

The state of the component while the dataset is being loaded before being displayed. Follow the guidelines for [loading states](/patterns/general/loading-and-refreshing/) in table and cards.

  * #### No match

The state of the collection of resources after a user applies a filter that doesn’t return any results. Follow the guidelines for [empty states](/patterns/general/empty-states/) zero results.

  * #### Empty

The state of the component when there are no items to display. Follow the guidelines for [empty states](/patterns/general/empty-states/) in table and cards.




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

#### Cards title

  * Use nouns to describe what the table contains.

    * For example: _Resources_ or _Distributions_




#### Cards description

  * Follow the writing guidelines for [table description](/components/table/?tabId=usage#writing-guidelines).




#### Resource counter

  * When no items are selected, use the format: _([number of items in the collection])_

    * For example: _(340)_

  * If the total number of items is unknown and you only know a subset, use the format: _([number of known items in the collection]+)_

    * For example: _(1000+)_

  * When at least one item is selected, use the format: _([number of selected items]/[number of total items])_

    * For example:_(1_ /_500)_




#### Loading state

  * When the table is in a loading state, make sure to add a loading text as well.

  * Follow the guidelines for [loading and refreshing](/patterns/general/loading-and-refreshing/).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.



