// 🎌 IMPORT MODULES, COMPONENTS AND WHATNOT. CREATE THE VUE INSTANCE 🎌
import Vue from 'vue'
import WebFont from 'webfontloader'
import Marked from 'marked'
import App from '../components/app.vue'

// 🎌 GOOGLE FONTS, CAUSE TYPOGRAPHY 🎌
WebFont.load({
 google: {
   families: ['Alegreya:400,italic,700,900']
 }
});

var app = new Vue({
  el: '#content',
  render: h => h(App)
})