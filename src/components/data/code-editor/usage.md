## General guidelines

### Do

  * Use the [unsaved changes](/patterns/general/unsaved-changes/) pattern to prevent data loss.
  * Minimize the number of code editors displayed on a page. More than 20 code editors on a single page lead to performance issues.



### Don't

  * Don’t use the code editor component to display non-editable code snippets. This component exceeds the functional requirements for read only purposes and is not optimized to support code viewing alone. Use the [code view](/components/code-view/) component instead.
  * Don't use the code editor in a modal. This component includes features that can compromise the user experience when launched in the context of a modal, such as resizing, preferences modal, and the errors and warnings summary pane.
  * Unless modified by a user, avoid changing the default configuration set in the preferences modal to ensure a consistent end user experience. 



## Features

The component provides integrated language support, interactions, functionalities, and validation. These features are based on the [Ace library ](https://ace.c9.io/#nav=about&api=editor).

### Editor

  * #### Line numbers

Line numbers are displayed in front of each line of code to provide a reference to the row.

  * #### Active line highlight

Active line highlight helps users locate their current position in the editor by highlighting the active row.

  * #### Code folding

Code folding allows users to collapse or expand sections of code. All code is unfolded by default.

  * #### Resizable editor height

Users can change the height of the code editing area by dragging the _resize_  icon.




### Language support

The code editor component provides language support for all [programming languages supported by the Ace library ](https://github.com/ajaxorg/ace/tree/master/lib/ace/mode). 

  * #### Syntax highlighting

Syntax highlighting determines the color and style of source code displayed in the editor. For example, it’s responsible for colorizing keywords in JavaScript like `for`, `if`, or `var` differently than strings, comments, and numbers.  


The syntax highlighting scheme is deﬁned by the active language in the editor.

  * #### Autosuggest for syntax completion

Syntax completion suggests smart code completions through autosuggest based on language semantics and an analysis of the source code. If there are possible completions, the suggestions will be shown as the user types.




### Syntax validation

  * #### Live syntax checker

A live syntax checker validates the code in real-time. Lines of code with errors or warnings are marked with an error or warning status icon, respectively. Details of the error or warning are shown in the summary pane below the status bar.

  * #### Errors and warnings summary pane

The errors and warnings summary pane is a collapsible pane displayed below the status bar. This pane lists each error or warning present in the editor, along with its location. Users can open this pane by choosing the error**** or warning icon next to the line number in the gutter region, or by choosing the _Errors_  or _Warnings_  tab-button in the status bar.

An open summary pane can be dismissed in two ways:

    * The close**** icon situated in the top right corner of this pane.

    * The _Errors_**** or _Warnings_**** tab-button respectively in the status bar.

    * Users can change the height of this pane by dragging the resize**** icon.

The component does not support localization of error or warning description text. For more information about localization, see the [development guidelines for code editor](/components/code-editor/?&tabId=api#development-guidelines).

 




### Status bar

The status bar is the area below the editor that displays contextual information such as active language, cursor position, and the total number of syntactical errors and warnings. The settings icon, which triggers the preferences modal, is also located in the status bar.

  * #### Active language

The active language is the programming language that the editor will use for syntax highlighting, code completion, and syntax validation.

    * You define the active language for the code editor.

    * Each code editor can only have one active language at a time.

  * #### Cursor position

The line and column number associated with the active cursor position in the code editor is displayed in the status bar.

  * #### Count of errors and warnings

The total number of syntactical errors and warnings present in the editor are displayed as tab-buttons in the status bar.




### Preferences

Users can manage features such as line wrapping and active color theme from the preferences modal. This modal is triggered by the settings icon on the status bar. Store all user preferences and restore them when the user returns to the component.

  * #### Line wrapping

With line wrapping, users can have visibility over the source code content within the code editing area, by wrapping long lines of code onto new lines.

    * When line wrapping is active, the maximum row width is the width of the code editing area in the component.

    * Line wrapping is active by default. Users can change this in the preferences modal.

  * #### Theme

The code editor comes with light and dark themes. By default, it’s set to a light theme. To suit their preferences and work environment, users can modify the active theme in the preferences modal.

The theme is only applicable to the code editing area in the component.




### States

  * #### Loading

A loading state is displayed while the Ace library loads and the component is rendered on a page. When the code editor is in a loading state, add loading state text.

  * #### Error

An error state is displayed when the component fails to load. When the code editor is in an error state, add error state text. Provide a recovery action in the [error state](/components/code-editor/?tabId=playground&example=error-state), as a recovery mechanism.




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




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.



