<template>
  <div class="wrapper">
    <div class="head-title">
      <h1 class="title">À propos</h1>
      <div class="stroke"></div>
    </div>

    <div class="section">
      <h2>Présentation</h2>
      <p>
        Passionné d'informatique, je suis actuellement diplômé du titre RNCP de
        Niveau VII : Expert en Informatique et Système d’Information. Durant
        cette formation, j'étais en alternance en tant que Développeur Backend
        PHP chez <a href="https://www.web-ia.com/" target="_blank">Web IA</a>,
        agence web nantaise, dans laquelle j'ai participé à de multiples
        missions de conception et de développement de sites wordpress pour nos
        clients. J'ai auparavant aussi travaillé en tant de Développeur Web chez
        <a href="https://www.ae2agence.com/" target="_blank">AE2Agence</a>.
      </p>
      <Chronology />
    </div>

    <div class="section">
      <h2>Mon Parcours</h2>
      <Career />
    </div>

    <div class="section">
      <h2>Bénévolat</h2>
      <div class="benevolat">
        <div class="image">
          <img
            src="~/static/assets/protection-civile.jpg"
            alt="Hippolyte Thomas - Protection Civile"
          />
          <figcaption>
            Photographe :
            <a
              href="https://www.instagram.com/charles_marion_photographe/"
              target="_blank"
            >
              Charles Marion
            </a>
          </figcaption>
        </div>
        <div class="informations">
          <div class="association">Protection Civile</div>
          <div class="title">Secouriste</div>
          <div class="date">mai 2018 - novembre 2019</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'À propos - Hippolyte Thomas',
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.WEBSITE_URL + '/a-propos',
      },
    ],
  },
};
</script>

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
.benevolat {
  margin: auto;
  display: flex;
  align-items: center;
  max-width: 800px;
  margin-top: 35px;
  width: 374px;
}
.benevolat .image img {
  height: 150px;
  width: 150px;
  object-fit: cover;
  border: 2px solid #000;
}
.benevolat .image figcaption {
  font-weight: 100;
  font-size: 9px;
  text-align: center;
  max-width: 150px;
}
.benevolat .image figcaption a {
  color: #000;
}
.benevolat .informations {
  margin-top: -15px;
  margin-left: 15px;
}
.benevolat .informations .title {
  font-weight: 500;
}
.benevolat .informations .date {
  font-weight: 100;
}

@media only screen and (max-width: 815px) {
  .section p {
    margin: 15px;
  }
}

@media only screen and (max-width: 390px) {
  .benevolat {
    flex-direction: column;
    width: 100%;
  }
  .benevolat .image {
    margin-bottom: 24px;
  }
}
</style>
