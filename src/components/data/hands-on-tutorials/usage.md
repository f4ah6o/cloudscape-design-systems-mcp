## Guidance on introducing hands-on tutorials

For information about how to you can help your users with the process of onboarding and how hands-on tutorials should be structured, see [Onboarding](/patterns/general/onboarding/) and [Hands-on tutorials](/patterns/general/onboarding/hands-on-tutorials/). 

## Components 

### [Annotation context](/components/annotation-context/?example=default)  


The annotation context is an invisible layer on top of the interface. It tracks the progress of a launched tutorial and feeds dynamic content to the [Tutorial panel](/components/tutorial-panel/?example=tutorial-list) in [Hands-on tutorials](/patterns/general/onboarding/hands-on-tutorials/). It also renders annotation popovers and hotspot icons. 

### [Hotspot](/components/hotspot/?example=around-an-element)

In [Hands-on tutorials](/patterns/general/onboarding/hands-on-tutorials/), hotspots are invisible containers that mark the spots where hotspot icons should be placed. Hotspot icons are rendered by the [Annotation context](/components/annotation-context/?example=default&tabId=playground) and are used to open and close annotation popovers. 

### [Tutorial panel](/components/tutorial-panel/?example=tutorial-list)

The tutorial panel houses contextual [Hands-on tutorials](/patterns/general/onboarding/hands-on-tutorials/) that help users learn how to use a service. 

## How the components work together

[Hands-on tutorials](/patterns/general/onboarding/hands-on-tutorials/) consist of three components: [Annotation context](/components/annotation-context/), [Hotspot](/components/hotspot/), and [Tutorial panel](/components/tutorial-panel/). All three are interdependent and must be used together, as they send information among themselves to create the tutorial experience.   
  
The tutorial experience itself is comprised of static and dynamic content. Static content is provided by the tutorial panel, while dynamic content is provided by the annotation context to communicate information about a launched tutorial.

The annotation context is an invisible layer on top of the interface, rendering annotation popovers and hotspot icons. It tracks the progress of a launched tutorial and feeds dynamic content to the tutorial panel.   
  
When a tutorial is launched, annotation popovers are used to provide step-by-step guidance to users. These annotation popovers are not a separate component but are rather rendered by the **annotation context**.  
  
The hotspot component is an invisible container that marks the locations in the interface where hotspot icons and their associated annotation popovers are rendered by the annotation context. When implemented in the interface, hotspots are invisible by default. After a tutorial is launched, the annotation context automatically renders hotspot icons for any hotspots that belong to that tutorial. When the tutorial is dismissed, the icons disappear.

  
The tutorial panel houses all hands-on tutorials available in a service. Users can launch a hands-on tutorial from the tutorial panel. The tutorial panel consists of static and dynamic content. There are three states of the tutorial panel: [tutorial list](/components/tutorial-panel/?example=tutorial-list), [tutorial launched](/components/tutorial-panel/?example=first-tutorial-launched), and [tutorial completed](/components/tutorial-panel/?example=tutorial-completed).

  * The tutorial list state is shown when no tutorial is launched. Because the tutorial isn’t launched, the content is entirely static and the tutorial panel receives no information from the annotation context.

  * The tutorial launched state and tutorial completed state are a mix of static and dynamic content. For these states, think of static content as a template provided by the tutorial panel that structures the panel's information. Dynamic content is provided by the annotation context and fills the static template to provide guidance specific to a particular tutorial. Dynamic content in these states consists of the tutorial title, tasks, and steps. The tutorial panel renders this text to make it visible to users.



  1. Wrap an annotation context element around your application’s 

[App layout](/components/app-layout/). This allows the annotation context to provide a React context that is automatically consumed by the hotspot and tutorial panel components. All pages of your application must share the same annotation context element.   
For more information, see the [development guidelines for the annotation context component.](/components/annotation-context/?tabId=api)

  2. Place a tutorial panel element in your app layout’s `tools` slot. To show a [Help panel](/components/help-panel/?example=with-header%2C-content%2C-and-footer) in the `tools` slot together with the tutorial panel, use the [Tabs](/components/tabs/?example=default) component to wrap the two. For more information, see the [development guidelines for the tutorial panel component](/components/tutorial-panel/?tabId=api).

  3. Place hotspots in places where annotation popovers can appear. Each hotspot must have an ID that is unique across all pages of your application. You can use a single hotspot across multiple tutorials. You don't need to render hotspots conditionally.  
For more information, see the [development guidelines of the hotspot component](/components/hotspot/?tabId=api).



