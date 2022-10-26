const AppView = Backbone.View.extend({
  el: '#container',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('Welcome to Backbone JS!');
  }
});

const appView = new AppView();