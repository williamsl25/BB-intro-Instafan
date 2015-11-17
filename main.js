var $ = require('jquery');
var ItemCollection = require('./itemCollection');
var ItemModel = require('./itemModel');

$(document).ready(function () {
   instaPage.init();
});

module.exports = instaPage = {
  init: function () {
    instaPage.styling();
    instaPage.events();
  },
  ItemCollection: new ItemCollection(),
    styling: function() {
      instaPage.loadPictures();
    },
    events: function() {
      $(".submitBtn").on("click",function (el) {
      el.preventDefault();
      var newItemModel = new ItemModel({title: $("#title").val(), image_url: $("#image_url").val()});

      newItemModel.save().then(function () {
        $(".image").prepend(_.template($("#instaTmpl").html())(newItemModel));
      })
      $("#title").val("");
      $("#image_url").val("");
    });


  },
loadPictures: function (collection) {
  $(".image").html("");
  instaPage.itemCollection.fetch().then(function () {
    _.each(instaPage.itemCollection.models, function (picture) {
      instaPage.loadTemplate("#instaTmpl", picture, ".image");
    })
  })
},
loadTemplate: function(template, object, element){
  var temp = _.template($(template).html());
  $(element).append(temp(object));
  }

}
