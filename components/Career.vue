<template>
  <div class="career">
    <div class="left">
      <Company v-for="item in evenFilter" :key="item.id" :comp="item" />
    </div>
    <div class="center"></div>
    <div class="right">
      <Company v-for="item in oddFilter" :key="item.id" :comp="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 2,
          title: "Concepteur développeur d'applications",
          company: {
            name: 'Web IA',
            link: 'https://www.web-ia.com/',
          },
          date: "octobre 2020 - Aujourd'hui",
          desc: 'En cours de rédaction...',
        },
        {
          id: 1,
          title: 'Développeur web',
          company: {
            name: 'AE2Agence',
            link: 'https://www.ae2agence.com/',
          },
          date: 'aout 2019 - septembre 2020',
          desc: 'En cours de rédaction...',
        },
      ],
    };
  },
  computed: {
    evenFilter() {
      return this.items.filter(item => item.id % 2 === 0);
    },
    oddFilter() {
      return this.items.filter(item => item.id % 2 === 1);
    },
  },
};
</script>

<style scoped>
.career {
  position: relative;
  max-width: 800px;
  margin: auto;
  margin-top: 35px;
  display: flex;
  justify-content: center;
}
.career .center {
  background-color: var(--purple);
  width: 6px;
}
.career .left,
.career .right {
  width: calc((100% / 2) - 6px);
}
</style>
