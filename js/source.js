// 🎌 IMPORT MODULES AND WHATNOT. ALL OUR VUE STUFF IS HERE, BUT WITH WEBPACK, WE COULD ALSO USE THAT SINGLE FILE COMPONENT HOTTNESS: https://vuejs.org/v2/guide/single-file-components.html 🎌
import Vue from 'vue'
import WebFont from 'webfontloader'
import siteData from '../build/data/data.json'

// 🎌 GOOGLE FONTS, CAUSE TYPOGRAPHY 🎌
WebFont.load({
 google: {
   families: ['Alegreya:400,italic,700,900']
 }
});

var app = new Vue({
  el: '#content',
  data: siteData
})