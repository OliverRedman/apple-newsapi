<template>
  <div>
    <news-list> </news-list>
  </div>
</template>

<script>
import newsList from "./components/newsList.vue";

export default {
  components: {
    newsList,
  },
  methods: {
    log() {
      console.log(this.$store.state.articles[0]);
    },
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
