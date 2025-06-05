## General guidelines

### Do

  * Use links to navigate from one page to another or invoke the help panel.
  * Always include an `href` attribute for all links that navigate to another page.
  * Provide link text that describes the purpose of a link. Use links judiciously and thoughtfully. You can have more than one info link on a page, but use them sparingly to avoid overwhelming the user with too many links.



### Don't

  * Don't use a link for actions. Instead, use a [button](/components/button/).
  * Don't use end punctuation for _Info_ or other fragments.
  * Don't use info links in a help panel. Use info links only on the main page content, next to headers.
  * Don't change the size of info links. Use the small size that is set by the info variant.
  * Don't use the `external` property with info links.



## Features

Links should be used to guide users through the console by giving them just-in-time information without overloading or distracting them with information that is too tangential or secondary to the tasks at hand.

  * #### Variant

The variant determines the visual style of the link. 

#### Normal links

There are two variants of a normal link: `primary` and `secondary`. To meet accessibility requirements, choose the variant based on the link's context. 

    * A **primary** link is underlined to provide more visual contrast with surrounding context. Use the `primary` variant for a link adjacent to other text, such as inside body text paragraph or a component description, a learn more link in a [container header](/components/header/) or [form field](/components/form-field/) description, a resource ID link in a [table](/components/table/?tabId=playground), a link in a [key-value pair](/components/key-value-pairs/), a link in an [alert](/components/alert/?tabId=playground).

    * A **secondary** link uses regular font weight. Use the `secondary` variant where its context implies interactivity and users can identify links from other elements in its vicinity easily, such as a list of links in a [container](/components/container/?tabId=playground).

#### Info link

An info link is bold and smaller in size. An info link is technically a button because it doesn't navigate the user to another page. Instead, it invokes the [help panel](/components/help-panel/) to display contextual help related to an element or section of the page. Use the `info` variant only for a link that triggers the help panel.

Follow the guidelines for how to use info links in [help system](/patterns/general/help-system/).

  * #### External link \- optional

An external link is a link that opens a URL in a new tab. This can be a separate flow in the same service, or a different service or website. By default, an external link has an external icon and opens the link in a new tab. This helps reinforce consistent expectations for customers. Both primary and secondary links can be external links.

    * For example: [Learn more ](https://www.example.com)

If in the rare circumstance you’re unable to use the external link icon, make sure that the link text combined with text of the enclosed sentence or paragraph clearly indicates where the user will navigate. For usability, context about an external link should precede the link. If corresponding information about the link instead follows the link, it can lead to confusion and difficulty for screen reader users who are reading through the page from top to bottom order.

    * For example: Learn more about [links in [another site]](/components/link/).

For lists of external links, don't use an icon on each link. Instead, append an external icon to the list heading or label. Ensure the heading text indicates where the group of links point and that each link in the list has a unique name. For example, you could title your group "External resources" if all links point to various external documentation articles.

  * #### Size \- optional

The size sets the font size and line height of the link. The options are any of the standard [typography](/foundation/visual-foundation/typography/) styles. 

    * If the link is part of a sentence, choose a size that matches the surrounding text size. 

    * If the link is acting as a heading, choose the appropriate heading size based on the rest of the page's hierarchy. 

    * If the link is external, the external icon size will update according to the selected font size. 

  * #### Color \- optional

The color controls the link text color. By default, all links should use the default link color. For links on inverted backgrounds such as [flashbars](/components/flashbar/), use `color="inverted"`.




## Writing guidelines

### General writing guidelines

  * Use sentence case, but continue to capitalize proper nouns and brand names correctly in context.

  * Use end punctuation, except in [headers](/components/header/?tabId=usage) and [buttons](/components/button/?tabId=usage). Don’t use exclamation points.

  * Use present-tense verbs and active voice.

  * Don't use _please_ , _thank you_ , ellipsis (_..._), ampersand (_&_), _e.g._ , _i.e._ , or _etc._ in writing.

  * Avoid directional language.

    * For example: use _previous_ not _above_ , use _following_ not _below_.

  * Use device-independent language.

    * For example: use _choose_ or _interact_ not _click_.




### Component-specific guidelines

#### Link text

  * Don’t use ambiguous phrases like _click here_ or similar vague words as link text. Instead, provide context to help the user understand where they're going when they choose the link.

  * Link text should match topic titles as much as possible, but you can abbreviate a lengthy topic title as long as users will understand the context.

    * For example: If you link to a Help topic called _Routing Queries to a Website That Is Hosted in an Amazon S3 Bucket (Public Hosted Zones Only)_ , your link text could be simply _Routing queries to a website_.

  * In some cases, you can simplify the link text even more if it will clarify the action for users.

    * For example: If you link to a marketing web page called _APN Technology and Consulting Partners Supporting AWS Direct Connect_ , your link could be _Find a partner_.

  * For each link, add an aria label that clearly defines what the link opens. Follow the guidelines for links in the following accessibility section.




#### Info links

  * Use this text: _Info_

  * Avoid adding additional words unless absolutely required to prevent ambiguity.

  * Use sentence case (_Info_ , not _info_).

  * For each link, add an aria label that clearly defines what the link opens. Follow the guidelines for links in the following accessibility section.




#### Learn more links

  * When linking to documentation pages use this text: _Learn more_ , and include an external icon.

  * For each link, add an aria label that clearly defines what the link opens. Follow the guidelines for links in the following accessibility section.




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

#### Link

  * Use `primary` links to help differentiate link text from surrounding text when interactivity is not implied by its context.

    * For example, use `primary` links in blocks of text such as paragraphs. 

  * For links that open in a new window or tab, explicitly state this action within the `externalIconAriaLabel` or `ariaLabel`. 

    * If the `ariaLabel` prop is not being used, use the `externalIconAriaLabel` prop to express "opens in a new window".

    * If an aria-label is needed for the link for disambiguation, add ", opens in a new window" to the `ariaLabel` prop: `<Link href="..." ariaLabel="Learn more about [subject matter], opens in new tab">Learn more</Link>`

    * Note that using both `ariaLabel` and `externalIconAriaLabel` directly on the `<Link>` are not supported: ariaLabel takes priority.

  * For a list of external links where the external icon is appended to the heading, ensure that information about it opening in a new tab is programmatically associated to those links.

    * For example, set the entire list of external links to have an `aria-labelledby= "[List heading], Opens in a new tab". `

  * Make sure links have descriptive and unique accessible names, especially when content is repeated. 

    * For example, two different _Info_ links should each have a different `ariaLabel`, one with _Information about alternative domain names_ and one with _Information about SSL/TLS certificate_.

    * Note that info links within components that have a semantic header (Container, Form field, etc.) will automatically have the header text appended to the info link’s accessible name to provide this unique context.



