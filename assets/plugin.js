require(['gitbook'], function(gitbook) {

  var ribbon;
  var pluginConfig = {};

  function initializePlugin(config) {
    pluginConfig = config.ribbon;

    ribbon = '<a id="ribbon" class="' + pluginConfig.color + '" href="' +
             pluginConfig.url + '">' + pluginConfig.text + '</a>';
  }

  function getPluginConfig() {
    return pluginConfig;
  }

  gitbook.events.bind('start', function(e, config) {
    initializePlugin(config);

    gitbook.toolbar.createButton({
      icon: 'fa ' + pluginConfig.icon,
      label: pluginConfig.text,
      position: 'right',
      onClick: function() {
        window.open(pluginConfig.url);
      }
    });
  });

  gitbook.events.bind('page.change', function() {
    var bodyInner = $('.book .book-body .body-inner');
    bodyInner.append(ribbon);
  });

});
