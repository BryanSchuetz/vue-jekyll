<template>
  <div class="copy">
    <h2>{{ siteData.title }}</h2>
    <p v-html="rawdescription"></p>
    <h2>The Best of Both Worlds.</h2>
    <p>{{ siteData.combination }}</p>
    <div class="bennies">
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
          <li v-for="item in newDynamic">{{ item }}</li>
          <li><input label="More great things about static sites"type="" name="" v-model="newItem">
        <button v-on:click="addItem" placeholder="Another benefit">Add</button></li>
        </ul>
      </div>
    </div>
      <p class="environment">*Disable Javascript to see the page rendered with Jekyll.</p>
  </div>
</template>

<script>
import siteData from '../build/data/data.json'
import Marked from 'marked'
export default {
  data () {
    return {
      siteData: siteData,
      newItem: 'Data binding',
      newDynamic: []
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
  },
  methods: {
    addItem() {
      this.newDynamic.push(this.newItem);
      this.newItem = '';
    }
  }
}
</script>