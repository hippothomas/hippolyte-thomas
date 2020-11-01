<template>
  <div id="global-wrapper">
    <div id="menu">
      <nuxt-link to="/"><Logo class="header-logo" /></nuxt-link>
      <Menu />
    </div>
    <Nuxt />
    <div id="footer">Hippolyte Thomas &copy; 2020</div>
  </div>
</template>

<style>
#global-wrapper {
  max-width: 100%;
  overflow: hidden;
}

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

#footer {
  text-align: center;
  color: #000;
  padding-bottom: 15px;
}
</style>
