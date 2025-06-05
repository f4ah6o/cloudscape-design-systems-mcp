## General guidelines

### Do

  * Always provide the full name associated with the user profile or generative AI entity in a tooltip. It helps inform users about the entity that avatar represents. For example, in conversational experiences, avatar shows the identity of authors. 
  * When using an icon inside the avatar, ensure the size of the avatar complements the icon size, which will scale according to one of the [sizes offered by the system](/foundation/visual-foundation/iconography/#icon-set). 



### Don't

  * Avoid using a custom size for the avatar in [chat experiences](/patterns/genai/generative-AI-chat/). 



## Features

  * #### Color

There are two supported avatar colors:

    * Default - use this color to represent users, objects, and services.

    * Generative AI - use this color to represent generative AI assistants.

  * #### Icon

An icon is displayed in the avatar to represent the entity it belongs to. By default, the user-profile icon is displayed. This icon can be replaced as needed in the use case. For example, use the gen-ai icon for a generative AI entity.

  * #### User initials \- optional

Display up to two letters as user initials in the avatar. If you provide one letter, user initials will display one letter. If you provide two or more letters, user initials will display two letters.

  * #### Tooltip

Display the name associated with the identity of the avatar in a tooltip. For example, display the user name associated with the user profile, or the name of the generative AI assistant.

  * #### Custom image \- optional

Display a custom image in the avatar. The custom image can be in any format (for example, PNG or JPEG). 

  * #### Size

The avatar has a default and minimum size of 28px, which can be increased based on the use case. The icon and user initials will scale with the avatar size.




### States

  * #### Loading state

Indicates that an action is being performed by the entity it belongs to. For example, a loading state is displayed when generative AI is generating a response based on the user prompt. Find more guidelines in [generative AI loading states](/patterns/genai/genai-loading-states/).




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




#### Loading state

  * Follow the guidelines for [generative AI loading states.](/patterns/genai/genai-loading-states/)




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * Use a [live region component](/components/live-region/) to announce avatar's loading state changes.

  * When more than one avatar is used, provide a unique `ariaLabel` for each. For example, "Avatar of John Doe" or "Avatar of generative AI assistant". If `tooltipText` is used make sure to include it in the `ariaLabel`.



