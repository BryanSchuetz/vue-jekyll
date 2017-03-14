---
layout: index
---
<div class="copy">
  <h2>{{ site.data.app.title }}</h2>
  <p>{{ site.data.app.description | markdownify }}</p>
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