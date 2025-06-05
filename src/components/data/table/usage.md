## General guidelines

### Do

#### Header

  * Consider using a sticky header in your table when it has more than 30 items per page, the values in the table may be ambiguous to users without column headers, users need to take an action on resources upon selection, the table has more than five columns, or the columns can be sorted. 
  * Always show the total number of resources next to the table title.
  * Use [header]({get_link_resource: /components/header/}) component to display additional information, such as resource counter, info link, action buttons, or description text.
  * Use a sticky header only in [card views]({get_link_resource: /patterns/resource-management/view/card-view/}) and [table views]({get_link_resource: /patterns/resource-management/view/table-view/}).

#### Columns

  * Use the first table column for unique identifiers of the items that are represented in the table (for example: name, id, and ARN). Also use the first table column for users to navigate to a [details page]({get_link_resource: /patterns/resource-management/details/}) that shows more information about the item. The first column(s) can be set to sticky so users can reference the row title or resource ID when scrolling horizontally. 
  * Use the second column for status when status is relevant, for example _Running_. 
  * Ensure data symmetry. For example: The order of the columns, after the unique identifier and status columns, should match the order of the inputs in the create flow.
  * Always set the column width and minimum width properties based on content length. When setting it, avoid text wrapping in more than three rows and too much white space after cell content. 
  * Use column resizing or allow text wrapping to guarantee visibility of content.
  * When providing a default column sorting, base this on user data. For example: sorting by ascending order for resource title or by resource creation date.

#### Preferences

  * Only use filtering, pagination, and sorting if there are more than five items in the table. When these features are enabled in the table, they should persist when the amount of items in the table changes. For example, if there is no match after filtering, don’t hide sorting and pagination if they are enabled.
  * Store all the table preferences, including column widths, when the user leaves the page and restore them when the user comes back to the same page.
  * Set the content density preference to comfortable by default.
  * If you are providing table preferences by default then always give users the option to manage these via [collection preferences]({get_link_resource: /components/collection-preferences/?tabId=playground}). For example: When sticking the first column in a table by default, support this with the collection preferences controls to turn this off.

#### Cell

  * Use hyphen (-) for any empty values.
  * Left-align textual data within table cells that use letters letters (for example: links and paragraphs).
  * Left-align categorical numeric data within table cells (for example: dates, zip and postal codes, and phone numbers).
  * Right-align quantitative numeric data within table cells to make them easier to compare and contrast (for example: amounts, measures, and percentages). Format this data so that all are aligned and show the same number of decimal places. This consistency helps users to quickly scan lists and compare values.
  * Use the [primary link]({get_link_resource: /components/link/?tabId=playground&example=primary-link}) variant instead of the [secondary link]({get_link_resource: /components/link/?tabId=playground}) variant in table cells to help users distinguish links from other text content in adjoining cells. 

#### Inline-edit

  * Only provide the following input types for inline cell editing: [input]({get_link_resource: /components/input/}), [autosuggest]({get_link_resource: /components/autosuggest/}), [select]({get_link_resource: /components/select/}), [multiselect]({get_link_resource: /components/multiselect/}), and [time input]({get_link_resource: /components/time-input/}).
  * When disabling inline editing on a cell, use the `_disabledReason_` __ property to provide the reason it is not editable. For example: _You can’t edit the tag value as this is auto generated when created._
  * We recommend setting a minimum width of 176px to the supported columns for inline edit to ensure the content is always visible on small viewports.

#### Selection

  * Only use selection if the user can take action on the items in the collection.
  * Inactive items should not be selected. A user should always be able to deselect an item.
  * Always provide information on why inactive items are not selectable. For example: show the status of an item as _Pending_.
  * To prevent users from performing actions on items they may not know are selected, reset item selection across pagination, sorting, filtering, page size changes, and collapsing an expandable row.
  * Always include the number of selected items in the header resource counter.

#### Layout

  * When used within the [app layout]({get_link_resource: /components/app-layout/}), `full-page` tables must be the first component in the `content` slot.

#### Progressive loading

  * For tables with multiple levels of progressive loading, uniquely identify each level with a different string. For example, _Load more regions_ and _Load more instances_.
  * Use progressive loading on child rows when necessary to avoid slow load times.



### Don't

