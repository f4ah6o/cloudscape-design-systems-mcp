## General guidelines

### Do

  * Use a token group for representing a set of selected items.
  * Use a token group combined with a control, in create and edit flows. 
  * Use a remove button in every individual token.
  * All tokens must be comparable and use the same metadata structure to better help your users identify, recall, and distinguish the selected item. 
  * Use label tags for calling out comparable and scannable information across the list of items. 
  * When using filtering controls, make sure the metadata displayed in each individual token is indexed and searchable. 
  * Use icons in token to enhance usability, clarity, and recollection of the items, not for decoration. When using icons, make sure they are distinct from one another. 
  * Follow the guidelines for [disabled and read-only states]({get_link_resource: /patterns/general/disabled-and-read-only-states/}).



### Don't

  * Don't use a token group for single selection. Tokens should always be paired with other tokens in a token group. 
  * Don't use a token group for elements that aren't a result of a selection. 
  * Don't set the width and height of the token group manually. The token group and individual tokens adapt to their content, container width, and alignment. 
  * Don't make tokens editable. Tokens are a read-only compact representation of data.
  * Don't make tokens movable or draggable.
  * Don't place tokens inside text inputs or other control types. Tokens must be placed underneath the corresponding controls.
  * Don't use tokens as on/off toggles.



## Features

### Token structure

  * #### Label

A label is the name or identifier of the individual selected item.

  * #### Label tag \- optional

A label tag is displayed on the right side of the label, apart from the remaining information. Use it to display a unique piece of information that should stand out, for quicker recollection and decision making.

  
For example: For [file upload]({get_link_resource: /components/file-upload/}), the file size metadata can help to identify the selected files.

  * #### Description \- optional

A broader explanation of the label.

  * #### Tags \- optional

Use tags to add additional comparable metadata to support the description of the item.

  
For example: _vCPU_ and _RAM_ for instance types.

  * #### Icons \- optional

Icons are displayed on the left side of the label. Use Cloudscape icons or custom icons to support distinguishing the items. When using icons, follow the guidelines for [icons]({get_link_resource: /components/icon/}).

  * #### Remove button

Users can dismiss individual tokens by tapping the _X_ icon.




### Token group structure

  * #### Alignment

    * Tokens are aligned horizontally by default. Use the default alignment for an unordered set of tokens.

      * For example: [multi-select]({get_link_resource: /components/multiselect/}).

    * Set the token group to be aligned vertically when it is important to compare a set of selected items.

      * For example: For [file upload]({get_link_resource: /components/file-upload/}) to distinguish file names, size or formats.




### Token visibility

  * #### Token limit

By default, all tokens are visible. You can hide some or all tokens. To toggle the visibility of the tokens, users can trigger the show/hide link, which shows or hides them.

Token visibility can be controlled in two ways:

    * **Hide all tokens** -**** Use in high density interfaces.

    * **Hide some tokens** -**** Use when most users will have a small number of tokens, but some users will have many tokens. If you know how many tokens are typically shown, hide tokens above that number, so most users will see all tokens.

      * For example: If 90% of users only select 2 tokens, then hide all tokens above 2.

Tokens should not be hidden when they are needed by users to complete a task.




### States

  * #### Disabled

Set tokens to inactive when the control is inactive. Inactive tokens can’t be removed or changed.

  * #### Read-only

Set tokens to read-only when the control is read-only. Read-only tokens can’t be removed or changed.




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

#### Token show/hide link

  * Use the format: _Show chosen [objects]_ and _Hide chosen [objects]_

    * For example: 

      * _Show chosen services_

      *  _Hide chosen services_

  * When hiding some tokens, use the format: _Show more chosen [objects]_ and _Show fewer chosen [objects]_

    * For example: 

      * _Show more chosen services_

      *  _Show fewer chosen services_




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * Specify alternative text for the remove icon in the tokens using the `dismissLabel` property.

    * For example: _Remove item._

  * When using icons in tokens, make sure to specify an alternative text.  




