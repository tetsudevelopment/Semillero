var app = new Vue({
  el: "#app",
  data: {
    arrayImg: [
      "images/naruto.jpg",
      "images/sakura.jpg",
      "images/yato.jpg",
      "images/yumi.jpg",
    ],
    randomm: "",
    arrayData: [],
    search: "",
  },
  methods: {
    async listUser() {
      const url = "https://randomuser.me/api/?results=3";
      await fetch(url)
        .then((response) => response.json())
        .then((json) => (this.arrayData = json));
      
    },
    async searchUser() {
      const url = `https://jsonplaceholder.typicode.com/users/${this.search}`;
      await fetch(url)
        .then((response) => response.json())
        .then((json) => (this.arrayData = [json]));
    },
    verDatos(item) {
      this.arrayModal = [];
      this.arrayModal = [item];
    },
  },
  created() {},
  mounted() {
    this.listUser();
  },
  computed: {},
});
