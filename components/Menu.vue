<template>
  <div id="navigation">
    <div class="links">
      <nuxt-link to="/">Projets</nuxt-link>
      <nuxt-link to="/">À propos</nuxt-link>
      <nuxt-link to="/">Contact</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
#navigation {
  display: block;
  position: absolute;
  top: calc(50% - (22px / 2));
  right: 100px;
}
#navigation .links {
  display: flex;
  justify-content: right;
}
#navigation .links a {
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.5s;
}
#navigation .links a:hover {
  color: #626262;
}
</style>
