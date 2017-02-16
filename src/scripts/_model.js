const BBCradioModel = Backbone.Model.extend({

})

export const BBCradio1Collection = Backbone.Collection.extend({
  initialize: function(){
  },

  url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json',

  model: BBCradioModel,

})
export const BBCradio2Collection = Backbone.Collection.extend({
  initialize: function(){
  },

  url: '/proxy?api=http://www.bbc.co.uk/radio2/playlist.json',

  model: BBCradioModel,

})
