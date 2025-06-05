## General guidelines

### Do

  * Show loading text next to the loading bar to inform users about the ongoing operation. Refer to [generative AI loading states](/patterns/genai/genai-loading-states/) for more guidelines. 



### Don't

  * Avoid using the loading bar for non-generative AI use cases. The loading bar is currently styled for usage in generative AI use cases only. 



## Features

  * #### Variants

    * **Generative AI -** Use when bar is placed inside an element. For example, center of a [container](/components/container/).

    * **Generative AI with mask -** Use when bar is placed next to the edge of elements that have rounded corners. For example, bottom of a chat bubble.  





## Writing guidelines

### Generative AI loading state

Follow the writing guidelines for [generative AI loading states](/patterns/genai/genai-loading-states/).  


## Accessibility guidelines

You can ensure status changes are announced to users by wrapping a [live region component](/components/live-region/).

### Preview

### Code

The following code uses React and JSX syntax.
