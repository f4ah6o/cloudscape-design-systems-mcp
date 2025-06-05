## General guidelines

### Do

  * Adding and removing an attribute row should always be the result of a user action. Always provide buttons for these actions. 
  * Use attribute editor only in create or edit flows.
  * When disabling the _Add_ button, always use additional information to communicate the reason for the button to be disabled. 
  * Always provide a mechanism to unhide the _Remove_ button. 



### Don't

  * Don't use _Save_ or _Cancel_ buttons in the attribute editor for creating or editing resources. Use these buttons only for the overall [create]({get_link_resource: /patterns/resource-management/create/}) or [edit]({get_link_resource: /patterns/resource-management/edit/}) flow. 
  * Don't use additional information to show generic constraints or tips. Instead, use the [help panel]({get_link_resource: /components/help-panel/}) for this information.



## Features

  * #### Defining attributes

Users can specify up to six attributes per row. Each attribute is described by a label.

  * #### Labels

Attribute labels are visible or hidden depending on the size of the container:

    * When the attribute editor is in a large container, labels are hidden after the first row.

    * When the attribute editor is in a small container, labels are visible on every control so that context isn’t only supported by placeholder text.

Follow the guidelines for [form field]({get_link_resource: /components/form-field/?tabId=usage}) labels.  


  * #### Info link \- optional

Use the info link inform your users about the specific rules and constraints that are applied to keys and values for your service. Follow the guidelines for [info link]({get_link_resource: /components/link/?tabId=playground&example=info-link}).

  * #### Controls

You can edit attribute values using all standard controls including,[ input]({get_link_resource: /components/input/}), [autosuggest]({get_link_resource: /components/autosuggest/}), [select]({get_link_resource: /components/select/}), [multiselect]({get_link_resource: /components/multiselect/}), [date picker]({get_link_resource: /components/date-picker/}), [button]({get_link_resource: /components/button/}), [radio group]({get_link_resource: /components/radio-group/}), and others. By default, controls have columns of equal widths. More complex layouts can be achieved by defining custom widths for each control.

  * #### Placeholder

Placeholder text helps users understand what should be entered in a field. It provides additional information for controls when the label is no longer visible. For example: Enter key  


  * #### Adding attribute rows

By using the _Add_**** button, users can add as many attribute rows as they need.

  * #### Removing attribute rows

Users can remove attribute rows with the _Remove_ button. When all of the rows are removed, the attribute editor is in an empty state.  


The _Remove_ button can be hidden, preventing users from removing rows. For example: when a user is marking resource tags for removal in [tag editor]({get_link_resource: /components/tag-editor/}).  


Make sure to include a mechanism to unhide the _Remove_ button. For example: the Undo action in [tag editor]({get_link_resource: /components/tag-editor/}).

  * #### Constraint text \- optional

Constraint text is a line of text explaining the requirements and constraints of the value control. 

    * Constraints can change based on the user’s selection of the key control. Place constraint text below the value control. Follow the constraint guidelines in [form field]({get_link_resource: /components/form-field/?tabId=usage&example=with-error}).

    * If the same constraints apply to all value controls, place constraint text below the value control in last row. 

  * #### Additional information \- optional

    * Use the additional information text to specify the number of attributes that can be added before reaching a limit. This text is displayed below the Add button.

    * When the attribute limit is reached, make the Add button inactive.

    * When the attribute limit is exceeded, disable the Add button and display a message explaining the type of issue that occurred.

  * #### Validation

Validation happens per field. Follow the guidelines for [validation]({get_link_resource: /patterns/general/errors/validation/}).

  * #### Empty state

An empty state is the state of the attribute editor when all rows are removed.   


When a users initiates a [creation flow]({get_link_resource: /patterns/resource-management/create/}) or an [editing flow]({get_link_resource: /patterns/resource-management/edit/}), don't display an empty state by default. Instead, display the first attribute row. This prevents an additional step for the user.

  * #### Row actions

When additional in-context actions are needed (for example duplicate, move up, move down), use a [button-dropdown with main action]({get_link_resource: /components/button-dropdown/?tabId=playground&example=primary-button-dropdown-with-main-action&props=N4IglgLgpgtgziAXCA2gAmG6APCiA6IAsgPYBuUaArgA6EA0%2BAdmq2mACYEgzlQC0tQmgC%2B9DFii5EaQqQpoOJAO5MGspp268K-JasJjMOPIQAitADZgAxgENo6rYQ5XbDqIeYBdEPRAcYHB2AEaWUBxIAGZ2lnBQ-lI0dkwcACokAGpgUMo0JABOENGx8YnYyamh4QDiBSS0CIgxcQkgliR2gUwA5iWt-jB2YEwAgjYQYCRMSCDGUqYgAEqwfMIifiBkdgVgKcXITIVDliAiQA}). When reducing visual noise and optimizing content density is a priority, use the [icon button dropdown .]({get_link_resource: /components/button-dropdown/?tabId=playground&example=icon-button-dropdown})




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

  * Use complete sentences with periods, where possible. If space is limited, you can use a sentence fragment without a period.

  * When providing information on the number of available attributes to add use the format: _You can add up to [number] more [object(s)]._

    * For example:

      * _You can add up to 30 more headers._

      * _You can add up to 1 more header._

  * If no attributes have been added, use the format: _You can add up to [number] [object(s)]._

    * For example: _You can add up to 50 headers._

  * When the limit for attributes is reached, use the format: _You have reached the limit of [number] [object(s)]._

    * For example: _You've reached the limit of 50 headers._




#### Labels

  * Follow the writing guidelines for [form field label]({get_link_resource: /components/form-field/?tabId=usage#writing-guidelines}).




#### Info links

  * Follow the writing guidelines for [info links]({get_link_resource: /components/link/?tabId=usage#writing-guidelines}).




#### Button

  * For button labels, use one of two formats:

    * [Verb][object] For example: _Add new header_

    * [Verb] For example: _Remove_

  * Follow the writing guidelines for [button]({get_link_resource: /components/button/?tabId=usage#writing-guidelines}).




#### Removing attribute rows

  * When a row is marked for removal, inform the users about the consequences of this action. For example: _After you save changes, this header is removed._




#### Placeholder text

  * Follow the writing guidelines for [placeholder text]({get_link_resource: /components/input/?tabId=usage#writing-guidelines}).




#### Autosuggest

  * Follow the writing guidelines for [autosuggest]({get_link_resource: /components/autosuggest/?tabId=usage#writing-guidelines}).




#### Select

  * Follow the writing guidelines for [select]({get_link_resource: /components/select/?tabId=usage#writing-guidelines}).




#### Empty state

  * Follow the writing guidelines for [empty states]({get_link_resource: /patterns/general/empty-states/#writing-guidelines}).  
  





## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * **When "Add new item" is activated**  
Set focus into the first newly created field.

  * **When "Remove" is activated**  
Set focus on the next attribute input in the list, or the last one if there is only one remaining. If the user has just removed the last item, set focus onto the “Add new item” button.

  * **When using custom row actions**  
Set the focus to an appropriate target after an action is taken. For example, for a "Move down" action in a button dropdown, set the focus onto the button dropdown for the moved item in its new position. For [button dropdown]({get_link_resource: /components/button-dropdown/}) with a main action, choose between `focus` to focus the main action or `focusDropdownTrigger` to focus the dropdown depending on where the action was triggered from.



