# Ribbon plugin for GitBook
This plugin adds a customizable ribbon to the corner of every GitBook page so you can link to any page you desire.

## How can I use this plugin?

You only have to edit your book.json and modify it adding something like this:

```json
"plugins" : [ "anchors", "ribbon" ],
  
"pluginsConfig": {
  "theme-default": {
    "showLevel": true
  },
  "ribbon": {
    "color": "orange",
    "text": "Fix this page",
    "url": "https://github.com"
  }
}
```

## Cool, can I see it working?
The next screenshot shows one of the ribbons (the black one) in action:

![ribbon](https://github.com/davidmogar/gitbook-plugin-ribbon/blob/resources/images/ribbon.png?raw=true)

## Oh, there are more colors?

Yep, you can set the color to one of the next ones:

* black
* blue
* green
* orange
* red

## Is there anything else I can customize?

Sure! Whenever the GitBook page is too small to show the ribbon, this one will hide and a new button will be added to the toolbar. You can customize this in the plugin config using any [Font Awesome](http://fontawesome.io/icons/) icon:

```json
"ribbon": {
  "color": "orange",
  "icon": "fa-github",
  "text": "Fix this page",
  "url": "https://github.com"
}
```

## Anything else I should know?

Not much. Just a quick note about the plugin parameters:
* **color**: Color of the ribbon. Defaults to `black`
* **icon**: Icon that will be showed when the ribbon is hidden. Defaults to `fa-external-link`
* **title**: Text that will be showed in the ribbon. `Required`.
* **url**: Url that will be opened when clicking in the ribbon. `Required`.
