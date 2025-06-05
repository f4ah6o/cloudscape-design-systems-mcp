## General guidelines

### Do

  * Use tiles when there are two to seven options in the group. Use a [select](/components/select/) or [autosuggest](/components/autosuggest/) when there are more than eight options.
  * Use for selections that require additional metadata to compare mutually exclusive options. For boolean options that do not require a description of the off state, use a [toggle](/components/toggle/?tabId=playground) or [checkbox](/components/checkbox/) instead.
  * When displaying a description, image, or both to differentiate options, use them on every tile. When using a description, keep the length and sentence structure of descriptions consistent for each tile in a group for easy comparison.
  * When using images, make sure that the image formats are consistent. This includes, but is not limited to, ratio, color, and background. For example, if one tile has an image in grayscale, the images on the other tiles also should be in grayscale.
  * If one tile is selected and inactive, always deactivate the other tiles in the group. If possible, provide a description to explain why the group is inactive or how the user may be able to activate it.
  * Use for options that turn a group of elements on or off, for example progressive disclosure of form elements. If the group of sub-elements contain other [tiles](/components/tiles/?tabId=playground), use [checkbox](/components/checkbox/), [toggle](/components/toggle/?tabId=usage), or [radio group](/components/radio-group/) instead. 
  * Always provide an option selected by default.
  * Follow the guidelines for [selection in forms](/patterns/general/selection/).
  * Follow the guidelines for [disabled and read-only states](/patterns/general/disabled-and-read-only-states/).



### Don't

  * To ensure legibility of labels and descriptions, avoid setting the columns to display four tiles in the same row unless absolutely necessary. 
  * Don't use generic icons or imagery for the sake of visual emphasis or decoration. 
  * To prevent multiple click targets in the same area, don't place links in labels or descriptions. Refer to the [help system](/patterns/general/help-system/) for the appropriate placement of links. 
  * Don't place animated images or videos in tiles.
  * Don’t label tiles as optional.



## Features

  * #### Label

Tiles should be labeled to identify the option each represents. Use a [form field](/components/form-field/) or other label to identify groups of tiles. Make sure the group label is linked to the tiles both visually and for assistive technology.

  * #### Description \- optional

A tile description can be used to define or provide additional context on each tile. They may include lists if necessary. 

For example: When a tile is set up to trigger progressive disclosure of additional form fields, the tile's description may be used to indicate what will follow when the tile is selected.

  * #### Image \- optional

Use an image for a tile if it is unique, highly recognizable, and provides clarity and distinction among tiles. For example, you might use a brand logo on a tile.

  * #### Columns

Columns determine the set number of tiles to display per row, between one and four. The default displays a max of three tiles per row unless explicitly set otherwise. If the default is not used, columns should be set to a number that displays the tiles evenly in each row. 

For example: For a group of six tiles, use three columns (two rows of three tiles) instead of four columns (one row of four and one row of two tiles).




### States

  * #### Disabled tile

The state that specifies that a tile is disabled, preventing the user from selecting it.

  * #### Read-only

Use the read-only state when tiles data is not to be modified by the user but they still need to view it.




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

#### Labels

  * Limit each label to a single line.

  * Don't use terminal punctuation (such as colons) after labels.




#### Descriptions

  * Use parallel sentence structure for easy comparison between options.

  * Descriptions should have end punctuation, with the only exception being if a description ends with an external link icon, which should not have a period after it.   





## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Provide a meaningful label and description for each tile.

  * Ensure that any icons and images have appropriate alternative text.

  * Wrap the component in a [form field](/components/form-field/) to ensure that the group of tiles is correctly labelled. Alternatively, explicitly set properties `ariaLabel` (or `ariaLabelledBy`) and `ariaDescribedBy`.




#### Labels and descriptions

  * Tile labels and descriptions are part of the clickable/focusable area of the control, so they should not contain interactive content (for example, links). Place links at the [form field](/components/form-field/) level instead.




#### Roles and landmarks

  * The component automatically applies the correct role.