#### Header

  * Don’t use sticky header in tables without actions in the [header]({get_link_resource: /components/header/}).
  * Don’t use sticky header for continuous scrolling. We strongly recommend using [pagination]({get_link_resource: /components/pagination/}) to give users easy and consistent access to all items without scroll.
  * Don’t place interactive elements inside table header cells.

#### Columns

  * Column resizing applies to all columns. It is not possible to apply it only to a custom number of columns.
  * Don't provide sticky column(s) where these occupy more than 70% of the available table content area, as this can hinder the readability of the scrollable content area. 

#### Selection

  * Don't show the number of selected items if nothing has been selected. For example, _0/150_ should never be displayed.

#### Preferences

  * Don’t use the pagination and preferences slots if the table doesn’t have filtering or header actions. Instead, add pagination and preferences to the actions slot in the [header]({get_link_resource: /components/header/}) component.
  * Don't use the content density preference feature if your application already has a global density mode switch.

#### Layout

  * Don't expand a table after activating a _View all_ footer link. Instead, navigate to a separate page with the full list of resources.

#### Progressive loading

  * Don’t set different load sizes on an item-by-item basis. Instead, set one for the table, or one per level. 
  * Don't use progressive loading when pagination will work. Pagination provides several advantages over progressive loading, such as page load time and quicker access to specific resources.
  * Don’t use pagination and progressive loading at the same time, except when loading child rows in [tables with expandable rows]({get_link_resource: /patterns/resource-management/view/table-with-expandable-rows/}).



## Features

  * #### Variants

There are three available types of tables:

    * **Container**

      * This table variant has its own visual container with shadows and borders. Use this variant to feature a table in a stand-alone container with its own hierarchy. 

      * For example: when using a table on a [details page]({get_link_resource: /examples/react/details.html}).

    * **Borderless**

      * Use this variant to place a table inside a container with other content, such as key-value pairs.

      * Use this variant to display a table without the shadows and borders surrounding a container. Use when placing a table inside another container.

      * For example: when using a table in a [dashboard item]({get_link_resource: /patterns/general/service-dashboard/dashboard-items/}), [expandable section]({get_link_resource: /components/expandable-section/?example=default&tabId=playground}), [modal]({get_link_resource: /components/modal/?example=default}) or within a [split panel]({get_link_resource: /patterns/resource-management/view/split-view/}).

    * **Full page**

      * This variant is for implementing the full page [table view]({get_link_resource: /patterns/resource-management/view/table-view/}) pattern. Use it for presenting and managing a table with many columns within a stand-alone page. 

      * We suggest enabling the sticky header and using the "awsui-h1-sticky" `variant` of the [header]({get_link_resource: /components/header/?example=page-header&tabId=api}) with this variant, so the title reduces its size on scroll. Refer to the [table view demo]({get_link_resource: /examples/react/table.html}) and the [table view]({get_link_resource: /patterns/resource-management/view/table-view/}) pattern for examples in context. 

      * Use this variant in conjunction with the `contentType="table"` property on the App Layout to maximize the available space.

  * #### Header

The header is an area to place descriptive content and actions applicable to the entire resources collection. These can include a title, resource counter, and action stripe.

    * **Collection title**

      * The collection title is a short noun phrase describing the contents of the collection.

      * Use the h1 variant of the[ header]({get_link_resource: /components/header/?example=with-info-link-and-counter}) component with the full page table.

      * Use the h2 variant of the [header]({get_link_resource: /components/header/?example=with-info-link-and-counter}) component with the container table.

      * When embedding multiple tables or other content in a container in such a way that they have the same level of hierarchy, use the h2 variant of the header component for each one. If the embedded content has a parent-child relationship instead, use the h2 variant for the parent followed by smaller headings for the children. Make sure to follow the flow of the content hierarchy. 

    * **Resource counter**

      * The resource counter is a number next to the title that shows the total number of resources in a collection, in parentheses. 

        * For example: _(150)_

      * If the total number of items is unknown, include a plus sign (+) after the known number, indicating that more resources exist.

      * If the table is in loading state, don't display the resource counter.

      * The number of selected items are listed before number of total items, using a forward slash (/) to separate the two values. Use the format: _([number of selected items]/[number of total items])_

        * For example:_(1/150)_

      * The counter slot in the header component is designed to provide counter functionality in this component.

  * #### Footer

