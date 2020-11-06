<template>
  <div class="comp-wrapper">
    <div class="company">
      <div class="title">{{ comp.title }}</div>
      <div class="comp">
        <a :href="comp.company.link" target="_blank" rel="noopener noreferrer">
          {{ comp.company.name }}
        </a>
      </div>
      <div class="date">{{ comp.date }}</div>
      <div class="desc">
        {{ comp.desc }}
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    comp: {
      type: Object,
      default: () => ({
        id: 0,
        title: '',
        company: {
          name: '',
          link: '#',
        },
        date: '',
        desc: '',
      }),
    },
  },
};
</script>

<style>
.comp-wrapper {
  width: 100%;
  display: flex;
}
.left .comp-wrapper {
  flex-direction: row;
  margin-bottom: 300px;
}
.right .comp-wrapper {
  flex-direction: row-reverse;
  margin-top: 300px;
}
.company {
  width: 300px;
  height: fit-content;
  max-height: 300px;
  padding: 15px 20px;
  border: 2px solid var(--purple);
}
.company .title {
  font-size: 20px;
  font-weight: bold;
}
.company .comp {
  margin-top: 5px;
}
.company .comp a {
  color: var(--purple);
}
.company .date {
  font-style: italic;
  font-size: 14px;
  font-weight: 300;
}
.company .desc {
  margin-top: 15px;
  font-size: 14px;
  overflow: hidden;
}
.line {
  height: 70px;
  width: calc(100% - 300px);
  border-bottom: 3px solid var(--purple);
}
</style>
