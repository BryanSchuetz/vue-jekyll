<template>
  <div class="copy">
    <h2>{{ siteData.title }}</h2>
    <p v-html="rawdescription"></p>
    <div class="benefits">
      <h3>Static Sites</h3>
      <hr>
      <ul>
        <li v-for="benefit in siteData.staticBenefits">{{ benefit | capitalize }}</li>
      </ul> 
    </div>
    <div class="benefits">
      <h3>Client-Side JS</h3>
      <hr>
      <ul>
        <li v-for="benefit in siteData.dynamicBenefits">{{ benefit | capitalize }}</li>
        <li>{{ newDynamic }}</li>
      </ul>
    </div>
    <input label="More great things about static sites"type="" name="" v-model="newStatic">
    <button @click="">Add to the list</button>
  </div>
</template>

<script>
import siteData from '../build/data/data.json'
import Marked from 'marked'
export default {
  data () {
    return {
      siteData: siteData,
      newStatic: ''
    }
  },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      md: function (val) {
          return Marked(val)
      }
  },
  computed: {
    rawdescription: function(){
      return Marked(siteData.description)
    }
  }
}
</script>