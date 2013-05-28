define([
  'jquery',
  'underscore',
  'backbone',
  "views/stops",
  "models/data"
], function($, _, Backbone, StopsView, UserData) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',

      'stops': 'showStops',
      'stops/:id': 'stopInfo',

      // Default
      '*actions': 'defaultAction'
    },
    index: function() {
      console.log('index');
    },
    defaultAction: function() {
      console.log('defaultAction');
    },
    showStops: function() {
      var userData = new UserData();
      var stopsView = new StopsView({
          el: ".body",
          collection: userData.get("currentList")
      });
      stopsView.render();
      console.log('showStops');
    },
    stopInfo: function() {
      console.log('stopInfo');
    }
  });

  var initialize = function() {
    var app_router = new AppRouter();
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});