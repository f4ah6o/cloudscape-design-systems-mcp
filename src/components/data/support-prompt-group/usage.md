## General guidelines

### Do

  * Use support prompt group in [generative AI chat]({get_link_resource: /patterns/genai/generative-AI-chat/}).
  * Hide previous support prompts once a message is sent in the chat. Once a message is sent, the conversation progresses, and the context changes. As a result, the older support prompts may not be relevant to the user anymore.
  * Once support prompt text is sent as a message, follow guidelines for generating a response in [generative AI loading states]({get_link_resource: /patterns/genai/genai-loading-states/}).



### Don't

  * Don’t display more than five support prompts at a time to avoid cognitive overload.
  * Don't use support prompt group to show selected items from a list, instead use [token group]({get_link_resource: /components/token-group/}).



## Features

  * #### Text

The text in a support prompt can be used in two ways:

    * The text is sent immediately as a [chat bubble]({get_link_resource: /components/chat-bubble/}).

    * The text fills a [prompt input]({get_link_resource: /components/prompt-input/}), and is not sent immediately. Use this option when it is likely that users will want to edit the text before sending it.

  * #### Alignment

    * **Vertical**(default) - By default, support prompts are vertically aligned to allow for easy scanning.

      * For example, below incoming chat bubbles.

    * **Horizontal -** In instances where compact prompts would be beneficial, horizontal alignment can be used instead.

      * For example, at the beginning of new chats or with short text.




## Writing guidelines

  * Keep labels and descriptions clear and concise.

  * Use parallel sentence structure.

  * Use sentence case for all text. Don't use title case.

  * Use present-tense verbs and active voice wherever possible.

  * Don't use "please," "thank you," or Latinisms such as "e.g.," "i.e.," or "etc."




### Component-specific guidelines

  * Phrase prompts as either a full question or a request.

    * For example: “List my S3 buckets” or “What is the difference between S3 and EC2?”




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * Specify an aria label for the group of support prompts.

  * Provide text for every support prompt in the group to ensure all elements have an accessible name.




#### Keyboard interaction

  * Focus moves between the support prompts with left, right, up, and down arrow keys.

  * Press the enter or space key to select the prompt.



