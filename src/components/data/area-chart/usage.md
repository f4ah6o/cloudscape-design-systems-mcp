## General guidelines

### Do

  * Show time units on the X axis.
  * Skip axis labels for time series in regular intervals to avoid an overwhelming number of labels.



### Don't

  * Don't use area charts to visualize only one data series, use a [line chart]({get_link_resource: /components/line-chart/}) instead.
  * Don't use area charts when showing negative data. Use a [line]({get_link_resource: /components/line-chart/}) or [bar]({get_link_resource: /components/bar-chart/}) chart instead.
  * Don't truncate a data series name if the entire string is necessary to identify the data presented.



## Features

  * #### Data area

The data area is where data is visualized. 

    * It contains two or more data series stacked on top of each other, and can also include a threshold.

    * It is delineated by the X and Y axes, which provide context to the data series represented.

  * #### Axis labels

Axis labels provide context for the visualized data in the data area.  
  
Axis labels are placed in two locations:

    * **Y axis labels** -**** Shown to the left of the Y axis and often used for sequential values.

      * For example: _0, 10K, 20K, 30K_

    * **X axis labels** -**** Shown below the X axis and often used for time intervals.

      * For example: _27 Jan, 28 Jan, 29 Jan, 30 Jan, 31 Jan_

  * #### Axis titles \- optional

Axis titles provide additional explanation for axis labels. For example, for axis labels that contain temperature intervals, an axis title could be the following: _Temperature in Celsius_.  


If a set of axis labels is self-explanatory, such as a date interval, then the axis title isn’t needed.

  * #### Zero baseline \- optional

Using a zero baseline adds greater visual emphasis in the data visualization. For example, a visualization showing revenue should have the zero baseline emphasized because it delineates the threshold between positive and negative revenue.  


In most cases, the zero baseline should be emphasized. However, there are two exceptions:

    * When zero is not a meaningful threshold

      * For example: F° temperature scale.

    * When relative changes are more meaningful to emphasize than absolute

      * For example: a stock chart.

  * #### Legend \- optional

The legend displays more information about the data that appears in the data area.

    * **Legend title** –The legend title provides additional context to the legend. It’s not required when legend items are self-explanatory or the chart title provides sufficient context.

    * **Legend items** – Each data series in the data area also has a legend item, which shows the style (color, design) of the element and the data series name.

The legend is optional if the chart includes only one metric and the chart title or other metadata explains the data shown.  


  * #### Details popover

Provides additional information on specific data points by using a [popover]({get_link_resource: /components/popover/}). There are two main ways to interact with the details popover:

    * **On hover  **– When a user hovers on the data area, the popover shows the name and value for each data point.

    * **On select  **– If a user selects the data area, the popover fixes in position. This works well for assistive devices and devices without hover states.

The details popover supports all [popover sizes]({get_link_resource: /components/popover/?example=small&tabId=usage#size-and-position}). Use the appropriate popover size based on the amount of information you want to display, such as the length of associated labels. To enable additional actions on the selected data point on a chart, use the footer to add a [button]({get_link_resource: /components/button/?tabId=playground}) or [button dropdown]({get_link_resource: /components/button-dropdown/?tabId=playground}).

  * #### Thresholds \- optional

A threshold is a dashed line shown on a chart’s data area that helps define the metrics immediately preceding or following it. A threshold is a fixed number and does not change across the chart. It can be plotted against the X or Y axis as needed. For information about customizing the threshold color, see [threshold color]({get_link_resource: /foundation/visual-foundation/data-vis-colors/#threshold-colors}).

  * #### Responsive sizing

Charts have a default set height. However, the width is dynamic and resizes to fill its container.

  * #### Built-in filter \- optional

The chart component has a built-in filter so users can select what data metrics show on the chart. By default, all data metrics in the source data are selected to show on the chart. Use a filter when the source dataset has three or more data metrics.

  * #### Additional filters \- optional

To support users’ data exploration needs, you can add more filters in the chart component. For example: A [date picker]({get_link_resource: /components/date-picker/}) so users can filter data based on different periods of time.




### States

  * #### Loading

The state of fetching data prior to the visualization being displayed. Show loading state text when the component is in this state.

  * #### Error

The state of the component when it fails to fetch data. Display error state text and provide a recovery action as a recovery mechanism.

  * #### No match

The state of visualization when there is no data to display after a user applied filters. Display no match state text and provide an action button to revert to the default state of the visualization.

  * #### Empty

The state of the component when there is no data to display. It could occur when the source data set has no metrics _._ Display empty state text when the component is in this state.




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

  * Avoid truncating any parts of data series names that could be important in differentiating it from other data series.




#### Chart title

  * Use nouns to describe what the visualization contains.

    * For example:_Revenue_ or _CPU utilization_




#### Axis titles - optional

  * Axis titles should be concise, typically from 1 to 3 words.

  * If relevant, include the axis label’s unit in the axis title.

    * For example: _Billed (USD)_




#### Axis labels

  * When writing date and times, follow the guidelines for [timestamps]({get_link_resource: /patterns/general/timestamps/}).

  * Use common abbreviations to reduce visual complexity and make the visualization easier to scan.

    * For example: _Sun_ instead of _Sunday_ , and _Jan_ instead of _January_

  * Include relevant typographic symbols with label numbers, such as currency denomination or degree symbol for temperature (when appropriate).

    * For example: _$10_ or _F°_




#### Legend title - optional

  * Use nouns to describe what items the legend contains.

    * For example: _Instance types_ or _Browsers_




#### Loading state

  * Use this text: _Loading chart_

  * Follow the guidelines for [loading states]({get_link_resource: /patterns/general/loading-and-refreshing/}).




#### Error state

  * Error message

    * Use this text: _The data couldn't be fetched. Try again later._

  * Recovery action

    * Use this text: _Retry_




#### Empty state

  * No data available

    * Use this text: _There is no data available._

  * Zero results state

    * For the message, use this text: _There is no data available._

    * For the button, use this text: _Reset filters_




## Accessibility guidelines

### General accessibility guidelines

  * Follow the guidelines on alternative text and Accessible Rich Internet Applications (ARIA) regions for each component.

  * Make sure to define ARIA labels aligned with the language context of your application.

  * Don't add unnecessary markup for roles and landmarks. Follow the guidelines for each component.

  * Provide keyboard functionality to all available content in a logical and predictable order. The flow of information should make sense.




### Component-specific guidelines

  * For the default filter, follow the guidelines for [multiselect accessibility]({get_link_resource: /components/multiselect/?example=default&tabId=usage}).

  * Use an accessible color palette for visualizations. Follow the guidelines for [data visualization color]({get_link_resource: /foundation/visual-foundation/data-vis-colors/#accessibility-guidelines}).




#### Alternative text for chart description

  * Provide alternative text for the chart. This is only referenced by screen readers or when a user hovers over the chart area with their pointer.

    * Use the format: _[Chart type] showing the [data displayed]._ If applicable, also include the timeframe for the data displayed.

      * For example: _Chart showing the number of resource errors in the last 6 months._



