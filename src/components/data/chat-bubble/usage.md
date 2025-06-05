## General guidelines

### Do

  * Use [avatars](/components/avatar/) to provide a visual representation of authors in a conversation. They help to differentiate content in a conversation and in turn enhance readability.
  * When you need to show inline actions in chat bubbles, use [button group](/components/button-group/). 
  * When building a generative AI chat, follow the guidelines for [generative AI chat](/patterns/genai/generative-AI-chat/).



### Don't

  * Don't display inline actions [button group](/components/button-group/) in a message when it is loading.
  * Don't display [loading bar](/components/loading-bar/) in the outgoing messages.



## Features

### Types

  * #### Outgoing message

Chat messages sent by the user.

  * #### Incoming message

Chat messages received from others.




### Structure

  * #### Avatar

Use avatar to show the identity of authors. Follow the guidelines for [avatar](/components/avatar/).

  * #### Content

The area for content of a chat message. Common types of content are:

    * Text: simple messages with plain or formatted text.

    * Media: image, graphics, embedded or linked videos.

    * [Expandable section](/components/expandable-section/): a collapsible section. For example, to display additional options, or sources and citations.

    * [Links](/components/link/): Hyperlinks that direct users to sites or pages.

    * Other: complex UI elements such as list of resources, and code blocks.

  * #### Actions \- optional

Use [button group](/components/button-group/) to display inline actions that a user can perform in a chat bubble. 




### States

  * #### Loading state

Indicate the incoming message is loading. 

To show the loading state of incoming response from generative AI:

    * When generative AI is in processing stage, display a loading [avatar](/components/avatar/) with loading text in the chat bubble.

    * When generative AI response includes other UI elements such as list of resources, display a loading [avatar](/components/avatar/) and show [loading bar](/components/loading-bar/) with loading text. Follow the guidelines for [generative AI loading states](/patterns/genai/genai-loading-states/).




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




#### Component-specific guidelines

**Inline actions**

  * Follow the writing guidelines for [button group](/components/button-group/).




**Avatar**

  * Follow the writing guidelines for [avatar](/components/avatar/).




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




#### Component-specific guidelines

  * Provide a unique `ariaLabel `for each chat bubble to help screen reader users differentiate each of the messages. For example, use a timestamp, _Jane Doe at 2:30:25 pm_.



