<template>
  <div class="wrapper">
    <div class="head-title">
      <h1 class="title">À propos</h1>
      <div class="stroke"></div>
    </div>

    <div class="section">
      <h2>Présentation</h2>
      <p>
        Passionné d'informatique, je suis actuellement étudiant en 4ème année à
        l'EPSI pour passer le titre RNCP de Niveau VII : Expert en Informatique
        et Système d’Information. Durant cette formation, je suis en alternance
        en tant que Concepteur Développeur d'Applications chez
        <a href="https://www.web-ia.com/" target="_blank">Web IA</a>, agence web
        web nantaise, dans laquelle je participe à de multiples missions de
        conception et de développement de sites wordpress pour nos clients. J'ai
        auparavant aussi travaillé en tant de Développeur Web chez
        <a href="https://www.ae2agence.com/" target="_blank">AE2Agence</a>.
      </p>
      <Chronology />
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
  width: 100%;
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
.section p a {
  color: var(--purple);
}
</style>
