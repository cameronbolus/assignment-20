import $ from 'jquery';
import Backbone from 'backbone';

import {BBCradio1Collection, BBCradio2Collection} from './_model.js';
function BBCradioTemplate(radioResults, dataObj){
  let radioResultsHtml = radioResults.map(function(radioModel, dataObj){
    return `
      <div class="radio-playlist">
      </div>

    `
  })
}




const AppRouter = Backbone.Router.extend({
  initialize: function(){
    console.log('app is routing')
    Backbone.history.start()
  },

  routes: {
    '' : 'showHomePage',
    'radio/1' : 'showRadio1Page',
    'radio/2' : 'showRadio2Page',
  },





})
let myBbcRadioApplication = new AppRouter()
