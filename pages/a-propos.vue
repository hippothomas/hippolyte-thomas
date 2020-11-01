<template>
  <div class="wrapper">
    <div class="head-title">
      <h1 class="title">À propos</h1>
      <div class="stroke"></div>
    </div>

    <div class="section">
      <h2>Présentation</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
        mi non diam ornare tincidunt quis sed nibh. Phasellus posuere ipsum leo,
        sit amet hendrerit sapien cursus ut. Ut ultricies, velit in vestibulum
        pulvinar, lorem mauris facilisis est, eu ultricies urna tellus in odio.
        Maecenas elit sapien, tristique sollicitudin massa ut, ornare cursus
        libero. Suspendisse a velit pretium, pulvinar magna ac, feugiat augue.
        Sed porta neque eget eros cursus sagittis. Praesent neque dui, convallis
        a convallis vitae, fermentum sed lorem. Suspendisse urna dolor,
        tincidunt nec dictum eget, porttitor ac ligula.
      </p>
      <div class="chrono">
        <Chronology />
      </div>
    </div>

    <div class="section">
      <h2>Mes compétances</h2>
      <div class="comp-list">
        <div class="comp">
          <img src="#" alt="#" />
          <div class="title">PHP</div>
        </div>
        <div class="comp">
          <img src="#" alt="#" />
          <div class="title">JavaScript</div>
        </div>
        <div class="comp">
          <img src="#" alt="#" />
          <div class="title">Python</div>
        </div>
        <div class="comp">
          <img src="#" alt="#" />
          <div class="title">Java</div>
        </div>
        <div class="comp">
          <img src="#" alt="#" />
          <div class="title">Vue.js</div>
        </div>
        <div class="comp">
          <img src="#" alt="#" />
          <div class="title">
            MySQL<br />
            & Oracle
          </div>
        </div>
        <div class="comp">
          <img src="#" alt="#" />
          <div class="title">React Native</div>
        </div>
        <div class="comp">
          <img src="#" alt="#" />
          <div class="title">C#</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Mon Parcours</h2>
    </div>

    <div class="section">
      <h2>Mes Passions</h2>
      <p>Développement - Secourisme - Lecture - Sport</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
}
.head-title {
  margin: 30px auto;
}
.head-title .title {
  font-size: 55px;
  text-align: center;
}
.head-title .stroke {
  width: 25%;
  max-width: 355px;
  height: 3px;
  background: #000;
  margin: auto;
  margin-top: 10px;
}
.section {
  margin-bottom: 60px;
}
.section h2 {
  text-align: center;
  font-size: 40px;
  margin-top: 20px;
}
.section p {
  max-width: 800px;
  margin: 15px auto;
  text-align: justify;
}
.comp-list {
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
}
</style>
