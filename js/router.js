define([
  'jquery',
  'underscore',
  'backbone'//,
  //'views/projects/list',
  //'views/users/list'
], function($, _, Backbone, Session/*, ProjectListView, UserListView*/){
  var AppRouter = Backbone.Router.extend({
    routes: {
      'projects': 'showProjects',
      'users': 'showUsers',

      // Default
      '*actions': 'defaultAction'
    },
    defaultAction: function () {
      console.log('hola');
    },
    showUsers: function () {
      console.log('blah');
    }
  });

  var initialize = function(){
    var app_router = new AppRouter();
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});