The footer is an area to place interactive elements relating to the rows above. For example, the [details as a hub]({get_link_resource: /patterns/resource-management/details/details-page-as-hub/}) pattern uses this area for a _View all_ link that navigates a user to a new page where they can view the complete resource list.

  * #### Sticky header \- optional

A sticky header keeps the collection header and features at the top of the page when a user scrolls down the page. Enabling this property lets users perform actions in context, such as using the action stripe, selecting items, sorting and resizing columns in tables, filtering, and using pagination. Use the [awsui-h1-sticky]({get_link_resource: /components/header/?example=page-header&tabId=api}) header variant when the full page table header is set to sticky. The title size is then automatically reduced on scroll to conserve space.   
  
Sticky header is not supported on mobile viewport sizes.  


  * #### Features \- optional

Features are additional attributes that can be added to support more complex collections, such as those with many resources. Features include:

    * **Filtering** -**** Filtering allows users to find a specific resource or a subset of resources, using one of three [filtering mechanisms]({get_link_resource: /patterns/general/filter-patterns/}) which are: [text filtering]({get_link_resource: /components/text-filter/}), [collection select filter]({get_link_resource: /components/collection-select-filter/}), or [property filter]({get_link_resource: /components/property-filter/}).

    * **Pagination** -****[Pagination]({get_link_resource: /components/pagination/}) allows users to view a collection page by page. In tables with expandable rows, pagination will only apply to the parent rows.

    * **Sorting** -**** Sorting allows users to re-order table rows based on a specific column.

    * **Preferences** -****[Collection preferences]({get_link_resource: /components/collection-preferences/}) allow users to manage the display of the table for properties such as:

      * content display (order and visibility of columns)

      * page size

      * line wrap

      * striped rows

      * content density

      * sticky columns

  * #### Column reordering \- optional

With column reordering, users can set their preferred column order for a specific table, to suit the need for comparison and to make faster decisions. This helps to categorize and cluster data in columns-heavy tables. 

Users are able to customize columns order in the table view via [collection preferences]({get_link_resource: /components/collection-preferences/?tabId=playground}).  


  * #### Column resizing \- optional

With column resizing, the user can manually resize the column width by dragging the divider on the right of a column header. Users can also reveal, hide, and adjust the content to the screen area.

  
Column resizing is not supported for touch interactions.

  * #### Column headers

The title for the values shown in a given column.

  * #### Column width \- optional

Columns allow to set width, min-width and max-width. Set the width based on content length to guarantee visibility on content:

    * Set min-width, if the content may cause table cell overflow on small total table width.

    * Set the width based on content length to guarantee visibility on content. The table might be automatically adjusted to fill available space and the actual column widths may be different.

    * Set the max-width if the expected content length is too big and it will push all the following columns out of visible area.

  * #### Sticky columns \- optional

Sticky columns provide the ability to keep visible column(s) in view when a table is wider than the viewport, for example, to support data comparison across columns. It is possible to define the number of sticky columns, and to provide it by default, depending on your user needs.  
  
Users are able to control what columns should stick in the table view via [collection preferences]({get_link_resource: /components/collection-preferences/?tabId=playground}).  
  
Sticky columns are deactivated when the available space for table content is reduced, ensuring that table content is always available.  


  * #### Selection types \- optional

    * **None** \- default

      * The component doesn’t provide the ability for users to select any items from the collection.

    * **Multi**

      * Allows multiple items to be selected at a time by using checkboxes for each item.

      * Includes the ability for users to select groups of items by using `shift + click` or `shift + space` to select items between ranges.

      * Use for collections that support bulk actions.

    * **Single**

      * Allows a single item to be selected by using a radio button in the table row.

      * Use for collections that don't support bulk actions.

  * #### In-context actions \- optional

Use for performing actions on a singular resource in the respective table rows. Use the [inline buttons]({get_link_resource: /components/button/?tabId=playground}) and [inline button dropdowns]({get_link_resource: /components/button-dropdown/?tabId=playground}) when featuring actions in a table cell.  
  
For more information refer to [in-context actions]({get_link_resource: /patterns/general/actions/incontext-actions/}).  


  * #### Disabled items \- optional

The selection on any item can be inactive. When an item is inactive, a user won't be able to select it.

  * #### Inline edit \- optional

