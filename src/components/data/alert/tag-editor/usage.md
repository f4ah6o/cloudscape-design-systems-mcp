## General guidelines

### Do

  * Display tag editor in loading state until all resource tags have been loaded. 
  * Use the tag editor to manage tags only in [create](/patterns/resource-management/create/) and [edit](/patterns/resource-management/edit/) flows.
  * Always display an error message when tag editor fails to load key or value suggestions. 
  * Always use placeholders. They provide additional information when the labels are out of screen view. 



## Features

The tag editor component is an extension of [attribute editor](/components/attribute-editor/). It integrates into a service so that your users can manage resource tags.

  * #### Tags

Tags are metadata assigned to a resource, consisting of a key (mandatory) and a value (optional). 




### Built-in functions

  * #### Adding tag rows

Users can create new tags by adding new rows with the _Add new tag_ button. New tags are associated with the resource when the form is submitted.

  * #### Removing tag rows

Users can remove tags not yet associated with the resource by using the _Remove_ button. This action removes the entire row.

  * #### Removing resource tags

Resource tags are removed when the form is submitted. Users can mark resource tags for removal by using the _Remove_ button.   


The tag value field is replaced by a message communicating the consequences of the removal action, together with an _Undo_ action.

  * #### Undo removal of resource tags

Users can undo the action of removing a resource tag by using the _Undo_ action. The tag value field with the stored value is displayed along with the _Remove_ button.

  * #### Tag limit

    * The default value is 50 tags.

    * When the tag limit is reached, the _Add new tag_**** button will be inactive and a message explaining that the tag limit has been reached is displayed.

    * When the tag limit is exceeded, the _Add new tag_ button will be inactive and a warning message explaining that the tag limit has been exceed is displayed.

      * For example: At form submission, when resource tags fail to be removed and there is an attempt on adding new tags.

      * For example: When users mark resource tags for removal, add tags until the limit is reached, and undo the removal of resource tags previously marked for removal.

  * #### Validation

    * Validation happens inline for key and value constraints and for empty keys. Follow the [tag editor](/components/tag-editor/?example=default&tabId=usage#writing-guidelines) writing guidelines for specific text strings.

    * For specific validation text strings, follow the [tag editor](/components/tag-editor/?example=default&tabId=usage#writing-guidelines) writing guidelines.

    * For validation rules in form submission, follow the guidelines for [validation](/patterns/general/errors/validation/).

  * #### Loading of tag keys and values

    * Tag keys and values are displayed in the suggestion list. If the dataset fails to load, a message communicating the error is displayed. Follow the guidelines for [autosuggest](/components/autosuggest/).

    * The dataset won’t be loaded when attempting to load too many unique keys or values per tag. Instead, a message is displayed, communicating to the users that the list can't be retrieved. For example, when attempting to load up to 200 unique values per tag.




### States

  * #### Empty

The state of the tag editor when no tags are associated with the resource.

  * #### Loading

The state of the tag editor while the tags are being loaded. In case of loading failure display an error [alert](/components/alert/) communicating to the users the occurred error.




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

  * For tag keys, use this text: _Key_

  * For tag values, use this text: _Value_

  * Follow the guidelines for [form field](/components/form-field/).




#### Placeholder

  * For tag keys, use this text: _Enter key_

  * For tag values, use this text: _Enter value_

  * Follow the guidelines for [form field](/components/form-field/).




#### Buttons

  * For add button, use this text: _Add new tag_

  * For remove button, use this text: _Remove_

  * Follow the guidelines for [button](/components/button/).




#### Tag limit

  * When no tags are present, use the format: _You can add up to [number] tag[s]._

    * For example: _You can add up to 50 tags._

  * When tags are present but the limit for tags hasn’t been reached, use the format: _You can add up to [number] more tag[s]._

    * For example: _You can add up to 30 more tags or You can add up to 1 more tag._

  * When the limit for tags is reached, use the format: _You have reached the limit of [number] tags_

    * For example:_You have reached the limit of 50 tags._

  * When the limit for tags has been exceeded, use the format: _You have exceeded the limit of [number] tags._

    * For example: _You have exceeded the limit of 50 tags._




#### Loading of tag keys and values

  * When loading the dataset of keys or values, use this text: 

    * For tag keys: _Loading tag keys_

    * For tag values: _Loading tag values_

  * When the dataset is too big to be loaded, use this text:

    * For tag keys: _You have more keys than can be displayed_

    * For tag values: _You have more values than can be displayed_

  * When the loading of the dataset fails, use this text:

    * For tag keys: _Tag keys could not be retrieved_

    * For tag values: _Tag values could not be retrieved_

  * Follow the guidelines for [autosuggest](/components/autosuggest/).




#### Undo

  * When a tag is marked for removal, inform the users about the consequences of this action.

  * Use this text: _This tag will be removed upon saving changes._




### Validation

The following restrictions apply to tags. Use the respective indicated text:

  * Tag key maximum length: The maximum number of characters you can use in a tag key is 128.

  * Tag value maximum length: The maximum number of characters you can use in a tag value is 256.

  * Invalid formatting for tag key: Invalid key. Keys can only contain alphanumeric characters, spaces and any of the following: _.:/=+@-

  * Invalid formatting for tag value: Invalid value. Values can only contain alphanumeric characters, spaces and any of the following: _.:/=+@-

  * Invalid prefix for tag key: Cannot start with aws:

  * No value specified for tag key: You must specify a tag key.

  * Duplicate of tag key: You must specify a unique tag key.




### Empty state description

  * Use this text: _No tags associated with the resource._




### Loading

  * Use this text: _Loading tags that are associated with this resource_

  * When the loading of the component fails, use an alert to communicate the occurred error.

    * Follow the guidelines for [error alert](/components/alert/?example=non-dismissible-error).  





## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * All fields should be accessible with keyboard.

  * All fields should point to the corresponding label and error text using the appropriate aria properties to be accessible for assistive technology.  




