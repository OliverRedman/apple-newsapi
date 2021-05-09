import { createStore } from "vuex";

export default createStore({
  state: {
    articles: [],
  },
  mutations: {},
  actions: {
    getNews() {
      let url =
        "https://newsapi.org/v2/top-headlines?" +
        "q=Apple&" +
        "country=us&" +
        "sortBy=popularity&" +
        "apiKey=d04166bc2ca24e51aef110ee9ec25f8c";

      const req = new Request(url);

      fetch(req)
        .then((resp) => resp.json())
        .then((data) => {
          data.articles.forEach((item) => this.state.articles.push(item));
        });
    },
  },

  modules: {},
});
