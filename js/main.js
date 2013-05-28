require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.10.0.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    text: 'text',

    templates: '../templates'
  }
});

require([
  'app'
], function(App) {
  App.initialize();
});