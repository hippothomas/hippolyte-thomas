<template>
  <div>
    <div id="menu">
      <nuxt-link to="/"><Logo class="header-logo" /></nuxt-link>
      <Menu />
    </div>
    <Nuxt />
  </div>
</template>

<style>
#menu {
  width: 100%;
  height: 125px;
  position: relative;
}

#menu a {
  color: #000;
}

.header-logo {
  position: absolute;
  left: 100px;
  z-index: 99;
}
</style>
