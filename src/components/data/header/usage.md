## General guidelines

### Do

  * Use h1 for page headers, h2 for container headers, and h3 for other sections or subsections.
  * Use header variants according to their importance and information hierarchy.
  * Include action stripes if users can perform actions on the content below, such as tables, card views, detail pages, and containers.



## Features

  * #### Variants

The header component is available in three sizes: h1 (page level), h2 (container level), and h3 (section level).

  * #### Title

A title is a piece of text that summarizes the content below.

  * #### Description \- optional

Since descriptions in the UI directly impact content density, only share information necessary for the user to inform their action in the corresponding section or element. Ensure that links in the description use the [primary link]({get_link_resource: /components/link/?tabId=playground&example=primary-link}) variant.

Follow UX guidelines and writing guidelines for description content in [help system.]({get_link_resource: /patterns/general/help-system/})

  * #### Buttons \- optional

Add actions as [buttons]({get_link_resource: /components/button/}) or [button dropdowns]({get_link_resource: /components/button-dropdown/}) if users can perform actions on the underlying content. For multiple button elements, use the [space between]({get_link_resource: /components/space-between/?example=with-buttons}) component to properly space the buttons from one another.

**Order of actions**

The order of buttons is important when action is required on a data set. It follows the order of major resource management actions. 

    * Place buttons in this order: _View details, Edit, Delete, Create [resourcename]_.

    * Add other action buttons between the _Edit_ and _Delete_ buttons.

    * Add other _Create_ buttons between the primary _Create_ button and the _Delete_ button.

    * Place status actions at the far left in the action stripe.

      * For example:_Deactivate, Activate, Status 3, View details, Edit, Delete, Create [resourcename]_ , and so on.

**Number of actions**

    * For less than five actions, use individual buttons.

      * For example:_Delete_

    * For five or more actions, use a button dropdown to collapse non-primary actions.

On mobile viewports with more than one non-primary action, consider moving these actions into a button dropdown to conserve space. For more information on responsive behavior, see [responsive design. ](https://cloudscape.aws.dev/foundation/core-principles/responsive-design/)

**Pagination and preferences**

    * When a table does not have filtering or header actions, place pagination and collection preferences components in the actions slot, instead of the corresponding slots on the table. If using both, use a [space between]({get_link_resource: /components/space-between/?example=with-buttons}) component to properly space them.

      * This will ensure that there is no unused space in the table header.

  * #### Counter \- optional

    * The counter is a number next to the title that shows the total number of resources in a collection. If a selection is active, such as in a table or cards, the counter should also show the total number of items selected.

    * The number of selected items are listed before the number of total items, using a forward slash (/) to separate the two values. Use the format: ([number of selected items]/[number of total items])

      * For example: _(1/150)_

    * For resource counters in tables, [follow the guidelines]({get_link_resource: /components/table/?tabId=usage}).

  * #### Info \- optional

The area to render an [info link ](https://cloudscape.aws.dev/patterns/general/help-system/#medium-snack). Use an info link on h1 headers to display default page-level help panel content.

For more information about using the help panel, follow the guidelines for [help system]({get_link_resource: /patterns/general/help-system/}).




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

#### Title

  * Keep headings short. Aim for a maximum of three words.

  * Don’t use terminal punctuation.

  * Use action words and present-tense verbs.

    * For example:

      * _Get started_

      *  _Create resource_




#### Description

  * Descriptions should have end punctuation, with the only exception being if a description ends with an external link icon, which should not have a period after it. 

  * Follow UX guidelines and writing guidelines for description content in [help system.]({get_link_resource: /patterns/general/help-system/})




#### Actions

  * Use the generic titles for the Read, Update, and Delete actions:

    * _View details_

    *  _Edit_

    *  _Delete_

  * For most create actions, use the format: _Create [resourcename]_. You can use a different verb where appropriate. 

    * For example: 

      * _Create bucket_

      *  _Activate zone awareness_

      *  _Launch instance_

  * Don’t include articles (_a_ , _an_ , or _the_) in button labels.

  * Follow the writing guidelines for [button]({get_link_resource: /components/button/?tabId=usage#writing-guidelines}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Info links

  * Info links (that is, `<Link variant="info">`) within a header component automatically have the header title appended to their accessible name. If this doesn't sufficiently describe the purpose of the link, provide additional context via an `ariaLabel`.