Inline edit allows customers to edit a cell value. When inline editing is enabled, customers can edit, save, or discard changes. Validation happens per field, make sure to follow the guidelines for [validation]({get_link_resource: /patterns/general/errors/validation/}). 

Editable cells are displayed through the hover state, and paired with an icon to display the edit option. An icon indicator is displayed in the column headers of columns with editable cells. 

You can disable inline editing on specific cells within an editable column to prevent users from editing a cell value. For example, due to user permissions.  
  
Supported input types for cell editing are: [input]({get_link_resource: /components/input/}), [autosuggest]({get_link_resource: /components/autosuggest/}), [select]({get_link_resource: /components/select/}), [multiselect]({get_link_resource: /components/multiselect/}), and [time input]({get_link_resource: /components/time-input/}). When using components with dropdowns, make sure to enable the `expandToViewport` property to ensure that the component is not constrained by the table's scrollable container. Also make sure to include additional logic to handle updates in sorting, pagination, and filtering as described in the [inline edit]({get_link_resource: /patterns/resource-management/edit/inline-edit/}) pattern.

When using expandable rows, the first column cannot be editable.

Refer to the demo page for [inline edit]({get_link_resource: /examples/react/table-editable.html}) to see examples in context. 

  * #### Content density (compact mode) \- optional

The table’s content density feature allows users to reduce the space between elements in the table. This helps increase the visibility of large amounts of data, and can be useful when higher information density leads to users making decisions faster. For example, when comparing data across multiple rows. It can be utilized along with the respective [collection preference]({get_link_resource: /components/collection-preferences/}) to provide your users with the option of toggling compact mode.

  * #### Keyboard navigation \- optional

The feature makes all table cells navigable with the keyboard and ensures the entire table has a single tab stop. This allows keyboard users to efficiently navigate past the table without needing to tab through every interactive item.   
  
Only use the following interactive elements in table cells: [button]({get_link_resource: /components/button/}), [button dropdown]({get_link_resource: /components/button-dropdown/}), [link]({get_link_resource: /components/link/}), [checkbox]({get_link_resource: /components/checkbox/}), [radio group]({get_link_resource: /components/radio-group/}). Use inline editing to provide more input types like [input]({get_link_resource: /components/input/}) or [select]({get_link_resource: /components/select/}).  


  * #### Expandable rows \- optional

Expandable rows allows users to expand and collapse table rows to reveal one or more nested child rows. Expandable rows are toggled via a caret icon button at the start of the table row. Child rows are required to have the same columns as the parent, although some cells may be left blank or show aggregated data.   
  
The table’s default pagination will only apply to the parent rows. For example, if the table is set to show 10 rows per page, 10 parent rows will be shown per page regardless of the number of descendants of the parent row.

When expanding a parent with many child rows, consider using progressive loading. This will render a set number of rows first, along with a button to load additional rows.

For more details about expandable rows behavior, including filtering, sorting, and selection, see the pattern page for [table with expandable rows]({get_link_resource: /patterns/resource-management/view/table-with-expandable-rows/}). Refer to the [demo page]({get_link_resource: /examples/react/table-expandable.html}) for expandable rows to see an example in context.

  * #### Progressive loading \- optional

Progressive loading is a feature in which table rows can be progressively loaded onto a single page. Use this feature when your user needs to see all the data in one view, to compare large data sets, and where context switching between pages creates a cognitive load and prevents easy comparison. For example, loading more child rows in a table with expandable rows.

The feature can be also used to make rows expand asynchronously.

Progressive loading supports the following states:

    * **Pending** \- used to display the load more button when more resources can be loaded.

    * **Loading** -**** used to display the loading indicator when loading more data asynchronously.

    * **Error** \- used to display the error message when progressive loading failed.

    * **Finished** -**** used to indicate there is no more data to load.

    * **Empty** -**** used to display the empty indicator when a table row successfully expanded but no data is available.




### States

  * #### Loading

The state of the component while the dataset is being loaded before being displayed. Follow the guidelines for [loading states]({get_link_resource: /patterns/general/loading-and-refreshing/}) in table and cards.

  * #### No match

The state of the collection of resources after a user applies a filter that doesn’t return any results. Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}) zero results.

  * #### Empty

