<template>
  <ul>
    <div v-for="item in articles" :key="item.publishedAt">
      <h2>{{ item.title }}</h2>
      <p class="web">{{ item.source.id }}</p>
      <p class="desc">{{ item.description }}</p>
      <a :href="item.url" target="#">Read more</a>
    </div>
  </ul>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>

<style scoped>
ul {
  padding: 30px 0 30px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 20px 0 20px;

  background-color: rgb(202, 202, 202);
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px 0;
  margin-bottom: 20px;
  background-color: white;
  width: 50%;
}
div h2 {
  font-size: 22px;
  margin: 0px 12px 0 12px;
}
.desc {
  padding-left: 24px;
  padding-right: 24px;
}
.web {
  padding: 5px 0 5px 0;
}

a {
  border: 2px solid #d1d1d1;
  margin-top: 10px;
  border-radius: 150px;
  width: 90px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
}
</style>
