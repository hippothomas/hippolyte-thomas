<template>
  <div
    class="chronology"
    :style="{ height: 'calc(70px * ' + (items.length - 1) + ' + 10px)' }"
  >
    <div v-for="item in items" :key="item.id" class="timeline">
      <div class="infos">
        {{ item.date }} -
        <a :href="item.school.link" target="_blank" rel="noopener noreferrer">
          {{ item.school.name }}
        </a>
      </div>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 3,
          date: '2020-2022',
          title:
            'Titre RNCP Niveau VII - Expert en Informatique et Système d’Information',
          school: {
            name: 'EPSI',
            link: 'https://www.epsi.fr/',
          },
        },
        {
          id: 2,
          date: '2019-2020',
          title: "Titre RNCP Niveau VI - Concepteur Développeur d'Applications",
          school: {
            name: 'EPSI',
            link: 'https://www.epsi.fr/',
          },
        },
        {
          id: 1,
          date: '2017-2019',
          title: 'BTS SIO option SLAM',
          school: {
            name: 'La Joliverie',
            link: 'https://www.la-joliverie.com/',
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.chronology {
  position: relative;
  max-width: 500px;
  margin: 35px auto 90px;
  border-left: var(--purple) 4px solid;
}
.chronology .timeline {
  height: 70px;
  padding-left: 14px;
}
.chronology .timeline:before {
  content: '';
  position: absolute;
  left: -9px;
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background: var(--purple);
}
.chronology .timeline .infos {
  font-weight: 200;
}
.chronology .timeline .infos a {
  color: var(--purple);
}
.chronology .timeline .title {
  font-weight: 500;
}
</style>