The state of the component when there are no items to display. Follow the guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}) in table and cards.




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

#### Table title

  * Use nouns to describe what the table contains. 

    * For example: 

      * _Resources_

      *  _Distributions_




#### Table description

  * Description should be brief, concise, and written in plain language, in consideration of content density. 

  * Descriptions should have end punctuation, with the only exception being if a description ends with an external link icon, which should not have a period after it. 

  * Use the description area to provide information with time or monetary implications for the user, or to explain how to interact with or read the data within the table.




#### Resource counter

  * When no items are selected, only display the total number of items in the collection, in parentheses.

    * For example: _(340)_

  * If the total number of items is unknown and you only know a subset, include a plus sign (+) after the known number, in parentheses.

    * For example: _(1000+)_

  * When at least one item is selected, use the format: _([number of selected items]/[number of total items])_

    * For example:_(1/500)_




#### Column headers

  * Begin column headings with nouns when possible.

  * Keep text brief: 

    * Try to use only one or two words, so column width is as narrow as possible. This is to ensure readability of table data.

    * Include timezone for absolute [timestamps]({get_link_resource: /patterns/general/timestamps/}) in column header instead of inside each table cell to reduce visual noise caused by content repetition. 

  * Each column heading must describe the content in the column.




#### Table cells

  * Avoid inserting admonitions (such as _Note, Important_ , and _Warning_) in table cells.




#### Loading state

  * When the table is in a loading state, make sure to add a loading text as well.

  * Follow the guidelines for [loading and refreshing]({get_link_resource: /patterns/general/loading-and-refreshing/}).




#### Empty states

  * For both the general table empty state and progressive loading row empty state, use this text: _No [resource(s)]_

    * For example: _No distributions_

  * Follow the writing guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/}) in table and cards.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Keyboard navigation

  * For tables with interactive content (for example links, or buttons), or interactive features such as inline cell editing or column sorting, provide keyboard navigation capabilities with `enableKeyboardNavigation=true`.




#### Alternative text for sorting

  * Provide alternative text for all column headers through the `ariaLabel` property on the `columnDefinitions` according to the alternative text guidelines. 

    * For example: _Creation date unsorted_ or _Creation date sorted ascending_




#### Alternative text for inline edit

  * Provide alternative text for all inline edit buttons (edit, submit, cancel) through the `ariaLabels` properties `activateEditLabel`, `submitEditLabel`, and `cancelEditLabel`. Follow the guidelines for alternative text in [button]({get_link_resource: /components/button/?tabId=usage}). 

  * Provide alternative text for all inputs through the `ariaLabel` and `errorIconAriaLabel` properties within the `editConfig` property in `columnDefinitions`.

  * Provide alternative text for the edit icon in the header of editable columns through the `editIconAriaLabel` property within the `editConfig` property in `columnDefinitions`.




#### Alternative text for repeated controls

  * Tables often contain controls that are repeated in every row. Make sure these controls have a unique and meaningful name. For example repeated delete buttons may have an aria-label such as _Delete [name of thing being deleted]_.




#### Single-select table actions

  * When using `selectionType="single"` do not use the change of selected radio buttons to trigger an action. There must be an additional control to trigger the action. For example, do not open a details panel on radio button change, instead include a dedicated details button in the row.




#### Live regions

  *  _Announcing changes to pagination_ : supply text via the `renderAriaLive` property to announce changes to visible items. 

    * For example:



    
    
    renderAriaLive: ({ firstIndex, lastIndex, totalItemsCount }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
    

  * _Announcing changes in tables with expandable rows_ : supply text via the `renderAriaLive `property and use `visibleItemsCount `argument to highlight the difference in the number of visible rows when a row gets expanded or collapsed or when progressive loading is used. Keep in mind that in tables with expandable rows the `firstIndex`, `lastIndex`, and `totalItemsCount `reflect the top-level items only.

    * For example:



    
    
    renderAriaLive: ({ firstIndex, lastIndex, totalItemsCount, visibleItemsCount }) =>
        `Displaying regions ${firstIndex} to ${lastIndex} of ${totalItemsCount}, 
        ${visibleItemsCount} entities visible`
    

  * _Announcing changes due to refresh_ : you should use the [live region component]({get_link_resource: /components/live-region/}) to announce changes due to clicking a 'Refresh' button.



