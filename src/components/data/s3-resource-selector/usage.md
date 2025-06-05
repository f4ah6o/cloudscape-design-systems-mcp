### Key Amazon S3 concepts

Amazon Simple Storage Service (Amazon S3) is an object storage service. The basic storage units of Amazon S3 are objects which are organized into buckets. For more information [refer to the Amazon S3 documentation ](https://docs.aws.amazon.com/s3/index.html).

## General guidelines

### Do

  * Catch and display server errors using the alert component included in the S3 resource selector. 



### Don't

  * Don’t use the S3 resource selector in a modal or popover.
  * Don’t use the S3 resource selector pattern as a generic file resource selector; instead use the [file upload](/components/file-upload/) pattern.



## Features

The S3 resource selector component's primary function is to help users select a Amazon S3 resource URI (Uniform Resource Identifier), so your service can then perform read or write actions on that resource. The component provides integrated logic including interactions, functionalities, and validation rules from Amazon S3.

### Modes

The S3 resource selector operates in one of two modes - either reading resources from Amazon S3 or writing resources to Amazon S3. Some features are available only in specific modes.

  * #### Read

Used to select an object or bucket URI for your service to read resources from Amazon S3.

    * For example:

      * Read from a bucket with log file objects for parsing and analysis.

      * Read from a video file object to transcribe the file’s audio.

  * #### Write

Used to select an object or bucket URI for your service to write resources to Amazon S3.

    * For example:

      * Write log files of an event to an Amazon S3 bucket.

      * Write a video file to an Amazon S3 bucket after transcoding it.




### Built-in functions

  * #### Resource URI input

Input which helps users to type in or paste the URI of a resource. If users choose a resource with the browsing resources modal, the URI field is automatically populated with that resource URI.

    * The URI resource field is validated inline and checks the provided URI against [Amazon S3’s rules for naming resources ](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules).

    * For specific validation text strings, follow the writing guidelines for [S3 resource selector](/components/s3-resource-selector/?tabId=usage#writing-guidelines).

  * #### Object version selection - Optional

Select is how users choose available versions of an object.

    * In Read mode, we strongly recommended including the version select since it helps users to choose the correct version of an object. If the user does not choose a version, the most recent version of the object is used.

    * In Write mode, the version select is not included since Amazon S3 does not provide the ability to write to a specific version. If versioning is active on a bucket, writing to an existing object creates a new version of that object.

    * In the S3 resource selector’s empty state, the version select shows in the disabled state.

      * The version select is active when the user has entered an object’s URI in the resource URI field or has chosen an object with the browse modal.

      * Buckets are not versioned (only objects inside buckets). If the user chooses a bucket, the version select remains inactive.

  * #### Browsing resources modal

Modal with a list of Amazon S3 resources, which is how the user browses buckets, objects, and versions to find the resource URI for a particular resource. The modal launches when users click the _Browse_ button.

    * While Amazon S3 does not technically support folders, object keys using the / delimiter prefix are shown in the S3 resource selector as nested in folders.

    * You can define which resource types the user can choose, including buckets, objects, and versions.

  * #### Viewing a chosen object - Optional

The _View_ button is how users open an object's description page in the Amazon S3 console, which provides additional metadata. This helps users select the correct object. The _View_ button is activated once users choose an object.

  * #### Validation

Validation happens inline when users type in or paste a resource URI. Follow the error writing guidelines for specific validation rules and text strings.




### States

  * #### Empty

The state of the S3 resource selector when no resource URI has been provided or the user has not browsed and chosen a resource.

  * #### Loading

When users type in or pastes a resource URI, or browses for and chooses a resource, the component provides events so implementors can trigger an Amazon S3 fetch operation. During the fetch operation, the component shows a loading indicator below the _Resource URI_ input.

  * #### Errors

There are two primary error types that occur in the S3 resource selector:

    * Validation errors, which can occur when users type in or paste a URI into the _Resource URI_ input. These errors show automatically below the _Resource URI_ input.

    * Server errors, which occur when there was a problem fetching a resource. It is the implementer’s responsibility to catch and pass server errors to the alert included in the component.




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

#### Form field labels

  * For the resource URI and version form field labels, use this text:

    * _Resource URI_ for the Amazon S3 resource URI path label.

    * _Object Version_ for the version select label.

  * Follow the writing guidelines for [form field](/components/form-field/?tabId=usage#writing-guidelines).




#### Form field constraint text

  * For fields on the inline form, use this text:

    * _Use s3://bucket/prefix/object format_ for the Resource URI field in read mode.

    * _Use s3://bucket/prefix format_ for the Resource URI field in write mode.

  * Follow the writing guidelines for [form field](/components/form-field/?tabId=usage#writing-guidelines).




#### Form field placeholders - optional

  * For fields on the inline form, use the placeholder text:

    * s3://bucket/prefix/object __ for the Resource URI field placeholder in read mode.

    * s3://bucket/prefix __ for the Resource URI field placeholder in write mode.

    * Choose version _f_ or the object version select.

  * Follow the writing guidelines for [form field](/components/form-field/?tabId=usage#writing-guidelines).




#### Buttons

  * For buttons on the initial form, use this text:

    * _View_ for the object view button.

    * _Browse S3_ for the button to open the modal browser.

  * On the browse Amazon S3 modal, use this text:

    * _Choose_ for the button that chooses the resource.

    * _Cancel_ for the button that cancels the selection and closes the modal.

  * Follow the writing guidelines for [button](/components/button/?tabId=usage#writing-guidelines).




#### Browse modal

  * For the browse modal header, use this text: _Choose [resource type] in Amazon S3_

    * For example: _Choose audio file in Amazon S3._

  * Follow the writing guidelines for [modal](/components/modal/?tabId=usage#writing-guidelines).




#### Browse table

  * For column headers in the browse modal table, use this text:

    * For bucket names: _Name_

    * For the bucket creation date: _Creation date_

    * For the bucket region: _Region_

    * For object key: _Key_

    * For the object last modified timestamp: _Last modified_

    * For the object or version size: _Size_

    * For version IDs: _Version ID_

    * For version creation time: _Creation time_

  * For table columns with dates or times, follow the guidelines for [timestamps](/patterns/general/timestamps/).

  * Follow the writing guidelines for [table](/components/table/?tabId=usage#writing-guidelines).




#### Component states

#### Empty state

For empty states, such as the _Resource URI_ input, _Object version_ select, and _browse S3 resources_ table, follow the guidelines for [empty states](/patterns/general/empty-states/).

#### Loading

  * When a resource is being fetched, the component shows a loading indicator. For the loading indicator text, use the text: Loading resource

  * In the browse S3 modal table, when resources are loading, use this text: _Loading [resource type]_

    * For example: 

      * _Loading buckets_

      *  _Loading objects_

      *  _Loading versions_.




#### Error

  * When validating the S3 resource URI, use this text:

    * _The path must begin with s3://_

    * _The bucket name must start with a lowercase character or number._

    * _The bucket name must not contain uppercase characters._

    * _The bucket name must comply with DNS naming conventions._

    * _The bucket name length must be from 3 to 63 characters._

  * When displaying a server error, the alert title should state the problem, and the description should describe how the user can resolve the problem.

    * For example: 

      * Title: _Object versions were not retrieved for the title_

      * Description: _You might not have permissions to retrieve object versions. Contact your account administrator to request necessary permissions_

  * Follow the writing guidelines for [alert](/components/alert/?tabId=usage#writing-guidelines).  





## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Alternative text

  * For the respective parts of the S3 resource selector, reference the alternative text guidelines for [alert](/components/alert/?tabId=usage#accessibility-guidelines), [breadcrumbs](/components/breadcrumb-group/?tabId=usage#accessibility-guidelines), [modal](/components/modal/?tabId=usage#accessibility-guidelines), [table](/components/table/?tabId=usage#accessibility-guidelines), and [pagination](/components/pagination/?tabId=usage#accessibility-guidelines).



