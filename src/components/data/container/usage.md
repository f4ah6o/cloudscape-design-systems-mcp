## General guidelines

### Do

  * Use vertical and horizontal lines to separate pieces of content, if necessary.
  * Use a container to group similar items or display a list of attributes for a single resource.
  * When a container includes media and text, provide enough space for the text content, to ensure readability. Optimal ratios are 2/3 text and 1/3 media, or half text and half media.
  * In a collection view where containers are displayed next to each other, use the same height for media.
  * For optimal display of media elements within narrow containers, position the media at the top. This arrangement allows more room for text content, enhancing readability.



### Don't

  * Don't put containers inside containers. If you need to group information inside a container, consider using the [header component]({get_link_resource: /components/header/}) to create sections within the container.
  * Don’t use containers simply for page hierarchy or for general page-layout purposes.



## Features

  * #### Header \- optional

Use the header to display the title of the container. Additionally, you can include information and actions that apply to the entire content of the container, such as description, action stripe, counter, or an info link.  
  
The h2 variant of the [header]({get_link_resource: /components/header/?example=container-header}) component is designed to be used in this component.

  * #### Content

The area for primary container content. Common content types of a container are:

    * [Form fields]({get_link_resource: /components/form-field/?example=default}) for [creation]({get_link_resource: /patterns/resource-management/create/}) and [edit]({get_link_resource: /patterns/resource-management/edit/}) flows. Use the main content of a container for primary and required fields of a single resource configuration. 

    * [Key-value pairs]({get_link_resource: /components/key-value-pairs/}) for [detail]({get_link_resource: /patterns/resource-management/details/}) pages. Use the main content area to display key-value pairs that describe a single resource’s configuration.

    * [Charts]({get_link_resource: /components/charts/}) for [dashboard]({get_link_resource: /patterns/general/service-dashboard/}) pages. Use the main content area to display the visualization.

    * [Tables]({get_link_resource: /components/table/?example=common-table}) that are displayed with other content, such as [key-value pairs]({get_link_resource: /components/key-value-pairs/}) and supporting text. Use the `embedded variant` of the table in this case. 

  * #### Footer \- optional

Use a footer for secondary content. For example, in a [creation flow]({get_link_resource: /patterns/resource-management/create/}), this area often contains an [expandable section]({get_link_resource: /components/expandable-section/?example=footer}) with advanced configuration options. Alternatively, the [details as a hub]({get_link_resource: /patterns/resource-management/details/details-page-as-hub/}) pattern uses this area for a _View all_ link that takes the user to a new page with the complete resource list.

The footer can also contain elements like[ button icons]({get_link_resource: /components/button/?tabId=playground&example=icon-button}) (for example, share or download).

  * #### Media \- optional

    * Optimized for content-oriented containers. Using the media feature allows displaying integrated images like photos and video thumbnails. You can define different placements and sizes of integrated images:

    * The dimensions and position of media content, such as images, can be tailored within a container. You can specify the height, width, position (top or side).

    * By default, an image stretches to fill the full width of the container when positioned at the top, or the full height when positioned on the side. To crop images, you can set a custom value for height or width as needed. However, ensure that essential elements remain visible to users and aren't unintentionally cropped out of the view.

    * For best results consider using 16:9 and 4:3 formats for large images, and 1:1 format for icons. The image will be cropped if the height/width specified don't match the aspect ratio of the image.

    * Video thumbnails can be linked to the video player page or trigger a custom action (e.g.: open a modal).

  * #### Variants

    * **Default** : used in standalone context.

    * **Stacked** : optimized to be displayed adjacent to other stacked components, see an example of [key-value pairs in a container with a table]({get_link_resource: /components/key-value-pairs/}).




## Writing guidelines

### General writing guidelines

  * Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.

  * Use end punctuation, except in [headers]({get_link_resource: /components/header/?tabId=usage}) and [buttons]({get_link_resource: /components/button/?tabId=usage}). Don’t use exclamation points.

  * Use present-tense verbs and active voice.

  * Don't use _please_ , _thank you_ , ellipsis (_..._), ampersand (_&_), _e.g._ , _i.e._ , or _etc._ in writing.

  * Avoid directional language.

    * For example: use _previous_ not _above_ , use _following_ not _below_.

  * Use device-independent language.

    * For example: use _choose_ or _interact_ not _click_.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component specific guidelines

  * Provide alternative text that describes the function or purpose of the image. Ideally, the alternative text should provide instructive information that would be missed if a person cannot see the image. If the image is purely decorative, use the respective ARIA presentation role instead.

    * If the image is accompanied by text in the container that describes it sufficiently, there is no need to add alternative text to the image itself.

    * When providing alternative text, make sure to follow the [alternative text guidelines.]({get_link_resource: /foundation/core-principles/accessibility/#alternative-text})

  * If the image has important visual cues or content that needs to be exposed to the user (such as text) make sure it’s not cropped when the screen size changes.



