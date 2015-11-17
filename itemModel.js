// Item Model

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/LindsayWilliamsBB',
  idAttribute: '_id',
  defaults: {
    title: "This is a title",
    image_url: "http://www.fillmurray.com/400/400",
    likes: 0
  },
  initialize: function(){
    console.log("hello model");
  }
});
