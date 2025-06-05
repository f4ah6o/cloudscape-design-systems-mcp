## General guidelines

### Do

  * Use only one content layout component per page.
  * Reserve header styling (for example, with color, gradients, or images) to draw users attention to a specific message (for example, a call to action), or build brand equity. Consult the [hero header]({get_link_resource: /patterns/general/hero-header/}) pattern for more guidelines.
  * Reserve header styling for use cases with low levels of interactivity, and where information density is not critical.
  * Reserve header styling for specific use cases, as opposed to using across your entire application.
  * Use the high-contrast `headerVariant `when applying a dark background to the header.
  * Disable content overlap if the page content does not start with a container.
  * Add default padding to the content and header by setting `defaultPadding `to true.



### Don't

  * Don't use the content layout component for productive use cases such as [resources creation]({get_link_resource: /patterns/resource-management/create/}), [view]({get_link_resource: /patterns/resource-management/view/}), [edit]({get_link_resource: /patterns/resource-management/edit/}), and [delete]({get_link_resource: /patterns/resource-management/delete/}).
  * Don't nest multiple content layout components.
  * Don't use the content layout notifications or breadcrumbs features if you already use those slots in App layout. This results in duplicate content.
  * Don't use the divider headerVariant when the content area starts with containers or tabs.



## Features

  * #### Header

The header area contains contains page level information and actions. This can span from a simple page title to more complex scenarios such as a [hero header]({get_link_resource: /patterns/general/hero-header/}). You can configure the visual style of the header area by selecting one of the following variants:

    * **Default:** no additional styling is applied. The header has the same background as the rest of the page, unless explicitly customized.

    * **Divider:** uses a divider to separate the header from the content area. Use this variant when the content of the page starts with blocks of text outside of any container, and there no header styling is needed. The divider spans across the specified maximum content width.

    * **High-contrast:** applies a dark [visual context]({get_link_resource: /foundation/visual-foundation/visual-context/}) to the header.

You can further customize the header visual style by setting a custom `headerBackgroundStyle` to add a gradient or an image, to draw users attention to a specific message (for example, a call to action), or build brand equity. The visual treatment spans across 100% of the available space, independently of the maximum content width that you specify. It also covers notifications and breadcrumbs areas that you embed within the component. When customizing the header background style, ensure that the header content meets color contrast requirements.

By default, the header overlaps with the content below it. This is recommended when you place a container in the content area. In other use cases, you can remove the overlap by setting `disableOverlap` to true. For example, see [product detail page]({get_link_resource: /examples/react/product-detail-page.html}).

For additional guidance, follow the guidelines for [layout]({get_link_resource: /foundation/visual-foundation/layout/}) and [hero header]({get_link_resource: /patterns/general/hero-header/}).

  * #### Secondary header \- optional

The secondary header area can be used to add complementary page level information and a call to action. Note that the secondary header is always displayed in a light visual context, independently of the styling of the main header. If you want to insert a custom content area with the same visual treatment as the rest of the header, use the header slot.

  * #### Notifications \- optional

The notifications area is a dedicated section at the top of a page that displays notifications such as [flashbars]({get_link_resource: /components/flashbar/}). The background of this area is dictated by the header background style you configured.

  * #### Breadcrumbs \- optional

The breadcrumbs area is a dedicated section at the top of a page that displays [breadcrumbs]({get_link_resource: /components/breadcrumb-group/}). The background of this area is dictated by the header background style you configured.

  * #### Content

The content area displays the main content of the page, where users focus their attention the most. By default, the content area occupies 100% of the available space. You can configure the component to:

    * add default padding by setting `defaultPadding `to true. When used in conjunction with the app layout, the padding accounts for additional elements such as drawers triggers.

    * set a maximum content width. The content is centered and constrained to the specified maximum width.




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

  * Follow the writing guidelines for [header]({get_link_resource: /components/header/?tabId=usage#writing-guidelines}).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Accessibility landmarks

  * The content layout component does not come with any accessibility landmarks. When used as a standalone layout independent from the app layout component these landmarks will need to implemented manually.

  * When customizing the header background style, ensure that the header content meets color contrast requirements.



