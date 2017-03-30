require(['gitbook'], function(gitbook) {

  var ribbon;
  var pluginConfig = {};

  function initializePlugin(config) {
    pluginConfig = config.ribbon;
  }

  function getUrl() {
    var url = pluginConfig.url;

    if (pluginConfig.appendFilepath) {
      if (url.slice(-1) != '/') {
        url = url + '/'
      }
      url = url + gitbook.state.filepath;
    }

    return url;
  }

  function getRibbon() {
    return '<a id="ribbon" class="' + pluginConfig.color + '" href="' +
             getUrl() + '">' + pluginConfig.text + '</a>';
  }

  function getPluginConfig() {
    return pluginConfig;
  }

  gitbook.events.bind('start', function(e, config) {
    initializePlugin(config);

    gitbook.toolbar.createButton({
      className: 'ribbon-toolbar',
      icon: 'fa ' + pluginConfig.icon,
      label: pluginConfig.text,
      position: 'right',
      onClick: function() {
        window.open(getUrl());
      }
    });
  });

  gitbook.events.bind('page.change', function() {
    var bodyInner = $('.book .book-body .body-inner');
    bodyInner.append(getRibbon());
  });

});
