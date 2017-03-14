---
layout: index
---
<div class="copy">
  <h2>{{ site.data.app.title }}</h2>
  <p>{{ site.data.app.description | markdownify }}</p>
  <h2>The Best of Both Worlds.</h2>
  <p>{{ site.data.app.combination }}</p>
  <div class="bennies">
    <div class="benefits">
      <h3>Static Sites</h3>
      <hr>
      <ul>
          {% for benefit in site.data.app.staticBenefits %}
            <li>{{ benefit | capitalize }}</li>
          {% endfor %}
      </ul>
    </div>
    <div class="benefits">
      <h3>Client-Side JS</h3>
      <hr>
      <ul>
          {% for benefit in site.data.app.dynamicBenefits %}
            <li>{{ benefit | capitalize }}</li>
          {% endfor %}
      </ul>
    </div>
  </div>
  <p class="environment">*Enable Javascript to see the page rendered with Vue.</p>
</div>